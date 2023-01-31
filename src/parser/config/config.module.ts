import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigController } from './config.controller';
import { DatabaseModule } from '../../database/database.module';
@Module({
  controllers: [ConfigController],
  providers: [ConfigService],
  imports:[DatabaseModule]
})
export class ConfigModule {}
