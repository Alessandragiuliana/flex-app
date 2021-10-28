import { BreakpointObserver, Breakpoints, } from '@angular/cdk/layout';
import { Component, EventEmitter, OnDestroy,OnInit} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  showNavView : boolean = false;
  small: boolean = false;
  opened: boolean = false;

  constructor( private service: BreakpointObserver) {
    const changes = this.service.observe(['(max-width: 726px)']);
    this.subscription = changes.subscribe(
      (value) => {
        this.small = value.matches;
        if (!this.small) {
          this.opened = false;
        }
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription != null) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.small = this.service.isMatched(`(max-width: 726px)`);
  }

  onClick(): void {
    this.opened = !this.opened;
  }
 
}
