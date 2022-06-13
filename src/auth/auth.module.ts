import {Module} from '@nestjs/common';
import { AuthContoller } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    controllers : [AuthContoller],
    providers : [AuthService],
})

export class AuthModule{

}