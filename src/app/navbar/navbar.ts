import { CommonModule } from '@angular/common';
import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.scss']
})
export class NavbarComponent implements AfterViewInit {
    isMenuOpen = false;

    pillStyles: { [key: string]: string } = { opacity: '0' };

    @ViewChildren('navLink', { read: ElementRef }) navLinks!: QueryList<ElementRef>;

    constructor(private router: Router) {
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
            this.updateActivePill();
        });
    }

    ngAfterViewInit() {
        setTimeout(() => this.updateActivePill(), 0);
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    closeMenu() {
        this.isMenuOpen = false;
    }

    onNavSelect(event: Event) {
        const target = event.currentTarget as HTMLElement;
        this.updatePillPosition(target);
    }

    @HostListener('window:resize')
    onResize() {
        this.updateActivePill();
    }

    private updateActivePill() {
        const currentUrl = this.router.url.split('?')[0];
        const linkToActivate = this.navLinks.find((el) => {
            const anchor = el.nativeElement as HTMLAnchorElement;
            const href = anchor.getAttribute('routerlink') || '';
            return href === currentUrl;
        });

        if (linkToActivate) {
            this.updatePillPosition(linkToActivate.nativeElement);
        } else if (this.navLinks.first) {
            this.updatePillPosition(this.navLinks.first.nativeElement);
        }
    }

    private updatePillPosition(target: HTMLElement) {
        const parent = target.closest('.nav-links') as HTMLElement;
        if (!parent) return;

        const parentRect = parent.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        this.pillStyles = {
            left: `${targetRect.left - parentRect.left}px`,
            width: `${targetRect.width}px`,
            opacity: '1'
        };
    }
}
