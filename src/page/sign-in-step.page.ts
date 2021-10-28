import { $, ElementFinder } from 'protractor';

export class SignInStepPage{
  private emailField: ElementFinder;
  private passwordField: ElementFinder;
  private signInButton: ElementFinder;

  constructor () {
    this.emailField = $('#email');
    this.passwordField = $('#passwd');
    this.signInButton = $('#SubmitLogin > span');
  }

  public async putEmailAddress(): Promise<void> {
    await this.emailField.sendKeys('aperdomobo@gmail.com');
  }
  public async putPassword(): Promise<void> {
    await this.passwordField.sendKeys('WorkshopProtractor');
  }
  public async goToSignInButton(): Promise<void> {
    await this.signInButton.click();
  }
}
