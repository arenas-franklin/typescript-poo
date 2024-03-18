import { CompanyAccount } from './class/CompanyAccount'
import  { DioAccount } from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'



const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10)

console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount("Dio", 20)
console.log(companyAccount)