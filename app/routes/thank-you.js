import Route from '@ember/routing/route';
export default class ThankYouRoute extends Route{
  beforeModel() {
    if (!localStorage.getItem('email')) {
      this.transitionTo('/home');
    }
  }
}
