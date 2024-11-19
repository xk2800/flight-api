/**
 * @author Xavier Khew &lt;xavier.khew.dev@gmail.com>
 * @file Main file running the api
 * @version 0.0.1
 */

import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'


// .env imports
const port = process.env.PORT
const mongo_uri = process.env.MONGO_URI

const app = express()

app.use(cors())

// global middleware and path logging
app.use(express.json())
app.use((req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
})


app.get('/help', (req, res) => {
  res.status(418).json({ message: 'help' });
  console.log('help me');

});

app.use('api/')


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