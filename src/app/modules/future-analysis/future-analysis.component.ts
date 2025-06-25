import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-future-analysis',
  templateUrl: './future-analysis.component.html',
  styleUrls: ['./future-analysis.component.scss']
})
export class FutureAnalysisComponent {


   activeTab = 0
    tabs = ["Correlation Analysis", "Trend Analysis", "Time series Analysis and Heatmaps"]

    tabs2 = ['Clustering', 'Geospatial Analysis', 'Predictive Analysis']
  // correlationData: CorrelationData[] = []
  // pieData: PieData[] = []
  // insights: Insight[] = []

    @Input() collapsed = false;
    @Input() screenWidth = 0;
  


   solutions: {
    icon: string;
    title: string;
    description: string;
    priority: "High" | "Medium" | "Low";
  }[] = [
    {
      icon: 'icon1',
      title: 'Smart Crime Reporting Platform',
      description: 'A dual-interface application for the public and police to submit real-time crime reports, geotagged using phone GPS, and integrated with police force dashboards.',
      priority: 'High'
    },
    {
      icon: 'icon2',
      title: 'Licensing and Registration',
      description: 'Mandatory licensing of e-scooters and e-bikes for crime prevention and create traceable ownership databases.',
      priority: 'Medium'
    },
    {
      icon: 'icon3',
      title: 'Police and Public Training',
      description: 'Awareness campaigns for the public on safe riding and secure storage, and police training on standardized data entry and app usage.',
      priority: 'Low'
    },
    {
      icon: 'icon1',
      title: 'GPS Tracker Mandate',
      description: 'Regulated installation of GPS trackers in all e-mobility devices sold in the UK to track stolen devices.',
      priority: 'High'
    },
    {
      icon: 'icon2',
      title: 'Retail and Distributor Regulation and Grey Market Prevention',
      description: 'Licensing of all e-bike and scooter retailers and distributors to limit illegal sales and imports.',
      priority: 'Medium'
    },
    {
      icon: 'icon3',
      title: 'Geospatial Crime Monitoring Dashboard',
      description: 'Power BI and Python-driven dashboard to monitor real-time trends, detect hotspots, and inform patrol strategy. Weekly reports to each force on their report quality, delays, and anomaly trends.',
      priority: 'Low'
    },
    {
      icon: 'icon2',
      title: 'Manufacturer collaboration',
      description: 'Collaboration with manufacturers to have specificity for UK e-mobiles, also to regulate the grey market and grey market control.',
      priority: 'Medium'
    },
    {
      icon: 'icon3',
      title: 'Improved lighting, police patrols, and CCTV',
      description: 'To control e-mobile accessories theft and other offences at crime hotspots and peak periods.',
      priority: 'Low'
    }
  ];

  riskItems: {
    risk: string;
    mitigation: string;
    severity: "High" | "Medium" | "Low";
  }[] = [
    {
      risk: 'Theft and Theft of Pedal Cycle',
      mitigation: 'Sharp peak early Monday mornings (0:00–2:00), likely reflecting crimes from Sunday night. Otherwise, consistent low-to-moderate activity throughout the week.',
      severity: 'Medium'
    },
    {
      risk: 'Robbery',
      mitigation: 'Hotspots on weekend evenings (especially Friday and Saturday between 20:00–23:00). Lesser but visible activity on weekday evenings.',
      severity: 'High'
    },
    {
      risk: 'Assault',
      mitigation: 'Broader spread across the afternoons and evenings (12:00–22:00), particularly Friday and Saturday. Likely linked to nightlife or social gatherings.',
      severity: 'Medium'
    },
    {
      risk: 'Criminal Damage',
      mitigation: 'High frequency overnight into early Monday (0:00–2:00) and Saturday evenings. 	Shows repeated late-night spikes, indicating vandalism often occurs when surveillance is low.',
      severity: 'Low'
    }
  ];

    getBodyClass(): string {
      let styleClass = '';
      if(this.collapsed && this.screenWidth > 768) {
        styleClass = 'body-trimmed';
      } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
        styleClass = 'body-md-screen'
      }
      return styleClass;
    }
    


}
