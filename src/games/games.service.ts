import { Injectable, Logger } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { CreateDocumentResponse } from 'elasticsearch';
import { ElasticsearchService } from '../elasticsearch/elasticsearch.service';
import { Game } from './game.model';
import * as moment from 'moment';

@Injectable()
export class GamesService {
  private logger = new Logger('GamesService');
  constructor(
    private elasticsearchService: ElasticsearchService
  ) {
  }

  async createGame(createGameDto: CreateGameDto): Promise<CreateDocumentResponse> {
    const { date, type, bet, gain } = createGameDto;
    const game: Game = {
      date: moment(date, 'ddd DD MMM YYYY HH:mm', 'fr'),
      type: type,
      bet: bet,
      gain: gain
    };
    this.logger.verbose(`Sending new Game to ES Service, data: ${JSON.stringify(game)}`);
    return await this.elasticsearchService.create(game);
  }
}
