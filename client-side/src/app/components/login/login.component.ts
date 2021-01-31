import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as feather from 'feather-icons';
import { CTMService } from 'src/app/services/ctm.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //ViewChild for Autofocus for Username
  @ViewChild("username") myUsernameInputField: ElementRef;

  //Boolean for enabling the Login Button
  enableLogin: Boolean = false;
  //displayTitle, default set to Please Login
  displayTitle = 'Please Log In';

  constructor(private ctmService: CTMService) { }

  ngOnInit(): void {
    //Feather Icon Usage
    feather.replace();

    //Validate Endpoint Setting
    this.validateCTMEndpoint();
    
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.myUsernameInputField.nativeElement.focus();
  }

  //Method to Verify if CTM Endpoint is set
  validateCTMEndpoint = () => {
    //Check if Endpoint Setting is Empty, if so disable the Login and Set Display Message Accordingly
    if(this.ctmService.getCTMEndPoint())
    {
      this.enableLogin = true;
      this.displayTitle = 'Please Log In';
    }
    else
    {
      this.enableLogin = false;
      this.displayTitle = 'Please Click on the Setting Icon above to Configure CTM Endpoint.'
    }
  }

}
