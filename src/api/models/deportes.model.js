const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const deportesSchema = new Schema({
  nombre: { type: String, required: true },
  intensidad: { type: String, required: true },
  material: { type: String, required: true },
  lugar: { type: String, required: true },
},{
    timestamps:true
   
});

const Deportes = mongoose.model("deportes", deportesSchema);

module.exports = Deportes;
