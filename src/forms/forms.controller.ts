// src/forms/forms.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { FormsService } from './forms.service';
import { CreateFormDto } from './dto/create-form.dto';
import { Form } from '../schemas/form.schema';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Post('/create-form')
  async create(@Body() createFormDto: CreateFormDto): Promise<{ name: string; description?: string; formData?: Record<string, any>; }> {
    const createdForm = await this.formsService.create(createFormDto);
    return createdForm;
  }
}
