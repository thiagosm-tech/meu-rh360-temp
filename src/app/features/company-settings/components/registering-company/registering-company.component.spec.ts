import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteringCompanyComponent } from './registering-company.component';

describe('RegisteringCompanyComponent', () => {
  let component: RegisteringCompanyComponent;
  let fixture: ComponentFixture<RegisteringCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteringCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteringCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
