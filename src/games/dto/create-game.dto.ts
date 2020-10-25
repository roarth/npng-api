import { GameType } from '../game.type.enum';
import { IsEnum, IsNumberString, IsString } from 'class-validator';

export class CreateGameDto {
  @IsString()
  date: string;

  @IsEnum(GameType)
  type: GameType;

  @IsNumberString()
  bet: number;

  @IsNumberString()
  gain: number;
}
