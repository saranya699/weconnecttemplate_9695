import { Request, Response } from 'express';
import {connectDao} from '../dao/connectDao';
import { CustomLogger } from '../config/Logger'
let connect = new connectDao();

export class connectService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into connectService.ts: GpCreate')
     const  connectData = req.body;
     connect.GpCreate(connectData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from connectService.ts: GpCreate')
         callback(response);
         });
    }


}