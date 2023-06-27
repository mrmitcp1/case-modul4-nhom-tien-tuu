import {Router} from "express";
import RentalControllers from "../controllers/rental.controllers";

export const rentalRouters = Router();
rentalRouters.get("/booking/:id", RentalControllers.getFormBookCar)
rentalRouters.post("/booking/:id", RentalControllers.bookOrderDetail)
