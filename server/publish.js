Speakers = new Meteor.Collection("speakers");

//Publish complete set of speakers to all clients

Meteor.publish('speakers', function(){
	return Speakers.find();
});

Notes = new Meteor.Collection("notes");

Meteor.publish('notes', function(){
	return Notes.find();
})