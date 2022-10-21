# from bs4 import BeautifulSoup
# import re
#
# with open("Huobi Global The Leading Global Digital Asset Exchange.html", "r", encoding='utf-8') as file:
#     src = file.read()
#
# soup = BeautifulSoup(src, 'html.parser')
# name = [data.text.lower() for data in soup.find_all('em', class_="name")]
# print(name)
#
# name_ = []
# for i in name:
#     if re.search('\d+', i) is None:
#         name_.append(i)
#
#
#
# list_data = '{'
# for i in name_:
#     list_data += ''''market.''' + i + '''usdt.kline.5min': {
#             'callback': ''' + i + '''_callback
#         },'''
#
#
# list_data += '}'
# # print(list_data)
# with open("out.json", "w", encoding='utf-8') as file:
#     file.write(list_data)


#
# import requests
#
# data = requests.


# import random
# def AAAAAA():
#     data = []
#     for i in range(1000):
#         data_l = []
#         for g in range(random.randint(5, 500)):
#             data_l.append(random.random())
#         data.append(data_l)
#     return data
#
# print(AAAAAA())


from fake_useragent import UserAgent
ua = UserAgent()

print(type(ua))
print(type(ua.random))

# exit()
data = []

for i in range(50000):
    data.append(ua.random + '\n')
    # print(ua.random)


with open('UserAgent.txt', 'w', encoding='utf-8') as file:
    file.writelines(data)