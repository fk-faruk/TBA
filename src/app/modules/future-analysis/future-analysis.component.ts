import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-future-analysis',
  templateUrl: './future-analysis.component.html',
  styleUrls: ['./future-analysis.component.scss']
})
export class FutureAnalysisComponent {


   activeTab = 0
   activeTab2 = 0
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

  references = [
    "Aston, E. et al. (2022). Technology and Police Legitimacy. Springer. Available at: https://link.springer.com/chapter/10.1007/978-3-030-83685-6_4 (Accessed: 20 June 2025).",
    "Baillie, M. (2019). Behind the Camera: A Criminological Study of CCTV. University of Hull. Available at: https://crimsoc.hull.ac.uk/wp-content/uploads/2020/06/2020_Baillie_MACrim_CCTV.pdf (Accessed: 20 June 2025).",
    "Brock, A. and Goodey, J. (2022). Policing HS2 Project. Springer. Available at: https://www.researchgate.net/publication/361657770 (Accessed: 20 June 2025).",
    "Greenwood-Reeves, J. (2022). Vehicles of control: The securitisation of surveillant automobility. Security Journal, 35(3), pp.366–383. Available at: https://doi.org/10.1057/s41284-020-00266-y (Accessed: 20 June 2025).",
    "Hansen, M.A. et al. (2022). Law Enforcement Websites. Available at: https://www.utupub.fi/handle/10024/159988 (Accessed: 20 June 2025).",
    "Joshi, R. et al. (2023). Informal and Shared Mobility. Volvo Research and Educational Foundations. Available at: https://www.researchgate.net/publication/377442619 (Accessed: 20 June 2025).",
    "Martin, E. (2020). Stakeholder Perceptions on Electrification of Motorcycle Taxis. TU Berlin. Available at: https://www.static.tu.berlin/fileadmin/www/40000121/Masterarbeiten/Emilie_Martin__2020.pdf (Accessed: 20 June 2025).",
    "Martínez, I. (2021). The Future of the Automotive Industry. Springer. Available at: https://link.springer.com/content/pdf/10.1007/978-1-4842-7026-4.pdf (Accessed: 20 June 2025).",
    "Shane, J. (2024). Advancing Proactive Policing. Springer. Available at: https://link.springer.com/content/pdf/10.1007/978-3-031-86126-0.pdf (Accessed: 20 June 2025).",
    "Shukla, M. (2025). Security risks of urban elements in the street ecosystem. UCL Discovery. Available at: https://discovery.ucl.ac.uk/id/eprint/10206279/ (Accessed: 20 June 2025).",
    "Smith, R. and Coxhead, J. (2024). Policing and investigating criminal activities by gangs using e-bikes. Special Topics in Policing, Springer. Available at: https://repository.uel.ac.uk/download/3edf8cdedc3469f8d152547418bd1f43118f30ddd2f03299d40fb355aa234dff/523152 (Accessed: 20 June 2025).",
    "Witzell, J. et al. (2022). Exploring new mobility services. VTI Publications. Available at: https://www.diva-portal.org/smash/get/diva2:1651895/FULLTEXT01.pdf (Accessed: 20 June 2025).",
    "Schräder, T. et al. (2024). Parents’ perspectives on transporting children in autonomous vehicles. Transport Research Part F, 97, pp.85–102. Available at: https://doi.org/10.1016/j.trf.2024.03.002 (Accessed: 20 June 2025).",
    "Zhang, Y., Nelson, J.D. and Mulley, C. (2024). Learning from the evidence: Insights for regulating e-scooters. Transport Policy, 141, pp.62–73. Available at: https://doi.org/10.1016/j.tranpol.2024.04.009 (Accessed: 20 June 2025)."
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
