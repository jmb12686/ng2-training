
import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(){
  }

  canActivate() : Observable<boolean> {
    console.log('AuthGuard#canActivate called');
    return Observable.of(true);
  }

}
