import { AbilityModule } from './ability/ability.module';
import { APP_GUARD } from '@nestjs/core';
import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ResetModule } from './reset/reset.module';
import { PostModule } from './post/post.module';
import { CategoryModule } from './category/category.module';
import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';

@Module({
  imports: [
    AbilityModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
    AuthModule,
    ResetModule,
    PostModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    AppService],
})
export class AppModule { }
