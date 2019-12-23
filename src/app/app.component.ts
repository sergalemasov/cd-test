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
        console.log('do check');
    }

    onScroll() {
        console.log(`scrolled ${this.times} times`);
    }
}
