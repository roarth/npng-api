import { Module } from '@nestjs/common';
import { ElasticsearchService } from './elasticsearch.service';
import { EasyconfigModule } from 'nestjs-easyconfig';

@Module({
  imports: [
    EasyconfigModule.register({ path: './.env' }),
  ],
  providers: [ElasticsearchService],
  exports: [ElasticsearchService]
})
export class ElasticsearchModule {}
