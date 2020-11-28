import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  LogSwapCollection,
  LogSwap,
  Paused,
  Unpaused,
  OwnershipRenounced,
  OwnershipTransferred
} from "../generated/Contract/Contract"

import {
  getLogSwap,
  getLogSwapCollection,
  getTransaction,
  getStatus
} from "./utils/helpers"

import {toDecimal} from "./utils/decimals"
import { BIGINT_ONE, BIGINT_ZERO } from "./utils/contants";

export function handleLogSwapCollection(event: LogSwapCollection): void {
  let logSwapCollection = getLogSwapCollection(event.params.id.toHex());
  logSwapCollection.partnerContract = event.params.partnerContract;
  logSwapCollection.user = event.params.user;
  logSwapCollection.logswap = getLogSwap(logSwapCollection.id).id;
  logSwapCollection.save()
}

export function handleLogSwap(event: LogSwap): void {
  let transaction = getTransaction(event.transaction.hash.toHex());
  transaction.timestamp = event.block.timestamp;
  transaction.gasPrice = toDecimal(event.transaction.gasPrice);
  transaction.save();

  let logSwap = getLogSwap(event.params.id.toHex());
  logSwap.sourceAsset = event.params.sourceAsset;
  logSwap.sourceAmount = event.params.sourceAmount;
  logSwap.destinationAsset = event.params.destinationAsset;
  logSwap.destinationAmount = event.params.destinationAmount;
  logSwap.feeAsset = event.params.feeAsset;
  logSwap.feeAmount = event.params.feeAmount;
  logSwap.transaction = transaction.id;
  logSwap.save();
}

export function handlePaused(event: Paused): void {
  let exchangeStatus = getStatus();
  exchangeStatus.status = BIGINT_ZERO;
  exchangeStatus.save();
}

export function handleUnpaused(event: Unpaused): void {
  let exchangeStatus = getStatus();
  exchangeStatus.status = BIGINT_ONE;
  exchangeStatus.save();
}

export function handleOwnershipRenounced(event: OwnershipRenounced): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
