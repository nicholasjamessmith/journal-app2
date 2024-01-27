//Basic server setup
//Import dependencies 'express' and types 'Request' and 'Response' from express
const express = require('express')
import { Request, Response } from 'express'
//Import .env info
require("dotenv").config()


//Create an application function
const app = express()

//Send message as a get request to '/'
app.get('/', (req: Request, res: Response) => {
  res.send("Hello, World!")
})

//Listen on PORT or port 3000
const PORT = process.env.PORT || 3000
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })
//Testing comment for TSC/JS compiler