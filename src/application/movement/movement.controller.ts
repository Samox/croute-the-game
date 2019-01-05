import { Controller, Post, Body, Get } from '@nestjs/common';
import { MovementDto } from './interfaces/movement.dto';
import { MovementGateway } from './movement.gateway';
import { CommandBus } from '@nestjs/cqrs';
import { CreateMovementCommand } from './commands/implementations/create-movement.command';

@Controller('/movements')
export class MovementController {
  constructor(
    private readonly movementGateway: MovementGateway,
    private readonly commandBus: CommandBus,
  ) {}

  @Post()
  getMovement(@Body() movementDto: MovementDto) {
    console.log(movementDto);
    const createMovementCommand = new CreateMovementCommand(movementDto);
    this.commandBus.execute(createMovementCommand);
  }

  @Get()
  doStuff() {
    this.movementGateway.sendMessage();
  }
}
