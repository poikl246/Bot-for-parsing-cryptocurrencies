import json
import time
import servise

def parser_ftx():
    servise.CREATE_TABLE('ftx')
    headers = {
        'Host': 'ftx.com',
        'Cache-Control': 'max-age=0',
        'X-App-V': 'v2.0',
        'Ftx-Client': 'web',
        'Sec-Ch-Ua-Mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36',
        'Sec-Ch-Ua': '"-Not.A/Brand";v="8", "Chromium";v="102"',
        'Sec-Ch-Ua-Platform': '"Linux"',
        'Accept': '*/*',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://ftx.com/markets',
        # 'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        # Requests sorts cookies= alphabetically
        # 'Cookie': '_gcl_au=1.1.1164549932.1665307753; _ga_P341KMEEEK=GS1.1.1665307752.1.0.1665307752.0.0.0; _vwo_uuid_v2=DD4AC33AC52F1220D3577D44A72C6225F|8f8e97b09d8a935249c82cd240eed628; ajs_anonymous_id=299fdcfe-486c-41e6-ae8a-adf22d29af19; ab.storage.sessionId.a650b569-cd79-4627-bc68-2ca4a3f85efd=%7B%22g%22%3A%22f97c713a-5183-4476-a453-4419168ec1c6%22%2C%22e%22%3A1665309555233%2C%22c%22%3A1665307755234%2C%22l%22%3A1665307755234%7D; ab.storage.deviceId.a650b569-cd79-4627-bc68-2ca4a3f85efd=%7B%22g%22%3A%224ae5f7f0-028b-f2bd-6abb-00458c3413c8%22%2C%22c%22%3A1665307755236%2C%22l%22%3A1665307755236%7D; _ga=GA1.2.1738949821.1665307753; _gid=GA1.2.832480287.1665307755; _hjSessionUser_3052083=eyJpZCI6ImMxYjE4OWE4LTIwMDMtNTlkYy1hYTcwLTliY2JiYTQ2MTdkMyIsImNyZWF0ZWQiOjE2NjUzMDc3NTM3OTYsImV4aXN0aW5nIjpmYWxzZX0=; _hjFirstSeen=1; _hjIncludedInSessionSample=0; _hjSession_3052083=eyJpZCI6IjIyZDBkM2EzLWQ2NjEtNDRjYS05M2E3LTViMTE4OGQwNTNkMiIsImNyZWF0ZWQiOjE2NjUzMDc3NTU4MzcsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=0; _gat=1',
    }

    response = servise.request_no_error2('https://ftx.com/api/markets', headers=headers)
    data = response.json()

    name_and_price = []
    count = 0


    for moneta in data.get("result", []):
        try:
            print(moneta.get('name'), float(moneta.get("price")))
            name_and_price.append([count, moneta.get('name'), float(moneta.get("price")), float(moneta.get("price")), float(moneta.get("price")), time.time()])
            count += 1
        except:
            print(moneta.get('name'), moneta.get("price"))

    # servise.INSERT_INTOS_DATA('ftx', name_and_price)

    # print(sorted(name_and_price, key=lambda x:x[1], reverse=True))
    # print(len(data.get("result", [])))


if __name__ == '__main__':
    parser_ftx()