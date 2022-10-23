#############################################################################


import random
import logging
import aiosqlite
import os
from aiogram import Bot, Dispatcher, executor, types

##############################################################################

admins = [964296210]
bot = Bot(token="5696022711:AAEuMLf3i7FZ4PWjGvmkuVOXv_OxGoove7o")
dp = Dispatcher(bot)
logging.basicConfig(level=logging.INFO)

###############################################################################


@dp.message_handler(commands="start")
async def cmd_start(message: types.Message):
    keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True)
    keyboard.add(types.KeyboardButton(text="Проверить"))
    await message.answer("Приветствую.\n Нажмите кнопку чтобы проверить данные о валютах",reply_markup=keyboard)




################################################################################

@dp.message_handler(lambda message: message.text.lower() == "проверить")
@dp.message_handler(commands="new")
async def send_to_clients(message: types.Message):
    print('srkgmls')
    async with aiosqlite.connect('info.db') as db:
        cursor = await db.cursor()
        await cursor.execute("""
SELECT kucoin.name as NAME__, bitfinex.price, ftx.price, gate.price, gemini.price, kucoin.price, whitebit.price

FROM kucoin FULL JOIN ftx ON kucoin.name = ftx.name FULL JOIN bitfinex ON kucoin.name = bitfinex.name FULL JOIN gemini ON kucoin.name = gemini.name FULL JOIN whitebit ON kucoin.name = whitebit.name FULL JOIN gate ON kucoin.name = gate.name

WHERE NAME__ IS NOT NULL;""")
        data = await cursor.fetchall()
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
                    print(f"COIN:{coin[0]}\nMAX:{name_bir[coin.index(maxim) - 1]}\nMIN:{name_bir[coin.index(minimum) - 1]}")
                    await message.answer(f"COIN:{coin[0]}\nMAX: {name_bir[coin.index(maxim) - 1]}  {maxim}\nMIN: {name_bir[coin.index(minimum) - 1]}   {minimum}\n%: {maxim/minimum}")


################################################################################

if __name__ == "__main__":
    # Запуск бота
    executor.start_polling(dp, skip_updates=True)