import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller("user")
export class UserController {
    @Get("/info")
    info(@Param() data: any) {
        return data
    }

    @Post("/create")
    create(@Body() data: any) {
        return data
    }

    @Put("/update")
    update(@Body() data: any) {
        return data
    }

    @Delete("/delete")
    delete(@Param() data: any) {
        return data
    }

}