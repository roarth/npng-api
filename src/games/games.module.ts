import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { ElasticsearchModule } from '../elasticsearch/elasticsearch.module';
import { ElasticsearchService } from '../elasticsearch/elasticsearch.service';

@Module({
  imports: [ElasticsearchModule],
  controllers: [GamesController],
  providers: [
    GamesService,
    ElasticsearchService
  ]
})
export class GamesModule {}
