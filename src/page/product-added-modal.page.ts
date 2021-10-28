import { $, ElementFinder  } from 'protractor';

export class ProductAddedModalPage {
  private proceedToCheckoutButton : ElementFinder;

  constructor () {
    this.proceedToCheckoutButton = $('#layer_cart .button-container > a');
  }

  public async goToProceedToCheckoutButton(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}
