import mongoose from "mongoose";
import { Schema } from "mongoose";

const countrySchema = new Schema({
  name: {
    common: {
      type: String,
      required: true,
    },
    nativeName: String,
    slug: {
      type: String,
      required: true,
    },
  },
  cca3: String,
  currencies: [String],
  capital: [String],
  region: String,
  subregion: String,
  languages: [String],
  area: Number,
  population: Number,
  continents: [String],
  flags: {
    png: String,
    svg: String,
    alt: String,
  },
  borders: [
    {
      common: String,
      slug: String,
    },
  ],
});

const countryModel = mongoose.model("country", countrySchema);

export default countryModel;
