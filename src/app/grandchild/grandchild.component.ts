import {Component, ChangeDetectionStrategy, DoCheck} from '@angular/core';

@Component({
    selector: 'grandchild',
    templateUrl: './grandchild.component.html',
    styleUrls: ['./grandchild.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandChildComponent implements DoCheck {
    ngDoCheck() {
        console.log('GRANDCHILD: checked');
    }

    grandChildGetter() {
        console.log('GRANDCHILD: dirty checked');
        return '';
    }
}
