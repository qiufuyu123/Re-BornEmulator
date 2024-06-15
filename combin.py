import pandas as pd


def read_data(path):
    return pd.read_csv(path,index_col=0)

output = read_data('out_asia.csv')
output = output._append(read_data('out_africa.csv'))
output =output._append(read_data('out_euro.csv'))
output =output._append(read_data('out_latin_america.csv'))
output =output._append(read_data('out_north_america.csv'))
output =output._append(read_data('out_ocean.csv'))
output = output.reset_index(drop=True)
output.to_csv('output.csv')


print(output)