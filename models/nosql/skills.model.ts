import mongoose, { Schema, Document } from 'mongoose';

interface ISkill extends Document {
  id: number;
  descripcion: string;
  nombre: string;
  nivel: {
    [key: string]: string;
  };
}

const skillSchema = new Schema<ISkill>({
  id: { type: Number, required: true },
  descripcion: { type: String, required: true },
  nombre: { type: String, required: true },
  nivel: { type: Object, required: true }
}, { collection: 'skills' });


const Skill = mongoose.model<ISkill>('Skill', skillSchema);

export { Skill, ISkill };