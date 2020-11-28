import {
  LogSwapCollection,
  LogSwap,
  Transaction,
  ExchangeStatus
} from "../../generated/schema";

import {
  BIGINT_ZERO,
  BIGDECIMAL_ZERO,
  BIGINT_ONE
} from "./contants";


export function getStatus(): ExchangeStatus{
  let id = "ExchangeStatus";
  let exchangeStatus = ExchangeStatus.load(id);
  if(exchangeStatus == null){
    exchangeStatus = new ExchangeStatus(id);
    exchangeStatus.status = BIGINT_ONE;
  }
  return exchangeStatus as ExchangeStatus;
}

export function getLogSwapCollection(id: string): LogSwapCollection{
  let logSwapCollection = LogSwapCollection.load(id);
  if(logSwapCollection == null){
    logSwapCollection = new LogSwapCollection(id);
    logSwapCollection.id = id;
  }
  return logSwapCollection as LogSwapCollection;
}


export function getLogSwap(id: string): LogSwap{
  let logswap = LogSwap.load(id)
  if(logswap == null){
    logswap = new LogSwap(id)
    logswap.id = id
    logswap.sourceAmount = BIGINT_ZERO
    logswap.destinationAmount = BIGINT_ZERO
    logswap.feeAmount = BIGINT_ZERO
  }
  return logswap as LogSwap;
}

export function getTransaction(id: string): Transaction{
  let transaction = Transaction.load(id);
  if(transaction == null){
    transaction = new Transaction(id);
    transaction.id = id;
    transaction.timestamp = BIGINT_ZERO
    transaction.gasPrice = BIGDECIMAL_ZERO
  }
  return transaction as Transaction;
}
