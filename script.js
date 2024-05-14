document.getElementById("btn").addEventListener("click", giveAnswer);
document.getElementById("question1").value.toLowerCase();

function giveAnswer() {
  let answer = Math.random();
  let question = document.getElementById("question1").value.toLowerCase();
  document.getElementById("question1").innerHTML = "";

  if (question === "will i get rich one day?") {
    document.getElementById("magicAnswer").innerHTML =
      "I think you should get a job, otherwise, work hard";
  } else if (question === "does a magic 8 ball actually work?") {
    document.getElementById("magicAnswer").innerHTML =
      "Of course! you're just not focussed so I can't give accurate answers sometimes";
  } else if (question === "do you know what will happen next?") {
    document.getElementById("magicAnswer").innerHTML =
      "That's for you to decide";
  } else if (answer < 0.2) {
    document.getElementById("magicAnswer").innerHTML = "Without a Doubt";
  } else if (answer < 0.4) {
    document.getElementById("magicAnswer").innerHTML = "As I see it, yes.";
  } else if (answer < 0.6) {
    document.getElementById("magicAnswer").innerHTML =
      "Concentrate and ask again.";
  } else if (answer < 0.8) {
    document.getElementById("magicAnswer").innerHTML = "Don't count on it.";
  } else if (answer < 1) {
    document.getElementById("magicAnswer").innerHTML = "Outlook not so good.";
  }
}
