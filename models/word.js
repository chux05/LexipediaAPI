import { Schema, model } from 'mongoose';

const exampleShema =  new Schema({
  example: String , 
  author: String
});

const wordSchema = new Schema({
  word: { type: String, required: true },
  language: { type: String, default:"pt", required: true },
  partOfSpeech: String,                       // e.g., 'substantivo'
  pronunciation: String,
  plural: String,
  definition: [String],
  synonyms: [String],
  example: [exampleShema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});


export default model('Word', wordSchema);