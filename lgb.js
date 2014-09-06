if (Meteor.isClient){

  Handlebars.registerHelper("email", function(){
    return this.emails[0].address;
  });

  Handlebars.registerHelper("profile", function(){
    return JSON.stringify(this.profile);
  });

  Meteor.subscribe('users');

  Deps.autorun(function() {
    Meteor.subscribe('users');

    Template.list_users.users = function(){
      return Meteor.users.find({});
    };
  });
}

if (Meteor.isServer){
  Meteor.startup(function () {
    Meteor.publish('users', function() {
      return Meteor.users.find({});
    });
  });
}
