
export class AccountHolder {
    accountNumber: number;
    acHolderName: string;
    typeOfAccount: string;
    amount: number;
    dateOfAccountCreation: string;

    constructor(accountNumber: number,
        acHolderName: string,
        typeOfAccount: string,
        amount: number,
        dateOfAccountCreation: string){
            this.accountNumber =accountNumber;
            this.acHolderName = acHolderName;
            this.typeOfAccount = typeOfAccount;
            this.amount = amount;
            this.dateOfAccountCreation = dateOfAccountCreation;
        }
  }
  