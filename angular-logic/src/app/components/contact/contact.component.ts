import { ConnectionService } from '../../services/connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

contactForm: FormGroup;
disabledSubmitButton: boolean = true;

  @HostListener('input') oninput() {

  if (this.contactForm.valid) {
    this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private connectionService: ConnectionService) {

  this.contactForm = fb.group({
    'name': ['', Validators.required],
    'email': ['', Validators.compose([Validators.required, Validators.email])],
    'query': ['', Validators.required],
    });
  }

  onSubmit() {
    this.connectionService.sendQuery(this.contactForm.value).subscribe(() => {
      alert('Your query has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  }

  }
