import { z } from 'zod';

import { UserSchema } from './UserSchema';

export const defaultUserForm: z.infer<typeof UserSchema> = {
    name: '',
    email: '',
    password: '',
};
