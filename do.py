import json
 
# Opening JSON file
f = open('data.json')
 
# returns JSON object as
# a dictionary
data = json.load(f)
 
# Iterating through the json
# list
for i in data:
    # print(i["_id"])
    # i[ "id" ] = str(i["_id"])
    # i["sizes"] = ['XS', 'S', 'M', 'L', 'XL']
    del i["reviews"]
    i["reviews"] = []
    
 
# Closing file
f.close()

# for i in data:
#     print(i)

json_object = json.dumps(data, indent = 4) 
print(json_object)

jsonFile = open("data.json", "w")
jsonFile.write(json_object)
jsonFile.close()