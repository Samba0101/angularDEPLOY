import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArtcleComponent } from './list-artcle.component';

describe('ListArtcleComponent', () => {
  let component: ListArtcleComponent;
  let fixture: ComponentFixture<ListArtcleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListArtcleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArtcleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
