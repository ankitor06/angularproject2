import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     }
  productSelected:Boolean=false;
  selectedProduct:string;
  addedProduct:any;
  onSelectProduct(prod){
    this.productSelected=true;
    this.selectedProduct=prod;
      }
      onAddProduct(){
        this.addedProduct=this.selectedProduct;
      }
  
}
