import { NgModule } from '@angular/core';

import { ExampleRoutingModule } from './example-routing.module';

import { AuthGuard } from '../../core/auth/auth.guard';
import { SearchComponent } from './search.component';
import { AdvancedComponent } from './advanced.component';
import { ExploreComponent } from './explore.component';


@NgModule({
	imports: [
		ExampleRoutingModule
	],
	exports: [

	],
	declarations: [
		AdvancedComponent,
		ExploreComponent,
		SearchComponent
	],
	providers: [
		AuthGuard
	]
})
export class ExampleModule { }
