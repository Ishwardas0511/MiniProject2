import { Component, OnInit } from '@angular/core';
import{ContactModel} from './ContactModel';
import{ContactService} from './contact.service';

@Component({
  selector: 'app-contactfinal',
  templateUrl: './contactfinal.component.html',
  styleUrls: ['./contactfinal.component.css']
})
export class ContactfinalComponent implements OnInit {
contact:ContactModel;
search:ContactModel;
contacts:ContactModel[];
contactsearch:ContactModel[];
add:boolean;
element:ContactModel;
test:string;
delt:boolean;
fun:boolean;




  constructor(private contactser:ContactService) { 
   this.contacts=[];
   this.contactsearch=[];
   this.add=false;
   this.fun =false;
   this.contact=new ContactModel();
   this.element=new ContactModel();
   this.contacts=this.contactser.getContacts();
   this.contacts.sort((a, b) => (a.firstname > b.firstname) ? 1 : -1);
  }

  ngOnInit(): void {
  }
  
  Add()
  { this.add=true;

  }
  save()
  {
   
    this.contacts.push(this.contact);
    this.contact=new ContactModel();
    this.add=false;
  
    this.contacts.sort((a, b) => (a.firstname > b.firstname) ? 1 : -1);
  }
  delete(p)
  {
   
    this.delt=true;
   
    this.contacts.splice(this.contacts.indexOf(p),1);
  
  }
  cancel()
  {
    this.add=false;
  }
  searching()
  {
    if(this.test!="")
    {
      
      for(let i=0;i<this.contacts.length;i++)
      {
        if(this.test==this.contacts[i].lastname)
        {
          this.element=this.contacts[i];
          this.contactsearch.push(this.element);
          this.element=new ContactModel();
        }
        this.fun=true;
      }
    }
    else if(this.test=="")
    {
      this.fun=false;
      this.element=new ContactModel();
      this.contactsearch=[];
      
    }
  }

  
  }
  




