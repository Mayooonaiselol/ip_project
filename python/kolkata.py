# Python program to convert
# CSV to HTML Table
 
import pandas as pd

f = open("C:/Users/anshg/ip_project/table/kolkata.html", "r+") 
  
# absolute file positioning
f.seek(0) 
  
# to erase all data 
f.truncate() 
 
# to read csv file named "samplee"
a = pd.read_csv("C:/Users/anshg/ip_project/assets/records/kolkata.csv")

a.index = a.index + 1
 
# to save as html file
# named as "Table"
a.to_html("C:/Users/anshg/ip_project/table/kolkata.html")
 
# assign it to a
# variable (string)
html_file = a.to_html()

with open("C:/Users/anshg/ip_project/table/kolkata.html", "a+") as file_object:
    # Move read cursor to the start of file.
    file_object.seek(0)
    # If file is not empty then append '\n'
    data = file_object.read(100)
    if len(data) > 0 :
        file_object.write("\n")
    # Append text at the end of file
    file_object.write("<link href='../css/styles.css' rel='stylesheet'>")