import { Module } from "@nestjs/common";
import { PorductsController } from "./products.controller";
import { porductsService } from "./products.service";


@Module({
    controllers : [PorductsController],
    providers : [porductsService]

})
export class ProductModule{

}