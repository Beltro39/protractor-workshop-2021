import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private addToCartButton : ElementFinder;

  constructor () {
    this.addToCartButton = $('#center_column > ul > li:nth-child(1) a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToAddToCartButton(): Promise<void> {
    await this.addToCartButton.click();
  }
}
