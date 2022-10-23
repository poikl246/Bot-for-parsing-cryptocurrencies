import sqlite3
import time

import requests
import servise

def bitfinex():
    servise.CREATE_TABLE("bitfinex")
    headers = {
        'Host': 'api-pub.bitfinex.com',
        'Sec-Ch-Ua': '"-Not.A/Brand";v="8", "Chromium";v="102"',
        'Accept': '*/*',
        'Sec-Ch-Ua-Mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36',
        'Sec-Ch-Ua-Platform': '"Linux"',
        'Origin': 'https://www.bitfinex.com',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://www.bitfinex.com/',
        # 'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        'If-Modified-Since': 'Sun, 09 Oct 2022 15:39:00 GMT',
    }

    params = {
        'symbols': 'ALL',
    }

    response = servise.request_no_error2('https://api-pub.bitfinex.com/v2/tickers', params=params, headers=headers)
    data = response.json()

    count = 0
    INFO = []
    for coin in data:
        print(coin)

        if len(coin[0][1:].split(':')) == 1:
            name1 = coin[0][1:]
            name2 = 'USD'
        else:
            name1 = coin[0][1:].split(':')[0]
            name2 = coin[0][1:].split(':')[1]

        INFO.append([
            count,
            coin[0][1:],
            name1,
            name2,
            coin[3],
            coin[3],
            coin[1],
            time.time()
        ])
        count += 1
    servise.DELETE_DB("bitfinex")
    with sqlite3.connect('info.db') as db:
        cursor = db.cursor()
        servise.INSERT_INTOS_DATA("bitfinex", INFO, cursor)

if __name__ == '__main__':
    bitfinex()
