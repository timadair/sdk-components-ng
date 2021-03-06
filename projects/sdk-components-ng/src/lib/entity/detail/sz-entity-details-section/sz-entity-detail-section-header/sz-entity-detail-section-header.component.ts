import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

/**
 * @internal
 * @export
 */
@Component({
  selector: 'sz-entity-detail-section-header',
  templateUrl: './sz-entity-detail-section-header.component.html',
  styleUrls: ['./sz-entity-detail-section-header.component.scss']
})
export class SzEntityDetailSectionHeaderComponent implements OnInit {
  @Input() sectionTitle: string;
  @Input() sectionCount: number;
  @Input() sectionIcon: string;
  @Input() sectionId: string;

  constructor() { }

  ngOnInit() {
  }

  get countLabel(): string {
    switch (this.sectionTitle.toLowerCase()) {
      case 'matched records': return 'Records';
      case 'possible matches': return 'Matches';
      case 'disclosed relationships':
      case 'possible relationships': return 'Relationships';
      default: return '';
    }
  }

  get isMatchedRecords(): boolean {
    return this.sectionTitle.toLowerCase() === 'matched records';
  }

  get isPossibleMatches(): boolean {
    return this.sectionTitle.toLowerCase() === 'possible matches';
  }
  get isPossibleRelationships(): boolean {
    return this.sectionTitle.toLowerCase() === 'possible relationships';
  }
  get isDisclosedRelationships(): boolean {
    return this.sectionTitle.toLowerCase() === 'disclosed relationships';
  }
}
