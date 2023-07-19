import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "./dto";
import { UserService } from "./user.service";


@Controller("user")
export class UserController {
    constructor(private userService: UserService) { }
    @Get("/info/:id")
    info(@Param('id') id: number) {
        return this.userService.getInfo(+id)
    }

    @Get("/all")
    getAll() {
        return this.userService.getAll();
    }


    @Post("/create")
    create(@Body() dto: CreateUserDto) {
        return this.userService.createUser(dto)
    }

    @Put("/update/:id")
    update(@Param('id') id: number,
        @Body() dto: UpdateUserDto) {
        return this.userService.updateUser(+id, dto)
    }

    @Delete("/delete/:id")
    delete(@Param('id') id: number) {
        return this.userService.deleteUser(+id)
    }


}