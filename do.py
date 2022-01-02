import json
import random
 
# Opening JSON file
f = open('Products1.json')
 
# returns JSON object as
# a dictionary
data = json.load(f)
 
# Iterating through the json
# list
for i in data:
    # print(i["_id"])
    # i[ "id" ] = str(i["_id"])
    # i["sizes"] = ['XS', 'S', 'M', 'L', 'XL']
    del i["_id"]
    # r = random.random() * 5 + 2

    # if r > 5 :
    #     r = 4 + random.random()
    # i["rating"] = round(r, 1)

    i["quantity"] = 50
    i["wishedQuantity"] = 0
    
 
# Closing file
f.close()

# for i in data:
#     print(i)

json_object = json.dumps(data, indent = 4) 
print(json_object)

jsonFile = open("data.json", "w")
jsonFile.write(json_object)
jsonFile.close()