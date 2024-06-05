import express from 'express';
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('Server is ready');
});


const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`Server at http://localhost:${port}`);
}
);




mongoose.connect(`mongodb://localhost:${port}/queryForm`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));