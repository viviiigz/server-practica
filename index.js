//vamos a necesitar tres herramientas principales
import express from 'express'; //ESTRUCTURA PRINCIPAL para organizar el evento
import cors from 'cors';//Este hace que OTRA GENTE DE OTROS LUEGARES puedan venir a ver nuestr evento sin problemas o "entrada libre ahr"
import morgan from 'morgan';//Registro de seguridad del evento, cada vez que laguien entre o pida algo, Morgan va a anitar en nuestra lina quien fue, con esto se lleva un control

//iniciaizamos
const app = express(); //APP pone en marcha la organizacion del evento
const PORT = 3000; // y lo vas a realizar en el puerto 4000

//middlewares
//En Express, los middlewares son como "ayudantes" o "interceptores" que se ejecutan 
//antes de que tus rutas principales (app.get('/'), app.get('/api/characters'), etc.)
//manejen una petición.
//router
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//¡Si solo me dicen '/', dales este mensaje
app.get('/',(req,res)=> {
    res.json({
        ok:true,
        message:'server running',
    });
})
//listen
app.listen(PORT,()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
//