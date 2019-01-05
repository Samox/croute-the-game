import { Controller, Post, Body, Get } from '@nestjs/common';
import { MovementDto } from './interfaces/movement.dto';
import { MovementGateway } from './movement.gateway';

@Controller('/movements')
export class MovementController {
  constructor(private readonly movementGateway: MovementGateway) {}

  @Post()
  getMovement(@Body() movementDto: MovementDto) {
    console.log(movementDto);
  }

  @Get()
  doStuff() {
    this.movementGateway.sendMessage();
  }
}
