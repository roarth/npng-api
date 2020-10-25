import { HttpException, Injectable, Logger } from '@nestjs/common';
import * as elasticsearch from 'elasticsearch';
import { v4 as uuidv4 } from 'uuid';
import { CreateGameDto } from '../games/dto/create-game.dto';
import { Game } from '../games/game.model';

@Injectable()
export class ElasticsearchService {
  private readonly esclient: elasticsearch.Client;
  private logger = new Logger('ElasticService');

  constructor( ) {
    this.esclient = new elasticsearch.Client({
      host: process.env.ELASTIC_URL
    });
    this.esclient.ping({requestTimeout: 3000})
      .catch(error => {
        this.logger.error('Unable to reach Elasticsearch endpoint', error.stack);
        throw new HttpException({
          status: 'error',
          message: 'Unable to reach Elasticsearch cluster'
        }, 500)
      })
  }

  async create(game: Game) {
    return await this.esclient.create({
      index: process.env.ELASTIC_INDEX_NAME,
      type: 'games',
      id: uuidv4(),
      body: game
    })
  }
}
