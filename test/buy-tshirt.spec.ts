import { $, browser } from 'protractor';

import {
  ProductListPage, MenuContentPage, ProductAddedModalPage,
  SummaryStepPage, SignInStepPage, AddressStepPage,
  ShippingStepPage, PaymentStepPage, BankPaymentPage
} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

  describe('Open the page in the browser', () => {

    it('then the page should be loaded', async () => {
      await browser.get('http://automationpractice.com/');
    });
  });

  describe('Buying a TShirt process', () => {
    it('then page should be in the t-shirt section', async () => {
      await menuContentPage.goToTShirtMenu();
    });
    it('then the t-shirt should be added to the cart', async () => {
      await productListPage.goToAddToCartButton();
      await (browser.sleep(3000));
    });
    it('then proceed to checkout the cart', async () => {
      await productAddedModalPage.goToProceedToCheckoutButton();
    });
    it('then proceed to checkout the t-shirt (summary step)', async () => {
      await summaryStepPage.goToProceedToCheckoutButton();
    });
  });

  describe('Login in the application', () => {
    it('then the email address should have been typed', async () => {
      await signInStepPage.putEmailAddress();
    });
    it('then the password should have been typed', async () => {
      await signInStepPage.putPassword();
    });
    it('then should log in the application', async () => {
      await signInStepPage.goToSignInButton();
    });
  });
  describe('Select the default address', () => {
    it('then should proceed to checkout (address step)', async () => {
      await addressStepPage.goToProceedToCheckoutButton();
    });
    it('then should acept the terms of service', async () => {
      await shippingStepPage.goToTermsOfServiceCheckBox();
    });
    it('then should proceed to checkout (shipping step)', async () => {
      await shippingStepPage.goToProceedToCheckoutButton();
    });
  });
  describe('Payment at the bank', () => {
    it('then should have selected payment method', async () => {
      await paymentStepPage.goToPayByBankWireButton();
    });
    it('then should have confirmed order', async () => {
      await bankPaymentPage.goToConfirmMyOrderButton();
    });
    it('then the order should be complete', async () => {
      await expect($('#center_column > div > p > strong').getText())
            .toBe('Your order on My Store is complete.');
    });
  });
});
