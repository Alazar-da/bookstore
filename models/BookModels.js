const mongoose = require('mongoose');

var BookSchema = new mongoose.Schema(

    {
        Title:{
            type:String,
        },
        Author:{
            type:String,
        },
        Edition:{
            type:String,
        },
        Price:{
            type:String,
        },
        Status:{
            type:String,
        },
        Overview:{
            type:String,
        },
        Type:{
            type:String,
        },
        Genere:{
            type:String,
        },
    },
    {
        timestamps:true
    }
)

/* export default mongoose.model('Book',BookSchema); */
module.exports = mongoose.models.Book || mongoose.model("Book", BookSchema);