import { Car } from "../schemas/car.schema";
import { DropofLocaltion } from "../schemas/dropoflocaltion.schema";
import { PickupLocaltion } from "../schemas/pickuplocaltion.schema";
import e from "express";
import { User } from "../schemas/user.schema";

class CarController {
  static async showAllCar(req: any, res: any) {
    let cars = [];
    if (req.body.brand) {
      let car_brand = req.body.brand;
      let carArr = await Car.find({ car_brand });
      cars = [...carArr];
    } else if (req.body.seat) {
      let car_seat = req.body.seat;
      let seatArr = await Car.find({ car_seat });
      cars = [...seatArr];
    } else if (req.body.gear) {
      let car_gear = req.body.gear;
      let gearArray = await Car.find({ car_gear });
      cars = [...gearArray];
    } else {
      cars = await Car.find();
    }
    let carBrand = await CarController.getSearchCarByBrand(req, res);
    let carSeat = await CarController.getSearchCarBySeat(req, res);
    let carGear = await CarController.getSearchCarByGear(req, res);

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

    res.render("carModelView", {
      data: cars,
      brandArray: carBrand,
      seatArray: carSeat,
      gearArray: carGear,
      userState: role,
      userGreet: user,
    });
  }

  static async carDetail(req: any, res: any) {
    const carId = req.params.id;
    const car = await Car.findById({ _id: req.params.id }).populate(
      "car_comment.postedBy"
    );

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

    res.render("carDetail", { data: car, userState: role, userGreet: user });
  }

  static async carComment(req: any, res: any) {
    if (req.isAuthenticated()) {
      const user = await User.findOne({ _id: req.user.id });
      let comment = req.body;
      comment.postedBy = user;
      res.redirect(`/cars/detail/${req.params.id}`);
      const car = await Car.findByIdAndUpdate(
        { _id: req.params.id },
        { $push: { car_comment: comment } },
        { new: true }
      );
    } else {
      res.redirect("/login");
    }
  }

  static async showCreateForm(req: any, res: any) {
    try {
      const dropLocal = await DropofLocaltion.find();
      const pickLocal = await PickupLocaltion.find();
      res.render("admin/admcarCreate", {
        dropLocal: dropLocal,
        pickLocal: pickLocal,
      });
    } catch (e) {
      res.render("notfound");
    }
  }
  static async createCar(req: any, res: any) {
    try {
      const images = [];
      let carImages = req.files;
      carImages.forEach((item) => {
        images.push(item.originalname);
      });
      const dropNew = new DropofLocaltion({
        dropofLocaltion_name: req.body.dropofLocaltion_name,
      });
      const pickNew = new PickupLocaltion({
        pickupLocaltion_name: req.body.pickupLocaltion_name,
      });
      const car = new Car({
        drop: dropNew,
        pickup: pickNew,
        car_brand: req.body.brand,
        car_model: req.body.model,
        car_type: req.body.type,
        car_gear: req.body.gear,
        car_licensePlate: req.body.licensePlate,
        car_year: req.body.year,
        car_color: req.body.color,
        car_rentalPrice: req.body.rentalPrice,
        car_availability: req.body.availability,
        car_img: images,
        car_seat: req.body.seat,
        car_des: req.body.des,
      });
      const carItem = await car.save();
      const dropLocal = await dropNew.save();
      const pickLocal = await pickNew.save();
      let [drop, pickup, cars] = await Promise.all([
        dropLocal,
        pickLocal,
        carItem,
      ]);
      if (cars) {
        res.redirect("/adm/list");
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  static async getUpdate(req, res) {
    try {
      const car = await Car.findOne({ _id: req.params.id });
      if (car) {
        res.render("admin/admcarUpdate", { car: car });
      } else {
        res.render("notfound");
      }
    } catch (e) {
      res.render("notfound");
    }
  }

  static async updateCar(req, res) {
    try {
      const car = await Car.findOne({ _id: req.params.id });
      console.log(req.files);
      if (req.files.length !== 0) {
        let images = [];
        let carImages = req.files;
        carImages.forEach((item) => {
          images.push(item.originalname);
        });
        car.car_img = [...images];
      }
      car.drop = req.body.drop;
      car.pickup = req.body.pickUp;
      car.car_brand = req.body.brand;
      car.car_model = req.body.model;
      car.car_type = req.body.type;
      car.car_gear = req.body.gear;
      car.car_licensePlate = req.body.licensePlate;
      car.car_year = req.body.year;
      car.car_color = req.body.color;
      car.car_rentalPrice = req.body.rentalPrice;
      car.car_availability = req.body.availability;
      car.car_seat = req.body.seat;
      car.car_des = req.body.des;
      await car.save();
      if (car) {
        res.redirect("/adm/list");
      } else {
        res.render("notfound");
      }
    } catch (e) {
      console.log(e.message);
      res.render("notfound");
    }
  }

  static async showAllCarForAdm(req: any, res: any) {
    const cars = await Car.find();
    res.render("admin/admCarList", { data: cars });
  }

  static async deleteCar(req, res) {
    try {
      const car = await Car.findOne({ _id: req.params.id });
      if (car) {
        await car.deleteOne({ _id: req.params.id });
        res.redirect("/adm/list");
      } else {
        res.render("notfound");
      }
    } catch (e) {
      res.render("notfound");
    }
  }

  static async showCarForAdm(req, res) {
    try {
      let limit: number;
      const allCar = await Car.find();
      let currentPage = req.query.page ? +req.query.page : 1;
      if (!req.query.limit) {
        limit = 3;
      } else {
        limit = parseInt(req.query.limit);
      }
      let totalPages = Math.ceil(allCar.length / limit);
      let offset = (currentPage - 1) * limit;
      let cars = await Car.find().limit(limit).skip(offset);
      res.render("admin/admCarList", {
        totalPages: totalPages,
        currentPage: currentPage,
        data: cars,
      });
    } catch (e) {
      console.log(e.message);
      res.render("notfound");
    }
  }

  static async getSearchCarByBrand(req, res) {
    let cars = await Car.find();
    let brand = [];
    cars.forEach((item) => {
      brand.push(item.car_brand);
    });
    return [...new Set(brand)];
  }

  static async getSearchCarBySeat(req, res) {
    let cars = await Car.find();
    let seat = [];
    cars.forEach((item) => {
      seat.push(item.car_seat);
    });
    return [...new Set(seat)];
  }

  static async getSearchCarByGear(req, res) {
    let cars = await Car.find();
    let gear = [];
    cars.forEach((item) => {
      gear.push(item.car_gear);
    });
    return [...new Set(gear)];
  }

  static async searchCar(req, res) {
    let car_brand = req.body.search;
    let car = await Car.find({ car_brand });
    res.render();
  }
}

export default CarController;
