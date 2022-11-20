export class CreateTransactionDto {
  amount_in_cents: number;
  currency: string;
  customer_email: string;
  payment_method: {
    installments: number;
  };
  payment_source_id: number;
}
