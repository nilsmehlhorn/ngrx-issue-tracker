import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from '../../models/issue';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.scss'],
})
export class NewIssueComponent {
  form: FormGroup;

  @Output()
  submitNew = new EventEmitter<Issue>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['low', Validators.required],
    });
  }

  onSubmit(): void {
    const issue = this.form.value;
    this.submitNew.emit(issue);
  }
}
