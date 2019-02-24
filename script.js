

var oldVal = 'name';
var newVal = window.prompt("Please enter your name:");
var results ="";
if (newVal === "") {
    window.confirm ("Okay, I'll just call you user");
} else if (newVal) {
    window.confirm ("Hi!");
} else {
    window.confirm ("Okay, I'll just call you user");
}

var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];


document.getElementById('BtnDonate').addEventListener('click', function(){

  var answer = window.prompt("Who is your favorite author?", 'Type CHURCHILL, GHANDI, or DEMOSTHENES. Then click OK.');
  if (answer === 'CHURCHILL')
    switch (answer) {
      case "CHURCHILL" :
      window.confirm('Churchill was 66 during this speech');
      break;
    }
  if (answer === 'GHANDI')
      switch (answer) {
      case "GHANDI" :
      window.confirm('Ghandi was 73 during this speech');
      break;
   }
  if (answer === "DEMOSTHENES")
      switch (answer) {
      case "DEMOSTHENES" :
      window.confirm('Demosthenes was 42 during this speech');
      break;
    }
  if (answer === "")
    switch (answer){
      default : 
      window.confirm('The name was entered incorrectly');
      }

});



document.getElementById('BtnChurchill').addEventListener('click', function(){

  window.confirm('This speech was written by Churchill in 1940.');

  if (churchillSpeech === "false"){
    window.confirm('This speech took place before the common era.')
  } else { window.confirm('This speech took place during the common era.')
  }

  if(churchillSpeech < ghandiSpeech || demosthenesSpeech){
    window.confirm('This is the oldest speech page')
  } else if(churchillSpeech > ghandiSpeech || demosthenesSpeech){
    window.confirm('This is the most recent speech')
  }
});



document.getElementById('BtnGhandi').addEventListener('click', function(){

  window.confirm('This speech was written by Ghandi in 1942.');

   if (ghandiSpeech === "false"){
    window.confirm('This speech took place before the common era.')
  } else { window.confirm('This speech took place during the common era.')
  }
  
  if(ghandiSpeech < churchillSpeech || demosthenesSpeech){
    window.confirm('This is the oldest speech page')
  } else if(ghandiSpeech > churchillSpeech || demosthenesSpeech){
    window.confirm('This is the most recent speech')
  }
});



document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  
  window.confirm('This speech was written by Demosthenes in 342');

   if (demosthenesSpeech === "false"){
    window.confirm('This speech took place before the common era.')
  } else { window.confirm('This speech took place during the common era.')
  }

  if(demosthenesSpeech < ghandiSpeech || churchillSpeech){
    window.confirm('This is the oldest speech page')
  } else if(demosthenesSpeech > ghandiSpeech || churchillSpeech){
    window.confirm('This is the most recent speech')
  }
});