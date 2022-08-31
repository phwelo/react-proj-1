import asyncio
from shazamio import Shazam

async def search(searchstr):
  shazam = Shazam()
  tracks = await shazam.search_track(query=searchstr, limit=5)
  for track in tracks["tracks"]["hits"]:
    print(track)
    print("")

def main():
  asyncio.run(search("wolf parade dear sons and daughters of hungry ghosts"))

if __name__ == '__main__':
  main()
