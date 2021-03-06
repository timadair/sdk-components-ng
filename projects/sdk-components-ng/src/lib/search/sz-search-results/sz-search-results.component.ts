import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { SzEntitySearchParams } from '../../models/entity-search';
import {
  EntityDataService,
  SzAttributeSearchResult,
  SzAttributeSearchResultType
} from '@senzing/rest-api-client-ng';

@Component({
  selector: 'sz-search-results',
  templateUrl: './sz-search-results.component.html',
  styleUrls: ['./sz-search-results.component.scss']
})
export class SzSearchResultsComponent implements OnInit {
  public searchResultsJSON; // TODO: remove after debugging
  public _searchResults: SzAttributeSearchResult[];
  public _searchValue: SzEntitySearchParams;
  public attributeDisplay: { attr: string, value: string }[];

  /**
   * Shows or hides the datasource lists in the result items header.
   * @memberof SzSearchResultsComponent
   */
  @Input() showDataSources: boolean = true;

  /**
   * The results of a search response to display in the component.
   * @memberof SzSearchResultsComponent
   */
  @Input('results')
  public set searchResults(value: SzAttributeSearchResult[]){
    // value set from webcomponent attr comes in as string
    this._searchResults = (typeof value == 'string') ? JSON.parse(value) : value;
    //this.searchResultsJSON = JSON.stringify(this._searchResults, null, 4);
  };
  /**
   * The search results being displayed in the component.
   *
   * @readonly
   * @memberof SzSearchResultsComponent
   */
  public get searchResults(): SzAttributeSearchResult[] {
    return this._searchResults;
  }

  // ----------- getters for different grouping/filtering of search results ----------

  /**
   * A list of the search results that are matches.
   * @readonly
   * @memberof SzSearchResultsComponent
   */
  public get matches(): SzAttributeSearchResult[] {
    return this._searchResults && this._searchResults.filter ? this._searchResults.filter( (sr) => {
      return sr.resultType == SzAttributeSearchResultType.MATCH;
    }) : undefined;
  }
  /**
   * A list of the search results that are possible matches.
   *
   * @readonly
   * @memberof SzSearchResultsComponent
   */
  public get possibleMatches(): SzAttributeSearchResult[] {
    return this._searchResults && this._searchResults.filter ? this._searchResults.filter( (sr) => {
      return sr.resultType == SzAttributeSearchResultType.POSSIBLEMATCH;
    }) : undefined;
  }
  /**
   * A list of the search results that are related.
   *
   * @readonly
   * @memberof SzSearchResultsComponent
   */
  public get discoveredRelationships(): SzAttributeSearchResult[] {
    return this._searchResults && this._searchResults.filter ? this._searchResults.filter( (sr) => {
      return sr.resultType == SzAttributeSearchResultType.POSSIBLERELATION;
    }) : undefined;
  }
  /**
   * A list of the search results that are name only matches.
   *
   * @readonly
   * @memberof SzSearchResultsComponent
   */
  public get nameOnlyMatches(): SzAttributeSearchResult[] {
    return this._searchResults && this._searchResults.filter ? this._searchResults.filter( (sr) => {
      return sr.resultType == SzAttributeSearchResultType.NAMEONLYMATCH;
    }) : undefined;
  }

  /**
   * The current search parameters being used.
   * used for displaying the parameters being searched on above result list.
   * @memberof SzSearchResultsComponent
   */
  @Input('parameters')
  public set searchValue(value: SzEntitySearchParams){
    this._searchValue = value;

    this.attributeDisplay = Object.keys(this._searchValue)
      .filter((key, index, self) => {
        if(key === 'IDENTIFIER_TYPE'){
          return Object.keys(self).includes('IDENTIFIER');
        }
        if(key === 'NAME_TYPE'){
          return false;
        }
        if(key === 'ADDR_TYPE'){
          return false;
        }
        if(key === 'COMPANY_NAME_ORG'){
          return false;
        }

        return true;
      })
      .map(key => {
        const humanKeys = {
          'PHONE_NUMBER':'PHONE',
          'NAME_FULL':'NAME',
          'PERSON_NAME_FULL':'NAME',
          'NAME_FIRST':'FIRST NAME',
          'NAME_LAST':'LAST NAME',
          'EMAIL_ADDRESS': 'EMAIL',
          'ADDR_CITY':'CITY',
          'ADDR_STATE':'STATE',
          'ADDR_POSTAL_CODE':'ZIP CODE',
          'SSN_NUMBER':'SSN',
          'DRIVERS_LICENSE_NUMBER':'DL#'
        }
        let retVal = {attr: key, value: this._searchValue[key]};                  // temp const
        if(humanKeys[retVal.attr]){ retVal.attr = humanKeys[retVal.attr]; };      // repl enum val with human readable
        retVal.attr = this.titleCasePipe.transform(retVal.attr.replace(/_/g,' ')); // titlecase trans

        return retVal
      })
      .filter(i => !!i);
  }
  /**
   * The current search parameters being used.
   * @readonly
   * @memberof SzSearchResultsComponent
   */
  public get searchValue(): SzEntitySearchParams {
    return this._searchValue;
  }
  /**
   * Occurs when a search result item is clicked.
   *
   * @memberof SzSearchResultsComponent
   */
  @Output()
  public resultClick: EventEmitter<SzAttributeSearchResult> = new EventEmitter<SzAttributeSearchResult>();
  /**
   * DOM click handler which then triggers the "resultClick" event emitter.
   *
   * @memberof SzSearchResultsComponent
   */
  public onResultClick(evt: any, resData: SzAttributeSearchResult): void{
    // evt proxy
    this.resultClick.emit(resData);
  }
  /**
   * Total number of search results being displayed.
   *
   * @readonly
   * @memberof SzSearchResultsComponent
   */
  get searchResultsTotal(): number {
    return (this.searchResults && this.searchResults.length) ? this.searchResults.length : 0;
  }

  constructor(
    private titleCasePipe: TitleCasePipe
  ) {}

  ngOnInit() {}

}
