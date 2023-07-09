import { defineConfig } from 'cypress';
import { animate } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { toggleAccordion } from './accordion.animation';

@Component({
  selector: 'dash-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [toggleAccordion],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardAccordionComponent {

  
  @Input() item: accordionItem;

  public open = false;

  toggleAccordion() {
    this.open = !this.open;
  }
}

export interface accordionItem {
  title: string;
  content: string;
}