import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { GameService } from './game.service';
import { GameController } from './game.controller';
import { Game, GameSchema } from 'src/game/game.model/game.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Game.name, schema: GameSchema, collection: 'Game' }]),
  ],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
