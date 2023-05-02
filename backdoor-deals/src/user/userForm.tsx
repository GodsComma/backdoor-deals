import { useState } from "react";

// Create an object to store user data
const UserData = {
    name: '',
    regTime: ''
};

// Create a React component called UserForm
export const UserForm = () => {

    // Initialize the "name" state variable to an empty string
    const [name, setName] = useState('');

    // Define a function that saves the user's name and the current time to local storage and redirects the user to the "/lobby/abs" page
    const saveData = () => {
        // Update the UserData object with the user's name and the current time
        UserData.name = name;
        UserData.regTime = new Date().toString();
        // Store the UserData object in local storage as a JSON string
        localStorage.setItem('UserData', JSON.stringify(UserData));
        // Redirect the user to the "/lobby/abs" page
        window.location.replace('/lobby/abs');
        return;
    }

    // Render the user form
    return (
        <div className="mx-auto w-full max-w-xs z-10">
            <div className="bg-teal-200 shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4" id="form">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Name"
                        // Update the "name" state variable whenever the user types in the input field
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => saveData()}>
                        Save
                    </button>
                </div>
                <br/>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 BackDoor Deals Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
}

// Export the UserForm component as the default export
export default UserForm;
