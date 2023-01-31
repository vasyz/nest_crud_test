import { Injectable , Inject} from '@nestjs/common';
import { CreateParserDto } from './dto/create-parser.dto';
import { UpdateParserDto } from './dto/update-parser.dto';
import { Model } from 'mongoose';
import { Parser } from './interfaces/parser.interface';
@Injectable()
export class ParserService {
  constructor(@Inject('PARSER_MODEL') private readonly parserModel: Model<Parser>) {}

  async create(CreateParserDto: CreateParserDto): Promise<Parser> {
    const createdParser = this.parserModel.create(CreateParserDto);
    return createdParser;
  }

  async findAll(): Promise<Parser[]> {
    return this.parserModel.find().exec();
  }

  async findOne(id: string) {
    return `This action returns a #${id} parser`;
  }

  async  update(id: string, updateParserDto: UpdateParserDto) {
    return `This action updates a #${id} parser`;
  }

  async  remove(id: string) {
    return `This action removes a #${id} parser`;
  }
}
