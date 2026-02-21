import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    create(createArticleDto: CreateArticleDto): import(".prisma/client").Prisma.Prisma__ArticleClient<{
        id: number;
        title: string;
        description: string | null;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        description: string | null;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findDrafts(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        description: string | null;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        title: string;
        description: string | null;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateArticleDto: UpdateArticleDto): import(".prisma/client").Prisma.Prisma__ArticleClient<{
        id: number;
        title: string;
        description: string | null;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ArticleClient<{
        id: number;
        title: string;
        description: string | null;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
