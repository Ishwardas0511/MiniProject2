
import{ ContactModel} from './ContactModel';
 export class ContactService{
     contacts:ContactModel[];
     
     constructor(){
         var contact1,contact2,contact3,contact4,contact5;
         contact1=new ContactModel();
         contact2=new ContactModel();
         contact3=new ContactModel();
         contact4=new ContactModel();
         contact5=new ContactModel();
         this.contacts=[];
        contact1.firstname="ishwar";
        contact1.lastname="das";
    contact1.mob="9351106514";
        this.contacts.push(contact1);
        contact2.firstname="aman";
        contact2.lastname="bajaj";
        contact2.mob="9251106514";
        this.contacts.push(contact2);
        contact3.firstname="somu";
        contact3.lastname="kumar";
        contact3.mob="9105226688";
        this.contacts.push(contact3);
        contact4.firstname="chomu";
        contact4.lastname="kumar";
        contact4.mob="9413642542";
        this.contacts.push(contact4);
        contact5.firstname="bimu";
        contact5.lastname="kumar";
        contact5.mob="9214642542";
        this.contacts.push(contact5);
    }
getContacts():ContactModel[]{
 return this.contacts;
}

 }