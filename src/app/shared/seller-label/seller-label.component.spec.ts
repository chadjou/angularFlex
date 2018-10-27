import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerLabelComponent } from './seller-label.component';

describe('SellerLabelComponent', () => {
  let component: SellerLabelComponent;
  let fixture: ComponentFixture<SellerLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
