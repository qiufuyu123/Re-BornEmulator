import pandas as pd

def add_reg(path,region_name):
    df = pd.read_csv(path,index_col=0)
    df = df.reset_index(drop=True)
    df['region'] = region_name
    
    df.to_csv(path)
    print('Finish: '+path)

add_reg('out_asia.csv','as')
add_reg('out_africa.csv','af')
add_reg('out_euro.csv','eu')
add_reg('out_latin_america.csv','la')
add_reg('out_north_america.csv','na')
add_reg('out_africa.csv','af')
add_reg('out_ocean.csv','oc')