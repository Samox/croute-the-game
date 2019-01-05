export interface MovementDto {
  actions: Action[];
}

interface Action {
  type: ActionType;
  direction: Direction;
}

enum ActionType {
  Shoot = 'shoot',
  Move = 'move',
}

enum Direction {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}
