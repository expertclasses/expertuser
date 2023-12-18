var firebaseConfig = {
    apiKey: "AIzaSyAtizPSaO_Q_m9QYVIgniv9jC7Ro_0w8HM",
    authDomain: "expert-classes.firebaseapp.com",
    databaseURL: "https://expert-classes-default-rtdb.firebaseio.com",
    projectId: "expert-classes",
    storageBucket: "expert-classes.appspot.com",
    messagingSenderId: "650573225801",
    appId: "1:650573225801:web:8927dab06ee9501ecdc498",
    measurementId: "G-YXEBBBT37Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  const database = firebase.database();
  const storage = firebase.storage();
 
  
  function fetchData() {
    const dataList = document.getElementById('facultyData');
  
    // Clear previous data if any
    dataList.innerHTML = '';
  
    // Fetch data from Firebase Realtime Database
    database.ref('faculties').once('value')
      .then(snapshot => {
  
        snapshot.forEach(childSnapshot => {
          const key = childSnapshot.key; // Get the key of the entry
          const data = childSnapshot.val();
  
          // <strong>Textarea Input:</strong>
          // Create list item for each data entry with serial number and delete button
          const listItem = document.createElement('div');
          listItem.classList.add('item');
          listItem.innerHTML = `
            <img src="${data.imageUrl}" alt="${data.name}">
             <h3>${data.name}</h3>
             <p>${data.description}</p>
          `;
  
          dataList.appendChild(listItem);
         
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  window.onload = fetchData;