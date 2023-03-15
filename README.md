1. Get user info from our system then auth
curl --location --request POST 'http://uat.uplayone.com/auth' \
--header 'ag-code: ZENNK01' \
--header 'ag-token: URIfTiyHh4OQmMj4gYt7gy2gNA338wIW' \
--header 'Content-Type: text/plain' \
--data-raw '{
    "user": {
        "id": 13,
        "name": "mwaseem",
        "balance": 10000,
        "language": "en"
    },
    "prd": {
        "id": 1,
        "type": 0,
        "is_mobile": false
    }
}'

EVO will response something like:
{"status":"1","user_id":200111,"username":"NKPmwaseem","launch_url":"https:\/\/babylonkplayjap.uat1.evo-test.com\/entry?params=c2l0ZT0xCnBsYXlfbW9kZT1yZWFsX21vbmV5CnVhX2xhdW5jaF9pZD0xNzRjOGQzY2MxZDcyOWMwY2RmZmU2YzcKZ2FtZUludGVyZmFjZT1pbmxpbmV2aWRlbwpjYXRlZ29yeT1iYWNjYXJhdA&JSESSIONID=q3qsxe24ik5qagdqq3sjfbowik5qat3361d8987b"}

2. Then we redirect or launch iframe of launch_url (noted to remove \ in the launch_url)

3. Player place a bet, then we do our actions described in route.js

Please refer https://doc.kplaycasino.com/en/ for detail
