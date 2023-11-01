import { Document, Schema, model, models } from 'mongoose';

interface ITag extends Document {
  name: string;
  description: string;
  question: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdOn: Date;
}

const TagSchema = new Schema<ITag>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  question: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Question', // Assuming a reference model for questions
    },
  ],
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User', // Assuming a reference model for users who follow this tag
    },
  ],
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const Tag = models.Tag || model('Tag', TagSchema);

export default Tag;