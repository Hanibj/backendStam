const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser = require('body-parser')
require('dotenv').config();

const AdminRouter = require("./Routes/AdminRoutes")
const ClientRouter = require("./Routes/ClientRoutes")
const AuthntificationRouter =require('./Routes/Authentification')
const MailRouter = require("./Routes/Mail")

const app =express()

const URL=process.env.URL
mongoose.connect(URL)
    .then(() => console.log( 'Database Connected' ))
    .catch (error => console.log(error));

    const router =express.Router();
    app.use(cors({ credentials: true, origin: '*' }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(express.json());
    app.use((req,res,next)=>{
        console.log(req.path,req.method)
        next()
      })

      app.use('/api/Admin',AdminRouter)
      app.use('/api/Client',ClientRouter)
      app.use('/api/Authe',AuthntificationRouter)
      app.use('/api/Mail',MailRouter)

const PORT=process.env.PORT ;
app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`);
});
module.exports = app;
// const express = require("express");

// const mongoose = require('mongoose');
// const cors =require("cors");
// const bodyParser = require('body-parser');

// //============routes=============
// const AdminRouter = require("./Routes/AdminRoutes")
// const ClientRouter = require("./Routes/ClientRoutes")

// require('dotenv').config();


// const router =express.Router();
// const URL=process.env.URL
// mongoose.connect(URL)
//     .then(() => console.log( 'Database Connected' ))
//     .catch (error => console.log(error));


//  const   app = express();
// //home routes

//  app.use(cors({ credentials: true, origin: '*' }));

// //middlewares
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.json());

// app.use((req,res,next)=>{
//   console.log(req.path,req.method)
//   next()
// })

// //routes
// app.use('/api/admin',AdminRouter)
// app.use('/api/Client',ClientRouter)






// const PORT=process.env.PORT ;
// app.listen(PORT, ()=>{
//     console.log(`Dopee Server running at ${PORT}`);
// });
// module.exports = app;
