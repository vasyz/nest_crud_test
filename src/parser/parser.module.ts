import { Module } from '@nestjs/common';
import { ParserService } from './parser.service';
import { ParserController } from './parser.controller';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from '../database/database.module';
import { ParserProviders } from './parser.providers';
@Module({
  controllers: [ParserController],
  providers: [ParserService, ...ParserProviders],
  imports: [ConfigModule, DatabaseModule ]
})
export class ParserModule {}
