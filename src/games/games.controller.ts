import { Body, Controller, Logger, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';

@Controller('games')
export class GamesController {
  private logger = new Logger('GamesController');

  constructor(
    private gameService: GamesService
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async creatGame(
    @Body() createGameDto: CreateGameDto
  ) {
    return this.gameService.createGame(createGameDto);
  }
}
