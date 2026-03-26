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
            sections: [
                {
                    id: 'page-1-cover',
                    title: 'SKYLINE SECURITY SERVICES',
                    subtitle: 'Private Security & Facility Command',
                    backgroundColor: 'primary',
                    layout: 'feature',
                    content: [
                        {
                            type: 'highlight',
                            content: 'Structured Authority. Scalable Protection. Executive-Level Discipline.'
                        }
                    ],
                    icon: 'assets/images/guards.jpeg'
                },
                {
                    id: 'page-2-executive',
                    title: 'EXECUTIVE POSITIONING STATEMENT',
                    backgroundColor: 'light',
                    content: [
                        {
                            type: 'paragraph',
                            content: 'Skyline Security Services operates as a structured private security and facility command partner serving corporate, industrial, hospitality, construction, residential, and event sectors across Maharashtra.'
                        },
                        {
                            type: 'highlight',
                            content: 'We are not a guard supply agency.'
                        },
                        {
                            type: 'paragraph',
                            content: 'We are an operationally disciplined manpower structure engineered for scale, presentation, and command.'
                        },
                        {
                            type: 'paragraph',
                            content: 'Where conventional agencies focus on headcount, Skyline focuses on supervision, deterrence architecture, risk reduction, and controlled execution. Every deployment is structured under defined reporting chains, inspection cycles, and escalation frameworks.'
                        },
                        {
                            type: 'highlight',
                            content: 'Our objective is simple: Create secure, controlled, professionally managed environments that reinforce client credibility while minimizing exposure to operational risk.'
                        }
                    ]
                },
                {
                    id: 'page-3-capacity',
                    title: 'ORGANIZATIONAL CAPACITY',
                    backgroundColor: 'dark',
                    content: [
                        {
                            type: 'highlight',
                            content: 'Active Deployment Strength'
                        },
                        {
                            type: 'bulletList',
                            content: [
                                '100 Licensed Security Guards',
                                '200 Event & Crowd Control Professionals',
                                '100 Housekeeping & Facility Personnel'
                            ]
                        },
                        {
                            type: 'paragraph',
                            content: 'This structured manpower base enables immediate mobilization across single or multi-site operations, including large-format projects and high-density environments.'
                        },
                        {
                            type: 'highlight',
                            content: 'Each assignment operates under'
                        },
                        {
                            type: 'bulletList',
                            content: [
                                'Site-Level Supervision',
                                'Rotational Quality Audits',
                                'Documented Incident Reporting',
                                'Escalation Hierarchy'
                            ]
                        },
                        {
                            type: 'paragraph',
                            content: 'We are built for institutional clients, not short-term assignments.'
                        }
                    ]
                },
                {
                    id: 'page-4-corporate',
                    title: 'CORPORATE & COMMERCIAL SECURITY',
                    backgroundColor: 'primary',
                    content: [
                        {
                            type: 'paragraph',
                            content: 'Corporate environments require visible authority without operational disruption.'
                        },
                        {
                            type: 'paragraph',
                            content: 'Skyline provides formally groomed security personnel trained in:'
                        },
                        {
                            type: 'bulletList',
                            content: [
                                'Access Control Protocols',
                                'Visitor Authorization Systems',
                                'Employee Verification',
                                'Internal Patrol Structuring',
                                'Documentation Discipline'
                            ]
                        },
                        {
                            type: 'paragraph',
                            content: 'We integrate seamlessly with administrative and facility teams to ensure asset protection, personnel safety, and business continuity.'
                        },
                        {
                            type: 'highlight',
                            content: 'Security must enhance professionalism, not compromise it. Our presence reinforces order, control, and credibility.'
                        }
                    ]
                },
                {
                    id: 'page-5-hospitality',
                    title: 'HOSPITALITY & EXECUTIVE ENVIRONMENTS',
                    backgroundColor: 'accent',
                    content: [
                        {
                            type: 'paragraph',
                            content: 'Hotels and motels demand discretion, composure, and refined conduct.'
                        },
                        {
                            type: 'paragraph',
                            content: 'Our hospitality security teams are trained for:'
                        },
                        {
                            type: 'bulletList',
                            content: [
                                'Guest-Sensitive Access Management',
                                'VIP Coordination',
                                'Event Integration Oversight',
                                'Perimeter Monitoring',
                                'Parking & Entry Regulation'
                            ]
                        },
                        {
                            type: 'paragraph',
                            content: 'Presentation standards align with luxury hospitality expectations. Authority is maintained without intrusion.'
                        },
                        {
                            type: 'highlight',
                            content: 'We protect your guests, your reputation, and your operational stability.'
                        }
                    ]
                },
                {
                    id: 'page-6-industrial',
                    title: 'CONSTRUCTION, INDUSTRIAL & WAREHOUSE SECURITY',
                    backgroundColor: 'dark',
                    content: [
                        {
                            type: 'paragraph',
                            content: 'Large-scale infrastructure and industrial environments require structured vigilance.'
                        },
                        {
                            type: 'paragraph',
                            content: 'Skyline implements:'
                        },
                        {
                            type: 'bulletList',
                            content: [
                                'Material Gate-Pass Verification',
                                'Vehicle Inspection Procedures',
                                'Equipment Surveillance',
                                'After-Hours Perimeter Control',
                                'Shift-Based Reporting Systems'
                            ]
                        },
                        {
                            type: 'paragraph',
                            content: 'Builders, conglomerates, and warehouse operators rely on predictable protection frameworks. Our role is to reduce material loss, eliminate unauthorized access, and safeguard operational continuity.'
                        }
                    ]
                },
                {
                    id: 'page-7-residential-event',
                    title: 'RESIDENTIAL & EVENT COMMAND',
                    backgroundColor: 'light',
                    content: [
                        {
                            type: 'highlight',
                            content: 'Residential Security'
                        },
                        {
                            type: 'bulletList',
                            content: [
                                'Controlled Gate Access',
                                'Vendor & Visitor Logging',
                                'Night Patrol Scheduling',
                                'Parking Regulation'
                            ]
                        },
                        {
                            type: 'highlight',
                            content: 'Event & Crowd Control'
                        },
                        {
                            type: 'bulletList',
                            content: [
                                'Zonal Crowd Structuring',
                                'VIP Corridor Management',
                                'Entry Flow Regulation',
                                'De-Escalation Positioning'
                            ]
                        },
                        {
                            type: 'paragraph',
                            content: 'We provide structured presence in both controlled communities and dynamic environments.'
                        },
                        {
                            type: 'highlight',
                            content: 'Authority without chaos. Strength without disorder.'
                        }
                    ]
                },
                {
                    id: 'page-8-housekeeping',
                    title: 'HOUSEKEEPING & FACILITY MANAGEMENT',
                    backgroundColor: 'primary',
                    content: [
                        {
                            type: 'paragraph',
                            content: 'Premium environments demand operational cleanliness standards.'
                        },
                        {
                            type: 'paragraph',
                            content: 'Our housekeeping division provides:'
                        },
                        {
                            type: 'bulletList',
                            content: [
                                'Scheduled Cleaning Programs',
                                'Deep Cleaning & Sanitization',
                                'Post-Event Restoration',
                                'Facility Support Operations'
                            ]
                        },
                        {
                            type: 'paragraph',
                            content: 'All teams operate under supervisory review and task documentation systems.'
                        },
                        {
                            type: 'highlight',
                            content: 'Cleanliness is discipline made visible.'
                        }
                    ]
                },
                {
                    id: 'page-9-supervision',
                    title: 'SUPERVISION & ACCOUNTABILITY',
                    backgroundColor: 'dark',
                    content: [
                        {
                            type: 'paragraph',
                            content: 'Skyline enforces operational discipline through:'
                        },
                        {
                            type: 'bulletList',
                            content: [
                                'Layered Supervision',
                                'Rotational Inspection Audits',
                                'Incident Documentation Reviews',
                                'Performance Feedback Loops'
                            ]
                        },
                        {
                            type: 'highlight',
                            content: 'Security fails where supervision fails. We remove that vulnerability.'
                        }
                    ]
                },
                {
                    id: 'page-10-commitment',
                    title: 'CLIENT COMMITMENT',
                    backgroundColor: 'accent',
                    layout: 'feature',
                    content: [
                        {
                            type: 'paragraph',
                            content: 'We commit to:'
                        },
                        {
                            type: 'bulletList',
                            content: [
                                'Immediate Deployment',
                                'Structured Reporting',
                                'Professional Grooming',
                                'Clear Escalation Channels',
                                'Long-Term Strategic Partnership'
                            ]
                        },
                        {
                            type: 'highlight',
                            content: 'Skyline Security Services operates as a command partner, not a vendor.'
                        }
                    ]
                }
            ]
        }
    ];
}