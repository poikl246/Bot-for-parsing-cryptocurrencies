import aiosqlite
import websockets
import asyncio
import json
import time
import servise





async def main():
    # url = "wss://stream.binance.com:9443/stream?streams=btcusdt@miniTicker"
    url = "wss://stream.binance.com:9443/stream?streams=!miniTicker@arr@3000ms"
    async with websockets.connect(url) as client:
        async with aiosqlite.connect('info.db') as db:
            cursor = await db.cursor()
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
                    try:
                        print('insert')
                        await cursor.execute(f" INSERT INTO binanse VALUES (?,?,?,?,?,?,?,?);", INFO[:-1])
                        print('no_error')
                    except:
                        print("update")
                        await cursor.execute(
                            f"UPDATE binanse SET id=?, name=?, name_1=?, name_2=?, price=?, high=?, low=?, time_=? WHERE name=?",
                            INFO)
                await db.commit()
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
    servise.CREATE_TABLE_binance('binanse')
    # loop = asyncio.get_event_loop()
    asyncio.run(main())