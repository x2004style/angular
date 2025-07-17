import { Component } from '@angular/core';

interface User {
  login: string;
  fullName: string;
  organization: string;
  email: string;
  roles: string[];
  emailAvailable: boolean;
  selected?: boolean;
  markedForDeletion?: boolean;
  result?: string;
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


  filterTest() {
    console.log('filter')
  }

  allRoles: string[] = ['Admin', 'Operator', 'User', 'Manager', 'Analyst', 'Guest'];
  selectedRoles: string[] = [];

  showRoleAssignment = false;

  toggleRoleAssignment() {
    if (this.hasSelectedUsers) {
      this.showRoleAssignment = !this.showRoleAssignment;
    }
  }

  isRoleSelected(role: string): boolean {
    return this.selectedRoles.includes(role);
  }

  closeSidenav() {
    this.showRoleAssignment = false;
  }

  showNewView = false;

  cancelProcess(): void {
    this.showNewView = false;
    this.users.forEach(u => u.selected = false);
  }

  runProcess(): void {
    this.users.forEach(u => u.result = '-');
    const selected = this.users.filter(u => u.selected);
    if (selected.length > 0) {
      selected.slice(0, 2).forEach(u => u.result = 'Passed');
      selected[2].result = 'Not passed';
    }
  }

  toggleNewView(): void {
    this.showNewView = !this.showNewView;
    if (this.showNewView) {
      this.users.forEach(u => u.markedForDeletion = false);
    }
  }

  deleteSelected(): void {
    this.users = this.users.filter(u => !u.markedForDeletion);
  }

  toggleDeleteSelection(user: User) {
    user.markedForDeletion = !user.markedForDeletion;
  }
}