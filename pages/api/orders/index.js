const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const Order = require('../../../models/OrderModels');

/* const OrderModel = mongoose.model('Order', Order); */

const handler = async (req, res) => {
  try {
    await mongoose.connect(
      'mongodb+srv://alazar-da:ale123@cluster0.eki1tpt.mongodb.net/bookstore?retryWrites=true&w=majority'
    );
    console.log('connected');

    if (req.method === 'POST') {
      const order = new Order(req.body);
      await order.save().then(() => {
        res.status(200).json({
          message: 'Order uploaded',
        });
      });
    } else if (req.method === 'GET') {
      const data = await Order.find();
      res.status(200).json(data);
    }
  } catch (error) {
    console.error('Error:', error); // Log the error to the console
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

export default handler;