import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {


  chatFormGroup: FormGroup = new FormGroup({
    message: new FormControl('',Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    let message = this.chatFormGroup.controls.message.value;
    alert(message);
  }

}
