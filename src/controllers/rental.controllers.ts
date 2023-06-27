import express from "express";
import multer from "multer";
import { User } from "../schemas/user.schema";
import { Car } from "../schemas/car.schema";
import { DropofLocaltion } from "../schemas/dropoflocaltion.schema";
import { RentalDetail } from "../schemas/rentaldetail.schema";
import { PickupLocaltion } from "../schemas/pickuplocaltion.schema";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

class RentalControllers {
  static async getFormBookCar(req: any, res: any) {
    try {
      const dataCar = await Car.findOne({ _id: req.params.id }).populate({
        path: "pickup",
        select: "pickupLocaltion_name",
      });
      const dropLocation = await DropofLocaltion.find();

      let role;
      let user;
      if (req.user) {
        if (req.user.username) {
          user = req.user;
          role = req.user.role;
        } else {
          let userInfo = await User.findOne({ _id: req.user.id });
          user = {
            id: userInfo._id,
            username: userInfo.user_name,
            role: userInfo.user_role,
          };
          role = userInfo.user_role;
        }
      }

      res.render("bookingCar", {
        car: dataCar,
        dropLocations: dropLocation,
        userState: role,
        userGreet: user,
      });
    } catch (err) {
      res.render("notfound");
    }
  }

  static async bookOrderDetail(req: any, res: any) {
    try {
      let { nameCarSelect, dropofLocation, datePickup, dateDropof } = req.body;
      const pickupDate: any = new Date(datePickup);
      const dropoffDate: any = new Date(dateDropof);
      const today: Date = new Date();
      const dataCar = await Car.findOne({ _id: req.params.id }).populate({
        path: "pickup",
        select: "pickupLocaltion_name",
      });
      // @ts-ignore
      const numberOfDays: number =
        (dropoffDate - pickupDate) / (1000 * 60 * 60 * 24);
      let totalCost = numberOfDays * dataCar.car_rentalPrice;
      const dataPickupLocation = await PickupLocaltion.findOne({
        _id: dataCar.pickup._id,
      });
      const dataDropLocation = await DropofLocaltion.findOne({
        _id: dataCar.drop._id,
      });
      let newRentalDetail = await new RentalDetail({
        datePickup: datePickup,
        dateDrop: dateDropof,
        total_cost: totalCost,
      });

      dataCar.car_availability = "unavailable";
      dataCar.car_model = nameCarSelect;
      dataDropLocation.dropofLocaltion_name = dropofLocation;

      const p1 = dataCar.save();
      const p2 = dataDropLocation.save();
      const p3 = dataPickupLocation.save();
      let [dataCars, dataDropLocations, dataPickupLocations] =
        await Promise.all([p1, p2, p3]);
      res.render("bookingOrderDetail", {
        car: dataCars,
        pickupLocation: dataPickupLocations,
        dropLocation: dataDropLocations,
        rentalDetail: newRentalDetail,
      });
    } catch (err) {
      res.render("notfound");
    }
  }
}
export default RentalControllers;
