import { Schema, model } from 'mongoose';

const wordOfTheDaySchema =  new Schema({
    wordId:  Schema.Types.ObjectId,  
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  }, { collection: 'wordOfTheDay' });

  export default model('wordOfTheDay', wordOfTheDaySchema);