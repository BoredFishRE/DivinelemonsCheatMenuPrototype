//level prompt
function LevelPrompt() {
  var Level = prompt("Please enter the level you would like to be- text is allowed:", "1e169");
  if (Level == null || Level == ""){} 
  else {
    hack.instance.prodigy.player.getLevel = () => hack.instance.prodigy.player.data.level=Level;
    Swal.fire('Success!', 'Your level has been changed!', 'success')
  }
  document.getElementById("demo").innerHTML = txt;
}

function AppearanceChanger() {
   
  Swal.fire('Success!', 'Your level has been changed!', 'success')

  document.getElementById("demo").innerHTML = txt;
}
