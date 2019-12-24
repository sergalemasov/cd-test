import {
    Component,
    ChangeDetectionStrategy,
    ViewChild,
    ElementRef,
    AfterViewInit,
    NgZone,
    Output,
    EventEmitter,
    Input
} from '@angular/core';
import {fromEvent} from 'rxjs';
import {tap, filter} from 'rxjs/operators';

@Component({
    selector: 'child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements AfterViewInit {
    @Input() times: number;
    @ViewChild('scroller') scroller: ElementRef;
    @ViewChild('mousemover') mousemover: ElementRef;
    @Output() scrollTimes = new EventEmitter<void>();

    constructor(private ngZone: NgZone) {}

    ngAfterViewInit() {
        this.ngZone.runOutsideAngular(() => {
            let counter = 0;

            fromEvent(this.scroller.nativeElement, 'wheel')
                .pipe(
                    tap(() => console.log('CHILD: native scrolled')),
                    tap(() => counter++),
                    filter(() => counter >= this.times),
                    tap(() => counter = 0)
                )
                .subscribe(() => this.ngZone.run(() => this.scrollTimes.emit()));
        });

        fromEvent(this.mousemover.nativeElement, 'mousemove')
            .subscribe();
    }

    ngDoCheck() {
        console.log('CHILD: checked');
    }

    childGetter() {
        console.log('CHILD: dirty checked');
        return '';
    }
}
