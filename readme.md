# INFRAN TRIAL
# POWERED BY: GRIT (https://grit.id) (C) 2019
## INFRAN is fast, accurate, affordable, and scalable biometrics face recognition platform.
# Disclaimer
All photos uploaded to INFRAN TRIAL server are safe and We don't use except for research.

The research is conducted for develop our INFRAN Engine to be better, such as making fake detection, face clustering, and many features more.
#### Simple words: If You willing to use INFRAN TRIAL, use at Your own risk!
## TRIAL APIs
![alt text](https://i.ibb.co/YcYn36b/infran-trial-arch.png)

Trial APIs is made for public users which wanted to try GRIT's INFRAN FR Platform.

Trial APIs is consisting of 4 free to use APIs, and cumulative hits for all API is limited to 100 hits per day per trial user:

All URL for API is http://trial.api.infran.grit.id

1. `/api/infran/addfruser`
This API is used for register user folder at Infran Trial server. Before using `/uploadreg` API, all user shall hit this API and use the same `nik` and `nama` as payload.
Hit using POST request with this payload:
```json
{
	"nik":"00000000000000000001",
	"nama":"test001"
}
```
Success response:
```json
{
  "err_code": "0",
  "status": "succeed register new user test001"
}
```
2. `/api/infran/uploadreg`
This API is used for register face photo to Infran Trial service so the user can use our identification service later after the image being trained.
Hit using POST request with this payload:
```json
{
	"data": "base64 of JPEG file",
	"hash": "sha256 of JPEG file",
	"nik": "the face NIK number",
	"file_name": "name of file.jpg",
	"nama": "name of the person being registered"
}
```
Success response:
```json
{
  "status": "Save Image Succeed",
  "err_code": "0"
}
```
3. `/api/infran/rtm`
This API is used for do the training process after finished uploading all photos to Infran Trial Server.
Hit using POST request with this payload:
```json
{
    "command": "FORCED_TRAINING"
}
```
Success response:
```json
{
  "err_code": "0",
  "status": "Training Succeed"
}
```
4. `/api/infran/whoisit`
This API is used for do the face recognition after finished uploading all photos, and training process to Infran Trial Server.
Hit using POST request with this payload:
```json
{
	"data": "base64 of JPEG file",
	"hash": "sha256 of JPEG file"
}
```
Success response:
```json
{
  "person_in_picture": [
    "bj_habibie"
  ],
  "pip_nik": [
    "123456789"
  ],
  "pip_loc": [
    [
      43,
      815,
      999,
      137
    ]
  ],
  "time": "2019-09-21T11:14:39.416538",
  "err_code": "0",
  "status": "Found Person in Picture"
}
```

# TRIAL CLIENT EXAMPLE
We have provided the trial client example file. For now, the available example is for Python 3.
You simply can do `pip install requests` and `python api-woisit-trial.py`

#### Copyright © 2019 GRIT.ID
