import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedmenuComponent } from './selectedmenu.component';

describe('SelectedmenuComponent', () => {
  let component: SelectedmenuComponent;
  let fixture: ComponentFixture<SelectedmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
