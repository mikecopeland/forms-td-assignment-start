import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

const defaultFormData = {
  email: '',
  subscriptionLevel: 'Advanced',
  password: ''
};

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {
  @ViewChild('subscriptionForm') sForm: NgForm;
  formSubmission = defaultFormData;
  subscriptionLevels: string[] = ['Basic', 'Advanced', 'Pro'];
  formHasBeenSubmitted = false;
  submittedData: any;

  constructor() {  }

  ngOnInit() {

  }

  onSubscriptionFormSubmit() {
    if (this.sForm.valid) {
      this.submittedData = this.sForm.form.value;
      this.formHasBeenSubmitted = true;
    }
  }

}
