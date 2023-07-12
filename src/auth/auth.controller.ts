import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Post("/signup")
    signup(@Body() data: any) {
        return data
    }

    @Post("/signin")
    signin(@Body() data: any) {
        return data
    }
}
