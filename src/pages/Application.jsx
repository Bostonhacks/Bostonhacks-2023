import React from 'react';

import { auth, addApplicationDoc } from '../firebase/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useForm, Controller } from 'react-hook-form';
import Select from 'react-dropdown-select';

// Importing options for some of the questions.
import {
  ethnicities,
  genders,
  pronouns,
  states,
  countries,
  majors,
  educationLevels,
} from '../components/ApplicationPageComponents/ApplicationOptions';

const Application = () => {
  // Display message to user while form is loading / has finished loading.
  const [message, setMessage] = React.useState('');
  const [user, loading] = useAuthState(auth);
  const { register, handleSubmit, control } = useForm();

  // Function runs on application form submission.
  const onSubmit = async (data) => {
    setMessage('Loading');

    try {
      await addApplicationDoc(data, user.uid);
      setMessage('Completed');
    } catch (err) {
      setMessage('Error');
      console.error(err);
    }
  };

  return (
    <div>
      {/* Alert message */}
      {message && (
        <div
          className="bg-orange-100 border-l-4 border-green-500 text-green-700 p-4"
          role="alert"
        >
          <p class="font-bold">{message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name:</label>
        <input
          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          {...register('firstName', { required: true })}
        />

        <label>Last Name:</label>
        <input
          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          {...register('lastName', { required: true })}
        />

        <label>Date of Birth:</label>
        <input
          type="date"
          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          {...register('dateOfBirth', { required: true })}
        />

        <label>Email:</label>
        <input
          placeholder="name@domain.com"
          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          {...register('formEmail', { required: true })}
        />

        <label>Phone Number:</label>
        <input
          type="number"
          placeholder="1234567890"
          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          {...register('phoneNumber', { required: true })}
        />

        <label>Race / Ethnicity:</label>
        <br />
        <small>Check all that apply</small>
        <div id="ethnicity-checkboxes">
          {ethnicities.map((ethnicityOption) => {
            return (
              <div key={ethnicityOption}>
                <label>{ethnicityOption}</label>
                <input
                  type="checkbox"
                  value={ethnicityOption}
                  {...register('ethnicity')}
                />
              </div>
            );
          })}
        </div>

        <label>Gender:</label>
        <small>Check all that apply</small>
        <div id="gender-checkboxes">
          {genders.map((genderOption) => {
            return (
              <div key={genderOption}>
                <label>{genderOption}</label>
                <input
                  type="checkbox"
                  value={genderOption}
                  {...register('gender')}
                />
              </div>
            );
          })}
        </div>

        <label>Pronouns:</label>
        <small>Check all that apply</small>
        <div id="pronoun-checkboxes">
          {pronouns.map((pronounOption) => {
            return (
              <div key={pronounOption}>
                <label>{pronounOption}</label>
                <input
                  type="checkbox"
                  value={pronounOption}
                  {...register('pronouns')}
                />
              </div>
            );
          })}
        </div>

        <label>Address:</label>
        <input
          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          {...register('address', { required: true })}
        />

        <label>City:</label>
        <input
          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          {...register('city', { required: true })}
        />

        <label>US State:</label>
        <small>Indicate "Outside US" if not applicable</small>
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <Select
              options={states.map((stateOption) => {
                return { label: stateOption, value: stateOption };
              })}
              {...field}
            />
          )}
        />

        <label>Country:</label>
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Select
              options={countries.map((countryOption) => {
                return { label: countryOption, value: countryOption };
              })}
              {...field}
            />
          )}
        />

        <label>Zip Code:</label>
        <input
          type="number"
          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          {...register('zipCode', { required: true })}
        />

        <label>College:</label>
        <input
          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          {...register('college', { required: true })}
        />

        <label>Graduation Year:</label>
        <input
          type="number"
          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          {...register('gradYear', { required: true })}
        />

        <label>Major / Field of Study:</label>
        <Controller
          name="major"
          control={control}
          render={({ field }) => (
            <Select
              options={majors.map((majorOption) => {
                return { label: majorOption, value: majorOption };
              })}
              {...field}
            />
          )}
        />

        <label>Current Education Level:</label>
        <Controller
          name="educationLevel"
          control={control}
          render={({ field }) => (
            <Select
              options={educationLevels.map((educationLevelOption) => {
                return {
                  label: educationLevelOption,
                  value: educationLevelOption,
                };
              })}
              {...field}
            />
          )}
        />

        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Application;
