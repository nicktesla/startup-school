Meteor.startup(function() {
if(Speakers.find().count()==0) {
  console.log("no speakers so bootstrapping");
  var speakers = [
  {
    name: "Chase Adam",
    title: "Founder",
    company: "Watsi"

  },
  {
    name: "Nate Blecharczyk",
    title: "Founder",
    company: "AirBnB"
  },
  {
    name: "Ron Conway",
    title: "Partner",
    company: "SV Angel"
  },
  {
    name: "Chris Dixon",
    title: "Partner",
    company: "Andressen Horowitz"
  },
  {
    name: "Jack Dorsey",
    title: "Founder",
    company: "Square, Twitter"
  },
  {
    name: "Phil Libin",
    title: "Founder",
    company: "Evernote, CoreStreet"
  },
  {
    name: "Dan Siroker",
    title: "Founder",
    company: "Optimizely"
  },
  {
    name: "Balaji Srinivasan",
    title: "Founder",
    company: "Counsyl"
  },
  {
    name: "Mark Zuckerberg",
    title: "Founder",
    company: "Facebook"
  }
  ];
  speakers.forEach(function(speaker){
      Speakers.insert(speaker);
  });
 }
 else {
  console.log("already have speakers so not bootstrapping");
 }

if(Notes.find().count()==0) {
  console.log("no notes so bootstrapping");
  var notes = [
    {
      speaker:"Chris Dixon", 
      noteItems:[
        {
          text:"Recommends Peter Thiel’s Blake Masters notes"
        },
        {
          text: "Know a secret",
          subtext: "Know the problem better than anyone else",
          subtext: "Know the tools better than anyone else",
        },
        {
          text: "Before Dropbox, there were 100 cloud storage companies, half of which were VC funded. But Dropbox knew the problem better than anyone else, focused on making the actual use of space easier, and disrupted the existing solutions who were merely trying to compete on economy (offer more space and/or charge less)"
        },
        {
          text: "Kickstarter: 10 years trying to raise money"
        },
        {
          text: "Perry Chen - Founder/CEO artistic (autistic?) community"
        }
      ]
    }
  ];
  notes.forEach(function(note){
      Notes.insert(note);
  });
}

});