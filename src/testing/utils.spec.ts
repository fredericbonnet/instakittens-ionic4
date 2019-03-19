import { Directive, Input } from '@angular/core';

/**
 * RouterLink stub.
 */
@Directive({
  selector: '[routerLink]',
})
export class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: any;
}
