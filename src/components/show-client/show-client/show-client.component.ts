import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/Client';
import { GymService } from '../../../services/gym.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-show-client',
  standalone: true,
  imports: [JsonPipe, AsyncPipe,HttpClientModule],
  providers: [GymService],  // this is for the service to be injected in the component
  templateUrl: './show-client.component.html',
  styleUrl: './show-client.component.css'
})

export class ShowClientComponent implements OnInit {

constructor(public clientsService: GymService){
}

clients:Client[]=[];
ngOnInit(): void{
 this.clientsService.getClients().subscribe(c=>{
  this.clients=c;
});
}

}