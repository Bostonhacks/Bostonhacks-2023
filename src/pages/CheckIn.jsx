import React, { useState } from "react";
import { query, collection, getDocs, where } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';

const CheckIn = () => {
    const [email, setEmail] = useState("");
    const [application, setApplication] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Call the fetchApplications function when the form is submitted
        fetchApplications();
    }

    const fetchApplications = async () => {
        try {
            const q = query(collection(db, "applications"), where("email", "==", email));
            const doc = await getDocs(q);

            if (doc.docs.length > 0) {
                const status = doc.docs[0].data().status;
                setApplication({ status });
            } else {
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
                <label>
                    Email
                    <input
                        type="email"
                        placeholder="Please enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
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
