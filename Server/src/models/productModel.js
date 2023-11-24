const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, },
    price: { type: Number, },
    photo: { type: String, },
    color: { type: String, },
    fabricType: { type: String, },
    gender: { type: String,},
    no_of_pieces: { type: Number, },
    quantity: { type: Number, },
  },

  { collection: "productsInfo", versionKey: false }
);

const Product = mongoose.model("productsInfo", productSchema);

module.exports = Product;
