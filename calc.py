import pandas as pd
import matplotlib.pyplot as plt

total = 0
v = 0

def sum_ppl(x):
    global total
    total += int(x['value'])

def calc(x):
    global total
    return int(x['value']) / total * 100

def verify(x):
    global v
    
    v += float(x['pct'])

data = pd.read_csv('output.csv',index_col=0)
data.apply(sum_ppl,axis=1)
print(f'Total ppl. : {total}')
data['pct'] = data.apply(calc,axis=1)
data.apply(verify,axis=1)
print(v)
tmp_dat = data.sort_values('pct',axis=0,ascending=False)
data.to_csv('final.csv')
arr = tmp_dat.loc[:,'pct'].array[:10]
lbs = tmp_dat.loc[:,'location'].array[:10]
# fig = plt.pie(arr,labels=lbs)
# plt.barh(arr,lbs)
plt.bar(lbs,arr)
plt.show()

def callback(event):
    pass

