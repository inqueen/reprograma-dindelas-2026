const express = require("express");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://danikarasawa_db_user:sVje6X2wsGuBa4iy@cluster0.d1aho1y.mongodb.net/?appName=Cluster0"
const path = require("path");
const app = express();

//MONGO ATLAS

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Conectada ao MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

//ROTAS
const index = require("./routes/index");
const empreendedoras = require("./routes/empreendedorasRoute");
const investidoras = require("./routes/investidorasRoute");
const sessionEmpreendedoras = require("./routes/sessionEmpreendedorasRoute");
const sessionInvestidoras = require("./routes/sessionInvestidorasRoute");

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", index);

//ROTA APIDOC
app.use(express.static("doc"));
app.get("/apidoc", (req, res) => {
  res.sendFile(path.join(__dirname + "/../doc/index.html"));
});

app.use("/e", empreendedoras);
app.use("/i", investidoras);
app.use("/SE", sessionEmpreendedoras);
app.use("/SI", sessionInvestidoras);

module.exports = app;
