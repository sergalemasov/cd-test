import {Component, ChangeDetectionStrategy, DoCheck} from '@angular/core';

@Component({
    selector: 'parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements DoCheck {
    times = 10;

    ngDoCheck() {
        console.log('PARENT: checked');
    }

    onScroll() {
        console.log(`PARENT: scrolled ${this.times} times`);
    }

    parentGetter() {
        console.log('PARENT: dirty checked');
        return '';
    }
}
