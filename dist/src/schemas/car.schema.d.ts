/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Schema } from "mongoose";
export declare const Car: import("mongoose").Model<{
    car_img: string[];
    car_brand?: string;
    car_model?: string;
    car_type?: string;
    car_gear?: string;
    car_licensePlate?: string;
    car_year?: string;
    car_color?: string;
    car_rentalPrice?: number;
    car_availability?: string;
    car_seat?: number;
    car_des?: string;
    pickup?: import("mongoose").Types.ObjectId;
    drop?: import("mongoose").Types.ObjectId;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    car_img: string[];
    car_brand?: string;
    car_model?: string;
    car_type?: string;
    car_gear?: string;
    car_licensePlate?: string;
    car_year?: string;
    car_color?: string;
    car_rentalPrice?: number;
    car_availability?: string;
    car_seat?: number;
    car_des?: string;
    pickup?: import("mongoose").Types.ObjectId;
    drop?: import("mongoose").Types.ObjectId;
}> & Omit<{
    car_img: string[];
    car_brand?: string;
    car_model?: string;
    car_type?: string;
    car_gear?: string;
    car_licensePlate?: string;
    car_year?: string;
    car_color?: string;
    car_rentalPrice?: number;
    car_availability?: string;
    car_seat?: number;
    car_des?: string;
    pickup?: import("mongoose").Types.ObjectId;
    drop?: import("mongoose").Types.ObjectId;
} & {
    _id: import("mongoose").Types.ObjectId;
}, never>, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    car_img: string[];
    car_brand?: string;
    car_model?: string;
    car_type?: string;
    car_gear?: string;
    car_licensePlate?: string;
    car_year?: string;
    car_color?: string;
    car_rentalPrice?: number;
    car_availability?: string;
    car_seat?: number;
    car_des?: string;
    pickup?: import("mongoose").Types.ObjectId;
    drop?: import("mongoose").Types.ObjectId;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    car_img: string[];
    car_brand?: string;
    car_model?: string;
    car_type?: string;
    car_gear?: string;
    car_licensePlate?: string;
    car_year?: string;
    car_color?: string;
    car_rentalPrice?: number;
    car_availability?: string;
    car_seat?: number;
    car_des?: string;
    pickup?: import("mongoose").Types.ObjectId;
    drop?: import("mongoose").Types.ObjectId;
}>> & Omit<import("mongoose").FlatRecord<{
    car_img: string[];
    car_brand?: string;
    car_model?: string;
    car_type?: string;
    car_gear?: string;
    car_licensePlate?: string;
    car_year?: string;
    car_color?: string;
    car_rentalPrice?: number;
    car_availability?: string;
    car_seat?: number;
    car_des?: string;
    pickup?: import("mongoose").Types.ObjectId;
    drop?: import("mongoose").Types.ObjectId;
}> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>>;
