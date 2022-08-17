import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertOneComponent } from './advert-one.component';

describe('AdvertOneComponent', () => {
  let component: AdvertOneComponent;
  let fixture: ComponentFixture<AdvertOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
