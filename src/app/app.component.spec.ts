import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PopUpService } from "./services/pop-up.service";

class popupServiceStub {
  open() {}
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let popup: PopUpService;

  beforeEach(async(() => {
    // noinspection JSIgnoredPromiseFromCall
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [{provide: PopUpService, useValue: popupServiceStub } ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the comp', ()  => {
    // noinspection JSIgnoredPromiseFromCall
    expect(component).toBeTruthy();
  });
  it(`should have as title 'unit'`, () => {
    const app = fixture.debugElement.componentInstance;
    // noinspection JSIgnoredPromiseFromCall
    expect(app.title).toEqual('unit');
  });
  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // noinspection JSIgnoredPromiseFromCall
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to unit!');
  });

  it('should called open', () => {
    const openSpy = spyOn(popup, 'open');
    fixture.detectChanges();
    // noinspection JSIgnoredPromiseFromCall
    expect(openSpy).toHaveBeenCalled();
  });

});
