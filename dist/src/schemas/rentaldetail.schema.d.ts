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
export declare const RentalDetail: import("mongoose").Model<{
    pick_up_date?: Date;
    time_pick_up?: Date;
    drop_of_date?: Date;
    time_drop_of?: Date;
    total_cost?: number;
    rental_id?: import("mongoose").Types.ObjectId;
    car_id?: import("mongoose").Types.ObjectId;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    pick_up_date?: Date;
    time_pick_up?: Date;
    drop_of_date?: Date;
    time_drop_of?: Date;
    total_cost?: number;
    rental_id?: import("mongoose").Types.ObjectId;
    car_id?: import("mongoose").Types.ObjectId;
}> & Omit<{
    pick_up_date?: Date;
    time_pick_up?: Date;
    drop_of_date?: Date;
    time_drop_of?: Date;
    total_cost?: number;
    rental_id?: import("mongoose").Types.ObjectId;
    car_id?: import("mongoose").Types.ObjectId;
} & {
    _id: import("mongoose").Types.ObjectId;
}, never>, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    pick_up_date?: Date;
    time_pick_up?: Date;
    drop_of_date?: Date;
    time_drop_of?: Date;
    total_cost?: number;
    rental_id?: import("mongoose").Types.ObjectId;
    car_id?: import("mongoose").Types.ObjectId;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    pick_up_date?: Date;
    time_pick_up?: Date;
    drop_of_date?: Date;
    time_drop_of?: Date;
    total_cost?: number;
    rental_id?: import("mongoose").Types.ObjectId;
    car_id?: import("mongoose").Types.ObjectId;
}>> & Omit<import("mongoose").FlatRecord<{
    pick_up_date?: Date;
    time_pick_up?: Date;
    drop_of_date?: Date;
    time_drop_of?: Date;
    total_cost?: number;
    rental_id?: import("mongoose").Types.ObjectId;
    car_id?: import("mongoose").Types.ObjectId;
}> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>>;
