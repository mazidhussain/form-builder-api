// src/schemas/form.schema.ts
import { Schema, Document } from 'mongoose';

export interface Form extends Document {
  name: string;
  description?: string;
  formData?: Record<string, any>;
}

export const FormSchema = new Schema<Form>({
  name: {
    type: String,
    required: true,  // Ensure 'name' is required
  },
  description: {
    type: String,
    required: false, // 'description' is optional
  },
  formData: {
    type: Schema.Types.Mixed,
    required: false, // 'formData' is optional
  },
});
