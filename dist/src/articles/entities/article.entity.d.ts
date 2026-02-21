import { Article } from '@prisma/client';
import { UserEntity } from 'src/users/entities/user.entity';
export declare class ArticleEntity implements Article {
    constructor(partial: Record<string, any>);
    id: number;
    title: string;
    description: string | null;
    body: string;
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
    authorId: number | null;
    author?: UserEntity;
}
