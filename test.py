from huobi import subscribe
import asyncio

def btc_callback(data):
        print(data)
async def eth_callback(data):
        print(data)





data = ['btc', 'eth', 'ht', 'dot', 'xrp', 'link', 'bch', 'ltc', 'bsv', 'ada', 'eos', 'trx', 'iota', 'etc', 'usdc', 'usdp', 'tusd', 'wbtc', 'mbl', 'hao', 'xen', 'gvr', 'ing', 'lunc', 'mine', 'movez', 'bitci', 'mcrt', 'fanc', 'wbt', 'ethw', 'hoop', 'fdt', 'phb', 'inr', 'orbs', 'dfx', 'brise', 'waxl', 'soul', 'ethf', 'zcx', 'uft', 'luna', 'medamon', 'bp', 'ton', 'unq', 'evmos', 'lovely', 'sylo', 'wlkn', 'sprt', 'baby', 'aegis', 'reth', 'flz', 'usdd', 'kripto', 'bld', 'pando', 'ustc', 'kok', 'vinu', 'mplx', 'cube', 'xno', 'caw', 'anv', 'solo', 'sweat', 'fitfi', 'erg', 'vision', 'ryoma', 'gmt', 'ape', 'ipv', 'azero', 'spume', 'bwo', 'face', 'hype', 'dc', 'lunr', 'mudol2', 'hsf', 'plato', 'op', 'cel', 'h2o', 'ceek', 'skeb', 'cake', 'egame', 'srt', 'mrs', 'like', 'koi', 'wwy', 'boson', 'tava', 'raca', 'toke', 'joy', 'nodl', 'oland', 'sao', 'mcg', 'orbr', 'nym', 'xeta', 'crts', 'velo', 'vvs', 'shit', 'adp', 'qom', 'wmt', 'mina', 'bbf', 'fiu', 'revo', 'pbr', 'usn', 'itc', 'egs', 'xcn', 'fota', 'we', 'moov', 'dexe', 'cudos', 'dog', 'stc', 'klay', 'mcontent', 'arv', 'num', 'sign', 'fx', 'psg', 'mbx', 'prom', 'og', 'polyx', 'brt', 'atm', 'juv', 'metis', 'dyp', 'xcur', 'orc', 'dfi', 'wndr', 'tdx', 'pundix', 'qrdo', 'tlm', 'vlx', 'gal', 'mesa', 'kube', 'jumbo', 'strm', 'tao', 'antex', 'ldo', 'route', 'aqt', 'ply', 'well', 'rccc', 'xdc', 'dodo', 'sfund', 'sps', 'mmf', 'swap', 'lbl', 'klv', 'ever', 'prq', 'cusd', 'stg', 'anml', 'berry', 'rei', 'zed', 'mu', 'vr', 'ogv', 'eul', 'abbc', 'lmr', 'dao', 'fio', 'uos', 'brwl', 'oct', 'gq', 'loka', 'onston', 'dks', 'elu', 'poolz', 'sys', 'mev', 'dep', 'toms', 'fuse', 'amp', 'akt', 'galft', 'kct', 'pla', 'xpnt', 'voxel', 'adx', 'ghst', 'box', 'crpt', 'dora', 'dbc', 'onit', 'vemp', 'mtl', 'dose', 'ctc', 'noia', 'breed', 'gno', 'col', 'znt', 'tlos', 'xdefi', 'ctx(c2x)', 'primate', 'npt', 'mc', 'tinc', 'hunt', 'steth', 'smcw', 'orb', 'btc*3', 'btc*(-3)', 'eth*3', 'eth*(-3)', 'link*3', 'link*(-3)', 'btt', 'shib', 'sol', 'matic', 'doge', 'tnb', 'atom', 'theta', 'xlm', 'algo', 'near', 'xch', 'chz', 'cspr', 'fil', 'avax', 'rsr', 'nest', 'nft', 'uni', 'sushi', 'icp', 'cro', 'mana', 'ftt', 'sand', '1inch', 'dta', 'flow', 'hbar', 'zil', 'rvn', 'dydx', 'vet', 'sun', 'ogo', 'coti', 'node', 'crv', 'aave', 'one', 'waves', 'ksm', 'lat', 'waxp', 'utk', 'grt', 'neo', 'xec', 'spa', 'xtz', 'omg', 'comp', 'inj', 'mdx', 'axs', 'kava', 'enj', 'woo', 'soc', 'jst', 'bat', 'let', 'top', 'ocn', 'ant', 'talk', 'ela', 'steem', 'hive', 'ast', 'tt', 'ckb', 'ar', 'epik', 'snx', 'storj', 'yfii', 'mkr', 'dai', 'iost', 'akro', 'ach', 'qtum', 'nexo', 'lamb', 'ankr', 'chr', 'ont', 'ogn', 'yfi', 'pai', 'mx', 'knc', 'hpt', 'xem', 'hit', 'lrc', 'ygg', 'pond', 'rly', 'vidy', 'dock', 'band', 'wtc', 'nas', 'beth', 'clv', 'blz', 'sc', 'pvt', 'iotx', 'bix', 'pols', 'mask', 'nano', 'srm', 'icx', 'rad', 'bal', 'arpa', 'zrx', 'sxp', 'zks', 'sku', 'wnxm', 'vsys', 'skm', 'trb', 'new', 'nbs', 'wicc', 'agld', 'badger', 'dfa', 'uma', 'elf', 'ctxc', 'ring', 'stf', 'nuls', 'glm', 'tribe', 'push', 'fis', 'mln', 'fsn', 'swftc', 'em', 'oxt', 'loom', 'xprt', 'for', 'btm', 'nkn', 'iris', 'bhd', 'gt', 'bnt', 'mass', 'atp', 'act', 'snt', 'bts', 'eden', 'ruff', 'req', 'hc', 'df', 't', 'stpt', 'egt', 'abt', 'cvc', 'whale', 'cnns', 'smt', 'kan', 'cmt', 'wxt', 'mds', 'gnx', 'cre', 'lxt', 'dac', 'xmx', 'hot', 'ren', 'mxc', 'seele', 'uuu', 'fti', 'aac', 'uip', 'kcash', 'reef', 'lhb', 'lina', 'can', 'swrv', 'front', 'rndr', 'titan', 'bags', 'sofi', 'stn', 'nsure', 'dka', 'mir', 'yam', 'gof', 'skl', 'api3', 'ctsi', 'o3', 'rlc', 'filda', 'insur', 'mta', 'xrt', 'boring', 'apn', 'cru', 'auction', 'dht', 'forth', 'cvp', 'pha', 'pearl', 'value', 'bsv*3', 'eos*3', 'eos*(-3)', 'dot*2', 'dot*(-2)', 'uni*2', 'uni*(-2)', 'ltc*3', 'ltc*(-3)', 'xrp*3', 'xrp*(-3)', 'bch*3', 'bch*(-3)', 'fil*3', 'fil*(-3)', 'eth*(-1)', 'btc*(-1)', 'bnb', 'babydoge', 'arkn', 'lbp', 'mono', 'gst', '1sol', 'pstake', 'gala', 'zbc', 'spellfire', 'imx', 'ftm', 'floki', 'ertha', 'ern', 'ens', 'love', 'glmr', 'win', 'elon', 'aurora', 'bico', 'nct', 'efi', 'phcr', 'vra', 'egld', 'jasmy', 'fox', 'radar', 'starly', 'looks', 'gari', 'kma', 'aca', 'movr', 'sdn', 'trace', 'wozx', 'pyr', 'cere', 'upi', 'ctx', 'slc', 'astr', 'celo', 'gods', 'gcoin', 'sd', 'xcad', 'pokt', 'sis', 'opul', 'anc', 'unfi', 'bit', 'sos', 'hec', 'people', 'boo', 'hotcross', 'cvx', 'audio', 'boba', 'alice', 'gmpd', 'kt', 'c98', 'nt', 'ocean', 'trac', 'dio', 'multi', 'ats', 'ranker', 'war', 'ioi', 'ngl', 'polc', 'unb', 'gf', 'mbox', 'spell', 'lpt', 'scrt', 'roco', 'xtm', 'zkp', 'aury', 'lqty', 'aioz', 'inv', 'indi', 'wemix', 'dia', 'wallet', 'hbb', 'rain', 'plu', 'mgg', 'wild', 'perp', 'lith', 'xyo', 'super', 'rifi', 'gmee', 'store', 'sns', 'rss3', 'zig', 'kai', 'vpad', 'bull', 'idex', 'unic', 'scream', 'revv', 'chsb', 'mpl', 'wnd', 'suku', 'loot', 'wpci', 'gear', 'holo']




# list_data += ''''market.''' + i + '''usdt.kline.5min': {
#         'callback': ''' + i + '''_callback
#     },'''



for name in data:
    try:
        task = subscribe({
            f'market.{name}usdt.kline.1min': {
                'callback': exec(f"{name}_callback")
            }
        })
        print('good', name)
    except:
        print('ban', name)


asyncio.get_event_loop().run_until_complete(task)
