const{Router}= require('express')
const BucketListItem= require('../../models/Bucketlist')

const router= Router()

router.get('/', async(req,res)=>{
    try{
    const bucketListItems= await BucketListItem.find()

    if(!bucketListItems) throw new Error('No bucketListItems')
    

    res.status(200).json(bucketListItems)
}
    catch(error) {
        res.status(500).json({message:error.message})
    }

})

router.post('/', async (req,res)=>{
    const newBucketListItem= new BucketListItem(req.body)
try{
    const bucketListItem= await newBucketListItem.save()
    if(!bucketListItem) throw new Error('something went wrong saving the bucketlist')
    res.status(200).json(bucketListItem)
}

catch(error){
    res.status(500).json({message:error.message})
}
})

router.put('/:id', async (req,res)=>{
const {id}=req.params

try{
    const response= await BucketListItem.findByIdAndUpdate(id, req.body)
    if(!response) throw Error('smth went wrong')

    const updated= {...response._doc, ...req.body}
    res.status(200).json(updated)
}

catch(error){
    res.status(500).json({message:error.message}) 
}
})

router.delete('/:id', async (req,res)=>{
    const {id}=req.params
try{
const removed= await BucketListItem.findByIdAndDelete(id)
if(!removed) throw Error('smth went wrong')
res.status(200).json(removed)
}

catch(error){
    res.status(500).json({message:error.message})
}
})

module.exports=router