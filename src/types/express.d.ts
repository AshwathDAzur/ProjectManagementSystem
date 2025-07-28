// express.d.ts (or src/types/express.d.ts)

import { user } from '@prisma/client';

declare global {
  namespace Express {
    interface Request {
      user: user;
    }
  }
}
