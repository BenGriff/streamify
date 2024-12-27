import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovietileComponent } from './movietile.component';

describe('MovietileComponent', () => {
  let component: MovietileComponent;
  let fixture: ComponentFixture<MovietileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovietileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovietileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
