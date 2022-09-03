#!/usr/bin/env python3

from nacl import secret, utils

# some weak ass encryption to prevent search indexers from seeing some things about this app

key = b"12345678901234567890123456789012"

def encrypt(message):
    box = secret.SecretBox(key)
    nonce = utils.random(secret.SecretBox.NONCE_SIZE)
    encrypted = box.encrypt(message.encode(), nonce)
    return encrypted

def decrypt(encrypted):
    box = secret.SecretBox(key)
    decrypted = box.decrypt(encrypted)
    return decrypted.decode('utf-8')

def main():
    print(
        encrypt("string_to_encrypt")
    )

if __name__ == "__main__":
  main()