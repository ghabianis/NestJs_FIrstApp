import { Injectable } from "@nestjs/common";


@Injectable({})
export class AuthService{



    signin(){
        return "hello i'm signed here";
       }
    signup(){
        return "hello i'm signedup here";
       }
}
