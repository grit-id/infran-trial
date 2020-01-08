# GRIT INFRAN (TRIAL) CLIENT
# INFRAN is fast, accurate, affordable, and scalable biometrics face recognition platform
# Made in Indonesia
# © 2019 GRIT.ID

import requests
import hashlib
import base64
import json
import time

nama_file = 'test001.jpg'

with open(nama_file, "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read())
hash_object = hashlib.sha256(encoded_string)
hex_dig = hash_object.hexdigest()
payload = {'data': str(encoded_string, 'utf-8'), 'hash': hex_dig, "trial":"yes"}
url = 'http://trial.api.infran.grit.id/api/infran/whoisit'
r = requests.post(url, json=payload)
val = r.json()
print(r.text)