import { Controller, Post, Body } from '@nestjs/common';
import { MovementDto } from './interface/movement.dto';

@Controller('/movements')
export class MovementController {
  @Post()
  getMovement(@Body() movementDto: MovementDto) {
    console.log(movementDto);
  }
}
