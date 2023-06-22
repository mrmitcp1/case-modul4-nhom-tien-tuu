"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_schema_1 = require("../schemas/car.schema");
class CarController {
    static async showAllCar(req, res) {
        const cars = await car_schema_1.Car.find();
        res.render("carModelView", { data: cars });
    }
    static async carDetail(req, res) {
        const carId = req.params.id;
        const car = await car_schema_1.Car.findOne({ _id: carId }).catch((err) => {
            console.log(err.message);
        });
        res.render("carDetail", { data: car });
    }
    static async showCreateForm(req, res) {
        res.render("carCreate");
    }
    static async createCar(req, res) {
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
                car_des: req.body.des,
            };
            const car = new car_schema_1.Car(data);
            await car.save();
            res.end(`Done`);
        }
        catch (err) {
            console.log(err.message);
        }
    }
}
exports.default = CarController;
//# sourceMappingURL=cars.controller.js.map