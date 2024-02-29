import { DioAccount } from "./DioAccount";

export class ExternalBank extends DioAccount{

  constructor(name: string, accountToNumber: number){
    super(name, accountToNumber)
  }

  deposit = (numberAccountToDeposit: number, valueDeposit: number): void =>{
    if(this.validateStatus() && this.validateNumberAccount(numberAccountToDeposit)){
      this.setBalance(this.getBalance() + (valueDeposit + 10))
    }
    else{
      throw new Error('Deposito não aceito')
    }
  }
}
    

