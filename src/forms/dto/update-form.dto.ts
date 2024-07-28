// src/forms/dto/update-form.dto.ts
import { IsOptional, IsString, IsObject } from 'class-validator';

export class UpdateFormDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsObject()
  formData?: Record<string, any>;
}
