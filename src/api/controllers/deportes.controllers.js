const Deportes = require("../models/deportes.model");

const getDeportes = async (req, res) => {
  try {
    const allDeportes = await Deportes.find();
    return res.status(200).json(allDeportes);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const postDeportes = async (req, res) => {
  try {
 
    const newDeportes = new Deportes(req.body);
   
    const createdDeportes = await newDeportes.save();
    return res.status(201).json(createdDeportes);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putDeportes = async(req,res)=>{
  try {
   
    const {id} = req.params;
   
    const putDeportes = new Deportes(req.body);
 
    putDeportes._id=id
   
    const updatedDeportes = await Deportes.findByIdAndUpdate(id,putDeportes,{new:true} );
  
    if (!updatedDeportes) {
      return res.status(404).json({message:" no tenemos este deporte con ese ID"})
    }
    return res.status(200).json(updatedDeportes)

  } catch (error) {
    return res.status(500).json(error)
  }
}
const deleteDeportes= async(req,res)=>{
try {
  const {id} = req.params;
  const deleteDeportes = await Deportes.findByIdAndDelete(id);
  if (!deleteDeportes) {
    return res.status(404).json({message:"No tenemos ningún deporte con ese ID"})
  }
  return res.status(200).json(deleteDeportes)

} catch (error) {
  return res.status(500).json(error)
}
}
module.exports = { getDeportes, postDeportes, putDeportes,deleteDeportes };
