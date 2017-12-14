from pymongo import MongoClient
import sys

url = MongoClient('mongodb://localhost',27017)
db = url.skyapp
worksheet =db.worksheet
students=db.student
timemax=1200
timemin=100
markmax=100
markmin=20
attemptmax=8
attemptmin=1
allworksheet=[]
studentID=sys.argv[1]
worksheettag=sys.argv[2]
output=0
studentmark=1000
b1=1000
for i in students.find({"student":studentID}):
    studentmark=i["marks"]
    studenttime=i["time"]
    studentattempts=i["attempts"]
if studentmark==1000:
    print (3)
else:
    for i in worksheet.find({"tag":worksheettag}):
        b1=markmax+markmin-i["marks"]
        b2=timemax+timemin-i["time"]
        b3=attemptmax + attemptmin - i["attempts"]
        b4=i["worksheet"]
        b1distance=(float(b1))/(markmax-markmin)-studentmark/(markmax-markmin)
        b2distance=(float(b2))/(timemax-timemin)-studenttime/(timemax-timemin)
        b3distance=(float(b3))/(attemptmax-attemptmin)-studentattempts/(attemptmax-attemptmin)
        similaritysquare=float(b1distance*b1distance+b2distance*b2distance+b3distance*b3distance)
        similarity=float(similaritysquare**0.5)
        allworksheet.append([b4,similarity])
    if b1==1000:
        print(2)
    else:
        value=100
        for i in range(0,len(allworksheet)):
            if value>allworksheet[i][1]:
                value=allworksheet[i][1]
                output=allworksheet[i][0]
        print(output)
