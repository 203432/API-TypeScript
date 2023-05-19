import express from 'express';
import videoGameRouter from './routes/videogame.route'



let app =express()
app.use(express.json())
app.use(express.urlencoded({extended:false}));

const PORT =3000
app.get('/',(_,res) =>{
    console.log("Ping")
    res.send('Ping')
})

app.use('/api',videoGameRouter);

app.listen(PORT, () =>{
    console.log('Servidor en el puerto'+PORT)
})