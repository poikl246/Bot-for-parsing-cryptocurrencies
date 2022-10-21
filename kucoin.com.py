import json
import time
import servise


def kucoin():
    servise.CREATE_TABLE('kucoin')
    headers = {
        'Host': 'www.kucoin.com',
        'Sec-Ch-Ua': '"-Not.A/Brand";v="8", "Chromium";v="102"',
        'Accept': 'application/json, text/plain, */*',
        'Sec-Ch-Ua-Mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36',
        'Sec-Ch-Ua-Platform': '"Linux"',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://www.kucoin.com/ru',
        # 'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        # Requests sorts cookies= alphabetically
        # 'Cookie': '__cfruid=e5fedc9fd48a7a88f7860903db3d449c3ff852d8-1665319425; _gid=GA1.2.1109840378.1665319428; _gat_UA-46608064-1=1; _ga_YHWW24NNH9=GS1.1.1665319428.1.0.1665319428.60.0.0; _ga=GA1.1.1144874528.1665319428; sajssdk_2015_cross_new_user=1; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22183bcc5e2b1315-0884bda12f684c-15373079-2073600-183bcc5e2b210f%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTgzYmNjNWUyYjEzMTUtMDg4NGJkYTEyZjY4NGMtMTUzNzMwNzktMjA3MzYwMC0xODNiY2M1ZTJiMjEwZiJ9%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%22183bcc5e2b1315-0884bda12f684c-15373079-2073600-183bcc5e2b210f%22%7D; __cf_bm=jTDvtAHJqW1a6frwT2YwX5.qh2Ra0p0yr25Mbsyn1r4-1665319427-0-AXZmwQ7YJVeiJlMjx3YDwk19xaAuHx6QMeQsb4ZTBzcxMatSKcbJXTJQFL+vNLKICiAdd8jzkPneARS2zvCE6BmzYJWZ7jxR9ZDTrFxjhi+kupHZ2mT8lmVeKH+XT8QAEZkU036oJOXbTS7a/bAU8mM=; AWSALB=UaMOBEEkO3wIO9P2Wkp9khO1/R4lLMAOeEBcr8+DtquLRato88gkH6cazFxg1TVrnst6C79e4i5Qc9rZqVLWyTRsONm1seoybwuRbO0NkithqxAggqr/9vPQnmBl; AWSALBCORS=UaMOBEEkO3wIO9P2Wkp9khO1/R4lLMAOeEBcr8+DtquLRato88gkH6cazFxg1TVrnst6C79e4i5Qc9rZqVLWyTRsONm1seoybwuRbO0NkithqxAggqr/9vPQnmBl',
    }

    params = {
        'base': 'USD',
        'targets': '',
        'lang': 'ru_RU',
    }

    response = servise.request_no_error2('https://www.kucoin.com/_api/currency/prices', params=params, headers=headers)

    INFO = []
    count = 0

    # with open("result.json", "w", encoding='utf-8') as file:
    #     json.dump(response.json(), file, indent=4, ensure_ascii=False)

    for name, price in response.json().get('data', {}).items():
        print(name, price)
        INFO.append([count, name, name, 'USD', float(price), float(price), float(price), time.time()])
        count += 1

    # servise.INSERT_INTOS_DATA('kucoin', INFO)

if __name__ == '__main__':
    kucoin()