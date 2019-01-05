import { Module } from '@nestjs/common';
import { MovementController } from './movement.controller';
import { MovementGateway } from './movement.gateway';

@Module({
  imports: [],
  controllers: [MovementController],
  providers: [MovementGateway],
})
export class MovementModule {}
