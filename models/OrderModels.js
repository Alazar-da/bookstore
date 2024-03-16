const mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema(

    {
        Title:{
            type:String,
        },
        Price:{
            type:String,
        },
        UserName:{
            type:String,
        },
        PhoneNumber:{
            type:String,
        },
        Date:{
            type:String,
        },
        Type:{
            type:String,
        },
        Location:{
            type:String,
        },
    },
    {
        timestamps:true
    }
)

/* export default mongoose.model('Book',BookSchema); */
module.exports = mongoose.models.Order || mongoose.model("Order", OrderSchema);