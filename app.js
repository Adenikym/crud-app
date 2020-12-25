const express= require('express')
const app= express()

const PORT=3000
const mongoose=require('mongoose')
const cors=require('cors')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const bucketListItemRoutes= require('./routes/api/bucketlist')
const path=require('path')

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
mongoose.connect('mongodb+srv://maryam:admin123@clusterf.hanwe.mongodb.net/bookDB?retryWrites=true&w=majority', {useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology:true,
useFindAndModify:false})

.then(
    ()=>{
        console.log('mongodb database connected..')
    }
).catch((err)=>{
    console.log(err)
})

app.use('/api/bucketListItems', bucketListItemRoutes )

if(process.env.NODE_ENV == 'production'){
    app.use(express.static('client/dist'))
    app.get('*',(req,res)=>{
res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
    })
}

app.listen(PORT, console.log(`App listening at http://localhost:${PORT}`))