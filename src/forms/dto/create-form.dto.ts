// src/forms/dto/create-form.dto.ts
import { IsString, IsOptional } from 'class-validator';

export class CreateFormDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  formData?: Record<string, any>;
}
