import Route from '@ember/routing/route';
export default Route.extend({
  model() {
    return {
      name: 'Dhruv Parekh',
      email: 'dhruvparekh.dp@gmail.com',
      phonenumber: null,
    }
  },
  actions: {
    submit() {
      // const model = this.get('model');
      const post = this.get('store').createRecord('signup', {
        id: new Date().getSeconds(),
        name: this.currentModel.name,
        email: this.currentModel.email,
        phonenumber: this.currentModel.phonenumber,
      });
      post.save().then(() => {
        localStorage.setItem('email', post.get('email'));
        this.transitionTo('/thank-you');
      });
    }
  }
});
