import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent {

  @Input() items: string[] = [];
  @Input() onChangeFunc: Function = () => {}
}

