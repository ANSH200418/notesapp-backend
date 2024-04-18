const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      // required: [true, "Note must have Title"],
      maxlength: [100, "Title must not greater than 100 characters"],
    },
    content: {
      type: String,
      trim: true,
      required: [true, "Note must have Content"],
      maxlength: [1000, "Title must not greater than 1000 characters"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
