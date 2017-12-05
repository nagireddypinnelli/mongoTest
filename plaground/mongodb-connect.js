const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/nagi0',function(error,db){
if(error){
  return console.log('unable to connect to mongodb');
}
  console.log('connected to Mongodb server');

  // db.collection('todo').insertOne(
  //   {'test':'hello I am here to do',
  //   'completed':false
  // },function(err,result){
  //   if(err){
  //     console.log('unable to insert');
  //   }
  //   else {
  //     console.log(JSON.stringify(result.ops,undefined ,2));
  //   }
  // })
db.collection('users').insert({
  //_id=123,
  name:'pinnelli',
  age:43,
  location:'Hyderabad'
},function(error,result){
  if(error){
    return console.log('unable to add user');
  }
  console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined ,2));
})

  db.close();
});
