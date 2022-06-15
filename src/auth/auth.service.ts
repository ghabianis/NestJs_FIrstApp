import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { forbidden } from "@hapi/joi";

@Injectable({})
export class AuthService{

constructor(private prismaService : PrismaService){}

    async signin(dto : AuthDto){
        //find user by email*
           const user= await this.prismaService.user.findUnique({
                where :  {
                    email : dto.email,
                },
            });
        // if user not exist throw exception 
            if (!user)
                throw new ForbiddenException('cridential are not exists');

        //compare password
            const pwmacthes  = await argon.verify(
                user.hash,
                dto.password
            )
        //if password  is not exist throw excetpion 
        if (!pwmacthes)
        throw new ForbiddenException('cridential are not exists');
        // send back the user 
        return user;
       }
    async signup(dto : AuthDto){
        // generate the password hash
           const hash = await  argon.hash(dto.password);
            try {
                // save the new user in the DB
         const user  = await this.prismaService.user.create({
            data : {
               email : dto.email,
               hash,
            },
          });
          delete user.hash;
         //return  the saved user 
         return user;
            }catch (error){
                if (error  instanceof PrismaClientKnownRequestError){
                    if(error.code =='p2002'){
                        throw new ForbiddenException(
                            "cridential Taken",
                        );
                    }
                }
                throw error;
            }
         
       }
}
