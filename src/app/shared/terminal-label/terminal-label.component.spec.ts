import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalLabelComponent } from './terminal-label.component';

describe('TerminalLabelComponent', () => {
  let component: TerminalLabelComponent;
  let fixture: ComponentFixture<TerminalLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
