import { Component } from '@angular/core';

@Component({
  selector: 'app-ifromation',
  standalone: true,
  imports: [],
  templateUrl: './ifromation.component.html',
  styleUrl: './ifromation.component.css'
})
export class IfromationComponent {
  public  ifromationTxt=''
 showPopUp(txt:string){
 this.ifromationTxt=txt
}
}
