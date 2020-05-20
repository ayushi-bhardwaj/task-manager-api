const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;
const ObjectId=mongodb.ObjectID;
const connectionURL='mongodb://127.0.0.1:27017';
const databaseName='task-manager'


MongoClient.connect(connectionURL,{
    useNewUrlParser:true
},(error,client)=>{
    if(error){
         console.log('unable to create database!')
    }

    const db=client.db(databaseName)
    
    // db.collection('users').findOne({_id:new ObjectId("5eb57b499fd3af1c70ea9908")},(error,user)=>{
    //     if(error){
    //         return console.log('unable to fetch');
    //     }
    //     console.log(user)
    // })
    //   db.collection('tasks').find({completed:true}).toArray((error,tasks)=>{
    //       if(error)
    //       {
    //           return console.log('sorry')
    //       }
    //       console.log(tasks);
    //   })
    // const updatePromise=db.collection('users').updateOne({
    //     _id: new ObjectId("5eb57b499fd3af1c70ea9908")
    // },{
    //    $inc:{

    //       age:1
    //    }
    // })
    // updatePromise.then((result)=>{
    //      console.log(result);
    // }).catch((error)=>{
    //   console.log(error)
    // })
    // db.collection('tasks').updateMany({
    //     completed:false
    // },{
    //     $set:{
    //         completed:true
    //     }
    // }).then((result)=>{
    //          console.log(result);
    //      }).catch((error)=>{
    //       console.log(error)
    //     })
    db.collection('tasks').deleteOne({
        
        description:'this is second task'
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error);
    })
})
