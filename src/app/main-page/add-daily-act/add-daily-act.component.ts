import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-daily-act',
  templateUrl: './add-daily-act.component.html',
  styleUrls: ['./add-daily-act.component.scss']
})
export class AddDailyActComponent implements OnInit {
  goals = ["Sleep", "Fruit", "Vegetable"];

  constructor(public dialogRef: MatDialogRef<AddDailyActComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
