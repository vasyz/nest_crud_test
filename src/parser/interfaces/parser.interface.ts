import { Document } from 'mongoose';

export interface Parser extends Document  {

    readonly name: string;

    readonly word: string;

    readonly status: number;

}
