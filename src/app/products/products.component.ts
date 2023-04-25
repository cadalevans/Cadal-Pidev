import { Component , OnInit } from '@angular/core';
import { Product } from '../core/model/product';

import { FormsModule } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../core/service/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listProducts : any; 
  form : boolean = false;
   product!: Product;
   closeResult! : string;

  constructor(private productService : ProductService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllProducts();;

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
    this.productService.getAllProducts().subscribe(res => this.listProducts = res)
  }

  addProduct(product: any , idCategory:any ){
    this.productService.addProduct(product,idCategory).subscribe(() => {
      this.getAllProducts();
      this.form = false;
    });
  }

  editProduct(product : Product){
    this.productService.editProduct(product).subscribe();
  }
  deleteProduct(idProduct : any){
    this.productService.deleteProduct(idProduct).subscribe(() => this.getAllProducts())
  }
  open(content: any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  closeForm(){

  }
  cancel(){
    this.form = false;
  }
}

