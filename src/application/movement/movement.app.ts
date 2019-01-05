import { Module } from '@nestjs/common';
import { MovementController } from './movement.controller';

@Module({
  imports: [],
  controllers: [MovementController],
  providers: [],
})
export class MovementModule {}
