const config = {
    apiKey: "AIzaSyAtizPSaO_Q_m9QYVIgniv9jC7Ro_0w8HM",
    authDomain: "expert-classes.firebaseapp.com",
    databaseURL: "https://expert-classes-default-rtdb.firebaseio.com",
    projectId: "expert-classes",
    storageBucket: "expert-classes.appspot.com",
    messagingSenderId: "650573225801",
    appId: "1:650573225801:web:8927dab06ee9501ecdc498",
    measurementId: "G-YXEBBBT37Z"
  };
  
  firebase.initializeApp(config);

  const database = firebase.database();
  function uploadFormData(event) {
    event.preventDefault(); // Prevents the form from submitting in the default way
    // const name = document.document.getElementById('name').value;
    const name = document.getElementById("name").value;
    const degree = document.getElementById("degree").value;
    const experince = document.getElementById("experince").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;


    const newDataKey = database.ref().child('facultyform').push().key;
    const updates = {};

    
    updates['/facultyform/' + newDataKey] = {
        Name: name,
        Degree: degree,
        Experince:experince,
        Age:age,
        Gender:gender,
        Number:number,
        Email:email,
        Address:address
    };
        database.ref().update(updates)
        .then(() => {
          alert("Admission data Uploaded!")
       //show alert
          document.querySelector("#alert").style.display = "block";
    
          //Hide alert after 2 s
          setTimeout(function () {
          document.querySelector("#alert").style.display = "none";
           }, 2000);
      //clear form
          document.getElementById("facultyForm").reset();
          // You can redirect to a success page or perform other actions here
        })
        .catch((error) => {
          console.error('Error adding data: ', error);
        });
    }
  
      // Listen for form submission
      const formElement = document.getElementById('facultyForm');
      formElement.addEventListener('submit', uploadFormData);
