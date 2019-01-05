import { ICommand } from '@nestjs/cqrs';
import { MovementDto } from '../../interfaces/movement.dto';

export class CreateMovementCommand implements ICommand {
  constructor(public readonly movementDto: MovementDto) {}
}
