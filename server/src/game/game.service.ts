import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Game } from 'src/game/game.model/game.schema';
import { createGameDto } from 'src/game/dto/create-game.dto';

@Injectable()
export class GameService {
  constructor(@InjectModel(Game.name) private readonly gameModel: Model<Game>) {}

  async getAllGames() {
    return await this.gameModel.find().exec();
  }

  async addOneCard(dto: createGameDto) {
    return await this.gameModel.create(dto);
  }
}
