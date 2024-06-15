import pandas as pd

df = pd.read_csv('final_full.csv',index_col=0)

output = 'const data = [\n'

def line(x):
    global output
    tmp = '["'
    tmp += x['location']
    tmp += '","'
    tmp += x['translate_location']
    tmp += '","'
    tmp += x['region']
    tmp += '"],\n'
    output+=tmp

df.apply(line,axis=1)
output+=']\n\nconst rate_data = [\n'
def pct_line(x):
    global output
    tmp = str(x['pct'])
    output+=tmp
    output+=',\n'
df.apply(pct_line,axis=1)
output+=']\n'

with open('final_js.js','w+',encoding='utf-8') as f:
    f.write(output)