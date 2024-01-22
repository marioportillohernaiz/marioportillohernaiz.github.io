var firebaseConfig = {
    apiKey: "AIzaSyDPF4Lq-UR--BBUoJRCJcaujU_L4SmC2Wc",
    authDomain: "test-eba59.firebaseapp.com",
    projectId: "test-eba59",
    storageBucket: "test-eba59.appspot.com",
    messagingSenderId: "931359586638",
    appId: "1:931359586638:web:7314e62da0bf993573061f"
};

firebase.initializeApp(firebaseConfig);
const dbComida = firebase.firestore().collection("comida");

dbComida.doc("plato1").get().then((doc) => {if (doc.exists) {
    console.log(doc.data().nombre);
}});