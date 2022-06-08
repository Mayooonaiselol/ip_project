# Python program to convert
# CSV to HTML Table

from pathlib import Path
from matplotlib.style import use 
import pandas as pd
from script import *

userdata = get_user_data_dir('ip_project')

tbfile = Path(userdata, "table/chennai.html")
csvrecord = Path(userdata, "records/chennai.csv")

f = open(tbfile, "r+") 
  
# absolute file positioning
f.seek(0) 
  
# to erase all data 
f.truncate() 
 
# to read csv file named "samplee"
a = pd.read_csv(csvrecord)

a.index = a.index + 1
 
# to save as html file
# named as "Table"
a.to_html(tbfile)
 
# assign it to a
# variable (string)
html_file = a.to_html()

with open(tbfile, "a+") as file_object:
    # Move read cursor to the start of file.
    file_object.seek(0)
    # If file is not empty then append '\n'
    data = file_object.read(100)
    if len(data) > 0 :
        file_object.write("\n")
    # Append text at the end of file
    file_object.write("<link href='../css/styles.css' rel='stylesheet'>")