const mongoose = require('mongoose')
mongoose.set('strictQuery',false)
const Book = require('../../../models/BookModels')

 const handler = async(req, res) => {
  try{
    await mongoose.connect(`mongodb+srv://alazar-da:ale123@cluster0.eki1tpt.mongodb.net/bookstore?retryWrites=true&w=majority`)
        console.log("connected")

        if(req.method==="POST"){
          const book = new Book(req.body);
        await book.save().then(
          ()=>{
            res.status(200).json(
              {
                message:"Book uploaded"
              }
            )
          }
        )
        }
        else if(req.method==="GET"){
          const data  = await Book.find()
          res.status(200).json(data)
        }

  }
  catch{
    res.status(500).json({
      message:"something went wrong"
    })
  }

}

export default handler;