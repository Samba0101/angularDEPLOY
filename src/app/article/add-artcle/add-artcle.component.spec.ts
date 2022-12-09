import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArtcleComponent } from './add-artcle.component';

describe('AddArtcleComponent', () => {
  let component: AddArtcleComponent;
  let fixture: ComponentFixture<AddArtcleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArtcleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArtcleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
