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
                    leftTitle: 'Our Services',
                    leftDescription:
                        'We provide a comprehensive range of security solutions tailored to meet the unique needs of each client. From on-site personnel to advanced surveillance systems, our services are designed to ensure safety, reliability, and peace of mind at all times.'
                },
                {
                    leftTitle: 'Custom Solutions',
                    leftDescription:
                        'Every business is different, and so are its security needs. Our experts work closely with clients to design and implement customized strategies that address specific risks while remaining flexible and scalable over time.'
                },
                {
                    leftTitle: 'sample',
                    leftDescription: 'desc'
                }
            ],

            middleCards: [
                {
                    title: 'Man Guarding & Extended Coverage',
                    image: 'assets/images/guards.jpeg'
                },
                {
                    title: 'Electronic Surveillance Systems',
                },
                {
                    title: 'Risk Assessment & Consulting'
                }
            ],

            rightSide: [
                {
                    rightTitle: 'Our Commitment',
                    rightDescription:
                        'Our team is committed to maintaining the highest standards of professionalism and vigilance. Every member is trained extensively to handle real-world scenarios with confidence, ensuring that your safety is never compromised.'
                }
            ]
        },

    ];
}