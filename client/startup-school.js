Speakers = new Meteor.Collection("speakers");
Notes = new Meteor.Collection("notes");

var speakersHandle = Meteor.subscribe('speakers');
var notesHandle = Meteor.subscribe('notes');


  Template.notes.notes = function() {
    return Notes.find({});
  }


  Template.speakers.speakers = function () {
    return Speakers.find({});
  };

  Template.speaker.events({
    'click .speaker-name' : function () {
      // set the current speaker
      console.log("The clicked id is: ", this);
      Session.set('currentSpeaker', this.name);
    }
  });

