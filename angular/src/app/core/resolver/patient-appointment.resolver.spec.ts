import { TestBed } from '@angular/core/testing';

import { PatientAppointmentResolver } from './patient-appointment.resolver';

describe('PatientAppointmentResolver', () => {
  let resolver: PatientAppointmentResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PatientAppointmentResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
