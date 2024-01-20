const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gymSchema = new Schema({
  nombre: { type: String, required: true },
  ciudad: { type: String, required: true },
  direccion: { type: String, required: false },
  deportes:[{type: Schema.Types.ObjectId, ref: "deportes"}]
},{
    timestamps:true
});
const Gym = mongoose.model("gym", gymSchema);

module.exports = Gym;
