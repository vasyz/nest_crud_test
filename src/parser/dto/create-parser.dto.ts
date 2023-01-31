import { ApiProperty } from '@nestjs/swagger';

export class CreateParserDto {
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    readonly word: string;
    @ApiProperty()
    readonly status: number;
}
