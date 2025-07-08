import { Component } from '@angular/core';

interface User {
  login: string;
  fullName: string;
  organization: string;
  email: string;
  roles: string[];
  emailAvailable: boolean;
  selected: boolean;
}

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent {
  users: User[] = [
    {
      login: 'i.ivanov',
      fullName: 'Ivan Ivanov',
      organization: 'JSC ASE',
      email: 'i.ivanov@mail.com',
      roles: ['Admin', 'Operator'],
      emailAvailable: true,
      selected: false
    },
    {
      login: 'p.petrov',
      fullName: 'Petr Petrov',
      organization: 'JSC ASE',
      email: 'p.petrov@mail.com',
      roles: ['Operator'],
      emailAvailable: false,
      selected: false
    },
    {
      login: 's.semenov',
      fullName: 'Semen Semenov',
      organization: 'JSC ASE',
      email: 's.semenov@mail.com',
      roles: ['Security'],
      emailAvailable: true,
      selected: false
    },
    {
      login: 'o.olegov',
      fullName: 'Oleg Olegov',
      organization: 'JSC ASE',
      email: 'o.olegov@mail.com',
      roles: ['Moderator'],
      emailAvailable: true,
      selected: false
    },
    {
      login: 'i.ivanov',
      fullName: 'Ivan Ivanov',
      organization: 'JSC ASE',
      email: 'i.ivanov@mail.com',
      roles: ['Operator'],
      emailAvailable: false,
      selected: false
    },
    {
      login: 'p.petrov',
      fullName: 'Petr Petrov',
      organization: 'JSC ASE',
      email: 'p.petrov@mail.com',
      roles: ['Tester'],
      emailAvailable: false,
      selected: false
    }
  ];

  toggleSelection(user: User) {
    user.selected = !user.selected;
  }

  get selectedCount(): number {
    return this.users.filter(user => user.selected).length;
  }

  get hasSelectedUsers(): boolean {
    return this.selectedCount > 0;
  }

  toggleEmailAvailability() {
    const selectedUsers = this.users.filter(user => user.selected);
    selectedUsers.forEach(user => {
      user.emailAvailable = !user.emailAvailable;
    });
  }

  assignRolesTest() {
    console.log('assignroles');
  }

  filterTest() {
    console.log('filter')
  }
}