import { Component, VERSION, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent {
 
  name = "Angular " + VERSION.major;

  

  @ViewChild("myNameElem") myNameElem: ElementRef;

  

  getValue() {

    console.log(this.myNameElem.nativeElement.value);

  }

  

  resetValue() {

    this.myNameElem.nativeElement.value = "";

  }

}