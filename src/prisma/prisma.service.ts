import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient{
    constructor(){
        super({
            datasources : {
                db : {
                    url:'postgresql://admin:admin@localhost:5432/nestjs?schema=public'
                }
            }
        })
    }

}
