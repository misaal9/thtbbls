/*
* Define schema and model
*/
import mongoose from 'mongoose';

const TbItemSchema = new mongoose.Schema({
  text: String
});

const TbItemModel = mongoose.model('TbItemModel', TbItemSchema);

export default TbItemModel;
