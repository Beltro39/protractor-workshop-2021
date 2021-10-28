import { $, browser } from 'protractor';
import { ProductListPage, MenuContentPage, ProductAddedModalPage,
SummaryStepPage, SignInStepPage, AddressStepPage,
ShippingStepPage, PaymentStepPage, BankPaymentPage } from '../src/page';

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

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await productListPage.goToAddToCartButton();
    await(browser.sleep(3000));
    await productAddedModalPage.goToProceedToCheckoutButton();
    await summaryStepPage.goToProceedToCheckoutButton();
    await signInStepPage.putEmailAddress();
    await signInStepPage.putPassword();
    await signInStepPage.goToSignInButton();
    await addressStepPage.goToProceedToCheckoutButton();
    await shippingStepPage.goToTermsOfServiceCheckBox();
    await shippingStepPage.goToProceedToCheckoutButton();
    await paymentStepPage.goToPayByBankWireButton();
    await bankPaymentPage.goToConfirmMyOrderButton();
    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});
