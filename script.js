const firebaseConfig = {
  apiKey: "AIzaSyCtyTjx4I3Sbq-zk7no09qa4kgs_1E0IqE",
  authDomain: "final-art-project.firebaseapp.com",
  projectId: "final-art-project",
  storageBucket: "final-art-project.appspot.com",
  messagingSenderId: "689580273257",
  appId: "1:689580273257:web:5a0557d90415342df3fcf8",
  measurementId: "G-1Z2NWXQBNW"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const username = prompt("What's your name?");

const tabs = document.querySelectorAll('.tab-navigation a');
const tabContents = document.querySelectorAll('.tab-content');

document.getElementById("send-message").addEventListener("submit", postChat);
function postChat(e) {
  e.preventDefault();
  const timestamp = Date.now();
  const chatTxt = document.getElementById("chat-txt");
  const message = chatTxt.value;
  chatTxt.value = "";
  db.ref("messages/" + timestamp).set({
    usr: username,
    msg: message,
  });
}

const fetchChat = db.ref("messages/");
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const msg = "<li>" + messages.usr + " : " + messages.msg + "</li>";
  document.getElementById("messages").innerHTML += msg;
});