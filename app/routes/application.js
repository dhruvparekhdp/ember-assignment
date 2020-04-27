import Route from '@ember/routing/route';
export default class ApplicationRoute extends Route{
  beforeModel() {
    if (!window.location.pathname.split("/").pop().replace(/\W/g, "").length) {
      this.transitionTo('/home');
    }
  }
}
