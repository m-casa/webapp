import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSportsNewsComponent } from './add-sports-news.component';

describe('AddSportsNewsComponent', () => {
  let component: AddSportsNewsComponent;
  let fixture: ComponentFixture<AddSportsNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSportsNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSportsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
