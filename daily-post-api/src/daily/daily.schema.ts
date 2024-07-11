
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<Daily>;

@Schema()
export class Daily {
  @Prop()
  userId: string;

  @Prop()
  done: string;

  @Prop()
  todo: string;

  @Prop()
  issues: string;

  @Prop()
  date: Date;
}

export const DailySchema = SchemaFactory.createForClass(Daily);