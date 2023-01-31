import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<typeof mongoose> =>
            await mongoose.connect('mongodb+srv://user_dim:6JQX7WvtIOAiz4QV@cluster0.hdolw7t.mongodb.net/?retryWrites=true&w=majority'),
    },
];
