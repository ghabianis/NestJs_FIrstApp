import {Controller, Post} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthContoller{
  constructor(private authSerivce:AuthService){}

@Post('signup')
signup(){
  return this.authSerivce.signup();
}
@Post('signin')
signin(){
    return this.authSerivce.signin();
}
  
}