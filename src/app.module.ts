import { Module } from '@nestjs/common';
import { GamesModule } from './games/games.module';
import { ElasticsearchModule } from './elasticsearch/elasticsearch.module';
import { EasyconfigModule } from 'nestjs-easyconfig';

@Module({
  imports: [
    EasyconfigModule.register({ path: './.env', safe: true }),
    GamesModule,
    ElasticsearchModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
