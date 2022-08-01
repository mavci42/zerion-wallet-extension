import type { ethers } from 'ethers';
import { createNanoEvents } from 'nanoevents';

type TransactionResponse = ethers.providers.TransactionResponse;
type TransactionReceipt = ethers.providers.TransactionReceipt;

export const emitter = createNanoEvents<{
  accountsChanged: () => void;
  chainChanged: (chainId: string) => void;
  pendingTransactionCreated: (transaction: TransactionResponse) => void;
  transactionMined: (transaction: TransactionReceipt) => void;
}>();

Object.assign(window, { emitter });