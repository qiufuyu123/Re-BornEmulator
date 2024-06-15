# indicator: TBirths
# Creates the target URL, indicators, in this instance
import pandas as pd
import requests
import json

headers = {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InFpdWZ1eXVUb255QG91dGxvb2suY29tIiwibmJmIjoxNzE4MzgyMjAzLCJleHAiOjE3NDk5MTgyMDMsImlhdCI6MTcxODM4MjIwMywiaXNzIjoiZG90bmV0LXVzZXItand0cyIsImF1ZCI6ImRhdGEtcG9ydGFsLWFwaSJ9.PTlAK1G22yduw_OZmf6wfKnHErIaeLQjFS-10mg9BxM',
            'ua': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36'
        }
# Declares the base url for calling the API
base_url = "https://population.un.org/dataportalapi/api/v1"
target = base_url + "/data/indicators/57/locations/16,36,184,242,258,316,296,584,583,520,540,554,570,580,585,598,882,90,772,776,798,548,876/start/2023/end/2023"
#africa: 12,24,204,72,854,108,132,120,140,148,174,178,384,180,262,818,226,232,748,231,266,270,288,324,624,404,426,430,434,450,454,466,478,480,175,504,508,516,562,566,638,646,654,678,686,690,694,706,710,728,729,768,788,800,834,732,894,716
#asia: 4,51,31,48,50,64,96,116,156,344,446,158,196,408,268,356,360,364,368,376,392,400,398,414,417,418,422,458,462,496,104,524,512,586,608,634,410,682,702,144,275,760,762,764,626,792,795,784,860,704,887
#euro: 8,20,40,112,56,70,100,191,203,208,233,234,246,250,276,292,300,831,348,352,372,833,380,832,412,428,438,440,442,470,492,499,528,807,578,616,620,498,642,643,674,688,703,705,724,752,756,804,826
#latin america: 660,28,32,533,44,52,84,68,535,76,92,136,152,170,188,192,531,212,214,218,222,238,254,308,312,320,328,332,340,388,474,484,500,558,591,600,604,630,652,659,662,663,670,534,740,780,796,850,858,862
#north america: 60,124,304,666,840
#ociean: 16,36,184,242,258,316,296,584,583,520,540,554,570,580,585,598,882,90,772,776,798,548,876
# Get the response, which includes the first page of data as well as information on pagination and number of records
response = requests.get(target,headers=headers)
j = json.loads(response.content)
# Converts call into JSON

# Converts JSON into a pandas DataFrame.
df = pd.json_normalize(j['data']) # pd.json_normalize flattens the JSON to accomodate nested lists within the JSON structure
i = 1
# Loop until there are new pages with data
while j['nextPage'] != None:
    print('Page'+str(i))

    # Reset the target to the next page
    target = j['nextPage']

    #call the API for the next page
    response = requests.get(target,headers=headers)
    # Convert response to JSON format
    j = json.loads(response.content)

    # Store the next page in a data frame
    df_temp = pd.json_normalize(j['data'])
    
    df = df._append(df_temp)
    i+=1
df.to_csv('origin.csv')
df = df.loc[(df['variant']=='Median') &( df['sex']=='Both sexes'),['location','value']]
#df.reset_index()
df.to_csv('out.csv')
print(df)