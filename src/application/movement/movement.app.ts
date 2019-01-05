import { Module } from '@nestjs/common';
import { MovementController } from './movement.controller';
import { MovementGateway } from './movement.gateway';
import { CQRSModule } from '@nestjs/cqrs';

@Module({
  imports: [CQRSModule],
  controllers: [MovementController],
  providers: [MovementGateway],
})
export class MovementModule {}
