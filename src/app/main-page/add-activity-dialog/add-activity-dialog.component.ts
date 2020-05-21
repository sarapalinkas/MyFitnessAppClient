import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../main-page.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-activity-dialog',
  templateUrl: './add-activity-dialog.component.html',
  styleUrls: ['./add-activity-dialog.component.scss']
})
export class AddActivityDialogComponent implements OnInit {

  goals = ["Workout", "Nature", "Meditation"];

  constructor(public dialogRef: MatDialogRef<AddActivityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
