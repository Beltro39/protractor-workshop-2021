import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.proceedToCheckoutButton = $('.cart_navigation span');
  }

  public async goToProceedToCheckoutButton(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}
