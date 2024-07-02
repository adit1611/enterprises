const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendMail = require('./mail.js');


const app = express()

// midleware

app.use(bodyParser.json());
app.use(cors());



mongoose.connect("mongodb://localhost:27017/customer_query"
  , {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });


const db=mongoose.connection;
db.on('error',(err)=>{
     console.error("mongo connection error",err);
})
db.once('open',() => {
    console.log('mongo is conneccted');

})

const problem = new mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true},
  phone:{type:Number,required:true},
  query:{type:String,required:true}
})

const Issue = mongoose.model('Issue', problem)

app.get('/issue', async (req, res) => {
  const { name, email, phone, query } = req.body;
  
  
  // Sending back a JSON response with received data
  res.json( {name: name});
});



app.post('/issue', async(req,res) => {
  const { name, email,phone, query } = req.body;

    const newIssue = new Issue({ name, email,phone, query });

    
    try {
      await newIssue.save();
      res.status(201).send('Data saved successfully');
    } catch (error) {
      res.status(500).send('Error saving data');
    }

    const message = query;

    sendMail(email,name,phone, query, message, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: 'Failed to send email' });
      }
      console.log('Message sent: %s', info.messageId);
      res.json({ message: 'Email sent successfully', messageId: info.messageId });
    });

});





// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});