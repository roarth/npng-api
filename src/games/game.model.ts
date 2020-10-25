import { Moment } from 'moment';

export interface Game {
  type: string;
  bet: number;
  date: Moment;
  gain: number;
}
