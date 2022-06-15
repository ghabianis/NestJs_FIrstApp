import { required } from "@hapi/joi";
import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { ApiOkResponse, ApiQuery } from "@nestjs/swagger";
import { Product } from "./Product.model";
import { porductsService } from "./products.service";

@Controller('products')
export class PorductsController {
    constructor(private readonly prodService: porductsService) { }
    //Add product
    @ApiOkResponse({type:Product,isArray:true})
    @ApiQuery({name :'title',required:true})
    @ApiQuery({name :'description',required:true})
    @ApiQuery({name :'price',required:true})
    @Post()
    addProduct(
        @Query('title') tit: string,
        @Query('description') desc: string,
        @Query('price') prc: number): any {
        const generatedId = this.prodService.inserProd(tit, desc, prc);
        return { id: generatedId };
    }
    //Get all the  products
    
    @Get()
    getallprods() {
        return this.prodService.getAllPorducts();
    }
    //Get a single  product
    @ApiOkResponse({type:Product,isArray:true})
    @ApiQuery({name :'id',required:true})
    @Get(':id')
    getSingleProd(@Query('id') name?: string) : Product {
        return this.prodService.getbyId(name);
    }
    //Update  a product
    @ApiQuery({name :'title',required:true})
    @ApiQuery({name :'description',required:true})
    @ApiQuery({name :'price',required:true})
    @Patch(':id')
    updateProd(@Param('id') prodId: string, @Query('title') title: string, @Query('description') description: string, @Query('price') price: string) {
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