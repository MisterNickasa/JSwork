const Status = {
    DRAFT:"Черновик",
    WORK:"Рабочий"
}


class BaseDocument{
    constructor(number, status){
        this.number = number;
        this.status = status;
}

    getStatus() {
        alert(this.status);
    }
}
let baseDocument = new BaseDocument(0, Status.DRAFT);
console.log(baseDocument);
baseDocument.getStatus();

class Contract extends BaseDocument {
    constructor(number, status, name) {
        super(number, status)
        this.name = name
    }

    getStatus() {
        alert(`Для договора - ${this.name}`)
    }

}

let contract = new Contract(1,Status.WORK,"Договор1");
console.log(contract);
contract.getStatus();

class CoffeMachine {
    wateramount = 0;

    constructor(power){
        this.power = power;
        alert(`Создана кофеварка с мощностью ${power}`)
    }
}
let cofeeMachine = new CoffeMachine(100);
console.log(cofeeMachine.wateramount);
cofeeMachine.wateramount = 200;
console.log(cofeeMachine.wateramount);



