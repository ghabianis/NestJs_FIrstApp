import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, Put } from "@nestjs/common";
import { porductsService } from "./products.service";

@Controller('products')
export class PorductsController {
    constructor(private readonly prodService: porductsService) { }
    //Add product
    @Post()
    addProduct(
        @Body('title') tit: string,
        @Body('description') desc: string,
        @Body('price') prc: number): any {
        const generatedId = this.prodService.inserProd(tit, desc, prc);
        return { id: generatedId };
    }
    //Get all the  products
    @Get()
    getallprods() {
        return this.prodService.getAllPorducts();
    }
    //Get a single  product
    @Get(':id')
    getSingleProd(@Param('id') prodId: string) {
        Logger.log(prodId);
        return this.prodService.getbyId(prodId);
    }
    //Update  a product
    @Patch(':id')
    updateProd(@Param('id') prodId: string, @Body('title') title: string, @Body('description') description: string, @Body('price') price: string) {
        this.prodService.updateProd(prodId, title, description, price);
        return null;
    }
    // delete a product
    @Delete(':id')
    deleteProd(@Param('id') id: string) {
        this.prodService.DeleteProd(id);
        return null;
    }

}