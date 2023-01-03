import mongoose from 'mongoose';
import crypto from 'crypto';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/final-project';
console.log(`connecting to ${mongoUrl}`);

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const PosterSchema = new mongoose.Schema({
  poster: {
    group: Number,
    title: String,
    color: String,
    description: String,
    img: String,
    price: Number,
    size: String
  }
});

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex')
  }
});

const ObjectID = mongoose.Schema.Types.ObjectId;

const CartSchema = new mongoose.Schema(
  {
    owner: {
      type: ObjectID,
      required: true,
      ref: 'User'
    },
    poster: [
      {
        posterId: {
          type: ObjectID,
          ref: 'Poster',
          required: true
        },

        quantity: {
          type: Number,
          required: true,
          min: 1,
          default: 1
        }
      }
    ],
    bill: {
      type: Number,
      required: true,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

export const Cart = mongoose.model('Cart', CartSchema);

export const User = mongoose.model('User', UserSchema);

export const Poster = mongoose.model('Posters', PosterSchema);
