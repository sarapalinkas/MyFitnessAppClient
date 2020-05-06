import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateDialogData } from '../details-page.component';

@Component({
  selector: 'app-update-goals',
  templateUrl: './update-goals.component.html',
  styleUrls: ['./update-goals.component.scss']
})
export class UpdateGoalsComponent implements OnInit {
  public quantity: number;
  public frequency: number;

  constructor(public dialogRef: MatDialogRef<UpdateGoalsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UpdateDialogData) { }

  ngOnInit(): void {
    this.quantity = this.data.goal.goalQuantity;
    if(this.data.goal.frequency)
    {
      this.frequency = this.data.goal.frequency;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
