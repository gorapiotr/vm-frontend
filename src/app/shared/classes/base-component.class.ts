import {Directive, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

@Directive()
export abstract class BaseComponentClass implements OnDestroy{
  protected finish$ = new Subject<void>();

  ngOnDestroy(): void {
    this.finish$.next();
    this.finish$.complete();
  }
}
