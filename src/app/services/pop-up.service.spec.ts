import { IPPObject, PopUpService, ppEvent } from './pop-up.service';
import { SignInComponent } from "../components/sign-in/sign-in.component";

/* Isolated test */

describe('PopUpService', () => {

  let service: PopUpService;

  beforeEach(() => {service = new PopUpService();});

  it('subscribe for opening works', (done: DoneFn) => {
    service.open(SignInComponent, [{title: 'Pop-up Title', message: 'Successfully'}]);

    service.ppDialog$.subscribe((res: IPPObject) => {
      expect(res.ppEvent).toBe(ppEvent.open);
      done();
    });
  });

  it('subscribe for closing works', (done: DoneFn) => {
    service.close();

    service.ppDialog$.subscribe((res: IPPObject) => {
      expect(res.ppEvent).toBe(ppEvent.close);
      done();
    })
  })
});
