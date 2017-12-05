const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/nagi0',function(error,db){
if(error){
  return console.log('unable to connect to mongodb');
}
  console.log('connected to Mongodb server');
// db.collection('todo').find({completed:true}).toArray().then(function(docs){
//   console.log(docs);
// },function(err){
//   console.log('unable to fetch records');
// });

// db.collection('todo').find().count().then(function(docs){
//   console.log(docs);
// },function(err){
//   console.log('unable to fetch records');
// });

// db.collection('todo').find({completed:true}).toArray().then(function(docs){
//   console.log(docs);
// },function(err){
//   console.log('unable to fetch records');
// });

db.collection('todo').find({test:'nagi'}).toArray().then(function(docs){
  console.log(JSON.stringify(docs,undefined,2));
})
  db.close();
});
