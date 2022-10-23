import json
import sqlite3
import time
import servise
import requests

def gemini():
    servise.CREATE_TABLE('gemini')
    headers = {
        'Host': 'www.gemini.com',
        'Sec-Ch-Ua': '"-Not.A/Brand";v="8", "Chromium";v="102"',
        'Accept': 'application/json, text/plain, */*',
        'Sec-Ch-Ua-Mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36',
        'Sec-Ch-Ua-Platform': '"Linux"',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://www.gemini.com/prices',
        # 'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        'If-None-Match': '"127382-C/jtPyD0EowcFDeD7kZRV+anlvU"',
        # Requests sorts cookies= alphabetically
        # 'Cookie': '_gcl_au=1.1.479452231.1665325694; country=NL; cookieSettings={%22hasDismissed%22:false%2C%22allowAnalytics%22:false%2C%22isGDPR%22:true}; gtm_consent=false; mp_d63e727b7647b63c44007c4c8876cb81_mixpanel=%7B%22distinct_id%22%3A%20%22183bd25806498b-01b5b0caf81188-15373079-1fa400-183bd2580651153%22%2C%22%24device_id%22%3A%20%22183bd25806498b-01b5b0caf81188-15373079-1fa400-183bd2580651153%22%7D; exchange_is_logged_in=no',
    }

    response = servise.request_no_error2('https://www.gemini.com/api/all-prices/1d', headers=headers)
    data = response.json()
    INFO = []
    count = 0
    for local in data.get('prices'):
        try:
            print(local)
            print(local.get('symbol'))
            print(local.get('coin'))
            print(local.get('marketCap').get('currency'))
            print(local.get('ask'))
            print(local.get('bid'))

            INFO.append([
                count,
                local.get('symbol'),
                local.get('coin'),
                local.get('marketCap').get('currency'),
                float(local.get('ask')),
                float(local.get('ask')),
                float(local.get('bid')),
                time.time()
            ])

            count += 1
        except:
            pass

    servise.DELETE_DB("gemini")
    with sqlite3.connect('info.db') as db:
        cursor = db.cursor()
        servise.INSERT_INTOS_DATA('gemini', INFO, cursor)

if __name__ == '__main__':
    while True:
        try:
            gemini()
        except:
            pass

        time.sleep(3*60)
