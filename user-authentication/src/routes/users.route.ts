
import {NextFunction,Response,Request, Router} from 'express';
//get /users
//get /users/:uuuid
//post /users
//put /users/:uuid
//delete /users/:uuid
const usersRoute = Router();

usersRoute.get('/users', (req:Request, res:Response, next:NextFunction) => {
    const users = [{userName: 'Marcio'}];
    res.status(200).send(users);
})

export default usersRoute;