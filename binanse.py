import websockets
import asyncio
import json
import time
import matplotlib.pyplot as plt


fig = plt.figure()
ax = fig.add_subplot(111)
fig.show()

xdata = []
ydata = []


def update_graph():
    ax.plot(xdata, ydata, color='g')
    ax.legend([f"Last price: {ydata[-1]}$"])

    fig.canvas.draw()
    plt.pause(0.1)


async def main():
    # url = "wss://stream.binance.com:9443/stream?streams=btcusdt@miniTicker"
    url = "wss://stream.binance.com:9443/stream?streams=!miniTicker@arr@3000ms"
    async with websockets.connect(url) as client:
        while True:
            # print(await client.recv())
            data = json.loads(await client.recv())
            print(data)
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
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())