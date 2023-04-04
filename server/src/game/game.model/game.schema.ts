import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Game>;

@Schema({
  toJSON: {
    virtuals: true,
    versionKey: false,
    transform: (_, ret) => {
      delete ret._id;
    },
  },
})
export class Game {
  @Prop()
  name: string;

  @Prop()
  developer: string;

  @Prop()
  rating: number;

  @Prop()
  image: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  discountPercentage: number;

  @Prop()
  releaseDate: string;
}

export const GameSchema = SchemaFactory.createForClass(Game);
