import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheComponent } from './che.component';

describe('CheComponent', () => {
  let component: CheComponent;
  let fixture: ComponentFixture<CheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheComponent]
    });
    fixture = TestBed.createComponent(CheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should tell it works', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('che works!');
  });
});
