import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImprovementsPage } from './improvements.page';

describe('ImprovementsPage', () => {
  let component: ImprovementsPage;
  let fixture: ComponentFixture<ImprovementsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImprovementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
