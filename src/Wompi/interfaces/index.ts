export type TokenizedCard = {
  status: string;
  data: {
    id: string;
    created_at: string;
    brand: string;
    name: string;
    last_four: string;
    bin: string;
    exp_year: string;
    exp_month: string;
    card_holder: string;
    created_with_cvc: boolean;
    expires_at: string;
    validity_ends_at: string;
  };
};

export type PaymentSource = {
  id: number;
  public_data: {
    bin: string;
    last_four: string;
    exp_month: string;
    exp_year: string;
    card_holder: string;
    validity_ends_at: string;
    type: string;
  };
  token: string;
  type: string;
  status: string;
  customer_email: string;
};

export interface IWompiService {
  tokenizedCardUser(): Promise<TokenizedCard>;
  paymentMethodUser(tokenCard: string): Promise<PaymentSource>;
}
