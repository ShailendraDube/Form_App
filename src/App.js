import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the value of Form Data:");
    console.log(formData);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">User Information</h2>

        <label htmlFor="firstName" className="block text-gray-700 font-medium mb-1">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="John"
          value={formData.firstName}
          onChange={changeHandler}
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="lastName" className="block text-gray-700 font-medium mb-1">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Doe"
          value={formData.lastName}
          onChange={changeHandler}
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="johndoe@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="country" className="block text-gray-700 font-medium mb-1">
          Country
        </label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            Select a Country
          </option>
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <label htmlFor="streetAddress" className="block text-gray-700 font-medium mb-1">
          Street Address
        </label>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="Sector-36"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="city" className="block text-gray-700 font-medium mb-1">
          City
        </label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Mumbai"
          value={formData.city}
          onChange={changeHandler}
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="state" className="block text-gray-700 font-medium mb-1">
          State / Province
        </label>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Maharashtra"
          value={formData.state}
          onChange={changeHandler}
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="postalCode" className="block text-gray-700 font-medium mb-1">
          Postal Code
        </label>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="431513"
          value={formData.postalCode}
          onChange={changeHandler}
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

<fieldset className="mb-6">
  <legend className="text-lg font-medium text-gray-700 mb-4">By Email</legend>

  <div className="flex items-start space-x-4 mb-4">
    <input
      id="comments"
      name="comments"
      type="checkbox"
      checked={formData.comments}
      onChange={changeHandler}
      className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
    />
    <div>
      <label htmlFor="comments" className="font-medium text-gray-700">
        Comments
      </label>
      <p className="text-sm text-gray-500">
        Get notified when someone posts a comment on a posting.
      </p>
    </div>
  </div>

  <div className="flex items-start space-x-4 mb-4">
    <input
      id="candidates"
      name="candidates"
      type="checkbox"
      checked={formData.candidates}
      onChange={changeHandler}
      className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
    />
    <div>
      <label htmlFor="candidates" className="font-medium text-gray-700">
        Candidates
      </label>
      <p className="text-sm text-gray-500">
        Get notified when a candidate applies for a job.
      </p>
    </div>
  </div>

  <div className="flex items-start space-x-4">
    <input
      id="offers"
      name="offers"
      type="checkbox"
      checked={formData.offers}
      onChange={changeHandler}
      className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
    />
    <div>
      <label htmlFor="offers" className="font-medium text-gray-700">
        Offers
      </label>
      <p className="text-sm text-gray-500">
        Get notified when a candidate accepts or rejects an offer.
      </p>
    </div>
  </div>
</fieldset>


        <fieldset className="mb-6">
          <legend className="text-lg font-medium text-gray-700 mb-2">
            Push Notifications
          </legend>

          <p className="text-sm text-gray-600 mb-4">
            These are delivered via SMS to your mobile phone.
          </p>

          <div className="mb-2">
            <input
              type="radio"
              id="pushEverything"
              name="pushNotifications"
              value="Everything"
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pushEverything" className="text-gray-700">
              Everything
            </label>
          </div>

          <div className="mb-2">
            <input
              type="radio"
              id="pushEmail"
              name="pushNotifications"
              value="Same as email"
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pushEmail" className="text-gray-700">
              Same as email
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="pushNothing"
              name="pushNotifications"
              value="No Push Notifications"
              onChange={changeHandler}
              className="mr-2"
            />
            <label htmlFor="pushNothing" className="text-gray-700">
              No Push Notifications
            </label>
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
