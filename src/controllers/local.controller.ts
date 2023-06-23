import {DropofLocaltion} from "../schemas/dropoflocaltion.schema";
import { PickupLocaltion} from "../schemas/pickuplocaltion.schema";

class LocalController {
    static async createLocals(req,res){
        try {
            const dropLocalNew = new DropofLocaltion({
                dropofLocaltion_name : req.body.dropOf,
            });
            const pickLocalNew = new PickupLocaltion({
                pickupLocaltion_name :  req.body.pickUp,
            });
            const dropLocal = await dropLocalNew.save();
            const pickUp = await pickLocalNew.save();
            if (dropLocal || pickUp){
                res.redirect('/adm/listlocals')
            }else {
                res.render('notfound')
            }
        }catch (e){
            res.render('notfound')
        }
    }

    static async getCreateLocal(req,res){
        await res.render('admaddlocals')
    }

    static async getListLocal(req,res){
        try {
            const dropLocal = await DropofLocaltion.find();
            const pickLocal = await PickupLocaltion.find();
            res.render("listlocals",{dropLocal:dropLocal,pickLocal:pickLocal})
        }catch (e){
            res.render('notfound')
        }
    }

    static async deleteLocal(req,res){
        try {
            const dropLocal = await DropofLocaltion.findOne({_id : req.params.id})
            const pickLocal = await PickupLocaltion.findOne({_id : req.params.id})
            if (dropLocal){
                await dropLocal.deleteOne({_id : req.params.id})
                res.redirect('/adm/listlocals')
            }else if (pickLocal) {
                await pickLocal.deleteOne({_id : req.params.id})
                res.redirect('/adm/listlocals')
            }else {
                res.render('notfound')
            }
        }catch (e){
            res.render('notfound')
        }
    }

    static async getUpdateLocal(req,res){
        try {
            const dropLocal = await DropofLocaltion.findOne({_id: req.params.id})
            const pickLocal = await PickupLocaltion.findOne({_id: req.params.id})
            if (dropLocal){
                res.render('updateLocal',{local:dropLocal, name:'drop'})
            }else if(pickLocal) {
                res.render('updateLocal',{local:pickLocal, name: 'pick'})
            }else {
                res.render('notfound')
            }
        } catch (e){
            res.render('notfound')
        }
    }

    static async updateLocal(req,res){
        try {
            if (req.body.dropofLocaltion_name){
            const dropLocal = await DropofLocaltion.findOne({_id:req.body.id})
            dropLocal.dropofLocaltion_name = req.body.dropofLocaltion_name;
            await dropLocal.save();
            res.redirect('/adm/listlocals')
            }else if (req.body.pickupLocaltion_name){
                const pickLocal = await PickupLocaltion.findOne({_id:req.body.id})
                pickLocal.pickupLocaltion_name = req.body.pickupLocaltion_name;
                await pickLocal.save();
                res.redirect('/adm/listlocals')
            }else {
                res.render('notfound')
            }
        }catch (e){
            res.render('notfound')
        }
    }
}
export default  LocalController