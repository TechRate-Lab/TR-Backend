import * as dotenv from 'dotenv'
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });
export const env = process.env.NODE_ENV || 'development'
export const secret = process.env.SECRET

if (env === 'production') {
    dotenv.config({ path: path.join(__dirname, '../../.env') });
  } else {
    dotenv.config({ path: path.join(__dirname, '../../.env.dev') });
  }

  
export const port = process.env.PORT || 3000
