export abstract class DioAccount{
  private readonly name: string;
  private readonly accountToNumber: number;
  private balance: number = 0;
  private status: boolean = true;


  constructor(name: string, accountToNumber: number){
    this.name = name,
    this.accountToNumber = accountToNumber
  }

  setBalance = (balance: number): void =>{
    this.balance = balance
  }
  getBalance = (): number =>{
    return this.balance
  }
  getName = (): string => {
    return this.name
  }


  getAccountToNumber = (): number => {
    return this.accountToNumber
  }

  validateStatus = (): boolean => {
    if(this.status){
      return this.status
    }
    return false
  }

  validateNumberAccount = (numberAccountToDeposit: number): boolean =>{
    if(this.getAccountToNumber() === numberAccountToDeposit){
      return true
    }
    return false
  }

  validateBalance = (value: number): boolean =>{
    if(this.getBalance() >= value){
      return true
    }
    return false
  }

  deposit = (numberAccountToDeposit: number, valueDeposit: number): void =>{
    if(this.validateStatus() && this.validateNumberAccount(numberAccountToDeposit)){
      this.setBalance(this.getBalance()+valueDeposit)
    }
    else{
      throw new Error('Deposito não aceito')
    }
  }

  withdraw = (valueWithDraw: number): void =>{
    if(this.validateBalance(valueWithDraw)){
      this.setBalance(this.getBalance() - valueWithDraw)
    }
    else{
      throw new Error('Saque não aceito')
    }
  }

}