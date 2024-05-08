// const { MongoClient } = require('mongodb');


// const url = 'mongodb://127.0.0.1:27017/';


// const client = new MongoClient(url);


// async function connectToMongoDB() {
// try {
// await client.connect();
// const db=client.db('photos');
// const collection = db.collection('employee');
// const cursor = collection.find({});


// //inserMany
// // const ackresult = await collection.insertMany([{
// //     _id: 7,
// //   firstName: 'dhoni',
// //   lastName: 'MSD',
// //   gender: 'male',
// //   email: 'dhoni@abc.com',
// //   salary: 850000,
// //   department: { name: 'Finance' }
// // },{
// //     _id: 8,
// //     firstName: 'rutu',
// //     lastName: 'gaikward',
// //     gender: 'male',
// //     email: 'rutu@abc.com',
// //     salary: 150000,
// //     department: { name: 'Finance' }
// // }
// // ]);

// //updateOne
// // const ackresult = await collection.updateOne({_id:2},{$set:{lastName:'tendulkar'}});


// //updateMany
// // const ackresult = await collection.updateMany({'department.name':'Finance'},{$set:{department:{name:'Sales'}}});

// //deleteOne
// // const ackresult = await collection.deleteOne({_id:3});

// //deleteMany
// // const ackresult = await collection.deleteMany({salary:{$lte:7000}});

// // console.log("record is inserted"+ackresult)
// await cursor.forEach(record=>{
//    console.log(record)
// });
// await client.close();


// console.log('Connected to MongoDB successfully');
// } catch (error) {
// console.error('Error connecting to MongoDB:', error);
// }
// }


// connectToMongoDB();

