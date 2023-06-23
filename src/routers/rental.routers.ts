import {Router} from "express";
import RentalControllers from "../controllers/rental.controllers";

export const rentalRouters = Router();
rentalRouters.get("/book/:id", RentalControllers.getFormBookCar)
