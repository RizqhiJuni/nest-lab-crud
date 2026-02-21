import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  // CREATE — Membuat user baru
  create(createUserDto: CreateUserDto) {
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

  // UPDATE — Memperbarui user
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  // DELETE — Menghapus user
  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
