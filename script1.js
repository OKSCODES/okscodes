// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBEdy69nRJ4mLj3TEfNnLup2iZccR_tdn8",
    authDomain: "okscodes.firebaseapp.com",
    projectId: "okscodes",
    storageBucket: "okscodes.firebasestorage.app",
    messagingSenderId: "1007678948611",
    appId: "1:1007678948611:web:ad55bc5bc3373accd25536",
    measurementId: "G-NK3TR6ZDDZ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // Handle form submit
  const form = document.querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const name = form.name.value;
    const email = form.email.value;
    const budget = form.budget.value;
    const timeline = form.timeline.value;
    const project = form.project.value;
  
    try {
      await db.collection("projectRequests").add({
        name,
        email,
        budget,
        timeline,
        project,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
  
      alert("Your details have been sent successfully!");
      form.reset();
    } catch (err) {
      console.error("Error saving to Firebase:", err);
      alert("Something went wrong. Please try again.");
    }
  });
  