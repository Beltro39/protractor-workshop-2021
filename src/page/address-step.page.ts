import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.proceedToCheckoutButton = $('#center_column > form > p > button > span');
  }

  public async goToProceedToCheckoutButton(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}
