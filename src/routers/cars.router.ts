import express from "express";
import multer from "multer";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

import { Router } from "express";
import CarController from "../controllers/cars.controller";
import carsController from "../controllers/cars.controller";
const carRouter = Router();

carRouter.get("/adm/createcar", CarController.showCreateForm);
carRouter.post(
  "/adm/createcar",
  upload.array("img", 10),
  CarController.createCar
);
carRouter.get("/cars/list", CarController.showAllCar);
carRouter.get("/cars/detail/:id", CarController.carDetail);
carRouter.get('/adm/updatecar/:id',CarController.getUpdate);
carRouter.post('/adm/updatecar/:id',upload.array("img",10), CarController.updateCar);
carRouter.get("/adm/list",CarController.showAllCarForAdm)
carRouter.get('/adm/:id/delete',CarController.deleteCar)
export default carRouter;
