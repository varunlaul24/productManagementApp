import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'; // for mocking HTTP requests
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController; // mock controller to mock and verify HTTP requests made by Auth Service
  let router: Router;

  beforeEach(() => {
    const routerSpy = { navigate: jest.fn() }; // Creates a mock object for the Router with a navigate method that is a Jest mock function.Tracks and asserts that navigation occurs as expected without actually navigating.
    TestBed.configureTestingModule({
      // mimics an angular module
      imports: [HttpClientTestingModule],
      providers: [AuthService, { provide: Router, useValue: routerSpy }],
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
    // creates an instance using dependency injection system
  });

  afterEach(() => {
    httpMock.verify(); // Verify that no unmatched requests are outstanding.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    it('should store the token and navigate based on user role', () => {
      const mockResponse = { access_token: 'test-token' };
      const adminProfileResponse = { role: 'admin', name: 'Test Admin' };
      const customerProfileResponse = {
        role: 'customer',
        name: 'Test Customer',
      };
      const email = 'test@example.com';
      const password = 'password';

      // Test for admin role
      service.login(email, password).subscribe();

      let req = httpMock.expectOne(service['apiUrl']);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);

      let profileReq = httpMock.expectOne(service['profileUrl']);
      expect(profileReq.request.method).toBe('GET');
      profileReq.flush(adminProfileResponse);

      expect(localStorage.getItem('token')).toBe('test-token');
      expect(service.getUserRole()).toBe('admin');
      expect(router.navigate).toHaveBeenCalledWith(['/admin/list']);

      // Resetting router spy and local storage for next test
      jest.clearAllMocks();
      localStorage.clear();

      // Test for customer role
      service.login(email, password).subscribe();

      req = httpMock.expectOne(service['apiUrl']);
      expect(req.request.method).toBe('POST');
      req.flush(mockResponse);

      profileReq = httpMock.expectOne(service['profileUrl']);
      expect(profileReq.request.method).toBe('GET');
      profileReq.flush(customerProfileResponse);

      expect(localStorage.getItem('token')).toBe('test-token');
      expect(service.getUserRole()).toBe('customer');
      expect(router.navigate).toHaveBeenCalledWith(['/products/list']);
    });
  });

  describe('logout', () => {
    it('remove token and navigate to login', () => {
      localStorage.setItem('token', 'test-token');
      service.logout();
      expect(localStorage.getItem('token')).toBeNull();
      expect(router.navigate).toHaveBeenCalledWith(['/login']);
    });
  });

  describe('fetchUserRole', () => {
    it('fetch user role and set it', () => {
      const profileResponse = { role: 'customer', name: 'Test User' };
      localStorage.setItem('token', 'test-token');

      service.fetchUserRole().subscribe();

      const req = httpMock.expectOne(service['profileUrl']);
      expect(req.request.method).toBe('GET');
      expect(req.request.headers.get('Authorization')).toBe(
        'Bearer test-token'
      );
      req.flush(profileResponse);

      expect(service.getUserRole()).toBe('customer');
      expect(service.getUsername()).toBe('Test User');
    });
  });

  describe('register', () => {
    it('should call the register API', () => {
      const mockResponse = { id: 1, name: 'Test User' };
      const name = 'Test User';
      const email = 'test@example.com';
      const password = 'password';
      const avatar = 'avatar.png';

      service.register(name, email, password, avatar).subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(service['registerUrl']);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual({ name, email, password, avatar });
      req.flush(mockResponse); // necessary to simulate the HTTP response and complete the Observable
    });
  });

  describe('isAuthenticated', () => {
    it('should return true if token exists', () => {
      localStorage.setItem('token', 'test-token');
      expect(service.isAuthenticated()).toBe(true);
    });

    it('should return false if token does not exist', () => {
      localStorage.removeItem('token');
      expect(service.isAuthenticated()).toBe(false);
    });
  });
});

console.log('test');