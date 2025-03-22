import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcpPageComponent } from './icp-page.component';

describe('IcpPageComponent', () => {
  let component: IcpPageComponent;
  let fixture: ComponentFixture<IcpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcpPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
