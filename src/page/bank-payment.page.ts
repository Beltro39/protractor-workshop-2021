import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmMyOrderButton: ElementFinder;

  constructor () {
    this.confirmMyOrderButton = $('#cart_navigation > button > span');

  }

  public async goToConfirmMyOrderButton(): Promise<void> {
    await this.confirmMyOrderButton.click();
  }
}
