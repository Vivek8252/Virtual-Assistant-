let box = document.querySelector(".box");
let btn = document.querySelector("button");

const speakfunc = (input)=>{
  let speakInput = new SpeechSynthesisUtterance(input);
  //speakInput.pitch = 1;
  //speakInput.rate=1;
  //  speakInput.valume = 1;
  speakInput.lang = 'en-GB'
  window.speechSynthesis.speak(speakInput);
}

window.onload = ()=>{
  //speakfunc("hello just");
  greetingfunc();
}

const greetingfunc = ()=>{
  let date = new Date();
  let hour = date.getHours();
  console.log(hour);
  if(hour>=0 && hour <12){
    speakfunc("Good morning sir,How can i help you !")
  } else if(hour>=12 && hour <16){
    speakfunc("Good afternoon sir,How can i help you !")
}else{
  speakfunc("Good evening sir,How can i help you !")
}

}

const statVoiceInput = ()=>{
  if('webkitSpeechRecognition' in window){
  let recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-US' ;
  recognition.onresult = (e)=>{
    let spokenText=e.results[0][0].transcript;
    handleCommands(spokenText.toLowerCase());
     box.classList.remove("btn-box");
  btn.innerHTML = '<i class="fa-solid fa-microphone-line-slash"></i>'
  }
  recognition.start();
  }else{
    alert("Your Browser does not support voice input !")
  }
}

btn.onclick=()=>{
  box.classList.add("btn-box");
  btn.innerHTML = '<i class="fa-solid fa-microphone-lines></i>'
  statVoiceInput();
}

const handleCommands=(command)=>{
if (command.includes("hello") || command.includes("hey")  ) {
  speakfunc("Hello sir,How Can I help You !");
} else if (command.includes("develop") || command.includes("who are you develop")//command.includes("")
)
{
  speakfunc("I am Virtual Assistance,Developed by Vivek Singh")
}else if(command.includes("how are you ")){
  speakfunc("I am fine")
}else if(command.includes("who is your father")){
  speakfunc("my father name is Vivek Singh")
}else if (command.includes("youtube") || command.includes("channel")){
  speakfunc("opening...just for youtube channel");
   window.open("https://www.youtube.com/");
}else if (command.includes("adarsh youtube channel") || command.includes("channel")){
  speakfunc("opening...just for Adarsh youtube channel");
   window.open("https://www.youtube.com/@MathSimplifiedbyAdarsh");
}else if (command.includes("calculator") || command.includes("cal")){
  speakfunc("opening..just for calculator");
  window.open("calculator:/");
}else{
  speakfunc(`this is What i found on internet regarding ${command}` );
  window.open(`https://www.google.com/search?q=${command}`)
}
}