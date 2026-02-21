import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtSecret } from './auth.module';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private usersService: UsersService) {
        super({
            // 🔍 Ambil token dari header: Authorization: Bearer <token>
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // 🔑 Gunakan secret yang sama untuk verifikasi
            secretOrKey: jwtSecret,
        });
    }

    // ✅ Method ini dipanggil SETELAH token berhasil diverifikasi
    async validate(payload: { userId: number }) {
        const user = await this.usersService.findOne(payload.userId);

        if (!user) {
            throw new UnauthorizedException();
        }

        return user; // User akan tersedia di request.user
    }
}
