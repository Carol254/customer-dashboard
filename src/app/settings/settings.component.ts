import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit{
  

  ngOnInit(): void {
    const toggleSwitch:any = document.querySelector('.theme-switch input[type="checkbox"]');

    function switchTheme(e:any) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
        }    
    }
    
    toggleSwitch.addEventListener('change', switchTheme, false);
  }




}
