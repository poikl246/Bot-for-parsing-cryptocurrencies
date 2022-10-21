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

def INSERT_INTOS_DATA(table_name, INFO):
    with sqlite3.connect('info.db') as db:
        cursor = db.cursor()
        cursor.executemany(f"INSERT INTO {table_name} VALUES(?,?,?,?,?,?,?,?);", INFO)
        db.commit()



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
