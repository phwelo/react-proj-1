#!/usr/bin/env python3
from flask import Flask, request, jsonify
from search import get_songs_list as song_query
from grab_song import Song
import os, sys
from flask_cors import CORS
from json import loads as jl

app = Flask(__name__)
app_config = {"host": "0.0.0.0", "port": sys.argv[1]}
app_config["debug"] = True
cors = CORS(
  app,
  resources={r"/*": {"origins": "http://localhost*"}},
)
app.config["CORS_HEADERS"] = "Content-Type"

home_directory = os.path.expanduser( '~' )
storage_path = os.path.join( home_directory, 'Guitar Songs' )

def init():
  print("starting crud server...")
  os.makedirs(storage_path, exist_ok=True)

def write_song(song):
  with open(os.path.join(storage_path, song.id + ".json"), "w", encoding="utf-8") as f:
    f.write(str(jsonify(song.__dict__)))

@app.route('/')
def hello_world():
  return 'This should probably be a help page or documentation of some sort.'

@app.route('/api/v1/search/<query>')
def search_songs(query):
  return song_query(query)

@app.route('/api/v1/download/<path:url>')
def download_song(url):
  song = Song(url)
  write_song(song)
  return jsonify(song.__dict__)

@app.route('/api/v1/songs')
def list_songs():
  songs = []
  for file in  os.listdir(storage_path):
    with open(os.path.join(storage_path, file), "r", encoding="utf-8") as f:
      result = jl(f.read())
      songs.append({
        "artist_name": result["artist_name"],
        "song_name": result["song_name"],
        "id": result["id"]
      })
  return jsonify(songs)

@app.route('/api/v1/song/<id>', methods = ['PUT', 'GET', 'DELETE'])
def song_info(id):
  if request.method == 'GET':
    with open(os.path.join(storage_path, id + ".json"), "r", encoding="utf-8") as f:
      return f.read()
  elif request.method == 'PUT':
    with open(os.path.join(storage_path, id + ".json"), "w", encoding="utf-8") as f:
      f.write(request.data)
    return "Success"
  elif request.method == 'DELETE':
    os.remove(os.path.join(storage_path, id + ".json"))
    return "Success"

@app.route("/quit")
def quit():
  shutdown = request.environ.get("werkzeug.server.shutdown")
  shutdown()
  return

if __name__ == '__main__':
  init()
  app.run(**app_config)
