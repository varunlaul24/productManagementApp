import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductService, Product } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;
  const apiUrl = 'https://api.escuelajs.co/api/v1/products';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fetch products', () => {
    const dummyProducts: Product[] = [
      {
        id: 1,
        title: 'Product 1',
        description: 'Description 1',
        price: 100,
        category: {
          id: 1,
          name: 'Category 1',
          image: 'Image 1',
          creationAt: '2021-01-01',
          updatedAt: '2021-01-01',
        },
        images: ['Image 1'],
        creationAt: '2021-01-01',
        updatedAt: '2021-01-01',
      },
      {
        id: 2,
        title: 'Product 2',
        description: 'Description 2',
        price: 200,
        category: {
          id: 2,
          name: 'Category 2',
          image: 'Image 2',
          creationAt: '2021-01-01',
          updatedAt: '2021-01-01',
        },
        images: ['Image 2'],
        creationAt: '2021-01-01',
        updatedAt: '2021-01-01',
      },
    ];

    service.getProducts().subscribe((products) => {
      expect(products.length).toBe(2);
      expect(products).toEqual(dummyProducts);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProducts);
  });

  it('fetch a product by id', () => {
    const dummyProduct: Product = {
      id: 1,
      title: 'Product 1',
      description: 'Description 1',
      price: 100,
      category: {
        id: 1,
        name: 'Category 1',
        image: 'Image 1',
        creationAt: '2021-01-01',
        updatedAt: '2021-01-01',
      },
      images: ['Image 1'],
      creationAt: '2021-01-01',
      updatedAt: '2021-01-01',
    };

    service.getProductById(1).subscribe((product) => {
      expect(product).toEqual(dummyProduct);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProduct);
  });

  it('should create a new product', () => {
    const newProduct = {
      title: 'New Product',
      description: 'New Description',
      price: 300,
      categoryId: 1,
      images: ['Image 3'],
    };

    service.createProduct(newProduct).subscribe((response) => {
      expect(response).toEqual(newProduct);
    });

    const req = httpMock.expectOne(`${apiUrl}/`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newProduct);
    req.flush(newProduct);
  });

  it('should update a product', () => {
    const updatedProduct = {
      title: 'Updated Product',
      description: 'Updated Description',
      price: 400,
    };

    service.updateProduct(1, updatedProduct).subscribe((response) => {
      expect(response).toEqual(updatedProduct);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedProduct);
    req.flush(updatedProduct);
  });

  it('should delete a product', () => {
    const dummyProduct: Product = {
      id: 1,
      title: 'Product 1',
      description: 'Description 1',
      price: 100,
      category: {
        id: 1,
        name: 'Category 1',
        image: 'Image 1',
        creationAt: '2021-01-01',
        updatedAt: '2021-01-01',
      },
      images: ['Image 1'],
      creationAt: '2021-01-01',
      updatedAt: '2021-01-01',
    };

    service.deleteProduct(1).subscribe((response) => {
      expect(response).toEqual(dummyProduct);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(dummyProduct);
  });

  it('should fetch categories', () => {
    const dummyCategories = [
      {
        id: 1,
        name: 'Category 1',
        image: 'Image 1',
        creationAt: '2021-01-01',
        updatedAt: '2021-01-01',
      },
      {
        id: 2,
        name: 'Category 2',
        image: 'Image 2',
        creationAt: '2021-01-01',
        updatedAt: '2021-01-01',
      },
    ];

    service.getCategoryId().subscribe((categories) => {
      expect(categories).toEqual(dummyCategories);
    });

    const req = httpMock.expectOne(
      'https://api.escuelajs.co/api/v1/categories/'
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyCategories);
  });
});