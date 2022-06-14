import {Body, Controller, ParseIntPipe, Post, Req} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';



@Controller('auth')
export class AuthContoller{
  constructor(private authSerivce:AuthService){}

@Post('signup')
async signup(@Body() dto: AuthDto  ){
  return this.authSerivce.signup(dto);
}
@Post('signin')
signin(@Body() dto: AuthDto ){
    return this.authSerivce.signin(dto);
}
  
}