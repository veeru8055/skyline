import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, input, QueryList, ViewChildren } from '@angular/core';
import { SplitSectionData } from '../models/split-section.model';

@Component({
  selector: 'app-split-section',
  templateUrl: './split-section.html',
  styleUrls: ['./split-section.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class SplitSectionComponent {
  data = input.required<SplitSectionData>();

}