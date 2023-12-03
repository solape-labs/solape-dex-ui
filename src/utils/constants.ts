import { PublicKey } from '@solana/web3.js';
import { BN } from '@coral-xyz/anchor';

export const OPENBOOK_PROGRAM_ID = new PublicKey('opnb2LAfJYbRMAHHvqjCwQxanZn7ReEHp1k81EohpZb');

export const TOKEN_PROGRAM_ID = new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');

export const WRAPPED_SOL_MINT = new PublicKey('So11111111111111111111111111111111111111112');

export const NUMERAL_FORMAT = '0,0.00';
export const BASE_FORMAT = '0,0';
export const QUOTE_LOTS = 0.0001;
export const BN_0 = new BN(0);
