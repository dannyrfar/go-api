import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class RemindersService {
  constructor(private httpClient: HttpClient) {}

  getRemindersList() {
    return this.httpClient.get(environment.gateway + '/reminders');
  }

  addReminder(reminder: Reminder) {
    return this.httpClient.post(environment.gateway + '/reminders', reminder);
  }

  completeReminder(reminder: Reminder) {
    return this.httpClient.put(environment.gateway + '/reminders', reminder);
  }

  deleteReminder(reminder: Reminder) {
    return this.httpClient.delete(environment.gateway + '/reminders/' + reminder.id);
  }
}

export class Reminder {
  id: string;
  message: string;
  complete: boolean;
}
