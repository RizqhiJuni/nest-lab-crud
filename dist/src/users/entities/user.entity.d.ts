import { User } from '@prisma/client';
export declare class UserEntity implements User {
    constructor(partial: Record<string, any>);
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string | null;
    email: string;
    password: string;
}
