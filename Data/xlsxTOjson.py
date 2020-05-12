from pyexcel_xlsx import get_data;
import time;
import json;

data = get_data("C:\\Users\\s9harber\\Documents\\Kolhydraträknare\\programmering-1-miniprojekt-HarleyBerglund\\Data\\LivsmedelsDB.xlsx")
sheetName = "Blad1";

data_list = []
# Iterate through each row and append in above list
for i in range(0, len(data[sheetName])):
    data_list.append({
        'namn' : data[sheetName][i][0],
        
        
    })
data_list = {'intents': data_list} # Converting to required object
j = json.dumps(data_list, indent=4)

# Write to file
with open('DB.json', 'w') as f:
    f.write(j)