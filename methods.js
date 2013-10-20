if(Meteor.isServer) {
	Meteor.methods({
		addSubnote: function(mainText, newSubnote) {
	        Notes.update({"noteItems.text":mainText},
	          {$push: {
	            "noteItems.$.subnotes":newSubnote
	          }});
		}
	})	
}
