import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtSizeComponent } from './shirt-size.component';

describe('ShirtSizeComponent', () => {
  let component: ShirtSizeComponent;
  let fixture: ComponentFixture<ShirtSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShirtSizeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShirtSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
