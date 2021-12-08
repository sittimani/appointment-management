import { TestBed } from '@angular/core/testing';

import { DoctorAppointmentResolver } from './doctor-appointment.resolver';

describe('DoctorAppointmentResolver', () => {
  let resolver: DoctorAppointmentResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DoctorAppointmentResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
