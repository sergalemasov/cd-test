import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ChildComponent} from './child/child.component';
import {GrandChildComponent} from './grandchild/grandchild.component';
import {AncientChildComponent} from './ancientchild/ancientchild.component';
import {ParentComponent} from './parent/parent.component';

@NgModule({
    declarations: [
        AppComponent,
        ParentComponent,
        ChildComponent,
        GrandChildComponent,
        AncientChildComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
