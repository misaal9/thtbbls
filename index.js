import express from 'express';
import bodyParser from 'body-parser';
import TbItemModel from './model/TbItemModel';
import dbConnectPromise from './db/connect';

const app = express();

app.set('port', (process.env.port || 3000));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// fetch all saved posts
app.get("/api/tb/all", (req, res) => {
  TbItemModel.find().then((val)=>{
    res.send(val);
  });
});

// add new post
app.post("/api/tb/add/", (req, res) => {
  const newThought = req.body.text || '';
  if (!newThought) {
    res.send('Enter text to be added');
  }
  const newTbItem = new TbItemModel({
    text: newThought
  });

  newTbItem.save().then((data)=>{
    console.log('new item saved');
    res.send(data);
  }).catch(err=>console.log(err));
});

app.listen(app.get('port'), () => {
  console.log('listening to port 3000');
});
