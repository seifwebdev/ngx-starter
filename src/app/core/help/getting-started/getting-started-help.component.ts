import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ConfigService } from '../../../core/config.service';

import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import isEmpty from 'lodash/isEmpty';
import { first } from 'rxjs/operators';
import { HelpTopics } from '../help-topic.component';

@UntilDestroy()
@Component({
	templateUrl: 'getting-started-help.component.html'
})
export class GettingStartedHelpComponent implements OnInit {
	@Output() readonly backEvent = new EventEmitter();

	config: any;

	externalLinksEnabled: boolean;

	appName = 'Application';

	constructor(private configService: ConfigService) {}

	ngOnInit() {
		this.configService
			.getConfig()
			.pipe(first(), untilDestroyed(this))
			.subscribe((config: any) => {
				this.config = config;
				this.externalLinksEnabled =
					config.welcomeLinks &&
					config.welcomeLinks.enabled &&
					Array.isArray(config.welcomeLinks.links) &&
					!isEmpty(config.welcomeLinks.links);
				this.appName = config.app.title;
			});
	}

	back() {
		this.backEvent.emit({});
	}
}
HelpTopics.registerTopic('getting-started', GettingStartedHelpComponent, 0);
