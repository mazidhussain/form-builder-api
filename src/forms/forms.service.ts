// src/forms/forms.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form } from '../schemas/form.schema';
import { CreateFormDto } from './dto/create-form.dto';

@Injectable()
export class FormsService {
  constructor(
    @InjectModel('Form') private readonly formModel: Model<Form>,
  ) {}

  async create(createFormDto: CreateFormDto): Promise<Form> {
    const createdForm = new this.formModel(createFormDto);
    return createdForm.save();
  }

  // Other methods as needed
}
