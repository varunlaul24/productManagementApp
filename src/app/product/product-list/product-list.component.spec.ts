import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../product.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: ProductService;

  const mockProducts = [
    {
      id: 1,
      title: 'Product 1',
      description: 'Description 1',
      price: 100,
      category: {
        id: 1,
        name: 'Category 1',
        image: '',
        creationAt: '',
        updatedAt: '',
      },
      images: ['https://via.placeholder.com/150'],
      creationAt: '',
      updatedAt: '',
      content: '',
      author: '',
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'Description 2',
      price: 200,
      category: {
        id: 2,
        name: 'Category 2',
        image: '',
        creationAt: '',
        updatedAt: '',
      },
      images: ['https://via.placeholder.com/150'],
      creationAt: '',
      updatedAt: '',
      content: '',
      author: '',
    },
  ];

  // Asynchronous setup - It involves operations that return promises or need to wait for completion before proceeding. Scenarios include compiling components or fetching asynchronous data
  beforeEach(async () => { 
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ProductService],
    }).compileComponents();

    productService = TestBed.inject(ProductService);
  });

  // Synchronous setup - Involves operations that complete immediately and do not return promises. Scenarios include creating component instances, initializing local variables, or setting up mocks.
  beforeEach(() => { 
    fixture = TestBed.createComponent(ProductListComponent); 
    // fixture - a wrapper around the component that provides access to its properties and methods.
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products on init', () => {
    // jest.spyOn func creates a mock function getProducts
    jest.spyOn(productService, 'getProducts').mockReturnValue(of(mockProducts)); 
    // of() creates an observable from mockProducts array
    // mockReturnValue() accepts a value that will be returned whenever the mock function is called. It mocks getProudcts to return an Observable that emits mockProducts when subscribed to.
    component.ngOnInit();
    expect(component.products).toEqual(mockProducts);
  });

  it('should delete a product', () => {
    jest.spyOn(productService, 'deleteProduct').mockReturnValue(of({} as any));
    // mockReturnValue(of({} as any)) configures the spy to return an observable that emits an empty object
    component.products = [...mockProducts];
    component.deleteProduct(1);
    expect(component.products.length).toBe(1);
    expect(component.products[0].id).toBe(2);
  });
});