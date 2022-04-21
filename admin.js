/*var config = {
    apiKey: "AIzaSyCuxrJZUhn9HYFPY8zXT6fW5frDq_JGfTo",
      authDomain: "minikyt-3aa38.firebaseapp.com",
      projectId: "minikyt-3aa38",
      storageBucket: "minikyt-3aa38.appspot.com",
      messagingSenderId: "252986858068",
      appId: "1:252986858068:web:0c86695dab67c6b02debc1",
      measurementId: "G-JDVM38BPT0"
        };
        firebase.initializeApp(config);
        const db = firebase.firestore();
        db.settings({ timestampsInSnapshots: true });

        const cafeList = document.querySelector('#user-list');


// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let address = document.createElement('span');
    let email=document.createElement('span');
    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    address.textContent = doc.data().address;
    email.textContent=doc.data().email
    li.appendChild(name);
    li.appendChild(address);
    li.appendChild(email);

    cafeList.appendChild(li);
}

// getting data
db.collection('signups').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});*/
console.log(Math.sqrt(9))
var a=prompt('a value')
var b=prompt('b value')
var c=prompt('c value')
var sol1a=(-1*b)+Math.sqrt(Math.pow(b,2)-4*a*c)
var sol1=sol1a/(2*a)


var sol2a=(-1*b)-Math.sqrt(Math.pow(b,2)-4*a*c)
var sol2=sol2a/(2*1)
if(sol1==NaN&&sol2==NaN){
    alert('no solution-- gimme a real quadratic stoopid');
}else{
alert('solutions are '+sol1+" and "+sol2)
}

