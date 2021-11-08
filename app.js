const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');
// const routers=require('./routes/user_routes')
// const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://mode:mode123@cluster0.yfoen.mongodb.net/node_app", {}).then(() => {
//     console.log('DB connected......');
//     mongoose.connection.on('error', err => {
//         console.log(`DB connection error:${err.message}`)
//     })
// }) 

const app=express();
// const allowedOrigins = [
//     "http://165.22.177.229",
//     "http://localhost:3000",
//     "http://3.137.15.3",
//     "https://alessapre.softwaredevelopmentsite.com",
//   ];

// app.use(
//     cors({
//       origin: (origin, callback) => {
//         console.log(origin);
//         // allow requests with no origin ( like mobile apps or curl requests )
//         if (!origin) {
//           return callback(null, true);
//         }
//         if (allowedOrigins.indexOf(origin) === -1) {
//           const msg = `CORS policy don't allow access from the specified Origin. (${origin})`;
//           return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//       },
//     })
//   );
// // app.use(express.static('./public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// app.use('/api',routers)
const port =process.env.port || 3000;
app.listen(port,()=>{
    console.log('server start port',port)
})