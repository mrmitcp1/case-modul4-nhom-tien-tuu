"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dropoflocaltion_schema_1 = require("../schemas/dropoflocaltion.schema");
const pickuplocaltion_schema_1 = require("../schemas/pickuplocaltion.schema");
class LocalController {
    static async createLocals(req, res) {
        try {
            const dropLocalNew = new dropoflocaltion_schema_1.DropofLocaltion({
                dropofLocaltion_name: req.body.dropOf,
            });
            const pickLocalNew = new pickuplocaltion_schema_1.PickupLocaltion({
                pickupLocaltion_name: req.body.pickUp,
            });
            const dropLocal = await dropLocalNew.save();
            const pickUp = await pickLocalNew.save();
            if (dropLocal || pickUp) {
                res.redirect('/adm/listlocals');
            }
            else {
                res.render('notfound');
            }
        }
        catch (e) {
            res.render('notfound');
        }
    }
    static async getCreateLocal(req, res) {
        await res.render('addlocals');
    }
    static async getListLocal(req, res) {
        try {
            const dropLocal = await dropoflocaltion_schema_1.DropofLocaltion.find();
            const pickLocal = await pickuplocaltion_schema_1.PickupLocaltion.find();
            res.render("listlocals", { dropLocal: dropLocal, pickLocal: pickLocal });
        }
        catch (e) {
            res.render('notfound');
        }
    }
    static async deleteLocal(req, res) {
        try {
            const dropLocal = await dropoflocaltion_schema_1.DropofLocaltion.findOne({ _id: req.params.id });
            const pickLocal = await pickuplocaltion_schema_1.PickupLocaltion.findOne({ _id: req.params.id });
            if (dropLocal) {
                await dropLocal.deleteOne({ _id: req.params.id });
                res.redirect('/adm/listlocals');
            }
            else if (pickLocal) {
                await pickLocal.deleteOne({ _id: req.params.id });
                res.redirect('/adm/listlocals');
            }
            else {
                res.render('notfound');
            }
        }
        catch (e) {
            res.render('notfound');
        }
    }
    static async getUpdateLocal(req, res) {
        try {
            const dropLocal = await dropoflocaltion_schema_1.DropofLocaltion.findOne({ _id: req.params.id });
            const pickLocal = await pickuplocaltion_schema_1.PickupLocaltion.findOne({ _id: req.params.id });
            if (dropLocal) {
                res.render('updateLocal', { local: dropLocal, name: 'drop' });
            }
            else if (pickLocal) {
                res.render('updateLocal', { local: pickLocal, name: 'pick' });
            }
            else {
                res.render('notfound');
            }
        }
        catch (e) {
            res.render('notfound');
        }
    }
    static async updateLocal(req, res) {
        try {
            if (req.body.dropofLocaltion_name) {
                const dropLocal = await dropoflocaltion_schema_1.DropofLocaltion.findOne({ _id: req.body.id });
                dropLocal.dropofLocaltion_name = req.body.dropofLocaltion_name;
                await dropLocal.save();
                res.redirect('/adm/listlocals');
            }
            else if (req.body.pickupLocaltion_name) {
                const pickLocal = await pickuplocaltion_schema_1.PickupLocaltion.findOne({ _id: req.body.id });
                pickLocal.pickupLocaltion_name = req.body.pickupLocaltion_name;
                await pickLocal.save();
                res.redirect('/adm/listlocals');
            }
            else {
                res.render('notfound');
            }
        }
        catch (e) {
            res.render('notfound');
        }
    }
}
exports.default = LocalController;
//# sourceMappingURL=local.controller.js.map