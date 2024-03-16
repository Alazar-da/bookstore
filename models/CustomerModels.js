const mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema(

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
        UserName:{
            type:String,
        },
        PhoneNumber:{
            type:String,
        },
    },
    {
        timestamps:true
    }
)

/* export default mongoose.model('Book',BookSchema); */
module.exports = mongoose.models.Customer || mongoose.model("Customer", CustomerSchema);