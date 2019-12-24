import {Component, ChangeDetectionStrategy, DoCheck} from '@angular/core';

@Component({
    selector: 'ancientchild',
    templateUrl: './ancientchild.component.html',
    styleUrls: ['./ancientchild.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AncientChildComponent implements DoCheck {
    ngDoCheck() {
        console.log('ANCIENTCHILD: checked');
    }
}
