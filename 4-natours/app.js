const express = require('express');
const app = express();
const port = 3000;
const tours = require('./dev-data/data/tours-simple.json');

app.get('/',(req,res) =>{
    res
    .status(200)
    .json({message:'Hello from the server side!', app:'Natours'});
})

app.get('/api/v1/tours',(req,res) =>{
  console.log(req.params);
  res.status(200).json({
    status:'success',
    results:tours.length,
    data:{
      tours
    }
  });
})

app.get('/api/v1/tours/:id',(req,res) =>{
  console.log(req.params);
  const id = req.params.id * 1;
  const tour = tours.find(el => el.id === id);
  if(!tour){
    res.status(400).json({
      status:'fail',
      message:"invalid Id"
    })
  }
  res.status(200).json({
    status:'success',
    data:{
      tour
     }
  });
})

app.post('/', (req,res) =>{
    res.send('You cannot post on this endpoint..!')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
