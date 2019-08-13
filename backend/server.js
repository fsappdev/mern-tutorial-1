const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()//app seria nuestro servidor de express

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex : true})//se conecta a la bd
const connection = mongoose.connection//se "instancia" una conexion

connection.once('open', () => {console.log("mongodb BD conectada exitosamente")})
//se conecta y luego se manda por consola un mensaje de conectado exitosamente

const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

app.listen(port, () => {console.log(`servidor corriendo en puerto ${port}`)})
//esa funcion abre el puerto de "escucha"



