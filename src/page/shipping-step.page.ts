import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private termsOfServiceCheckBox: ElementFinder;
  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.termsOfServiceCheckBox = $('#cgv');
    this.proceedToCheckoutButton = $('#form > p > button > span');
  }

  public async goToTermsOfServiceCheckBox(): Promise<void> {
    await this.termsOfServiceCheckBox.click();
  }
  public async goToProceedToCheckoutButton(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }

}
