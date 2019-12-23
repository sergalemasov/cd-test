import {Component, DoCheck, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements DoCheck {
    times = 10;

    ngDoCheck() {
        console.log('PARENT: change detection started');
    }

    onScroll() {
        console.log(`PARENT: scrolled ${this.times} times`);
    }
}
