import { Controller, Get, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { createGameDto } from 'src/game/dto/create-game.dto';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  async getCards() {
    return await this.gameService.getAllGames();
  }

  @Post()
  async addCard(dto: createGameDto) {
    return this.gameService.addOneCard(dto);
  }

  // @Post()
  // async _seedAllGame(dto: createGameDto[]) {

  // }
}
