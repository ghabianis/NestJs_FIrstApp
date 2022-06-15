import { Body, Get, Injectable, NotFoundException, Param } from "@nestjs/common";
import { get } from "http";
import { Product } from "./Product.model";


@Injectable()
export class porductsService {
    products: Product[] = [];
    arrayprod: any[] = [];
    //insert prod function
    inserProd(title: string, desc: string, price: number) {
        try {
            const prodId = Math.random().toString();
            const newProduct = new Product(prodId, title, desc, price);
            this.products.push(newProduct);
            console.log(prodId);
            return prodId;
        } catch (error) {
            throw new NotFoundException('this route is not found');
        }
    }
    // get prod function

    getAllPorducts() {
        const prods = this.products;
        return prods;
    }


    getbyId(@Param('id') prodId: string) {
        const signleprod = this.products.find((prod) => prodId === prod.id);
        if (!signleprod) {
            throw new NotFoundException('data not found or null');
        }
        return { ...signleprod };
    }
    findSingleProduct(productId: string) {
        const product = this.findPorduct(productId)[0];
        return { ...product };
    }
    // update prod  Service 
    updateProd(prductId: string, title, description, price) {
        const [product, index] = this.findPorduct(prductId);
        const updateProd = { ...product, }
        if (title) {
            updateProd.title = title;
        }
        if (description) {
            updateProd.description = description
        }
        if (price) {
            updateProd.price = price
        }
        this.products[index] = updateProd;
    }

    private findPorduct(id: string): [Product, number] {
        const productIndex = this.products.findIndex(prod => prod.id === id);
        const product = this.products[productIndex];
        if (!product) {
            throw new NotFoundException('Datat not found ');
        }
        return [product, productIndex];
    }




    // Delete prod  Service 
    DeleteProd(prodId) {
       const index =  this.findPorduct(prodId)[1];
        this.products.splice(index,1);
    }
}