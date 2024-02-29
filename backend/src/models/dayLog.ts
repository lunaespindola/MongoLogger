import mongoose, { Document, Schema } from 'mongoose';

export interface IDayLog extends Document {
  date: Date;
  userId: string;
  mood: number;
  note: string;
}

const DayLogSchema: Schema = new Schema({
  date: { type: Date, required: true },
  userId: { type: String, required: true },
  mood: { type: Number, required: true },
  note: { type: String, required: false },
});

export default mongoose.model<IDayLog>('DayLog', DayLogSchema);

