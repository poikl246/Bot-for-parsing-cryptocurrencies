import aiosqlite
import psycopg2
import websockets
import asyncio
import json
import time
import servise



host, user, password, db_name = ['10.0.0.100', 'username', 'username', 'site']

# with psycopg2.connect(
#         host=host,
#         user=user,
#         password=password,
#         database=db_name,
#         port=5432) as db:
#     cursor = db.cursor()
async def main():
    # url = "wss://stream.binance.com:9443/stream%sstreams=btcusdt@miniTicker"
    url = "wss://stream.binance.com:9443/stream%sstreams=!miniTicker@arr@3000ms"
    async with websockets.connect(url) as client:

        while True:
        # for i in range(1):
            # print(await client.recv())
            data = json.loads(await client.recv())['data']
            print(data)

            count = 0
            for moneta in data:
                print(moneta)
                INFO = [
                    count,
                    moneta['s'],
                    moneta['s'],
                    moneta['s'],
                    moneta['c'],
                    moneta['o'],
                    moneta['h'],
                    time.time(),
                    moneta['s'],
                ]

                count += 1

                # servise.UPDATE_INTOS_DATA('binanse', INFO, cursor)
                # try:
                #     print('insert')
                #     cursor.execute(f" INSERT INTO binanse VALUES (%s,%s,%s,%s,%s,%s,%s,%s);", INFO[:-1])
                #     print('no_error')
                # except:
                #     print("update")
                #     cursor.execute(
                #         f"UPDATE binanse SET id=%s, name=%s, name_1=%s, name_2=%s, price=%s, high=%s, low=%s, time_=%s WHERE name=%s",
                #         INFO)
            # db.commit()
            await asyncio.sleep(30)

        # event_time = time.localtime(data['E'] // 1000)
        # event_time = f"{event_time.tm_hour}:{event_time.tm_min}:{event_time.tm_sec}"
        #
        # print(event_time, data['c'])
        #
        # xdata.append(event_time)
        # ydata.append(int(float(data['c'])))
        #
        # update_graph()


if __name__ == '__main__':
    # servise.CREATE_TABLE_binance('binanse')
    # loop = asyncio.get_event_loop()
    asyncio.run(main())