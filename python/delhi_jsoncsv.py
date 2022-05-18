import pandas as pd
from pathlib import Path
import json

# set path to file
p = Path(r'.\jsondata\delhi.json')

# read json
with p.open('r', encoding='utf-8') as f:
    data = json.loads(f.read())

# create dataframe
df = pd.json_normalize(data)

# save to csv
df.to_csv('./assets/records/delhi.csv', mode="a", index=False, header=False, encoding='utf-8')