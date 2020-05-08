const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');

// const MongoClient = require('mongodb').MongoClient;

const app = express()
const port = 3000

// Connection URL
const url = 'mongodb://localhost:27017/test';
// Database Name


mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const SurveySchema = new mongoose.Schema({
    text: { type: String, default: '' },
    date: { type: Date, default: Date.now },
    choices: [{
      text: { type: String, default: '' },
      count: { type: Number, default: 0 }
    }]
  });
const Survey = mongoose.model('Survey', SurveySchema);


// parse application/json
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('client/dist/client'))

app.get('/survey', (req, res)=>{
    Survey.find((err, result)=>{
      console.log(result);
      res.json(result);
    })
})

app.get('/survey/:text', (req, res) => {
  Survey.findOne({ text: req.params.text }, (err, result) => {
    console.log(result.choices);
    res.json(result);
  })
})


app.post('/survey', (req, res)=>{
    let survey = req.body;
    // users.push(user);
    const obj = new Survey();
    obj.text = survey.text;
    obj.choices=survey.choices;
    obj.save((error, result)=> {
        res.status(201).end();
    })

  //
});

app.put('/survey',(req,res)=>{
  let s=req.body;
  const obj=new Survey();
  obj.text=s.text;
  obj.choices=s.choices;
  // console.log("bbb:"+obj.choices[2].count);
  // obj.updateOne({"text":s.text},{$set:s})
  Survey.findOneAndUpdate({text:obj.text},
    {text:obj.text,
    choices:obj.choices
  },function(err,result){
    if(err){
      res.send(err);
    }
    else{
      res.send(result)
    }
  })

})



// app.delete('/survey/:text', (req, res) => {
//   Survey.findOneAndRemove({ text: req.params.text }, (err, res) => {
//     if (err) {
//       req.flash("error", err);
//       res.end();
//     }


//     res.status(200).end();
//   });
// });
    
    // res.json(users)



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

module.exports = {
    app
};


 // MongoClient.connect(url, function(err, client) {
    //     console.log("Connected successfully to server");
    //     const db = client.db(dbName);
    //     const collection = db.collection('users');
    //     collection.insertOne(user, (error, result)=>{
    //         if(error) throw error;
    //         console.log(result);
    //         res.status(201).end();
    //     });
    //   });





















// const express = require('express')
// const cors = require('cors')
// const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
// var app = express();

// // Connection URL
// const url = 'mongodb://localhost:27017/test';

// // Database Name
// const EmployeeSchema = mongoose.Schema({
//    name:  {type: String},
//    salary: {type: Number}
// })

// const Employee = mongoose.model('Employee', EmployeeSchema)
// mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(()=>console.log('connected to mongo db'))
// app.use(bodyParser.json())

// app.get('/hello', function(req,res){
//     let name1=req.params.name;
//     Employee.find(function(err,employees){
//         if(err){
//             res.send(err)
//         }
//         res.json(employees);
//     });
//     // res.status(200).json({success: true})
// });


// app.get('/hello/:name', function(req,res){
//     let name1=req.params.name;
//     Employee.findOne({name:name1},function(err,employee){
//         if(err){
//             res.send(err)
//         }
//         res.json(employee);
//     });
//     // res.status(200).json({success: true})
// });


// app.post('/hello', (req,res)=>{
//     let employeeObj = new Employee()
//     employeeObj.name = req.body.name
//     employeeObj.salary = req.body.salary
//     employeeObj.save((err, doc)=>{
//         if(err) throw err;
//         res.status(201).json({message: 'Employee Saved into db'})
//     })
//     // console.log(req.body)
    
// })
// app.listen(3001, ()=>console.log('started on port 3001'))