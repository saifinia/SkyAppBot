var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/skyapp';

var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('worksheet');
  // Insert some documents
  collection.insertMany([//{"student" : "234A", "marks" : 76, "attempts" : 3, "time" : 310,"totaltime":1300,"totalattempt":18}
  {"worksheet" : "A12", "marks" : 62, "attempts" : 8, "time" : 1200,"tag":"直角" },
  {"worksheet" : "A13", "marks" : 91, "attempts" : 2, "time" : 400,"tag":"直角" },
  {"worksheet" : "A14", "marks" : 55, "attempts" : 9, "time" : 310,"tag":"直角" },
  {"worksheet" : "A15", "marks" : 61, "attempts" : 4, "time" : 400,"tag":"最大公约数" },
  {"worksheet" : "A16", "marks" : 91, "attempts" : 6, "time" : 303,"tag":"最大公约数" }


  ], function(err, result) {
    callback();
  });
}

//var findDocuments = function(db, callback) {
  // Get the documents collection
  //var collection = db.collection('documents');
  // Find some documents
  //collection.find({"Tag":"有限小数","Difficulty":"Hard"}).toArray(function(err, docs) {
   // assert.equal(err, null);
    //console.log(docs)
    //callback(docs);
  //});
//}

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  insertDocuments(db,function(){
  db.close();
});
});