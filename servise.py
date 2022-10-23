import sqlite3
import time

import requests
from fake_useragent import UserAgent
ua = UserAgent()


def CREATE_TABLE(table_name):
    with sqlite3.connect('info.db') as db:
        cursor = db.cursor()

        cursor.execute(f"""CREATE TABLE IF NOT EXISTS {table_name} (
                                            id int,
                                            name text,
                                            name_1,
                                            name_2,
                                            price, 
                                            high,
                                            low,
                                            time_
                                            );""")

def CREATE_TABLE_binance(table_name):
    with sqlite3.connect('info.db') as db:
        cursor = db.cursor()

        cursor.execute(f"""CREATE TABLE IF NOT EXISTS {table_name} (
                                            id int,
                                            name text UNIQUE,
                                            name_1,
                                            name_2,
                                            price, 
                                            high,
                                            low,
                                            time_
                                            );""")

def INSERT_INTOS_DATA(table_name, INFO, cursor):
    cursor.executemany(f"INSERT INTO {table_name} VALUES (?,?,?,?,?,?,?,?);", INFO)



def DELETE_DB(table_name):
    with sqlite3.connect('info.db') as db:
        cursor = db.cursor()
        cursor.execute(f"DELETE FROM {table_name};")
        db.commit()

def UPDATE_INTOS_DATA(table_name, INFO, cursor):
    try:
        # print('insert')
        cursor.execute(f" INSERT INTO {table_name} VALUES (?,?,?,?,?,?,?,?);", INFO[:-1])
        # print('no_error')
    except:
        print("update")
        cursor.execute(f"UPDATE {table_name} SET id=?, name=?, name_1=?, name_2=?, price=?, high=?, low=?, time_=? WHERE name=?", INFO)



def request_no_error2(url, headers, params={}, cookies={}, s=1, retry=5):
    # headers["User-Agent"] = ua.random
    response = ''
    try:
        # response = s.get(url=url, headers=headers)
        response = requests.get(url=url, headers=headers, params=params, cookies=cookies, verify=False)
        print(f"[+] {url} {response.status_code}")
        if response.status_code != 200:
            time.sleep(10)
            # s.proxies.update(pr())
            print("Ошибка status_code", retry)
            if retry > 0:
                return request_no_error2(url, headers, params=params, s=s, cookies=cookies, retry=(retry - 1))
            else:
                print('Ну типа все', url)
                return 0
    except Exception as ex:
        time.sleep(3)
        if retry > 0:
            # s.proxies.update(pr())
            print(f"[INFO] retry={retry} => {url}", retry)
            return request_no_error2(url, headers, params, s=s, cookies=cookies, retry=(retry - 1))
        else:
            print('Ну типа все', url)
            return 0
    else:
        return response



def SELECT():
    with sqlite3.connect('info.db') as db:
        cursor = db.cursor()
        cursor.execute("""
SELECT kucoin.name as NAME__, bitfinex.price, ftx.price, gate.price, gemini.price, kucoin.price, whitebit.price

FROM kucoin FULL JOIN ftx ON kucoin.name = ftx.name FULL JOIN bitfinex ON kucoin.name = bitfinex.name FULL JOIN gemini ON kucoin.name = gemini.name FULL JOIN whitebit ON kucoin.name = whitebit.name FULL JOIN gate ON kucoin.name = gate.name

WHERE NAME__ IS NOT NULL;
""")
        return cursor.fetchall()


if __name__ == '__main__':
    data = SELECT()
    name_bir = ["bitfinex", "ftx", "gate", "gemini", "kucoin", "whitebit"]
    for coin in data:

        minimum = 99999999999999
        maxim = 0

        for local in coin[1:]:
            if local == None:
                continue
            if maxim < local:
                maxim = local
            if minimum > local:
                minimum = local

        if minimum != 0:
            if maxim / minimum > 1.05:
                print(coin)
                print(maxim, minimum, maxim / minimum)
                print(f"MAX:{name_bir[coin.index(maxim) - 1]}\nMIN:{name_bir[coin.index(minimum) - 1]}")

    print(len(data))