// src/forms/dto/create-form.dto.ts
import { IsString, IsObject } from 'class-validator';

export class CreateFormDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsObject()
  readonly formData: Object[];
}
