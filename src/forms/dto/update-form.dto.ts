// src/forms/dto/update-form.dto.ts
import { IsOptional, IsString, IsObject } from 'class-validator';

export class UpdateFormDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsObject()
  readonly formData?: Object[];
}
