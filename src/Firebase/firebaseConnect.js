import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyA9C1ZcxWVPw0hHdN1AzTRE6MGcq-bi8tg",
    authDomain: "notelistreact-4d951.firebaseapp.com",
    databaseURL: "https://notelistreact-4d951.firebaseio.com",
    projectId: "notelistreact-4d951",
    storageBucket: "notelistreact-4d951.appspot.com",
    messagingSenderId: "23318514425",
    appId: "1:23318514425:web:0b68b57c16b1da139bb028",
    measurementId: "G-Y1FM3VRWXD"
};
firebase.initializeApp(firebaseConfig)
//export const dataFirebase = firebase.initializeApp(firebaseConfig);

export const noteData = firebase.database().ref('dataforNote'); // Chỉnh dữ liệu nào set dữ liệu note đó
    //Lấy dữ liệu
    // data.once('value').then(function(snapshot){  
    //     console.log(snapshot.val());
    // })

    //Sửa dữ liệu
    // data.set({
    //     id:3,
    //     title:"Ghi chu 23/9",
    //     content:"Demo content for note"
    // })

    


