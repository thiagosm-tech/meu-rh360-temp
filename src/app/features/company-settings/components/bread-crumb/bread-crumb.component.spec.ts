import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailUrlComponent } from './thumbnail-url.component';

describe('ThumbnailUrlComponent', () => {
  let component: ThumbnailUrlComponent;
  let fixture: ComponentFixture<ThumbnailUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumbnailUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
