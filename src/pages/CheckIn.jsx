import React from "react";
import { query, collection, getDocs, where } from 'firebase/firestore'

const CheckIn = () => {

    const handleSubmit = (event) => {
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input type="email" placeholder="Please enter your Email" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}