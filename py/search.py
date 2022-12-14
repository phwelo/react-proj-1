#!/usr/bin/python3

import requests
import json
from bs4 import BeautifulSoup
import encrypt

search_url = encrypt.decrypt(b"X\xd4\xa03\xd3\x05\xd2\xf86\x02-\r\xc4'\xefg\xe5\xa7\xe4x\x11\xa1\xae1\xdc\xe4\xf9\xc07\xe08$\xcar\xe5\x90\x10At\xc1\xf7+~\xe0\x8e\x82\xff\x81\x0f\x0b\xbe\x0e\xc30\xac\xe2\x02f%\x03r\x9c\xce\xef\x1b\xb2|fQE\x8c\x11c\x83RE\xef\x08\xb4\x90w\x8c\xef\xc2'\xfbc\xfc\x81\xd02\x07\xf3\x1d>\x9a\x0c\xd9\x05\x1eD\x16x\xc8T\xbe\xce")

def web_search(song_name):
  r = requests.get(search_url + song_name)
  return r.text

def convert_to_json(html):
  soup = BeautifulSoup(html, 'html.parser')
  jstore = soup.find_all('div', attrs={'class': 'js-store'})[0]["data-content"]
  return json.dumps(json.loads(jstore)["store"]["page"]["data"]["results"])

def filter_unsupported_urls(obj1):
  obj = json.loads(obj1)
  for song in obj:
    if "/tab/" in song["tab_url"]:
      yield song

def filter_unsupported_types(obj):
  for song in obj:
    if song["type"] != "Pro" and song["type"] != "Video" and song["type"] != "Power":
      yield song

def get_songs_list(song_name):
  web_result = web_search(song_name)
  filtered_json = convert_to_json(web_result)
  filtered_json = list(filter_unsupported_urls(filtered_json))
  filtered_json = list(filter_unsupported_types(filtered_json))
  filtered_json = sorted(filtered_json, key=lambda k: k['rating'], reverse=True)
  return filtered_json

def main():
  print(
    json.dumps(get_songs_list("Sympathy for the devil"))
  )

if __name__ == "__main__":
  main()
