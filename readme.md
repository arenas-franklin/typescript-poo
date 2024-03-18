# Programação a oriatação a objeto - typescript

---

Programação Orietada a Objetos é um paradigma de programação baseado no conceito de objetos, que podem conter dados na forma como atributos e códigos na forma de procedimentos, como métodos.

objetos

```typescript
ss
class User{
    name:string 
    age:number

    constructor(name:string, age:number)    {
        this.name = name
        this.age = age
    }



    showName = ()=>{
        console.log(this.name)
    }
}

const user = new User("Nath", 32)

user.showName()
```

---

### Abstração

Abstração é a capacidade de conseguir pensar no objeto que iremos criar e como implementar seus métodos e atributos

### Polimorfismo

Permite que uma classe filha chame um método com assinatura  diferetne. OU seja, o fluxo do método é diferente quando comparado como o original


```typescript

class Account{
    // propridade da classe
    name: string
    accountNumber: number
  
    // construtor da classe
    constructor(name:string, accountNumber: number){
        this.name =name
        this.accountNumber = accountNumber
    }

    // metdo da classe
    deposit = ()=>{
        console.log("Você depositou ")
    }

    // metodo da classe
    withdraw = () =>{
        console.log('Você sacou')
    }
}


const newAccount: Account = new Account('Nath', 1)
console.log(newAccount)

const account: Account = new Account('João', 28)
console.log(account)
account.deposit()
```



Um **construtor** é um método especial em uma classe que é chamado automaticamente quando um objeto dessa classe é instanciado (ou seja, quando uma nova instância da classe é criada). O construtor geralmente é usado para inicializar os objetos da classe com valores padrão ou com base em parâmetros passados durante a criação do objeto.

Em muitas linguagens de programação orientadas a objetos, como JavaScript, TypeScript, Python, Java e C++, os construtores são definidos usando um método especial com o mesmo nome da classe.

Em TypeScript, por exemplo, um construtor é definido usando a palavra-chave `constructor`.

---



### Herança 


Herança é um conceito fundamental que permite que uma classe (conhecida como classe filha ou subclasse) herde atributos e métodos de outra classe (conhecida como classe pai ou superclasse). Isso significa que uma classe filha pode reutilizar o código da classe pai, além de estender ou modificar seu comportamento conforme necessário.

Por meio da herança, as classes podem ser organizadas hierarquicamente, com classes mais específicas derivadas de classes mais genéricas. Essa hierarquia de classes permite a criação de modelos mais complexos e abstratos, nos quais as classes mais especializadas herdam características comuns das classes mais gerais, enquanto também adicionam suas próprias características exclusivas.

```typescript

class Account{
    name: string
    accountNumber: number

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
}

class Admin extends Account{
    balance: number

    constructor(name:string, accountNumber: number){
        super(name, accountNumber)
        this.balance = 20
    }

    getBalance = () =>{
        console.log(this.balance)
    }
}


const adminAccount: Admin = new Admin("Anne", 13)
console.log(adminAccount)

const account: Account = new Account('João', 28)
console.log(account)
account.deposit()
```



### Classe abstrata



Uma classe abstrata em programação orientada a objetos é uma classe que não pode ser diretamente instanciada, ou seja, você não pode criar objetos diretamente a partir dela. Em vez disso, é usada como uma classe base para outras classes, fornecendo uma estrutura comum ou abstrata que pode ser compartilhada por suas subclasses.

A principal característica de uma classe abstrata é que ela pode conter métodos abstratos. Um método abstrato é um método que é declarado na classe abstrata, mas não possui implementação dentro dela. Em vez disso, a implementação é fornecida pelas subclasses que herdam da classe abstrata. As subclasses devem fornecer uma implementação para todos os métodos abstratos da classe pai para poderem ser instanciadas.

Em muitas linguagens de programação orientadas a objetos, como TypeScript, Java, C# e Python, as classes abstratas são definidas usando a palavra-chave `abstract`


```typescript
abstract class Account{
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


class PeopleAccount extends Account{
    doc_id: number

    constructor(doc_id:number, name:string, accountNumber: number){
        super(name, accountNumber)
        this.doc_id =doc_id
    }

}

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10)

console.log(peopleAccount)
```
