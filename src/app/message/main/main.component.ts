import { BreakpointObserver, } from '@angular/cdk/layout';
import { Component, OnDestroy,OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { MESSAGE, USERS } from '../mock-data';
import { Messager, User } from '../user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit, OnDestroy {
  public users: User[] = USERS.map(user => User.Build(user))
  public messagers: Messager[] = MESSAGE.map(messager =>Messager.Build(messager))
  private querySubscription: Subscription;

  small: boolean = false;
  opened: boolean = false;

  screenQuery: string = '(max-width: 768px)';


  constructor( private observer: BreakpointObserver) {
    this.querySubscription = this.observer.observe(this.screenQuery).subscribe(
      (result) => {
        this.small = result.matches;
      }
    );
  }

   ngOnDestroy(): void {
    if (this.querySubscription != null) this.querySubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.small = this.observer.isMatched(this.screenQuery);
  }

  toggleAside(): void {
    this.opened = !this.opened;
  }
 
}
