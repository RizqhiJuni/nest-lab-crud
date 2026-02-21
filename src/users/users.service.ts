import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

export const roundsOfHashing = 10;

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  // CREATE — Hash password sebelum simpan
  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      roundsOfHashing,
    );
    createUserDto.password = hashedPassword;

    return this.prisma.user.create({ data: createUserDto });
  }

  // READ — Mengambil semua user
  findAll() {
    return this.prisma.user.findMany();
  }

  // READ — Mengambil satu user berdasarkan ID
  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  // UPDATE — Hash password jika diubah
  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,
        roundsOfHashing,
      );
    }

    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  // DELETE — Menghapus user
  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
