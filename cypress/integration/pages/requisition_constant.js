export const REVISED_CONTRACT_AMOUNT = 'Contract Amount + Sum of All Approved CCOs';
export const WORK_COMPLETED_PREVIOUS_BILLS = 'Approved Work completed from previous bills';
export const TOTAL_COMPLETED_AND_STORED_TO_DATE = 'Work Completed (Previous Bills) + Work Completed (This Period)';
export const PERCENTAGE_COMPLETED = '(Total Completed and Stored to Date / Revised Contract Amount) * 100';
export const BALANCE_TO_FINISH = 'Revised Contract Amount - Total Completed and Stored to Date';
export const WORK_RETAINAGE_PREVIOUS_BILLS = 'Approved Work Retainage from previous bills'
export const TOTAL_EARNED_LESS_RETAINAGE = 'Total Completed and Stored to Date - Total Retainage (Previous Bills) - Total Retainage (This Period)';
export const SOV_CONTRACT_AMOUNT = 'Contract Amount = Quantity * Unit Rate';
// export const REVISED_CONTRACT_AMOUNT_AFTER_LOCK = 'Revised Contract Amount = Revised Quantity * Revised Rate';
// export const APPROVED_COS = 'Sum of all Approved CCOs';
// export const REQUISITIONS_PAYMENT_RECEIVED = 'Sum of all Requisition Payment Received';

export const SOV_AFTER_LOCK_COLUMNNS = ['Contract Amount = Quantity * Unit Rate','Revised Contract Amount = Revised Quantity * Revised Rate','Sum of all Approved CCOs','Sum of all Requisition Payment Received'];

export const REQUISITION_LIST_FORMULA = ['Contract Amount + Sum of All Approved CCOs', 'Work Completed (Previous Bills) + Work Completed (This Period)', 'Total Retainage (Previous bills)+ Total Retainage (This Period)', 'Total Completed and Stored to Date - Total Retainage (Previous Bills) - Total Retainage (This Period)', 'Work Completed (This Period) - Work Retainage (This period)', 'Revised Contract Amount - Total Earned less Retainage', '(Total Completed and Stored to Date / Revised Contract Amount) * 100'];

/* // requisition list constants

export const REQUISITION_LIST_FORMULA = new Map();
// RCA - Revised Contract Amount
REQUISITION_LIST_FORMULA.set('Revised Contract Amount', 'Contract Amount + Sum of All Approved CCOs');

// TCSD - Total Completed and Stored to Date
REQUISITION_LIST_FORMULA.set('Total Completed and Stored to Date', 'Work Completed (Previous Bills) + Work Completed (This Period)');

// TR - Total Retainage 
REQUISITION_LIST_FORMULA.set('Total Retainage (To Date)', 'Total Retainage (Previous bills)+ Total Retainage (This Period)');

// TELR - Total Earned Less Retainage
REQUISITION_LIST_FORMULA.set('Total Earned Less Retainage', 'Total Completed and Stored to Date - Total Retainage (Previous Bills) - Total Retainage (This Period)');

// PD - payment due
REQUISITION_LIST_FORMULA.set('Payment Due', 'Work Completed (This Period) - Work Retainage (This period)');

// BTF - Balance to finish
REQUISITION_LIST_FORMULA.set('Balance to Finish', 'Revised Contract Amount - Total Earned less Retainage');

// PC- percentage completed
REQUISITION_LIST_FORMULA.set('% Completed', '(Total Completed and Stored to Date / Revised Contract Amount) * 100');
 */
