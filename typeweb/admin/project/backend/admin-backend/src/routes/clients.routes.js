import { Router } from 'express';

import { addClient, deleteClient, getAllClients, getClientbyID, updateClient } from '../controller/client.controller.js';

const clientsrouter = Router();
clientsrouter.route('/addclient').post(addClient);
clientsrouter.route('/getallclients').get(getAllClients);
clientsrouter.route('/getclient/:id').get(getClientbyID); 
clientsrouter.route('/updateclient/:id').put(updateClient);
clientsrouter.route('/deleteclient/:id').delete(deleteClient); 

export default clientsrouter;