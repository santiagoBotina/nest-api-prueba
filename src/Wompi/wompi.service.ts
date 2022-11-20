import { CreateTransactionDto } from './dto/create-transaction.dto';
import * as dotenv from 'dotenv';
dotenv.config();
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { IWompiService, PaymentSource, TokenizedCard } from './interfaces';

@Injectable()
export class WompiService implements IWompiService {
  /***** Según la API de Wompi, hay que pedir el método de pago al usuario,
   en este caso se obvia este paso ya que siempre se va a usar tarjeta*****/
  //Header con info de la llave privada
  privConfig = {
    headers: {
      authorization: `Bearer ${process.env.PRIV_API_KEY}`,
      'Content-Type': 'application/json',
    },
  };

  //Request headers
  pubConfig = {
    headers: {
      authorization: `Bearer ${process.env.PUB_API_KEY}`,
      'Content-Type': 'application/json',
    },
  };
  /*
        Función para tokenizar la tarjeta del usuario
    */
  async tokenizedCardUser(): Promise<TokenizedCard> {
    //Fake card info
    const fakeCard = {
      number: '4242424242424242',
      cvc: '789',
      exp_month: '12',
      exp_year: '29',
      card_holder: 'Pedro Pérez',
    };

    try {
      //Request to tokenize card
      const tokenizedRequest = await axios.post(
        `${process.env.WOMPI_API}/tokens/cards`,
        fakeCard,
        this.pubConfig,
      );
      //   console.log(tokenizedRequest.data);
      return tokenizedRequest.data;
    } catch (e) {
      return e;
    }
  }
  /*
    Función para crear metodo de pago
  */
  async paymentMethodUser(tokenCard: string): Promise<PaymentSource> {
    /*Obtener token de aceptación, suponiendo que el usuario en el frontend ya aceptó
            los términos y condiciones*/
    const {
      data: {
        data: {
          presigned_acceptance: { acceptance_token },
        },
      },
    } = await axios.get(
      `${process.env.WOMPI_API}/merchants/${process.env.PUB_API_KEY}`,
    );

    // Datos de usuarios necesarios para el request del payment source
    const userData = {
      type: 'CARD',
      token: tokenCard,
      customer_email: 'santiagoboe04@gmail.com',
      acceptance_token,
    };

    //Request payment source
    const {
      data: { data },
    } = await axios.post(
      `${process.env.WOMPI_API}/payment_sources`,
      userData,
      this.privConfig,
    );
    return {
      acceptance_token,
      ...data,
    };
  }

  /* Función para iniciar una transacción */
  async transactionInit(transactionDto: CreateTransactionDto) {
    try {
      const {
        data: { data },
      } = await axios.post(
        `${process.env.WOMPI_API}/transactions`,
        transactionDto,
        this.privConfig,
      );
      return data;
    } catch (e) {
      return e;
    }
  }
}
