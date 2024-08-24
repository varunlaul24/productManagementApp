import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

interface CategoryList {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  addEditProduct!: FormGroup;
  // newProduct: any;
  // newRes!: string;
  // check: boolean = false;
  categoryList!: CategoryList[];
  productId!: number;
  isEditMode: boolean = false;


  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getCategories();

    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      if (this.productId) {
        this.isEditMode = true;
        this.loadProduct();
      }
    });
    // this.addProduct = new FormGroup({
    //   title: new FormControl('', Validators.required),
    //   price: new FormControl('', Validators.required),
    //   description: new FormControl('', Validators.required),
    //   categoryId: new FormControl('', Validators.required),
    //   images: new FormControl(["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxk-yT5dZT22_h7vts_t5VD9TFLEgLa1Z3Q&s"], Validators.required)
    //   // images: new FormArray([new FormControl('', Validators.required)])
    // });
    // this.getCategories();
  }

  // addImage() {
  //   const control = new FormControl(null, Validators.required);
  //   (<FormArray>this.addProduct.get('images')).push(control)
  // }

  // get imageControls() {
  //   return (<FormArray>this.addProduct.get('images')).controls
  // }

  initializeForm() {
    this.addEditProduct = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      categoryId: new FormControl('', Validators.required),
      images: new FormControl(["https://placeimg.com/640/480/any"], Validators.required)
    });
  }

  loadProduct() {
    this.productService.getProductById(this.productId).subscribe(product => {
      this.addEditProduct.patchValue({
        title: product.title,
        price: product.price,
        description: product.description,
        categoryId: product.category.id
      });
    });
  }

  onSubmit() {
    if (this.isEditMode) {
      this.productService.updateProduct(this.productId, this.addEditProduct.value).subscribe(() => {
        this.router.navigate(['/products/list']);
      });
    } else {
      this.productService.createProduct(this.addEditProduct.value).subscribe(() => {
        this.router.navigate(['/products/list']);
      });
    }


    // console.log(this.addProduct.value);
    // this.productService
    //   .createProduct(this.addProduct.value)
    //   .subscribe((res: any) => {
    //     // this.newProduct = res;
    //     // this.newRes = this.newProduct.images[0];
    //     // this.newRes = this.newRes.replace('[', '');
    //     // this.newRes = this.newRes.replace(']', '');
    //     // this.newRes = this.newRes.replaceAll(`"`, '');
    //     // this.check = true;
    //     // console.log('New product created:', this.newProduct);
    //     this.router.navigate(['products/list']);
    //   });
  }

  getCategories() {
    this.productService.getCategoryId().subscribe((data) => {
      this.categoryList = data;
    });
  }

  /*
  addProduct!: FormGroup;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.addProduct = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      categoryId: new FormControl('', Validators.required),
      images: new FormArray([new FormControl('')]),
    });
  }

  onSubmit() {
    console.log(this.addProduct.value);

    const formattedData = {
      ...this.addProduct.value,
      images: this.formatImagesUrls(this.addProduct.value.images)
    };

    this.productService.createProduct(formattedData).subscribe(
      (res: any) => {
        console.log('New product created:', res);
        this.router.navigate(['products/list']);
      },
      (error: any) => {
        console.error('Error creating product:', error);
      }
    );
  }

  private formatImagesUrls(images: string[]): string[] {
    return images.map(url => url.replace("[", "").replace("]", "").replaceAll(`"`,""));
  }
  */
}
