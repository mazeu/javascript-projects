import express,{Request, Response, NextFunction} from 'express';
import usersRoute from '../routes/users.route';

const app = express();

//Configuracao da aplicaçao
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Config de rotas
app.use(usersRoute);


app.get('/status',(req: Request, res:Response, next:NextFunction)=>{
    res.status(200).send({foo:'bar'});
} );

app.listen(3000, ()=> {
    console.log('Aplicacao executando na porta 3000!')
})