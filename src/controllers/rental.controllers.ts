import express from "express";
import multer from "multer";
import {Car} from "../schemas/car.schema";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });

class RentalControllers {
    static async getFormBookCar (req:any, res:any){
        const dataCar = await Car.findOne({_id:req.params.id}).populate({
            path: "pickup", select:"pickupLocaltion_name"
        });
        console.log(dataCar)
        res.render("bookCar",{car:dataCar})
    }
    static async filterSuitableCar (req:any, res:any){

    }
}

export default RentalControllers;
