import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FogoPage } from './fogo.page';

describe('FogoPage', () => {
  let component: FogoPage;
  let fixture: ComponentFixture<FogoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FogoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
