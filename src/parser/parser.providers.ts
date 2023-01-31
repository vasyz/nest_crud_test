import { Mongoose } from 'mongoose';
import { ParserSchema } from './schemas/parser.schema';

export const ParserProviders = [
    {
        provide: 'PARSER_MODEL',
        useFactory: (mongoose: Mongoose) => mongoose.model('Parser', ParserSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
