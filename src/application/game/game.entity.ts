import { Tank } from './tank.entity';
import { AggregateRoot } from '@nestjs/cqrs';

export class Game extends AggregateRoot {
  tanks: Tank[];

  onMovementCreated() {
    console.log('Et ouai !');
  }
}
