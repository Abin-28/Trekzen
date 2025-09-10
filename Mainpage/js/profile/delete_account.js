import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth , reauthenticateWithCredential, EmailAuthProvider , deleteUser  } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { getFirestore, collection, query, where, deleteDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

const firebaseConfig = {
	apiKey: "AIzaSyB3GccrbGOWYeJb1IwwrAnoStVtouHmo-g",
	authDomain: "trekzen2024.firebaseapp.com",
	projectId: "trekzen2024",
	storageBucket: "trekzen2024.appspot.com",
	messagingSenderId: "539096075945",
	appId: "1:539096075945:web:88e4786b9f407a2e32e3b8",
	measurementId: "G-9ZD4X1PMM9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

document.addEventListener('DOMContentLoaded', function() {
	var deleteBtn = document.getElementById("deleteAccountBtn");
	if (!deleteBtn) return;
	deleteBtn.addEventListener("click", async function () {
		var confirmation = confirm("Are you sure you want to delete your account? This action cannot be undone.");
		if (!confirmation) { return; }

		var user = auth.currentUser;
		try {
			const email = user.email;
			const password = prompt("Please enter your password to confirm account deletion:");
			const credential = EmailAuthProvider.credential(email, password);
			await reauthenticateWithCredential(user, credential);

			await deleteUser(user);

			const userAuthListQuery = query(collection(firestore, 'UsersAuthList'), where('userId', '==', user.uid));
			const userAuthListDocs = await getDocs(userAuthListQuery);
			userAuthListDocs.forEach(async (docItem) => {
				await deleteDoc(docItem.ref);
			});

			const commentsQuery = query(collection(firestore, 'comments'), where('userId', '==', user.uid));
			const commentsDocs = await getDocs(commentsQuery);
			commentsDocs.forEach(async (docItem) => {
				await deleteDoc(docItem.ref);
			});

			alert("Your account has been deleted.");
			window.location.href = "../Loginpage/user_login.html";
		} catch (error) {
			console.error(error);
			alert("Failed to delete your account. Please try again later.");
		}
	});
});
