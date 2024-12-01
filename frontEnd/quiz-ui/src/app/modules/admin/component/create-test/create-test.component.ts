import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-test',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './create-test.component.html',
  styleUrl: './create-test.component.scss'
})
export class CreateTestComponent implements OnInit {

  fb = inject(FormBuilder);
  testForm: FormGroup;

 ngOnInit(): void {
  this.testForm = this.fb.group({
    title: [null, Validators.required],
    description: [null, Validators.required],
    time: [null, Validators.required],
  });
}

 

 



}
