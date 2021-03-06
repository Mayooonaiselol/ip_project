import pandas as pd
from pathlib import Path
import json
from script import *

userdata = get_user_data_dir('holiday-hype')

# set path to file
p = Path(userdata, r'jsondata/delhi.json')
g = Path(userdata, r'records/delhi.csv')

# read json
with p.open('r', encoding='utf-8') as f:
    data = json.loads(f.read())

# create dataframe
df = pd.json_normalize(data)

# save to csv
df.to_csv(g, mode="a", index=False, header=False, encoding='utf-8')
