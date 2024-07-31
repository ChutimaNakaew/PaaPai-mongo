const mongodb = require("mongodb")
const { MongoClient } = require("mongodb")
const uri = "mongodb+srv://tourdb:1234@cluster0.tvfr6n3.mongodb.net/PaaPai"
const db = new MongoClient(uri)


async function loadAdminCollection() {
  const client = await mongodb.MongoClient.connect(uri, {
    useNewUrlParser: true,
  })

  return client.db("PaaPai").collection("admin")
}

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(uri, {
    useNewUrlParser: true,
  })

  return client.db("PaaPai").collection("myTour")
}

async function loadUserCollection() {
  const client = await mongodb.MongoClient.connect(uri, {
    useNewUrlParser: true,
  })

  return client.db("PaaPai").collection("myUser")
}

async function loadPaymentCollection() {
  const client = await mongodb.MongoClient.connect(uri, {
    useNewUrlParser: true,
  })

  return client.db("PaaPai").collection("payment")
}

exports.loadAdminCollection = loadAdminCollection
exports.loadPostsCollection = loadPostsCollection
exports.loadUserCollection = loadUserCollection
exports.loadPaymentCollection = loadPaymentCollection

exports.db = db
