import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://Griz-rss-gameCard:Griz-rss-gameCard@cluster0.2mffwm9.mongodb.net/GameCard?retryWrites=true&w=majority'
    ),
    GameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// [
//   {
//     "name": "The Elder Scrolls V: Skyrim",
//     "developer": "Bethesda Game Studios",
//     "rating": 4.9,
//     "image":
//       "https://cdn1.epicgames.com/offer/c8738a4d1ead40368eab9688b3c7d737/EGS_SkyrimSpecialEdition_BethesdaGameStudios_S2_1200x1600-ae5d13f6510e81460fe80aa1ca19cf4c?h=480&quality=medium&resize=1&w=360",
//     "description":
//       "Winner of more than 200 Game of the Year Awards, The Elder Scrolls V: Skyrim Special Edition includes the full base game and all its add-on expansions, plus modern enhancements like remastered art and visual effects, volumetric god rays and more",
//     "price": 39.99,
//     "discountPercentage": 67,
//     "releaseDate": "11/11/11"
//   },
//   {
//     "name": "theHunter: Call of the Wild™",
//     "developer": "Expansive Worlds",
//     "rating": 4.6,
//     "image":
//       "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_theHunterCalloftheWild_ExpansiveWorlds_S2_1200x1600-1e9b46aaabc33fe0a08cf5b418e76ba2?h=480&quality=medium&resize=1&w=360",
//     "description":
//       "Experience an atmospheric hunting game like no other in this realistic and visually breathtaking open world. Immerse yourself in the atmospheric single player campaign, or share the ultimate hunting experience with friends.",
//     "price": 19.99,
//     "discountPercentage": 75,
//     "releaseDate": "02/16/17"
//   },
//   {
//     "name": "Red Dead Redemption 2",
//     "developer": "Rockstar Games",
//     "rating": 4.9,
//     "image":
//       "https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg?h=480&quality=medium&resize=1&w=360",
//     "description":
//       "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age.",
//     "price": 59.99,
//     "discountPercentage": 0,
//     "releaseDate": "11/05/19"
//   },
//   {
//     "name": "STAR WARS Jedi: Fallen Order",
//     "developer": "Respawn Entertainment",
//     "rating": 4.6,
//     "image":
//       "https://cdn1.epicgames.com/undefined/offer/SWJFO_ADHOC_510X680-510x680-04ec2ab0afa8b571f51c34577bf1ec09.jpg?h=480&quality=medium&resize=1&w=360",
//     "description":
//       "A galaxy-spanning adventure awaits in STAR WARS Jedi: Fallen Order, a new 3rd person action-adventure title from Respawn Entertainment.",
//     "price": 39.99,
//     "discountPercentage": 90,
//     "releaseDate": "11/14/19"
//   },
//   {
//     "name": "Pathfinder: Wrath of the Righteous",
//     "developer": "Owlcat Games",
//     "rating": 4.8,
//     "image":
//       "https://cdn1.epicgames.com/offer/975d251af0384c88a898a996bda4881d/EGS_PathfinderWrathoftheRighteousEnhancedEdition_OwlcatGames_S2_1200x1600-fc0129430d25f46c7faa5b4167488ca1?h=480&quality=medium&resize=1&w=360",
//     "description":
//       "Embark on a journey to a realm overrun by demons in a new epic RPG from the creators of Pathfinder: Kingmaker. Explore the nature of good and evil, learn the true cost of power, and rise as a Mythic Hero capable of deeds beyond mortal expectations.",
//     "price": 49.99,
//     "discountPercentage": 0,
//     "releaseDate": "09/02/21"
//   },
//   {
//     "name": "Dead Space",
//     "developer": "Motive Studio",
//     "rating": 4.7,
//     "image":
//       "https://cdn1.epicgames.com/offer/4ec958d5e4b6429aadbc116cee0b6ea0/EGS_DeadSpace_MotiveStudio_S2_1200x1600-551c16d068cab45b02149e15a43c2413?h=480&quality=medium&resize=1&w=360",
//     "description":
//       "Isaac Clarke is an everyman engineer on a mission to repair the USG Ishimura, only to discover the ship`s crew has been slaughtered and his beloved partner, Nicole, is lost somewhere on board.",
//     "price": 59.99,
//     "discountPercentage": 15,
//     "releaseDate": "01/27/23"
//   },
//   {
//     "name": "The Outer Worlds",
//     "developer": "Obsidian Entertainment",
//     "rating": 4.8,
//     "image":
//       "https://cdn1.epicgames.com/offer/dc61166eea95474e912953b163791d42/EGS_TheOuterWorldsSpacersChoiceEdition_ObsidianEntertainment_S2_1200x1600-24b156886564b75bf9aa823a0a0eb18e?h=480&quality=medium&resize=1&w=360",
//     "description":
//       "The Outer Worlds: Spacer’s Choice Edition is the ultimate way to play the award-winning RPG from Obsidian Entertainment and Private Division.",
//     "price": 47.99,
//     "discountPercentage": 20,
//     "releaseDate": "03/07/23"
//   }
// ]
