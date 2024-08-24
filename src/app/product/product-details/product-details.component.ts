import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from '../product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService, private location: Location) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('title');
    console.log('This is the name', name);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
