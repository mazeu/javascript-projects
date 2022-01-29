import express,{Request, Response, NextFunction} from 'express';
import usersRoute from '../routes/users.route';
import statusRoute from '../routes/status.route'
import errorHandler from '../middlewares/error-handler.middleware';

const app = express();

//Configuracao da aplicaçao
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Config de rotas
app.use(usersRoute);
app.use(statusRoute);

//Configuração do Handler de Erro
app.use(errorHandler);

app.listen(3000, ()=> {
    console.log('Aplicacao executando na porta 3000!')
})