import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount{

  constructor(name: string, accountToNumber: number){
    super(name, accountToNumber)
  }

  getLoan = (value: number, accoutToLoan: DioAccount): void =>{
    if(this.validateBalance(value) && this.validateStatus()){
      this.setBalance(this.getBalance() - value)
      accoutToLoan.deposit(accoutToLoan.getAccountToNumber(), value)
    }else{
      throw new Error("Empréstimo não aceito")
    }
  }
}