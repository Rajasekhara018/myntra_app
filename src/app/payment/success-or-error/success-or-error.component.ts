import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-or-error',
  templateUrl: './success-or-error.component.html',
  styleUrls: ['../payment.component.scss']
})
export class SuccessOrErrorComponent implements OnInit {
  @Input() page4: boolean = false;
  @Input() page5: boolean = false;
  @Input() ta: string;
  constructor() { }

  ngOnInit(): void {
  }

}
