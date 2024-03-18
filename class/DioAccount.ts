
export abstract class DioAccount{
    name: string
    accountNumber: number
    balance: number = 0

    constructor(name:string, accountNumber: number){
        this.name =name
        this.accountNumber = accountNumber
    }

    deposit = ()=>{
        console.log("Você depositou ")
    }

    withdraw = () =>{
        console.log('Você sacou')
    }

    getBalance = () =>{
        console.log(this.balance)
    }
}
