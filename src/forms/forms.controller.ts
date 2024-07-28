// src/forms/forms.controller.ts
import { Controller, Post, Patch, Body, Param } from '@nestjs/common';
import { FormsService } from './forms.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';  // Create this DTO
import { Form } from '../schemas/form.schema';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Post('/create-form')
  async create(@Body() createFormDto: CreateFormDto): Promise<{ name: string; description?: string; formData?: Record<string, any>; }> {
    const createdForm = await this.formsService.create(createFormDto);
    return createdForm;
  }

  @Patch('/update-form/:id')
  async update(
    @Param('id') id: string,
    @Body() updateFormDto: UpdateFormDto
  ): Promise<{ name: string; description?: string; formData?: Record<string, any>; }> {
    const updatedForm = await this.formsService.update(id, updateFormDto);
    return updatedForm;
  }
}
