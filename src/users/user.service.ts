import { Injectable } from "@nestjs/common";
import { myLogger } from "src/logger";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto, UpdateUserDto } from "./dto";

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) { }

    async getInfo(id: number) {
        try {

            return await this.prisma.user.findUnique({
                where: {
                    id
                }
            });

        } catch (error) {
            myLogger.error({ error });
            console.error({ error })
        }
    }

    async getAll() {
        try {
            return await this.prisma.user.findMany();
        } catch (error) {
            myLogger.error({ error });
            console.error({ error })
        }
    }

    async createUser(dto: CreateUserDto) {
        try {
            return await this.prisma.user.create({
                data: dto
            });

        } catch (error) {
            myLogger.error({ error });
            console.error({ error })
        }
    }

    async updateUser(id: number, dto: UpdateUserDto) {
        try {
            return await this.prisma.user.update({
                where: {
                    id
                },
                data: dto
            });
        } catch (error) {
            myLogger.error({ error });
            console.error({ error })
        }
    }

    async deleteUser(id: number) {
        try {
            return await this.prisma.user.delete({
                where: {
                    id
                }
            })
        } catch (error) {
            myLogger.error({ error });
            console.error({ error })
        }
    }
}