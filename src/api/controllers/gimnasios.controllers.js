const Gym = require("../models/gimnasios.model");

const getGym = async (req, res) => {
  try {
    const allGym = await Gym.find().populate("ejercicios", "ciudad");

    return res.status(200).json(allGym);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const postGym = async (req, res) => {
  try {
    const newGym = new Gym(req.body);
    const createdGym = await newGym.save();
    return res.status(201).json(createdGym);
  } catch (error) {
    return res.status(500).json(error);
  }
};


module.exports = { getGym, postGym};
