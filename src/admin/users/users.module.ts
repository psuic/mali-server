import { Module, UseGuards } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { UsersEntity } from './users.entity';
import { AuthGuard } from '../../common/guards/auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  controllers: [UsersController],
  providers: [
    UsersService,
    // { provide: APP_GUARD, useClass: AuthGuard }
  ],
})
export class UsersModule {}
