import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})

export class ContactPageComponent implements OnInit {
  
  
 
  constructor() {
   }
  
  ngOnInit(): void {
    
  }
  Fname:string ='';
  Lname:string='';
  Email:string='';
  Message:string='';
  public sendEmail(Fname:string, Lname:string, Email:string, Message:string) {
    console.log("clicked");
    var templateParams = {
      name: Fname,
      notes: Message,
      to_email: Email
  };
  console.log("here",templateParams);
   
  emailjs.send('service_69mkg1r', 'template_szwogt9', templateParams,'8tXuf161BWTGG7RDr')
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
      });
    
  }

}
