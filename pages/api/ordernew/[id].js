const mongoose = require('mongoose')
mongoose.set('strictQuery',false)
const OrderNew = require('../../../models/OrderNewModels')

 const handler = async(req, res) => {
  try{
    await mongoose.connect(`mongodb+srv://alazar-da:ale123@cluster0.eki1tpt.mongodb.net/bookstore?retryWrites=true&w=majority`)
        console.log("connected")

     /* if(req.method==="GET"){
          const Book  = Books.find((Book)=>Book._id===parseInt(id));
          res.status(200).json(Book)
        } */

      if(req.method==="DELETE"){
        const { id } = req.query;
        await OrderNew.findByIdAndDelete(id); // Use { _id: id } to specify the book to delete
        res.status(200).json({ message: 'Order deleted successfully' });
        }

        }

  catch{
    res.status(500).json({
      message:"something went wrong"
    })
  }

}

export default handler;