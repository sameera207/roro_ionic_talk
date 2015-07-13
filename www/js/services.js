angular.module('starter.services', [])

.factory('Talks', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Monads in Ruby',
    lastText: 'Carl Woodward',
    face: 'https://avatars3.githubusercontent.com/u/16838?v=3&s=400'
  }, {
    id: 1,
    name: 'App developer as a Web developer',
    lastText: 'sameera207',
    face: 'https://avatars3.githubusercontent.com/u/98407?v=3&s=460'
  },{
    id: 2,
    name: 'Where Rails Magic Goes Wrong',
    lastText: 'FluffyJack',
    face: 'https://avatars1.githubusercontent.com/u/85480?v=3&s=460'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
