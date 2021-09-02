
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const connectSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   Name: String
})

const connectModel = mongoose.model('connect', connectSchema, 'connect');
export default connectModel;
