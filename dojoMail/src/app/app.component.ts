import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  users:any[]= [
    {
      email: 'bill@gates.com',
      importance: 'High',
      subject: 'New Windows',
      content: 'Windows XI will launch in year 2100'
    },
    {
      email: 'ada@lovelace.com',
      importance: 'High',
      subject: 'Progamming',
      content: 'Enchantress of numbers'
    },
    {
      email: 'john@carmac.com',
      importance: 'Low',
      subject: 'Updated Algo',
      content: 'New algorithn for shadow volumes'
    },
    {
      email: 'gabe@newel.com',
      importance: 'Low',
      subject: 'HL3!',
      content: 'Just kidding..'
    },
    
  ]
}
