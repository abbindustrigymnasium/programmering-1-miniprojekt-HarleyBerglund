from pyexcel_xlsx import get_data;
import time;
import json;

data = get_data("C:\\Users\\s9harber\\Documents\\Kolhydraträknare\\programmering-1-miniprojekt-HarleyBerglund\\LivsmedelsDB.xlsx")
sheetName = "Blad1";

data_list = []
# Iterate through each row and append in above list
for i in range(0, len(data[sheetName])):
    data_list.append({
        'namn' : data[sheetName][i][0],
        'livsmedelsnummer' : data[sheetName][i][1],
        'kolhydrater' : data[sheetName][i][2],
        'fett' : data[sheetName][i][3],
        'fibrer' : data[sheetName][i][4],
        'alkohol' : data[sheetName][i][5]

    })
data_list = {'intents': data_list} # Converting to required object
j = json.dumps(data_list)
string.replace("\u00f6Q", ö),
# Write to file
with open('DB_test2.json', 'w') as f:
    f.write(j)