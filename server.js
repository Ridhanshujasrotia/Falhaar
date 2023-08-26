const express = require("express");
const cors = require("cors");
const server = express();
const bodyParser = require("body-parser");
// getting-started.js
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://jamwalpratham2017352:Pratham%40123@cluster0.tki7jb2.mongodb.net/?retryWrites=true&w=majority";

// Replace <password> with the actual password for the MongoDB user.

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

connectToDatabase();

const delivery = new mongoose.Schema({
  name: String,
  state: String,
  pincode: String,
  fulladdress: String,
  Locality: String,
  products: String,
  amount: String,
});

const user = mongoose.model("Userdelivery", delivery);

server.use(cors());
server.use(bodyParser.json());

server.post("/demo", async (req, res) => {
  let x = new user();
  x.name = req.body.name;
  x.state = req.body.state;
  x.pincode = req.body.pincode;
  x.fulladdress = req.body.fullAddress;
  x.Locality = req.body.locality;
  x.products = req.body.products;
  x.amount = req.body.amount;
  const doc = await x.save();
  /*
        const d1 = req.body
        res.json(d1);
        console.log(d1);
        */
  res.json(doc);
  //console.log(doc);
});
/*
    server.get('/demo', async(req, res) => {
        const docs = req.body;
        res.json(docs)
    })
    */
server.listen(6060, () => {
  console.log("server started");
});

const cardSchema = new mongoose.Schema({
  ID: String,
  State: String,
  District: String,
  Market: String,
  Name: String,
  Type: String,
  Date: String,
  TodayPrice: String,
  YesterdayPrice: String,
  DayBeforeYesterdayPrice: String,
  Quantity: String,
  Image: String,
});

const Card = mongoose.model("fal", cardSchema);
server.get("/demo3", async (req, res) => {
  const docs = await Card.find({});
  res.json(docs);
  // console.log(docs);
});

const f = mongoose.model("fruit", cardSchema);
server.get("/fruit", async (req, res) => {
  const docs = await f.find({});
  res.json(docs);
  // console.log(docs);
});

const v = mongoose.model("vegetable", cardSchema);
server.get("/vegetable", async (req, res) => {
  const docs = await v.find({});
  res.json(docs);
  // console.log(docs);
});
