import { Router } from "express";
import * as carsCtrl from "./cars.controllers";

const router = Router();

router.get(`/cars`, carsCtrl.getCars);

router.post(`/cars`, carsCtrl.addCar);

router.put(`/cars/:id`, carsCtrl.updateCarInfo);

router.delete(`/cars/:id`, carsCtrl.deleteCar);

export default router;
