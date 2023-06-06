import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

//configuracion dotenv
dotenv.config();

const app:Express = express();
const port: number | string = process.env.PORT  || 8000;


app.get('/', (req: Request, res:Response)=>{
    //send hello
    res.send("hola que tal como estamos");
});

app.get('/hello', (req: Request, res:Response)=>{
    //send hello
    res.send("Welcome to hello");
});

app.listen(port, () =>{
    console.log('running in port', port);
})