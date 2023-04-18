/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SplashScreenService } from './splash-screen.service';

describe('Service: SplashScreen', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SplashScreenService]
    });
  });

  it('should ...', inject([SplashScreenService], (service: SplashScreenService) => {
    expect(service).toBeTruthy();
  }));
});
