const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Akash:12345@cluster0.oogou.mongodb.net/user?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(async err => {

  // perform actions on the collection object
    if(err){
        console.log("Error in connection")
    }
    else {
        console.log("connection Success")
        const collection = client.db("user").collection("restaurants");
        //insert data in database
        const results = await collection.insertMany([
            {
                "address":{
                    "building":"1007",
                    "coord":[-73.856077,40.848447],
                    "street":"Mall Road Mussorie",
                    "zipcode":"10462"
                },
                "cuisine":"Bakery",
                "grades":[
                    {"date":{"$date":1393804800000},"grade":"A","score":2},
                    {"date":{"$date":1378857600000},"grade":"A","score":6},
                    {"date":{"$date":1358985600000},"grade":"A","score":10},
                    {"date":{"$date":1322006400000},"grade":"A","score":9},
                    {"date":{"$date":1299715200000},"grade":"B","score":14}
                ],
                "name":"Morris Bake Shop",
                "restaurant_id":"30075445" 
            },
            {
                "address":{
                    "building":"469",
                    "coord":[-73.961704,40.662942],
                    "street":"Flatbush Avenue",
                    "zipcode":"11225"
                },
                "cuisine":"Hamburgers",
                "grades":[
                    {"date":{"$date":1419897600000},"grade":"A","score":8},
                    {"date":{"$date":1404172800000},"grade":"B","score":23},
                    {"date":{"$date":1367280000000},"grade":"A","score":12},
                    {"date":{"$date":1336435200000},"grade":"A","score":12},
                ],
                "name":"Wendy's",
                "restaurant_id":"30112340"
            },
            {
                "address": {
                    "building": "351", 
                    "coord": [-73.98513559999999, 40.7676919], 
                    "street": "West 57 Street", 
                    "zipcode": "10019"
                }, 
                "cuisine": "Irish", 
                "grades": [
                    {"date": {"$date": 1409961600000}, "grade": "A", "score": 2}, 
                    {"date": {"$date": 1374451200000}, "grade": "A", "score": 11}, 
                    {"date": {"$date": 1343692800000}, "grade": "A", "score": 12}, 
                    {"date": {"$date": 1325116800000}, "grade": "A", "score": 12}
                ], 
                "name": "Dj Reynolds Pub And Restaurant", 
                "restaurant_id": "30191841"
            },
            {
                "address": {
                    "building": "2780", 
                    "coord": [-73.98241999999999, 40.579505], 
                    "street": "Stillwell Avenue", 
                    "zipcode": "11224"
                },
                "cuisine": "American ", 
                "grades": [
                    {"date": {"$date": 1402358400000}, "grade": "A", "score": 75}, 
                    {"date": {"$date": 1370390400000}, "grade": "A", "score": 77}, 
                    {"date": {"$date": 1334275200000}, "grade": "A", "score": 82}, 
                    {"date": {"$date": 1318377600000}, "grade": "A", "score": 90}
                ], 
                "name": "Riviera Caterer", 
                "restaurant_id": "40356018"
            },
            {
                "address": {
                    "building": "97-22", 
                    "coord": [-73.8601152, 40.7311739], 
                    "street": "63 Road", 
                    "zipcode": "11374"
                }, 
                "cuisine": "Jewish/Kosher", 
                "grades": [
                    {"date": {"$date": 1416787200000}, "grade": "Z", "score": 20}, 
                    {"date": {"$date": 1358380800000}, "grade": "A", "score": 13}, 
                    {"date": {"$date": 1343865600000}, "grade": "A", "score": 13}, 
                    {"date": {"$date": 1323907200000}, "grade": "B", "score": 25}
                ], 
                "name": "Tov Kosher Kitchen", 
                "restaurant_id": "40356068"
            },
            {
                "address": {
                    "building": "8825", 
                    "coord": [-73.8803827, 40.7643124], 
                    "street": "Astoria Boulevard", 
                    "zipcode": "11369"
                }, 
                "cuisine": "American ", 
                "grades": [
                    {"date": {"$date": 1416009600000}, "grade": "Z", "score": 47}, 
                    {"date": {"$date": 1398988800000}, "grade": "A", "score": 55}, 
                    {"date": {"$date": 1362182400000}, "grade": "A", "score": 71}, 
                    {"date": {"$date": 1328832000000}, "grade": "A", "score": 65}
                ], 
                "name": "Brunos On The Boulevard", 
                "restaurant_id": "40356151"
            },
            {
                "address": {
                    "building": "2206", 
                    "coord": [-74.1377286, 40.6119572], 
                    "street": "Victory Boulevard", 
                    "zipcode": "10314"
                }, 
                "cuisine": "Jewish/Kosher", 
                "grades": [
                    {"date": {"$date": 1412553600000}, "grade": "A", "score": 92}, 
                    {"date": {"$date": 1400544000000}, "grade": "A", "score": 98}, 
                    {"date": {"$date": 1365033600000}, "grade": "A", "score": 94}, 
                    {"date": {"$date": 1327363200000}, "grade": "A", "score": 96}
                ], 
                "name": "Kosher Island", 
                "restaurant_id": "40356442"
            },
            {
                "address": {
                    "building": "7114", 
                    "coord": [-73.9068506, 40.6199034], 
                    "street": "Avenue U", 
                    "zipcode": "11234"
                },
                "cuisine": "Delicatessen", 
                "grades": [
                    {"date": {"$date": 1401321600000}, "grade": "A", "score": 85}, 
                    {"date": {"$date": 1389657600000}, "grade": "A", "score": 95}, 
                    {"date": {"$date": 1375488000000}, "grade": "A", "score": 82}, 
                    {"date": {"$date": 1342569600000}, "grade": "A", "score": 94}, 
                    {"date": {"$date": 1331251200000}, "grade": "A", "score": 86}, 
                    {"date": {"$date": 1318550400000}, "grade": "A", "score": 85}
                ], 
                "name": "Wilken'S Fine Food", 
                "restaurant_id": "40356483"
            },
            {
                "address": {
                    "building": "6409", 
                    "coord": [-74.00528899999999, 40.628886], 
                    "street": "11 Avenue", 
                    "zipcode": "11219"
                },
                "cuisine": "American ", 
                "grades": [
                    {"date": {"$date": 1405641600000}, "grade": "A", "score": 12}, 
                    {"date": {"$date": 1375142400000}, "grade": "A", "score": 12}, 
                    {"date": {"$date": 1360713600000}, "grade": "A", "score": 11}, 
                    {"date": {"$date": 1345075200000}, "grade": "A", "score": 2}, 
                    {"date": {"$date": 1313539200000}, "grade": "A", "score": 11}
                ], 
                "name": "Regina Caterers", 
                "restaurant_id": "40356649"
            },
            {
                "address": {
                    "building": "1839", 
                    "coord": [-73.9482609, 40.6408271], 
                    "street": "Nostrand Avenue", 
                    "zipcode": "11226"
                }, 
                "cuisine": "Ice Cream, Gelato, Yogurt, Ices", 
                "grades": [
                    {"date": {"$date": 1405296000000}, "grade": "A", "score": 12}, 
                    {"date": {"$date": 1373414400000}, "grade": "A", "score": 58}, 
                    {"date": {"$date": 1341964800000}, "grade": "A", "score": 55}, 
                    {"date": {"$date": 1329955200000}, "grade": "A", "score": 48}
                ], 
                "name": "Taste The Tropics Ice Cream", 
                "restaurant_id": "40356731"
            },
            {
                "address": {
                    "building": "2300", 
                    "coord": [-73.8786113, 40.8502883], 
                    "street": "Southern Boulevard", 
                    "zipcode": "10460"
                }, 
                "cuisine": "American ", 
                "grades": [
                    {"date": {"$date": 1401235200000}, "grade": "A", "score": 11}, 
                    {"date": {"$date": 1371600000000}, "grade": "A", "score": 34}, 
                    {"date": {"$date": 1339718400000}, "grade": "A", "score": 43}
                ], 
                "name": "Wild Asia", 
                "restaurant_id": "40357217"
            },
            {
                "address": {
                    "building": "7715", 
                    "coord": [-73.9973325, 40.61174889999999], 
                    "street": "18 Avenue", 
                    "zipcode": "11214"
                },                     
                "cuisine": "American ", 
                "grades": [
                    {"date": {"$date": 1397606400000}, "grade": "A", "score": 85}, 
                    {"date": {"$date": 1366675200000}, "grade": "A", "score": 82}, 
                    {"date": {"$date": 1335225600000}, "grade": "A", "score": 95}, 
                    {"date": {"$date": 1323993600000}, "grade": "A", "score": 82}
                ], 
                "name": "C & C Catering Service", 
                "restaurant_id": "40357437"
            },
            {
                "address": {
                    "building": "1269", 
                    "coord": [-73.871194, 40.6730975], 
                    "street": "Sutter Avenue", 
                    "zipcode": "11208"
                }, 
                "cuisine": "Chinese", 
                "grades": [
                    {"date": {"$date": 1410825600000}, "grade": "B", "score": 21}, 
                    {"date": {"$date": 1377648000000}, "grade": "A", "score": 73}, 
                    {"date": {"$date": 1364860800000}, "grade": "C", "score": 56}, 
                    {"date": {"$date": 1344988800000}, "grade": "B", "score": 27}, 
                    {"date": {"$date": 1332892800000}, "grade": "B", "score": 27}
                ], 
                "name": "May May Kitchen", 
                "restaurant_id": "40358429"
            },
            {
                "address": {
                    "building": "1", 
                    "coord": [-73.96926909999999, 40.7685235], 
                    "street": "East   66 Street", 
                    "zipcode": "10065"
                }, 
                "cuisine": "American ", 
                "grades": [
                    {"date": {"$date": 1399420800000}, "grade": "A", "score": 83}, 
                    {"date": {"$date": 1367539200000}, "grade": "A", "score": 84}, 
                    {"date": {"$date": 1335744000000}, "grade": "A", "score": 86}, 
                    {"date": {"$date": 1324944000000}, "grade": "A", "score": 80}
                ], 
                "name": "1 East 66Th Street Kitchen", 
                "restaurant_id": "40359480"
            },
            {
                "address": {
                    "building": "705", 
                    "coord": [-73.9653967, 40.6064339], 
                    "street": "Kings Highway", 
                    "zipcode": "11223"
                }, 
                "cuisine": "Jewish/Kosher", 
                "grades": [
                    {"date": {"$date": 1415577600000}, "grade": "A", "score": 11}, 
                    {"date": {"$date": 1381363200000}, "grade": "A", "score": 13}, 
                    {"date": {"$date": 1349308800000}, "grade": "A", "score": 87}, 
                    {"date": {"$date": 1337558400000}, "grade": "A", "score": 89}, 
                    {"date": {"$date": 1325203200000}, "grade": "B", "score": 19}
                ], 
                "name": "Seuda Foods", 
                "restaurant_id": "40360045"
            },
            {
                "address": {
                    "building": "100", 
                    "coord": [-74.0010484, 40.71599000000001], 
                    "street": "Centre Street", 
                    "zipcode": "10013"
                }, 
                "cuisine": "American ", 
                "grades": [
                    {"date": {"$date": 1393804800000}, "grade": "A", "score": 68}, 
                    {"date": {"$date": 1362700800000}, "grade": "A", "score": 12}, 
                    {"date": {"$date": 1331251200000}, "grade": "A", "score": 13}, 
                    {"date": {"$date": 1301529600000}, "grade": "A", "score": 12}
                ], 
                "name": "Cafeteria Criminal Court Bldg", 
                "restaurant_id": "40364443"
            },
            {
                "address": {
                    "building": "320", 
                    "coord": [-73.971128, 40.749869], 
                    "street": "East 43 Street", 
                    "zipcode": "10017"
                }, 
                "cuisine": "American ", 
                "grades": [
                    {"date": {"$date": 1396828800000}, "grade": "A", "score": 99}, 
                    {"date": {"$date": 1365033600000}, "grade": "A", "score": 11}, 
                    {"date": {"$date": 1347321600000}, "grade": "A", "score": 11}, 
                    {"date": {"$date": 1334707200000}, "grade": "A", "score": 11}, 
                    {"date": {"$date": 1302652800000}, "grade": "A", "score": 13}
                ], 
                "name": "Cafeteria Ford Foundation", 
                "restaurant_id": "40368065"
            },
            {
                "address": {
                    "building": "227", 
                    "coord": [-73.9939366, 40.7468282], 
                    "street": "West 27 Street", 
                    "zipcode": "10001"
                }, 
                "cuisine": "American ", 
                "grades": [
                    {"date": {"$date": 1392336000000}, "grade": "A", "score": 97}, 
                    {"date": {"$date": 1359936000000}, "grade": "A", "score": 98}, 
                    {"date": {"$date": 1338854400000}, "grade": "A", "score": 96}
                ], 
                "name": "Cafeteria Fit (Building A)", 
                "restaurant_id": "40380826"
            },
            {
                "address": {
                    "building": "25", 
                    "coord": [-73.8739659, 40.7769271], 
                    "street": "La Guardia Airport", 
                    "zipcode": "11369"
                }, 
                "cuisine": "American ", 
                "grades": [
                    {"date": {"$date": 1421280000000}, "grade": "A", "score": 11}, 
                    {"date": {"$date": 1407369600000}, "grade": "C", "score": 29}, 
                    {"date": {"$date": 1393459200000}, "grade": "A", "score": 10}, 
                    {"date": {"$date": 1357084800000}, "grade": "A", "score": 13}, 
                    {"date": {"$date": 1344384000000}, "grade": "B", "score": 27}
                ],
                "name": "Cafeteria American Airlines Employee", 
                "restaurant_id": "40395036"
            },
            {
                "address": {
                    "building": "229", 
                    "coord": [-73.979175, 40.776306], 
                    "street": "Columbus Avenue", 
                    "zipcode": "10023"
                }, 
                "cuisine": "Italian", 
                "grades": [
                    {"date": {"$date": 1410912000000}, "grade": "A", "score": 12}, 
                    {"date": {"$date": 1393459200000}, "grade": "A", "score": 79}, 
                    {"date": {"$date": 1355356800000}, "grade": "A", "score": 69}, 
                    {"date": {"$date": 1338768000000}, "grade": "B", "score": 25}, 
                    {"date": {"$date": 1337212800000}, "grade": "P", "score": 52}, 
                    {"date": {"$date": 1326067200000}, "grade": "A", "score": 13}
                ], 
                "name": "Pomodoro Ristorante", 
                "restaurant_id": "40399279"
            },
            {
                "address": {
                    "building": "90", 
                    "coord": [-74.0052123, 40.7322175], 
                    "street": "Bedford Street", 
                    "zipcode": "10014"
                }, 
                "cuisine": "Mediterranean", 
                "grades": [
                    {"date": {"$date": 1417996800000}, "grade": "A", "score": 79}, 
                    {"date": {"$date": 1398729600000}, "grade": "A", "score": 75}, 
                    {"date": {"$date": 1379462400000}, "grade": "A", "score": 59}, 
                    {"date": {"$date": 1348012800000}, "grade": "A", "score": 12}
                ], 
                "name": "Moustache Restaurant", 
                "restaurant_id": "40400610"
            }
        ])
        console.log(results)
        
        // Write a MongoDB query to display the fields restaurant_id, name, and zip code but exclude the field _id for all the documents in the collection restaurant.
        const query1 = await collection.aggregate([{$project:{"restaurant_id":1, "name":1, "address.zipcode":1, "_id":0}}])
        while(await query1.hasNext()){
            console.log(await query1.next())
        }
        
        //Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.   
        const query2 = await collection.find({}).sort({name:1})
        while(await query2.hasNext){
            console.log(await query2.next())
        }

        //Write a MongoDB query to display the first 5 restaurant in ascending order of name field.
        const query3 = await collection.find().sort({name:1}).limit(5)
        while(await query3.hasNext()){
            console.log(await query3.next())
        }

        // Write a MongoDB query to display the next 5 restaurants after skipping first 5.
        const query4 = await collection.find().skip(5).limit(5)
        while(await query4.hasNext()){
            console.log(await query4.next())
        }

        //Write a MongoDB query to find the restaurants who achieved a score more than 90.
        const query5 = await collection.aggregate([{$match:{"grades.score":{$gt:90}}}])
        while(await query5.hasNext()){
            console.log(await query5.next())
        }

        //Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100.
        const query6 = await collection.aggregate([{$match:{"grades.score":{$gt:80,$lt:100}}}])
        while(await query6.hasNext()){
            console.log(await query6.next())
        }

        // Write a MongoDB query to find the restaurant name, longitude and latitude and cuisine for those restaurants which contain 'Caf' as first three letters of its name.
        const query7 = await collection.find({name:{$regex:/^Caf/}}).project({_id:0,name:1,cuisine:1,"address.coord":1})
        while(await query7.hasNext()){
            console.log(await query7.next())
        }

        // Write a MongoDb query to update grade B to A in all documents.
        const query8 = await collection.updateMany({"grades.grade":"B"},{$set:{"grades.$[].grade":"A"}})
    }
    client.close();
});
