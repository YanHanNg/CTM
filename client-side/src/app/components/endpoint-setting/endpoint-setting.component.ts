import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as feather from 'feather-icons';
import { CTMService } from 'src/app/services/ctm.services';

@Component({
  selector: 'app-endpoint-setting',
  templateUrl: './endpoint-setting.component.html',
  styleUrls: ['./endpoint-setting.component.css']
})
export class EndpointSettingComponent implements OnInit {

  //Declare Form for Settings
  form: FormGroup;

  constructor(private fb: FormBuilder, private ctmService: CTMService, private router: Router) { 

    //Get EndpointURL from CTMService
    let ctmEndpointUrl = this.ctmService.getCTMEndPoint();

    this.form = this.fb.group({
      'endpointUrl': this.fb.control(ctmEndpointUrl, [Validators.required])
    })
  }

  get formControl() { return this.form.controls; }

  ngOnInit(): void {
    //Feather Icon Usage
    feather.replace();
  }

  onSettingSubmit = () => {

    //1. Set Endpoint URL
    this.ctmService.setCTMEndPoint(this.form.get('endpointUrl').value);
    //2. Reset the Setting Form.
    this.form.reset();
    //3. Redirect back to Log In Page
    this.router.navigate(['/']);
  }

}
