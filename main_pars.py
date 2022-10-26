# https://ftx.com/ +
# https://www.kucoin.com/ +
# https://www.gate.io/ +
# https://whitebit.com/ +
# www.gemini.com/ +
# https://www.bitfinex.com/ +
# https://www.binance.com/ +
import time

import ftxcom
import kucoincom
import www_gate_io
import whitebit
import gemini
import bitfinex


def main():
    try:
        ftxcom.parser_ftx()
    except:
        print("Ошибка в ftxcom")

    try:
        kucoincom.kucoin()
    except:
        print("Ошибка в ftxcom")

    try:
        www_gate_io.gate_main(30)
    except:
        print("Ошибка в ftxcom")

    try:
        whitebit.main()
    except:
        print("Ошибка в ftxcom")

    try:
        gemini.gemini()
    except:
        print("Ошибка в ftxcom")

    try:
        bitfinex.bitfinex()
    except:
        print("Ошибка в ftxcom")

if __name__ == '__main__':

    while True:
        time_start = time.time()
        try:
            main()
        except:
            print("ERROR main")
        print(f"Время обновления: {time.time() - time_start}, {time.ctime(time.time())}")
        time.sleep(60)