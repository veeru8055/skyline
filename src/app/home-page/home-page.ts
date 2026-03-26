import { Component } from '@angular/core';
import { SplitSectionData } from '../models/split-section.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePageComponent {
  servicesData: SplitSectionData = {
    leftSide: [
      {
        id: 'corporate',
        leftTitle: 'CORPORATE & COMMERCIAL SECURITY',
        leftDescription: 'Corporate environments require visible authority without operational disruption. We provide formally groomed security personnel trained in access control, visitor authorization, employee verification, internal patrol structuring, and documentation discipline.'
      },
      {
        id: 'hospitality',
        leftTitle: 'HOSPITALITY & EXECUTIVE ENVIRONMENTS',
        leftDescription: 'Hotels and motels demand discretion, composure, and refined conduct. Our teams are trained for guest-sensitive access management, VIP coordination, event integration oversight, perimeter monitoring, and parking & entry regulation.'
      },
      {
        id: 'construction',
        leftTitle: 'CONSTRUCTION, INDUSTRIAL & WAREHOUSE SECURITY',
        leftDescription: 'Large-scale infrastructure and industrial environments require structured vigilance. We implement material gate-pass verification, vehicle inspection procedures, equipment surveillance, after-hours perimeter control, and shift-based reporting systems.'
      }
    ],
    middleCards: [
      { id: 'corporate', title: 'Corporate Security' },
      { id: 'hospitality', title: 'Hospitality Security' },
      { id: 'construction', title: 'Industrial Security' },
      { id: 'residential', title: 'Residential Security' },
      { id: 'event', title: 'Event & Crowd Control' },
      { id: 'housekeeping', title: 'Housekeeping & Facility' }
    ],
    rightSide: [
      {
        id: 'residential',
        rightTitle: 'RESIDENTIAL SECURITY',
        rightDescription: 'Controlled gate access, vendor & visitor logging, night patrol scheduling, parking regulation.'
      },
      {
        id: 'event',
        rightTitle: 'EVENT & CROWD CONTROL',
        rightDescription: 'Zonal crowd structuring, VIP corridor management, entry flow regulation, de-escalation positioning.'
      },
      {
        id: 'housekeeping',
        rightTitle: 'HOUSEKEEPING & FACILITY MANAGEMENT',
        rightDescription: 'Scheduled cleaning programs, deep cleaning & sanitization, post-event restoration, facility support operations.'
      }
    ]
  };

  commitmentData: SplitSectionData = {
    leftSide: [
      {
        id: 'commitment',
        leftTitle: 'OUR COMMITMENT',
        leftDescription: 'Our security professionals are trained to anticipate, not react. To deter, not escalate. To protect, not perform. We operate with clarity of purpose, strength of character, and total ownership of every post we command.'
      }
    ],
    middleCards: [
      { id: 'capacity', title: 'Organizational Capacity' },
      { id: 'tactic', title: 'Operational Tactic' },
      { id: 'supervision', title: 'Supervision & Accountability' }
    ],
    rightSide: [
      {
        id: 'why',
        rightTitle: 'WHY SKYLINE?',
        rightDescription: 'Our objective is simple: Create secure, controlled, professionally managed environments that reinforce client credibility while minimizing exposure to operational risk.'
      }
    ]
  };
}
