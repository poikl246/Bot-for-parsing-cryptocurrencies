import json
import time
import requests
import servise

def gate(page, count, pop=5):


    cookies = {
        'login_notice_check': '%2F',
        'countryId': '121',
        'defaultBuyCryptoFiat': 'EUR',
        'lang': 'en',
        'last_lang': 'en',
        'curr_fiat': 'USD',

    }

    headers = {
        'Host': 'www.gate.io',
        # 'Content-Length': '41',
        'Sec-Ch-Ua': '"-Not.A/Brand";v="8", "Chromium";v="102"',
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Sec-Ch-Ua-Mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36',
        'Sec-Ch-Ua-Platform': '"Linux"',
        'Origin': 'https://www.gate.io',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        # 'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        # Requests sorts cookies= alphabetically
        # 'Cookie': 'login_notice_check=%2F; countryId=121; defaultBuyCryptoFiat=EUR; _ga=GA1.2.1783671696.1665320171; _gid=GA1.2.1882465029.1665320171; lang=en; last_lang=en; lasturl=%2Fprice%3Fpage%3D1; _gat_UA-1833997-40=1; _gat_gtag_UA_1833997_38=1; _gat_gtag_UA_222583338_1=1; curr_fiat=USD; AWSALB=drQyvktqweh6YlFIM99k5r1aoFdJX6cImbhs6CZ4QFiRGHSHnlVL99fwFNKH4Qo3o+aAA7vHFfCU8XfPfuTIDw86xNlfF/vr1Ig+q7sLH6dw55I1aTYFfC7ZpdiX; AWSALBCORS=drQyvktqweh6YlFIM99k5r1aoFdJX6cImbhs6CZ4QFiRGHSHnlVL99fwFNKH4Qo3o+aAA7vHFfCU8XfPfuTIDw86xNlfF/vr1Ig+q7sLH6dw55I1aTYFfC7ZpdiX',
    }

    data = f'page={page}&coin_type=all&sort=&order=&custom='
    try:
        response = requests.post('https://www.gate.io/market_price/get_coin_list', cookies=cookies, headers=headers, data=data, verify=False)

        data = response.json().get("data", {}).get("data", [])

        INFO = []
        for coin in data:
            try:
                INFO.append([
                             count,
                             coin.get('pair', ''),
                             coin.get('curr_a', ''),
                             coin.get('curr_b', ''),
                             float(coin.get('rate', '')),
                             coin.get('high', ''),
                             coin.get('low', ''),
                             time.time()
                             ])
                print(coin.get('pair', ''), coin.get('curr_a', ''))
                count += 1
            except:
                print('error', coin)
        servise.INSERT_INTOS_DATA('gate', INFO)
    except:
        if pop > 0:
            gate(pop=pop-1)

    return count



def gate_main(page_):
    servise.CREATE_TABLE('gate')
    count = 0
    for page in range(page_):
        count = gate(page, count)

if __name__ == '__main__':
    gate_main(30)