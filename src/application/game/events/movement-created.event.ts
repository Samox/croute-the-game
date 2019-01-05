import { IEvent } from '@nestjs/cqrs';
import { MovementDto } from 'src/application/movement/interfaces/movement.dto';

export class MovementCreated implements IEvent {
  constructor(payload: { movement: MovementDto }) {
    this.movement = payload.movement;
  }
  movement: MovementDto;
}
