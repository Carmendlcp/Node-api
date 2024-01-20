const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const deportesSchema = new Schema({
  nombre: { type: String, required: false },
  intensidad: { type: String, required: false },
  material: { type: String, required: false },
  lugar: { type: String, required: false },
},{
    timestamps:true
   
});

const Deportes = mongoose.model("deportes", deportesSchema);

module.exports = Deportes;
