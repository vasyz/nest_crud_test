import { PartialType } from '@nestjs/swagger';
import { CreateParserDto } from './create-parser.dto';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateParserDto extends PartialType(CreateParserDto) {
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    readonly word: string;
    @ApiProperty()
    readonly status: number;
}
