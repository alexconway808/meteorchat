if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.chatarea.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.chatarea.events({
    'click button': function () {
      // increment the counter when button is clicked
      // Session.set("counter", Session.get("counter") + 1);
      var name = $('#name').val();
      console.log(name);

      var chats = $('#chats').val();
      console.log(chats);

      $('#chatLog').append('<li>' + name + ' : ' + chats +'</li>');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
