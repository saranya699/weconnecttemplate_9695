import { Request, Response } from 'express';
import { connectService } from '../service/connectService';
import { CustomLogger } from '../config/Logger'
let connect = new connectService();

export class connectController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
connect.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into connectController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from connectController.ts: GpCreate');
    })}


}