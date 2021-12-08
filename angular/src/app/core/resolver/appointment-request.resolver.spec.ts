import { TestBed } from '@angular/core/testing';

import { AppointmentRequestResolver } from './appointment-request.resolver';

describe('AppointmentRequestResolver', () => {
  let resolver: AppointmentRequestResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AppointmentRequestResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
