var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/skyapp';

var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('student');
  // Insert some documents
  collection.insertMany([{"student" : "234A", "marks" : 100, "attempts" : 6, "time" : 650,"totaltime":11000,"totalattempt":18}



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