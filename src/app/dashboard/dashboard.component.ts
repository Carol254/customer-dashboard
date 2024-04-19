import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit{

  ngOnInit(){
    const button = document.querySelector('#sidebar-toggle');
    const wrapper = document.querySelector('#wrapper');
    const elements: NodeListOf<Element> = document.querySelectorAll('.side-nav-item');

    if (button && wrapper) {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        wrapper.classList.toggle('toggled');
       elements.forEach((el)=>{
        el.classList.toggle('toggled');
       });

      });
    }
  }
  
;
}
