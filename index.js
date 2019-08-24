const express = require('express');
 const app = express();
 const port = 5000;

 app.get('/api/customers',(req , res)=>{
     const customers = [
         {id :1 ,  Name : 'aun' , LstName : 'Abbas'},
         {id :1 ,  Name : 'ali' , LstName : 'Abbas'},
         {id :1 ,  Name : 'alien' , LstName : 'Abbas'}

         
     ] ;
     res.json(customers);
     

 });
 app.listen(port,() =>console.log("Server Started on port 5000....") ) 