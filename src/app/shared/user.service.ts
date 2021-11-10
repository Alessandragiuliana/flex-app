import { Injectable } from '@angular/core';
import { IUser } from '../model/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
users : IUser[]=[
  {
    id:1,
    name:"Pablo",
    surname:"Picasso",
    imageUrl:"https://www.vivicreativo.com/wp-content/uploads/2015/09/picasso.jpg",
    message:" Come stai?",
    time:"7:00 PM",
    iconMessage: true,
    online: true,
},
{   id:2,
    name:"Claude",
    surname:"Monet",
    imageUrl:"https://biografieonline.it/img/bio/Claude_Monet_1.jpg",
    message:"Sto tornando dalla Francia...",
    time:"5:00 PM",
    iconMessage: false,
    online: false,
},
{
    id:3,
    name:"Paul",
    surname:"Cezanne",
    imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/C%C3%A9zanne_au_chapeau_melon%2C_par_Paul_C%C3%A9zanne%2C_esquisse%2C_York.jpg/220px-C%C3%A9zanne_au_chapeau_melon%2C_par_Paul_C%C3%A9zanne%2C_esquisse%2C_York.jpg",
    message:"Hai visto il cesto di mele?",
    time:"12:00 AM",
    iconMessage: false,
    online: false, 
},
{   
    id:4,
    name:"Frida",
    surname:"Kahlo",
    imageUrl:"https://www.occhi.it/wp-content/uploads/2020/02/dietro-la-copertina-frida.jpg",
    message:"Ho rifatto le sopracciglia",
    time:"2:00 PM",
    iconMessage: true,
    online: true,
},
{
    id:5,
    name:"Edouard",
    surname:"Manet",
    imageUrl:"https://www.venividivici.us/wp-content/uploads/2018/04/Edouard-Manet-1832-1883.jpg",
    message:"Colazione sull'erba?",
    time:"3.32 PM",
    iconMessage: true,
    online: true,
},
{
    id:6,
    name:"Pierre",
    surname:"Renoir",
    imageUrl:"https://images.prismic.io/barnebys/05f4484e-304e-49b9-ba68-cf00667788f0_5d580674-c77a-4168-87fb-320ebab3b5b3_Pierre-Auguste_Renoir_-_Autoportrait__1875.jpg?w=900&auto=format%2Ccompress&cs=tinysrgb",
    message:"Bella Stoccolma",
    time:"12.32 PM",
    iconMessage: false,
    online: false,
},
{
    id:7,
    name:"Pablo",
    surname:"Picasso",
    imageUrl:"https://www.vivicreativo.com/wp-content/uploads/2015/09/picasso.jpg",
    message:"Ciao come stai?",
    time:"2:00 PM",
    iconMessage: true,
    online: true,
},
{
    id:8,
    name:"Claude",
    surname:"Monet",
    imageUrl:"https://biografieonline.it/img/bio/Claude_Monet_1.jpg",
    message:"Sto tornando dalla Francia...",
    time:"6:35 AM",
    iconMessage: false,
    online: false,
},

]
getUsers(): Observable<IUser[]> {
  return of (this.users);
}

login(mes:string){
  console.log("users-service", mes);
}

  constructor() { }
}
