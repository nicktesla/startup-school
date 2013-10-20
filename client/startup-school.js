Speakers = new Meteor.Collection("speakers");
Notes = new Meteor.Collection("notes");

var speakersHandle = Meteor.subscribe('speakers');
var notesHandle = Meteor.subscribe('notes');


  Template.notes.notes = function() {
    var currentSpeaker = Session.get('currentSpeaker');
    if(currentSpeaker) {
        return Notes.find({speaker: currentSpeaker});      
    }
    else {
      return Notes.find({});
    }
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

  Template.note.events({
    'click .add-note-item': function (event) {
      console.log('id item is:', this._id);
      var clickedIdSelector ="#"+this._id+"-new-note-field";
      var enteredText = $(clickedIdSelector).val();
      console.log("clicked id is: ", clickedIdSelector, "entered text: ", enteredText);
      Notes.update(this._id, {$push:{noteItems: {text: enteredText}}});
      $(clickedIdSelector).val("");
      event.preventDefault();
    }
  }); 

  Template.noteItem.events({
    'mouseenter .main-note': function (event) {
      $(event.target).children("i.add-subnote-icon").toggle();
      event.preventDefault();
    },
    'mouseleave .main-note': function (event) {
      $(event.target).children("i.add-subnote-icon").toggle();
      event.preventDefault();
    },
    'click .add-subnote-icon': function(event) {
      //HACK: do without dom traversal?
      $(event.target).parent().siblings(".subitem-entry-section").toggle();
    },
    'keydown .subitem-field': function(event) {
      if(event.which == 13) {
        //HACK: very ugly dom traversal going on...will break as soon as html changes
        //var noteId = $(event.target).parent().parent().parent().parent().data('noteId');

        //HACK: this update logic will break when two speakers have the same main note item
        var mainText = this.text;
        var newSubnote = {text: $(event.target).val()};
        Meteor.call('addSubnote', mainText, newSubnote);
      }
    }

  });  

Meteor.startup(function(){
  Session.set('currentSpeaker', "Chris Dixon");
  mixpanel.track("client-startup");
})
