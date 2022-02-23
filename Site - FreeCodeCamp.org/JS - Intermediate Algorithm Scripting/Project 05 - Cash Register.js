function checkCashRegister(price, cash, cid) {

  const UNIT_AMOUNT = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }

  let trocoNecessario = cash - price;
  let caixa = 0;
  let arrTroco = []
 
 //soma todos valores do caixa
  for (let i of cid) {
    caixa += i[1]
  }
  caixa = caixa.toFixed(2) // 2 casas decimais

  if (trocoNecessario > caixa) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: arrTroco
    };
  } else if (trocoNecessario.toFixed(2) === caixa) {
    return {
      status: "CLOSED",
      change: cid
    };
  } else {
    cid = cid.reverse();
    for (let i of cid) {
      let temp = [i[0], 0];
      while (trocoNecessario >= UNIT_AMOUNT[i[0]] && i[1] > 0) {
        temp[1] += UNIT_AMOUNT[i[0]];
        i[1] -= UNIT_AMOUNT[i[0]];
        trocoNecessario -= UNIT_AMOUNT[i[0]];
        trocoNecessario = trocoNecessario.toFixed(2);
      }
      if (temp[1] > 0) {
        arrTroco.push(temp);
      }
    }
  }
  if (trocoNecessario > 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  }
  return {
    status: "OPEN",
    change: arrTroco
  };
}


console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]));
