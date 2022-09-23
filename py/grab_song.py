#!/usr/bin/env python3

import json
import requests
from bs4 import BeautifulSoup
from chords_parser import parse_chords
import encrypt

input_url = encrypt.decrypt(b':\xaf\n\xf6\x85\xc1\x08M`\x99\xc4\xbeG\xc2\x01\x866U\xa8\xa7\x87\xac\x9d^5k\xf5\xba\x16LXp\xcb\xb9\x83\xdd\x056=\xd3mA\nX\xb1xy\x18\xc3m1o`B\\\xab\xdc\xf2/0\xa7<\xbd\xe7)@\x046e\x9dD\xa6\x01\xbf\xbd\x82\xe4ES\xb4\x0e\x11&\xfd\x8eX\xbb\xb7\x91\xad\x88\x8f\xde\xcb\xcc\x9f\xd3\xac\xfb}\x8e\xf4P\x1d\xb2\xe6y\x18\x94\x08\xf5\x9c\xff\t\xe5\xea\xd7\xf4F')

class Song:
  def __init__(self, tab_url):
    jstore           = self.jstore_dump(tab_url)
    self.id          = str(jstore["store"]["page"]["data"]["tab"]["song_id"]) + "-" + str(jstore["store"]["page"]["data"]["tab"]["artist_id"])
    self.tab_url     = tab_url
    self.artist_name = jstore["store"]["page"]["data"]["tab"]["artist_name"]
    self.song_name   = jstore["store"]["page"]["data"]["tab"]["song_name"]
    self.tab_content = jstore["store"]["page"]["data"]["tab_view"]["wiki_tab"]["content"]
    self.capo_fret   = self.capo_handler(jstore)
    self.parsed      = parse_chords(self.tab_content)


  def capo_handler(self, jstore):
    if "capo" in jstore["store"]["page"]["data"]["tab_view"]["wiki_tab"]["content"]:
      return jstore["store"]["page"]["data"]["tab_view"]["wiki_tab"]["content"]["capo"]
    else:
      return 0
  
  def jstore_dump(self, url):
    html = get_tab_page(url)
    soup = BeautifulSoup(html, 'html.parser')
    jstore = json.loads(
      soup.find_all(
        'div',
        attrs={
          'class': 'js-store'
        }
      )[0]["data-content"]
    )
    return jstore

def get_tab_page(url):
  r = requests.get(url)
  return r.text

def main():
  song = Song(input_url)
  print(json.dumps(song.__dict__))

if __name__ == "__main__":
  main()