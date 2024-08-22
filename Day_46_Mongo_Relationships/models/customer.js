const mongoose = require('mongoose');
const {Schema} = mongoose;
main().then( ()=>{
    console.log("connected to MongoDB DataBase");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo');
}

// schema
const orderSchema = new mongoose.Schema({
  item:String,
  price:Number,
});

// model
const Order =mongoose.model("Order",orderSchema);

// customer schema
const customerSchema = new mongoose.Schema({
    name:String,
    orders:[
        {
            type: Schema.Types.ObjectId,
            ref:"Order",
        }
    ]
  });
  
// customer model
const Customer =mongoose.model("customer",customerSchema);
const addcustomer = async ()=>{
    // let cust1 = new Customer({
    //     name:"neha sharma",
    // })
    // let order1 = await Order.findOne({item:"chips"});
    // let order2 = await Order.findOne({item:"chocolate"});
    
    // cust1.orders.push(order1); // note : only objectId are saved in customer orders array=> ObjectId('66c69c99ceac427b126b02ad')
    // cust1.orders.push(order2); // note : only objectId are saved in customer orders array=> ObjectId('66c69c99ceac427b126b02ae')
    // let res =await cust1.save();
    // console.log(res);  
    
    let res = await Customer.find();
    console.log(res);
}
addcustomer();



// const addOrder = async ()=>{
//     let res = await Order.insertMany([
//         {item:"samosa",price:12},
//         {item : "chips",price:25},
//         {item :"chocolate",price:40},
//     ]);
//     console.log(res);
    
// }
// addOrder();