const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 3300;

// MIddleware configuration
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_NAMEUSER}:${process.env.DB_PASSCODE}@cluster0.7dbji.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const coffeCollection = client.db("coffeDB").collection("coffe");
    const userCollection = client.db("coffeDB").collection("user");

    app.get("/", (req, res) => {
      res.send("hello");
    });

    app.get("/coffee", async (req, res) => {
      const find = coffeCollection.find();
      const result = await find.toArray();
      res.send(result);
    });

    app.get("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeCollection.findOne(query);
      res.send(result);
    });

    app.post("/add-coffee", async (req, res) => {
      const newCoffee = req.body;
      const result = await coffeCollection.insertOne(newCoffee);
      res.send(result);
    });

    app.put("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateCoffee = req.body;
      const newCoffeeData = {
        $set: {
          name: updateCoffee.name,
          chef: updateCoffee.chef,
          supplier: updateCoffee.supplier,
          taste: updateCoffee.taste,
          category: updateCoffee.category,
          details: updateCoffee.details,
          photoUrl: updateCoffee.photoUrl,
        },
      };
      const result = await coffeCollection.updateOne(
        filter,
        newCoffeeData,
        options
      );
      res.send(result);
    });

    app.delete("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeCollection.deleteOne(query);
      res.send(result);
    });

    app.get("/users", async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const newUser = req.body;
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`App Running on port ${port}`);
});
