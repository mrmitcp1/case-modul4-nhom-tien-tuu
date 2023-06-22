import { Car } from "../schemas/car.schema";
import multer from "multer";

class CarController {
  static async showAllCar(req: any, res: any) {
    const cars = await Car.find();
    res.render("carModelView", { data: cars });
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
      const data = {
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
      };
      const car = new Car(data);
      await car.save();
      res.end(`Done`);
    } catch (err) {
      console.log(err.message);
    }
  }
}

export default CarController;
