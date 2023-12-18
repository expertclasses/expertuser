// Your web app's Firebase configuration
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

  // Function to upload form data to Firebase Realtime Database
  function uploadFormData(event) {
    event.preventDefault(); // Prevents the form from submitting in the default way
    // const name = document.document.getElementById('name').value;
    const branch = document.getElementById("branch").value;
    const rollnumber = document.getElementById("rollnumber").value;
    const year = document.getElementById("year").value;
    const name = document.getElementById("name").value;
    const fathername = document.getElementById("fathername").value;
    const mothername = document.getElementById("mothername").value;
    const dateofbirth = document.getElementById("dateofbirth").value;//new
    const age = document.getElementById("age").value;//new
    const email = document.getElementById("email").value;
    const qualification = document.getElementById("qualification").value;
    const caste = document.getElementById("caste").value;
    const gender = document.getElementById("gender").value;
    const religion = document.getElementById("religion").value;
    const course = document.getElementById("course").value;
    const address = document.getElementById("address").value;
    const taluk = document.getElementById("taluk").value;//new
    const district = document.getElementById("district").value;//new
    const pincode = document.getElementById("pincode").value;//new
    const slottime = document.getElementById("slottime").value;
    const starttime = document.getElementById("starttime").value;
    const endtime = document.getElementById("endtime").value;
    const userno = document.getElementById("userno").value;
    const parentsno = document.getElementById("parentsno").value;
    const fristPayment = document.getElementById("fristPayment").value;//new
    const fristPayDate = document.getElementById("fristPayDate").value;//new
    const secondPayment = document.getElementById("secondPayment").value;//new
    const secondPayDate = document.getElementById("secondPayDate").value;//new
    const thirdPayment = document.getElementById("thirdPayment").value;//new
    const thirdPayDate = document.getElementById("thirdPayDate").value;//new
    const fourtPayment = document.getElementById("fourtPayment").value;//new
    const fourtPayDate = document.getElementById("fourtPayDate").value;//new
    const fifthPayment = document.getElementById("fifthPayment").value;//new
    const fifthPayDate = document.getElementById("fifthPayDate").value;//new

    const newDataKey = database.ref().child('admission').push().key;
    const updates = {};

    
    updates['/admission/' + newDataKey] = {
        Branch: branch,
        Year: year,
        RollNumber: rollnumber,
        StudentName: name,
        FatherName: fathername,
        Mothername: mothername,
        DOB:dateofbirth,//new
        Age:age,//new
        Email: email,
        Qualification: qualification,
        Caste: caste,
        Gender: gender,
        Religion: religion,
        Address: address,
        Taluk:taluk,//new
        District:district,//new
        Pincode:pincode,//new
        Course: course,
        Slottime: slottime,
        Starttime: starttime,
        Endtime: endtime,
        StudentNo: userno,
        Parentsno: parentsno,
        FristPayment:fristPayment,
        FristPayDate:fristPayDate,
        SecondPayment:secondPayment,
        SecondPayDate:secondPayDate,
        ThirdPayment:thirdPayment,
        ThirdPayDate:thirdPayDate,
        FourtPayment:fourtPayment,
        FourtPayDate:fourtPayDate,
        FifthPayment:fifthPayment,
        FifthPayDate:fifthPayDate // Change this property name according to your requirement
        
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
        document.getElementById("admissionForm").reset();
        // You can redirect to a success page or perform other actions here
      })
      .catch((error) => {
        console.error('Error adding data: ', error);
      });
  }

    // Listen for form submission
    const formElement = document.getElementById('admissionForm');
    formElement.addEventListener('submit', uploadFormData);
  
//   function submitForm(e) {
//     e.preventDefault();
  
