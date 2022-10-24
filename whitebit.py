import sqlite3
import time
import servise
from bs4 import BeautifulSoup


def whitebit():
    servise.CREATE_TABLE('whitebit')
    count = 0
    for i in range(1,9):
        url = f'https://whitebit.com/markets?asset=all&type=spot&page={i}'

        headers = {'Accept': '*/*', 'Connection': 'keep-alive',
                   'User-Agent': 'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36 OPR/56.0.3051.52',
                   'Cache-Control': 'max-age=0', 'DNT': '1', 'Upgrade-Insecure-Requests': '1'}


        # req = requests.get(url, headers=headers)
        req = servise.request_no_error2(url=url, headers=headers)
        # req.encoding = 'cp1251'
        src = req.text

        # print(src)

        # with open("index.html", "w", encoding='utf-8') as file:
        #     file.write(src)
        #
        INFO = []
        soup = BeautifulSoup(src, 'html.parser')
        for data in soup.find("tbody").find_all('tr'):
            name = ''
            name1 = ''
            name2 = ''

            try:
                for local in list(set(data.find(attrs={"data-column":"pair"}).find('div').text.replace('\n', '').split(' '))):
                    if '/' in local:
                        name = local
                        name1 = local.split('/')[0]
                        name2 = local.split('/')[1]
                        break

                print(name, name1, name2, end=' ')

                price = float(data.find(attrs={"data-column":"price"}).find('div').text.replace(',', ''))

                INFO.append([
                    count,
                    name.replace('/', ''),
                    name1,
                    name2,
                    price,
                    price,
                    price,
                    time.time()
                ])
                count += 1

            except:
                pass


        with sqlite3.connect('info.db') as db:
            cursor = db.cursor()
            servise.INSERT_INTOS_DATA('whitebit', INFO, cursor)



        # exit()


def main():
    servise.DELETE_DB("whitebit")
    whitebit()
if __name__ == '__main__':
    main()