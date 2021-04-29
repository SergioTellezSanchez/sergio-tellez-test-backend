import { RequestHandler } from "express";
import Cars from "./Cars";

export const getCars: RequestHandler = async (req, res) => {
  try {
    const cars = await Cars.find();
    return res.json(cars);
  } catch (e) {
    console.log(e);
  }
};

export const addCar: RequestHandler = async (req, res) => {
  const carFound = await Cars.findOne({ id: req.body.id });
  if (carFound)
    return res.status(301).json({ message: "This car already exist" });
  const newCar = new Cars(req.body);
  const savedCar = await newCar.save();
  res.json(savedCar);
};

export const updateCarInfo: RequestHandler = async (req, res) => {
  const carUpdated = await Cars.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!carUpdated) return res.status(204).json();
  res.json(carUpdated);
};

export const deleteCar: RequestHandler = async (req, res) => {
  const carFound = await Cars.findByIdAndDelete(req.params.id);
  if (!carFound) return res.status(204).json();
  res.json(carFound);
};
