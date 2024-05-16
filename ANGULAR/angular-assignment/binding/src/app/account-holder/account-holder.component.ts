import { Component } from '@angular/core';
import { AccountHolder } from './account-holder.models';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-account-holder',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './account-holder.component.html',
  styleUrl: './account-holder.component.css'
})
export class AccountHolderComponent {
accountTypes:string[]=['All','Savings','Business','Current']
selectedAccountType:string='All';

  accounts:AccountHolder[]=[{ accountNumber: 123456, acHolderName: 'John', typeOfAccount: 'Savings', amount: 5000, dateOfAccountCreation: '2024-01-01' },
  { accountNumber: 789012, acHolderName: 'Smith', typeOfAccount: 'Savings', amount: 7000, dateOfAccountCreation: '2022-02-15' },
  { accountNumber: 456789, acHolderName: 'Ram', typeOfAccount: 'Savings', amount: 1500, dateOfAccountCreation: '2020-02-01' },
  { accountNumber: 236849, acHolderName: 'karthi', typeOfAccount: 'Business', amount: 8000, dateOfAccountCreation: '2024-04-17' },
  { accountNumber: 998345, acHolderName: 'jaddu', typeOfAccount: 'Business', amount: 4000, dateOfAccountCreation: '2018-03-08' },
  { accountNumber: 234123, acHolderName: 'dhoni', typeOfAccount: 'Business', amount: 10000, dateOfAccountCreation: '2017-07-07' },
  { accountNumber: 675432, acHolderName: 'jothi', typeOfAccount: 'Current', amount: 500, dateOfAccountCreation: '2020-06-08' },
  { accountNumber: 579834, acHolderName: 'sanjay', typeOfAccount: 'Current', amount: 1300, dateOfAccountCreation: '2015-05-15' },
  { accountNumber: 896541, acHolderName: 'gopi', typeOfAccount: 'Current', amount: 9000, dateOfAccountCreation: '2012-09-18' },]
  filteredAccounts = this.accounts;
  get filteredAccountHolders(): AccountHolder[] {
    if (this.selectedAccountType === 'All') {
      return this.accounts;
    } else {
      return this.accounts.filter(holder => holder.typeOfAccount === this.selectedAccountType);
    }
  }

  trackByAccountNumber(index: number, accountHolder: AccountHolder): number {
    return accountHolder.accountNumber;
  }
}
