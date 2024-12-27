import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesinfoComponent } from './moviesinfo.component';

describe('MoviesinfoComponent', () => {
  let component: MoviesinfoComponent;
  let fixture: ComponentFixture<MoviesinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
