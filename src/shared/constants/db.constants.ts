import { config } from 'dotenv';
import * as process from 'process';
config();
export default {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '<PASSWORD>',
    name: process.env.DB_NAME || 'postgres',
}