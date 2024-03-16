const mongoose = require('mongoose');

var OrderNewSchema = new mongoose.Schema(

    {
        Title:{
            type:String,
        },
        Author:{
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
module.exports = mongoose.models.OrderNew || mongoose.model("OrderNew", OrderNewSchema);