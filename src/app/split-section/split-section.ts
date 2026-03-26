import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
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
  openSectionId = signal<string | null>(null);

  toggle(id: string): void {
    const opening = this.openSectionId() !== id;
    this.openSectionId.update(current => current === id ? null : id);

    if (opening) {
      setTimeout(() => {
        const el = document.getElementById('section-' + id);
        if (!el) return;

        const navbarOffset = 110; // navbar height + breathing room
        const y = el.getBoundingClientRect().top + window.scrollY - navbarOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 50);
    }
  }

  isOpen(id: string): boolean {
    return this.openSectionId() === id;
  }
}