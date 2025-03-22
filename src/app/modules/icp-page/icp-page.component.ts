import { Component } from '@angular/core';import { Input } from '@angular/core';



@Component({
  selector: 'app-icp-page',
  templateUrl: './icp-page.component.html',
  styleUrls: ['./icp-page.component.scss']
})
export class IcpPageComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;



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
