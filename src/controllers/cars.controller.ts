import { Car } from "../schemas/car.schema";
import {DropofLocaltion} from "../schemas/dropoflocaltion.schema";
import {PickupLocaltion} from "../schemas/pickuplocaltion.schema";

class CarController {
  static async showAllCar(req: any, res: any) {
    const cars = await Car.find();
    res.render("carModelView", { data: cars });
  }

  static async carDetail(req: any, res: any) {
    const carId = req.params.id;
    const car = await Car.findOne({ _id: carId }).catch((err) => {
      console.log(err.message);
    });
    res.render("carDetail", { data: car });
  }

  static async showCreateForm(req: any, res: any) {
    res.render("carCreate");
  }

  static async createCar(req: any, res: any) {
    try {
      const images = [];
      let carImages = req.files;
      carImages.forEach((item) => {
        images.push(item.originalname);
      });
      const dropNew = new DropofLocaltion({
        dropofLocaltion_name : req.body.dropofLocaltion_name
      });
      const pickNew = new PickupLocaltion({
        pickupLocaltion_name : req.body.pickupLocaltion_name
      })
      const car = new Car( {
        dropOf : dropNew,
        pickUp : pickNew,
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
      const carItem= await car.save();
      const dropLocal = await dropNew.save();
      const pickLocal = await pickNew.save();
      let [dropOf,pickUp,cars]=await Promise.all([dropLocal,pickLocal,carItem])
      if (cars){
        res.redirect("/cars/list")
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  static
}

export default CarController;
