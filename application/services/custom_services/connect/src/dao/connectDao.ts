import * as mongoose from 'mongoose';
import connectModel from '../models/connect';
import { CustomLogger } from '../config/Logger'


export class connectDao {
    private connect = connectModel;
    constructor() { }
public GpCreate(connectData, callback){
new CustomLogger().showLogger('info', 'Enter into connectDao.ts: GpCreate')
let temp = new connectModel(connectData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from connectDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}