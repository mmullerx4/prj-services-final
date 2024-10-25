import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  //remove this
 //@Output() featureSelected = new EventEmitter<string>();

  //removed href and onclick on template
  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }


}
