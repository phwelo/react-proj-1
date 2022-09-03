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

def get_songs_list(song_name):
  web_result = web_search(song_name)
  results_json = convert_to_json(web_result)
  return json.loads(results_json)

def main():
  print(get_songs_list("Moonshiner"))

if __name__ == "__main__":
  main()
