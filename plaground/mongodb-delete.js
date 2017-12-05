const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/nagi0',function(error,db){
if(error){
  return console.log('unable to connect to mongodb');
}
  console.log('connected to Mongodb server');


// db.collection('todo').deleteMany({text:'dele'}).then(function(res){
//   console.log(res);
// },
// function(err){
//   console.log('unable to delete selected item');
// })

db.collection('todo').deleteOne({text:'dele'}).then(function(res){
  console.log(res);
},
function(err){
  console.log('unable to delete selected item');
})


  db.close();
});
