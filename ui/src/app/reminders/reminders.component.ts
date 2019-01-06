import { Component, OnInit } from '@angular/core';
import { RemindersService, Reminder } from '../reminders.service';
import { delay } from 'q';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {

  activeReminders: Reminder[];
  completedReminders: Reminder[];
  reminderMessage: string;

  constructor(private reminderService: RemindersService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.reminderService.getRemindersList().subscribe((data: Reminder[]) => {
      this.activeReminders = data.filter((a) => !a.complete);
      this.completedReminders = data.filter((a) => a.complete);
    });
  }
  addReminder(event) {
    if (event.target.value === '') {
    } else {
    const newReminder: Reminder = {
      message: event.target.value,
      id: '',
      complete: false
    };
    this.reminderService.addReminder(newReminder).subscribe(() => {
      this.reminderMessage = '';
      this.getAll();
    });
  }
  }

  completeReminder(reminder: Reminder) {
    this.reminderService.completeReminder(reminder).subscribe(() => {
      this.getAll();
    });
  }
  deleteReminder(reminder: Reminder) {
    this.reminderService.deleteReminder(reminder).subscribe(() => {
      this.getAll();
    });
  }
}
