import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('App3Component', () => {
  let component: App3Component;
  let fixture: ComponentFixture<App3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
