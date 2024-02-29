import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { ExternalBank } from './class/ExternalBank'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Gustavo', 1234)
const companyAccount: CompanyAccount = new CompanyAccount('itau', 4312)
const exterlbanck: ExternalBank = new ExternalBank('oi', 4321)

peopleAccount.deposit(1234,500)
console.log(peopleAccount.getBalance())
peopleAccount.withdraw(300)
console.log(peopleAccount.getBalance())

companyAccount.deposit(4312,500)
console.log(companyAccount.getBalance())
companyAccount.getLoan(200,peopleAccount)
console.log(companyAccount.getBalance())
console.log(peopleAccount.getBalance())


exterlbanck.deposit(4321,500)
console.log(exterlbanck.getBalance())