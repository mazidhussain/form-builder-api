import { Schema, Document } from 'mongoose';

export interface Form extends Document {
  name: string;
  description: string;
  formData: Object;
}

export const FormSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  formData: { 
    type: [Schema.Types.Mixed], // Use Schema.Types.Mixed for flexibility
    default: [] // Default to an empty array
  },
});

export const Form = 'Form'; 

