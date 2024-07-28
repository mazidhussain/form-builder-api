// src/forms/forms.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form } from '../schemas/form.schema';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';

@Injectable()
export class FormsService {
  constructor(
    @InjectModel('Form') private readonly formModel: Model<Form>,
  ) {}

  async create(createFormDto: CreateFormDto): Promise<Form> {
    const createdForm = new this.formModel(createFormDto);
    return createdForm.save();
  }

  async update(id: string, updateFormDto: UpdateFormDto): Promise<Form> {
    return this.formModel.findByIdAndUpdate(id, updateFormDto, { new: true }).exec();
  }
  // Other methods as needed
}
