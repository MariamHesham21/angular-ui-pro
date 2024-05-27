import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-activities',
  templateUrl: './recent-activities.component.html',
  styleUrls: ['./recent-activities.component.css']
})
export class RecentActivitiesComponent {
  activities: any = [
    { num: 1462, jobs: 100, actionType: 'action type', date: '10-05-2023', time: '10:47:25' },
    { num: 9472, jobs: 1200, actionType: 'new activation', date: '10-05-2023', time: '10:47:25' },
    { num: 8765, jobs: 3200, actionType: 'new activation', date: '10-05-2023', time: '10:47:25' },
    { num: 9876, jobs: 980, actionType: 'action type', date: '10-05-2023', time: '10:47:25' },
  ];
}
