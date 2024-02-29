import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount{
  doc_id: number

  constructor(doc_id: number, name: string, accountToNumber: number){
    super(name, accountToNumber)
    this.doc_id = doc_id
  }

}