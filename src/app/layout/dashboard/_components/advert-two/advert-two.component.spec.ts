import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertTwoComponent } from './advert-two.component';

describe('AdvertTwoComponent', () => {
  let component: AdvertTwoComponent;
  let fixture: ComponentFixture<AdvertTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
