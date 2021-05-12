const {Schema, model}= require('mongoose')

const BucketListItemSchema= new Schema({
  
name:{
 type:   string,
 required:true
},
email:{
    type:   string,
    required:true
   },

   name:{
 type:   string,
 required:true
},
date:{
    type:Date,
    default:Date.now,
}
   

})

const  BucketListItem= model('BucketListItem', BucketListItemSchema)

module.exports= BucketListItem