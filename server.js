import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'


// .env imports
const port = process.env.PORT
const mongo_uri = process.env.MONGO_URI

const app = express()

app.use(cors())


// connection function
const connectToDB = async () => {
  mongoose.connect(mongo_uri)
  try {
    app.listen(port, () => {
      console.log(`API active on port ${port} & connected to DB`);
    })
  } catch (error) {
    console.error('API unable to start', error);
  }
}

connectToDB()