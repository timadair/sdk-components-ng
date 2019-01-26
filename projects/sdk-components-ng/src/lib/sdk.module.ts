import { NgModule, Injector, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
/* import { BrowserModule } from '@angular/platform-browser'; */
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule, TitleCasePipe } from '@angular/common';
import {
  ApiModule,
  Configuration as SzRestConfiguration,
  SzAttributeType
} from '@senzing/rest-api-client-ng';

/** utilities */
import { JSONScrubber } from './common/utils';

/** models */
import { SzEntityDetailSectionData } from './models/entity-detail-section-data';
import { SzEntitySearchParams } from './models/entity-search';

/** services */
import { SzMessageBundleService } from './services/sz-message-bundle.service';
import { SzSearchService } from './services/sz-search.service';

/** components */
import { SzEntityDetailComponent } from './entity/detail/sz-entity-detail.component';
import { SzEntityDetailHeaderComponent } from './entity/detail/sz-entity-detail-header/sz-entity-detail-header.component';
import { SzEntityDetailSectionSummaryComponent } from './entity/detail/sz-entity-detail-header/sz-entity-detail-section-summary/sz-entity-detail-section-summary.component';
import { SzEntityDetailHeaderContentComponent } from './entity/detail/sz-entity-detail-header/sz-entity-detail-header-content/sz-entity-detail-header-content.component';
import { SzEntityDetailsSectionComponent } from './entity/detail/sz-entity-details-section/sz-entity-details-section.component';
import { SzEntityDetailSectionHeaderComponent } from './entity/detail/sz-entity-details-section/sz-entity-detail-section-header/sz-entity-detail-section-header.component';
import { SzEntityDetailSectionCollapsibleCardComponent } from './entity/detail/sz-entity-details-section/sz-entity-detail-section-collapsible-card/sz-entity-detail-section-collapsible-card.component';
import { SzEntityMatchPillComponent } from './entity/sz-entity-match-pill/sz-entity-match-pill.component';
import { SzEntityRecordCardComponent } from './entity/sz-entity-record-card/sz-entity-record-card.component';
import { SzEntityRecordCardHeaderComponent } from './entity/sz-entity-record-card/sz-entity-record-card-header/sz-entity-record-card-header.component';
import { SzEntityRecordCardContentComponent } from './entity/sz-entity-record-card/sz-entity-record-card-content/sz-entity-record-card-content.component';

import { SzSearchComponent } from './search/sz-search/sz-search.component';
import { SzSearchResultsComponent } from './search/sz-search-results/sz-search-results.component';
import { SzSearchResultCardComponent } from './search/sz-search-result-card/sz-search-result-card.component';
import { SzSearchResultCardContentComponent } from './search/sz-search-result-card/sz-search-result-card-content/sz-search-result-card-content.component';
import { SzSearchResultCardHeaderComponent } from  './search/sz-search-result-card/sz-search-result-card-header/sz-search-result-card-header.component';
import { SzConfigurationAboutComponent } from './configuration/sz-configuration-about/sz-configuration-about.component';
import { SzConfigurationComponent } from './configuration/sz-configuration/sz-configuration.component';
import { SzPoweredByComponent } from './sz-powered-by/sz-powered-by.component';

@NgModule({
  declarations: [
    SzEntityDetailComponent,
    SzSearchComponent,
    SzSearchResultsComponent,
    SzSearchResultCardComponent,
    SzSearchResultCardContentComponent,
    SzEntityDetailHeaderComponent,
    SzEntityDetailsSectionComponent,
    SzEntityDetailSectionSummaryComponent,
    SzEntityDetailHeaderContentComponent,
    SzEntityDetailSectionHeaderComponent,
    SzEntityDetailSectionCollapsibleCardComponent,
    SzEntityMatchPillComponent,
    SzEntityRecordCardComponent,
    SzEntityRecordCardHeaderComponent,
    SzEntityRecordCardContentComponent,
    SzSearchResultCardHeaderComponent,
    SzConfigurationAboutComponent,
    SzConfigurationComponent,
    SzPoweredByComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ApiModule
  ],
  exports: [
    SzEntityDetailComponent,
    SzSearchComponent,
    SzSearchResultsComponent,
    SzSearchResultCardComponent,
    SzPoweredByComponent,
    SzConfigurationComponent,
    SzConfigurationAboutComponent
  ],
  /** for components being exported as web components */
  entryComponents: [
    SzEntityDetailComponent,
    SzSearchComponent,
    SzSearchResultsComponent,
    SzPoweredByComponent,
    SzConfigurationComponent,
    SzConfigurationAboutComponent
  ],
  providers: [
    SzMessageBundleService,
    SzSearchService,
    HttpClient,
    TitleCasePipe
  ]
})
export class SenzingSdkModule {
  /**
   * initialize the SenzingSdkModule with an instance of
   * SzRestConfiguration or a factory method that returns a SzRestConfiguration.
   *
   * @example
   * SenzingSdkModule.forRoot(
    () => {
      return new SzRestConfiguration({
        basePath: 'http://myapiserver:2080',
        withCredentials: true
      });
    }
   )
   *
   */
  public static forRoot(apiConfigFactory?: SzRestConfiguration | any): ModuleWithProviders {
    let _providers = [];

    function isFunction(obj) {
     return !!(obj && obj.constructor && obj.call && obj.apply);
    };

    if(apiConfigFactory === undefined){
      apiConfigFactory = function() {
        return new SzRestConfiguration({
          basePath: "http://localhost:2080",
          withCredentials: true
        })
      }
      console.warn('no config factory. setting default values for api service calls: ', apiConfigFactory());
    }
    // check apiConfigFactory shape to figure out what is what
    if(apiConfigFactory && !isFunction(apiConfigFactory) && apiConfigFactory.basePath ){
      _providers.push(  { provide: SzRestConfiguration, useValue: apiConfigFactory } );
    } else if(apiConfigFactory && isFunction(apiConfigFactory) && apiConfigFactory().basePath) {
      _providers.push(  { provide: SzRestConfiguration, useFactory: apiConfigFactory } );
    }

    return {
        ngModule: SenzingSdkModule,
        providers: _providers
    };
  }

}
