# НАДО ДОПИЛИТЬ ТАК КАК ЭТО НЕ ДЕЛО
import json
import time
import requests
import servise


def bybit():
    servise.CREATE_TABLE('bytbit')

    headers = {
        'Host': 'api2.bybit.com',
        'Sec-Ch-Ua': '"-Not.A/Brand";v="8", "Chromium";v="102"',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Platform': 'pc',
        'Sec-Ch-Ua-Mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36',
        'Sec-Ch-Ua-Platform': '"Linux"',
        'Origin': 'https://www.bybit.com',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://www.bybit.com/',
        # 'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        # Requests sorts cookies= alphabetically
        # 'Cookie': 'bm_sz=F4338D1C68DDB918EE23E9BF5D0ABE59~YAAQJvBuaG6PWqSDAQAAJmFPvBF6hChtwb1md5UUqfiL10NphUvy5nFyOnsB3u39d5fLK76IjZDdJTm7Dpu8dJndRuQIjsyN7KQVDileGhKskVVSbkG/GKiiug211BJKnDOvGICTMhoTfrHs2E9r4btZpgrOINv2MxpyPs0i1cyY8UoJUAkqzM90Cc5vi6sNre816cveXny/qOs+4+NFr+27q6AjVO4aF44q0u37fIeCdTjXqWJhCl8c7xQSID6fHuk2R2sK5yQC4dH3A9xrrRAS+2AIdzq3mYLB7jDsZGEYDw==~4538930~3359282; _by_l_g_d=d8426537-c3ca-b516-f3f7-5f39c3f21236; BYBIT_REG_REF_prod={"lang":"ru-RU","g":"d8426537-c3ca-b516-f3f7-5f39c3f21236","medium":"direct","url":"https://www.bybit.com/data/markets/contract"}; sajssdk_2015_cross_new_user=1; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22183bc4f6a7d4ab-00e5a99cf8a021b8-15373079-2073600-183bc4f6a7e550%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22_a_u_v%22%3A%220.0.5%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTgzYmM0ZjZhN2Q0YWItMDBlNWE5OWNmOGEwMjFiOC0xNTM3MzA3OS0yMDczNjAwLTE4M2JjNGY2YTdlNTUwIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%22183bc4f6a7d4ab-00e5a99cf8a021b8-15373079-2073600-183bc4f6a7e550%22%7D; _gcl_au=1.1.920286682.1665311665; _ga=GA1.2.1853879134.1665311666; _gid=GA1.2.1016152514.1665311666; _ym_uid=1665311666145529696; _ym_d=1665311666; bm_sv=9A312639863598156034213D6F27E64B~YAAQ38MTAr6zFrKDAQAAamdPvBHCc/mln7rq4Ea1tq6WaedyN1PI3ot/bkDk4m9I6bOXNVCAUsdeSgThjylixF6bTpNafwsp7G6b7Jx/P0+ap7jT93fTMJocKxsI2yigbcRvQCKMLSDVRbtehH7Q2lIXzN+WSf64h7Lh5Vt+bZCI4LE5LkF86UQ1nCr3eCnV6yI0pNQiW3+1l+3yBfqw1ud8U7uMXdzC1QNrjKYaxHqi16uz6DlLWdQSG80Ixb4=~1; tmr_lvid=a3d56f83e7423806bcf1201fd852b3b6; tmr_lvidTS=1665311666988; _ym_isad=2; _fbp=fb.1.1665311668328.1130186671; b_t_c_k=; _clck=1s9qai6|1|f5k|0; _tt_enable_cookie=1; _ttp=f7c6b690-7eea-4c89-8269-ea917f4ac25d; _clsk=1ggaw3m|1665311684355|2|0|g.clarity.ms/collect; _gat_UA-126371352-1=1; ak_bmsc=4A42370503D3261B1B1A437BEDD9ED16~000000000000000000000000000000~YAAQJvBuaO3gWqSDAQAAvTVSvBEcPR/PdgbyEFr+mspCC34TE3GPpA0/8GEPCINmVGkidda6PV6sN9zhz7jIrt3t82347JQmxhBJWy1jcW9Dk2xQKyAoe8QL+s/JTXOm6+uiStLHIBTpe88Tsw9puAekUKUVGNBEfwOnLtRclUomHlSt/+iiCCRgjTT50F/EjB/FnhORaLXLydlQL8Y/Slt8zNJhTPbceCL3NYmnKBK/Huaa2vw2SyeAEQ//asmv3E2iWggNKMNZPjsPC1/xTTTIWCcUG+KyuWYqjdCO+KxeNh2JddMwwNbyTCZJbuISMw6fu1R8IbHq1if1mHHsC4DI8A6/PccujZsrarjUwwm2MxzFgPzoqPs/dHyI6A5aY1yjyY33lweqDbF9ujM/SvIyM8VtzvYu8kPRucWqJndpMM04d+b1V/xWnI5YzW2lQScg0shspdf33dKYDmZ87vYGyVrMAGaMJ74ODvtY19G2cEukotlWGIgZx+2pZecsxkh/8Kafl3WtmWf+SQmlwRsLvAbX; 35CJa4376-ref=direct|direct|direct|direct|1665311849520; tmr_reqNum=6; _abck=DA49395FE6E17B83DA06DEC7DF6C2E0A~-1~YAAQJvBuaGPhWqSDAQAAdzpSvAiDaKS1zFIO6+4trMmg3YaA/m9KLMnWd0DYMFbPBLuT3Ba07Uux9zH4pCzMafcPz/RNhjmEGLlAukgMFLXNO5eoyXpB0dbFx8Pn6Wwl+SYv8khIzkpBdW5zvGWnGPNjlSZx6aWfhA50YwXDDlVyW9hoYKWDgqqVeOB2LoIOMpf4CjxdMbzX04IR3gSCX30mvHnJCECDTGuDmXpsqr7k1TsY4bbWuO+G+tk1Oy48xqeuCI8fN5uPvF1coJ0XyN73c0CGm3CUCimVvzIuc6UZpS7n4XmfMtxwjLnc/CcZN8ZsXt7c5+v2eLyHWioRTjm8bS6ESNuZeu7Y22UHuPOF4zZ4U1+aEOO0AAVlD/kF60wTh6GsRIs6~-1~-1~-1',
    }

    params = {
        'resolution': '60',
        'from': int(time.time() - 60),
        'to': int(time.time()),
    }

    response = requests.get('https://api2.bybit.com/public/linear/market/arrayKline', params=params, headers=headers, verify=True)
    Data = response.json()

    print(len(Data.get("result", {})))
    with open("result.json", "w", encoding='utf-8') as file:
        json.dump(Data, file, indent=4, ensure_ascii=False)

if __name__ == '__main__':
    bybit()