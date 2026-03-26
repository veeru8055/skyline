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
    sections: [
      {
        id: 'corporate-security',
        title: 'CORPORATE & COMMERCIAL SECURITY',
        backgroundColor: 'primary',
        layout: 'standard',
        content: [
          {
            type: 'paragraph',
            content: 'Corporate environments require visible authority without operational disruption.'
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
          }
        ]
      },
      {
        id: 'hospitality-security',
        title: 'HOSPITALITY & EXECUTIVE ENVIRONMENTS',
        backgroundColor: 'light',
        layout: 'standard',
        content: [
          {
            type: 'paragraph',
            content: 'Hotels and motels demand discretion, composure, and refined conduct.'
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
            type: 'highlight',
            content: 'Presentation standards align with luxury hospitality expectations. Authority is maintained without intrusion.'
          }
        ]
      },
      {
        id: 'industrial-security',
        title: 'CONSTRUCTION, INDUSTRIAL & WAREHOUSE SECURITY',
        backgroundColor: 'dark',
        layout: 'standard',
        content: [
          {
            type: 'paragraph',
            content: 'Large-scale infrastructure and industrial environments require structured vigilance.'
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
            content: 'Builders, conglomerates, and warehouse operators rely on predictable protection frameworks.'
          }
        ]
      },
      {
        id: 'residential-event',
        title: 'RESIDENTIAL & EVENT COMMAND',
        backgroundColor: 'accent',
        layout: 'standard',
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
          }
        ]
      },
      {
        id: 'housekeeping',
        title: 'HOUSEKEEPING & FACILITY MANAGEMENT',
        backgroundColor: 'primary',
        layout: 'standard',
        content: [
          {
            type: 'paragraph',
            content: 'Premium environments demand operational cleanliness standards.'
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
            type: 'highlight',
            content: 'All teams operate under supervisory review and task documentation systems.'
          }
        ]
      }
    ]
  };

  commitmentData: SplitSectionData = {
    sections: [
      {
        id: 'our-commitment',
        title: 'OUR COMMITMENT',
        backgroundColor: 'light',
        layout: 'feature',
        content: [
          {
            type: 'paragraph',
            content: 'Our security professionals are trained to anticipate, not react. To deter, not escalate. To protect, not perform. We operate with clarity of purpose, strength of character, and total ownership of every post we command.'
          }
        ]
      },
      {
        id: 'capacity-tactic-supervision',
        title: 'OPERATIONAL EXCELLENCE',
        backgroundColor: 'dark',
        layout: 'standard',
        content: [
          {
            type: 'highlight',
            content: 'Organizational Capacity'
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
            type: 'highlight',
            content: 'Supervision & Accountability'
          },
          {
            type: 'bulletList',
            content: [
              'Layered Supervision',
              'Rotational Inspection Audits',
              'Incident Documentation Reviews',
              'Performance Feedback Loops'
            ]
          }
        ]
      },
      {
        id: 'why-skyline',
        title: 'WHY SKYLINE?',
        backgroundColor: 'primary',
        layout: 'standard',
        content: [
          {
            type: 'paragraph',
            content: 'Our objective is simple: Create secure, controlled, professionally managed environments that reinforce client credibility while minimizing exposure to operational risk.'
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
          }
        ]
      }
    ]
  };
}
