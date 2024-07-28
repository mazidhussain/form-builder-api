import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseConfig } from './mongoose.config';
import { FormsModule } from './forms/forms.module';

@Module({
  imports: [
    MongooseModule.forRoot(mongooseConfig.uri),
    FormsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