//     // get Values
//     const branch = document.getElementById("branch");
//     const rollnumber = document.getElementById("rollNumber");
//     const year = document.getElementById("year");
//     const name = document.getElementById("name");
//     const fathername = document.getElementById("fathername");
//     const mothername = document.getElementById("mothername");
//     const dateofbirth = document.getElementById("dateofbirth");//new
//     const age = document.getElementById("age");//new
//     const email = document.getElementById("email");
//     const qualification = document.getElementById("qualification");
//     const caste = document.getElementById("caste");
//     const gender = document.getElementById("gender");
//     const religion = document.getElementById("religion");
//     const course = document.getElementById("course");
//     const address = document.getElementById("address");
//     const taluk = document.getElementById("taluk");//new
//     const district = document.getElementById("district");//new
//     const pincode = document.getElementById("pincode");//new
//     const slottime = document.getElementById("slot-time");
//     const starttime = document.getElementById("start-time");
//     const endtime = document.getElementById("end-time");
//     const userno = document.getElementById("userno");
//     const parentsno = document.getElementById("parentsno");
//     const fristPayment = document.getElementById("fristPayment");//new
//     const fristPayDate = document.getElementById("fristPayDate");//new
//     const secondPayment = document.getElementById("secondPayment");//new
//     const secondPayDate = document.getElementById("secondPayDate");//new
//     const thirdPayment = document.getElementById("thirdPayment");//new
//     const thirdPayDate = document.getElementById("thirdPayDate");//new
//     const fourtPayment = document.getElementById("fourtPayment");//new
//     const fourtPayDate = document.getElementById("fourtPayDate");//new
//     const fifthPayment = document.getElementById("fifthPayment");//new
//     const fifthPayDate = document.getElementById("fifthPayDate");//new

  
//     //save message
  
//     saveMessage(
//       branch,
//       rollnumber,
//       year,
//       name,
//       fathername,
//       mothername,
//       dateofbirth,
//       age,
//       email,
//       qualification,
//       caste,
//       gender,
//       religion,
//       course,
//       address,
//       taluk,
//       district,
//       pincode,
//       slottime,
//       starttime,
//       endtime,
//       userno,
//       parentsno,
//       fristPayment,
//       fristPayDate,
//       secondPayment,
//       secondPayDate,
//       thirdPayment,
//       thirdPayDate,
//       fourtPayment,
//       fourtPayDate,
//       fifthPayment,
//       fifthPayDate
//     );
    
//         alert("Admission data Uploaded!")
//     //show alert
//     document.querySelector("#alert").style.display = "block";
  
//     //Hide alert after 2 s
//     setTimeout(function () {
//       document.querySelector("#alert").style.display = "none";
//     }, 2000);
//     //clear form
//     document.document.getElementById("admissionForm").reset();
//   }
//   //function to get form values

//   function document.getElementById(id) {
//     return document.document.getElementById(id).value;
//   }
 
//   //save message to firebase
//   function saveMessage(
//     branch,
//       rollnumber,
//       year,
//       name,
//       fathername,
//       mothername,
//       dateofbirth,
//       age,
//       email,
//       qualification,
//       caste,
//       gender,
//       religion,
//       course,
//       address,
//       taluk,
//       district,
//       pincode,
//       slottime,
//       starttime,
//       endtime,
//       userno,
//       parentsno,
//       fristPayment,
//       fristPayDate,
//       secondPayment,
//       secondPayDate,
//       thirdPayment,
//       thirdPayDate,
//       fourtPayment,
//       fourtPayDate,
//       fifthPayment,
//       fifthPayDate
//   ) {
//     let newMessageRef = messagesRef.push();
//     newMessageRef.set({
//       Branch: branch,
//       Year: year,
//       RollNumber: rollnumber,
//       StudentName: name,
//       FatherName: fathername,
//       Mothername: mothername,
//       DOB:dateofbirth,
//       Age:age,
//       Email: email,
//       Qualification: qualification,
//       Caste: caste,
//       Gender: gender,
//       Religion: religion,
//       Address: address,
//       Taluk:taluk,
//       District:district,
//       Pincode:pincode,
//       Course: course,
//       Slottime: slottime,
//       Starttime: starttime,
//       Endtime: endtime,
//       StudentNo: userno,
//       Parentsno: parentsno,
//       FristPayment:fristPayment,
//       FristPayDate:fristPayDate,
//       SecondPayment:secondPayment,
//       SecondPayDate:secondPayDate,
//       ThirdPayment:thirdPayment,
//       ThirdPayDate:thirdPayDate,
//       FourtPayment:fourtPayment,
//       FourtPayDate:fourtPayDate,
//       FifthPayment:fifthPayment,
//       FifthPayDate:fifthPayDate
//     });
  
  
//   }
  
