import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient{
    constructor(){
        super({
            datasources : {
                db : {
                    url:'postgres://postgres:ANISghabiEST1234@db.jqxqpzszlabjiknpemgg.supabase.co:6543/postgres'
                }
            }
        })
    }

}
