import express from 'express';
import mongoose from 'mongoose';
import cards from './dbInfo.js'
import Cors from 'cors'

const app = express();

const port = process.env.PORT || 8001

const connection_url="mongodb+srv://degraft:TqCumhDUy86uQxO6@cluster0.srsuiih.mongodb.net/?retryWrites=true&w=majority"


//middlewares
app.use(express.json());

app.use(Cors());

//connect mongoose

mongoose.connect(connection_url , {
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
})


//api endpoint

app.get('/' ,(req, res) => res.status(200).send('Hello this is degraft'))
app.post('/tinder/cards',(req,res)=>{
    const dbCard=req.body;
    cards.create(dbCard, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
});

app.get('/tinder/cards',(req, res)=>{
    
    cards.find( (err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    });
});

//listener

app.listen(port , ()=> console.log(`app is running on: ${port} `))


//how to hook react with node js with axios?