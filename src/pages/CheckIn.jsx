import React, { useState } from "react";
import { query, collection, getDocs, where, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';

const CheckIn = () => {
    const [email, setEmail] = useState("");
    const [application, setApplication] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Call the fetchApplications function when the form is submitted
        fetchApplications();
    }

    const updateApplicationStatus = async (docId, newStatus) => {
        const applicationRef = doc(db, "applications", docId);

        try {
            // Update the status in Firestore
            await updateDoc(applicationRef, { status: newStatus });

            // Update the status in the application state
            setApplication({ status: newStatus });
        } catch (error) {
            console.log(error);
            alert("An error has occurred updating the application status");
        }
    }

    const fetchApplications = async () => {
        try {
            const q = query(collection(db, "applications"), where("email", "==", email));
            const querySnapshot = await getDocs(q);

            // Check if there are any documents
            if (!querySnapshot.empty) {
                const applicationDoc = querySnapshot.docs[0];
                const status = applicationDoc.data().status;

                if (status === "Confirmed") {
                    // If the status is "confirmed," update it to "Checked In"
                    await updateApplicationStatus(applicationDoc.id, "Checked In");
                } else {
                    setApplication({ status: "You are not confirmed. Please speak to one of the BostonHacks Organizers" });
                }
            } else {
                // If there isn't any application, display a message
                setApplication({ status: "No application found" });
            }
        } catch (error) {
            console.log(error);
            alert("An error has occurred fetching user data");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                        type="email"
                        placeholder="Please enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                <input type="submit" value="Submit" />
            </form>

            {/* Display application status */}
            <div>
                <p>Status: {application.status}</p>
            </div>
        </div>
    )
}

export default CheckIn;
