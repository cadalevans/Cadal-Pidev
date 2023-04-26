import { Component } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { ProductService } from 'src/app/core/service/products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  listProducts : any; 
  form : boolean = false;
   product!: Product;
   closeResult! : string;


   constructor(private service:ProductService){}
   ngOnInit():void{
    this.product = {
      idProduct:0,
      idCathegory:0,
      productName: '',
      price: 0,
      Like:0,
      Dislike:0
    
    }
   }


  getAllProducts(){
    this.service.getAllProducts().subscribe(res => this.listProducts = res)
  }

  addProduct(product: any , idCategory:any ){
    this.service.addProduct(product,idCategory).subscribe(() => {
      this.getAllProducts();
      this.form = false;
    });
  }

  editProduct(product : Product){
    this.service.editProduct(product).subscribe();
  }
  deleteProduct(idProduct : any){
    this.service.deleteProduct(idProduct).subscribe(() => this.getAllProducts())
  }
 
}
