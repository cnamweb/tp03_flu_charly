import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldBoutiqueComponent } from './old-boutique.component';

describe('OldBoutiqueComponent', () => {
  let component: OldBoutiqueComponent;
  let fixture: ComponentFixture<OldBoutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldBoutiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
