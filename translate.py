import pandas as pd
import requests

df_old = pd.read_csv('final.csv',index_col=0)

df_trans = pd.read_csv('final_translate.csv',index_col=0)
df_trans = df_trans.reset_index(drop= True)

for index,row in df_old.iterrows():
    t = df_trans.loc[index,'value']
    if row['value'] == t:
        df_old.loc[index,'translate_location'] =  df_trans.loc[index,'location']
    else:
        print(row)
        raise Exception('Conflict!')

print(df_old)
df_old.to_csv('final_full.csv')