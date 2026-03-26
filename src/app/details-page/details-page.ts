import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitSectionComponent } from '../split-section/split-section';
import { SplitSectionData } from '../models/split-section.model';

@Component({
    selector: 'app-details-page',
    standalone: true,
    imports: [CommonModule, SplitSectionComponent],
    templateUrl: './details-page.html',
    styleUrls: ['./details-page.scss']
})
export class DetailsPageComponent {
    pagesData: SplitSectionData[] = [
        {
            leftSide: [
                {
                    id: 'services',
                    leftTitle: 'Our Services',
                    leftDescription:
                        'At Skyline Security Services, protection is not a service — it is a responsibility we own. We stand for discipline, vigilance, and uncompromising integrity. Every assignment we take on is treated as mission-critical.'
                },
                {
                    id: 'capacity',
                    leftTitle: 'Organizational Capacity',
                    leftDescription:
                        '• 100 Licensed Security Guards\n• 200 Event & Crowd Control Professionals\n• 100 Housekeeping & Facility Personnel\nThis structured manpower base enables immediate mobilization across single or multi-site operations.'
                }
            ],

            middleCards: [
                {
                    id: 'corporate',
                    title: 'Corporate & Commercial Security',
                    image: 'assets/images/guards.jpeg',
                    imageAlt: 'Security guards in uniform'
                },
                {
                    id: 'hospitality',
                    title: 'Hospitality & Executive Environments'
                },
                {
                    id: 'construction',
                    title: 'Construction, Industrial & Warehouse Security'
                },
                {
                    id: 'residential',
                    title: 'Residential Security'
                },
                {
                    id: 'event',
                    title: 'Event & Crowd Control'
                },
                {
                    id: 'housekeeping',
                    title: 'Housekeeping & Facility Management'
                }
            ],

            rightSide: [
                {
                    id: 'commitment',
                    rightTitle: 'Our Commitment',
                    rightDescription:
                        'Our security professionals are trained to anticipate, not react. To deter, not escalate. To protect, not perform. We operate with clarity of purpose, strength of character, and total ownership of every post we command.'
                },
                {
                    id: 'why',
                    rightTitle: 'Why Skyline?',
                    rightDescription:
                        'Our objective is simple: Create secure, controlled, professionally managed environments that reinforce client credibility while minimizing exposure to operational risk. We are built for institutional clients, not short-term assignments.'
                }
            ]
        },

    ];
}