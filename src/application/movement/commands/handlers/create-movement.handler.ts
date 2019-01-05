import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CreateMovementCommand } from '../implementations/create-movement.command';
import { Game } from 'src/application/game/game.entity';
import { MovementCreated } from 'src/application/game/events/movement-created.event';

@CommandHandler(CreateMovementCommand)
export class CreateMovementHandler implements ICommandHandler<CreateMovementCommand> {
  constructor(private readonly publisher: EventPublisher) {}
  execute(command: CreateMovementCommand, resolve: (value?) => void) {
    const movementCreated = new MovementCreated({ movement: command.movementDto });
    let game = new Game();
    game = this.publisher.mergeObjectContext(game);
    game.autoCommit = true;
    game.apply(movementCreated);
    resolve(game);
  }
}
