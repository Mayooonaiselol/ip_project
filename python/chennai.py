# Python program to convert
# CSV to HTML Table

from pathlib import Path 
import pandas as pd

tbfolder = Path("./table/")
csvfolder = Path("./assets/records/")

htmlfile = tbfolder / "chennai.html"
csvrecord = csvfolder / "chennai.csv"

f = open(htmlfile, "r+") 
  
# absolute file positioning
f.seek(0) 
  
# to erase all data 
f.truncate() 
 
# to read csv file named "samplee"
a = pd.read_csv(csvrecord)

a.index = a.index + 1
 
# to save as html file
# named as "Table"
a.to_html(htmlfile)
 
# assign it to a
# variable (string)
html_file = a.to_html()

with open(htmlfile, "a+") as file_object:
    # Move read cursor to the start of file.
    file_object.seek(0)
    # If file is not empty then append '\n'
    data = file_object.read(100)
    if len(data) > 0 :
        file_object.write("\n")
    # Append text at the end of file
    file_object.write("<link href='../css/styles.css' rel='stylesheet'>")