import React, { useEffect } from 'react';

import { useNavigate } from "react-router-dom";

import { auth, addApplicationDoc } from '../firebase/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

// Import assets.
import BackgroundScroll from "../assets/images/ApplicationPage/ScrollBackground.svg";

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
  // Custom Select Field styles.
  const selectFieldStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: "white",
      backgroundColor: state.isSelected ? "rgb(167, 149, 129, 0.7)" : "rgb(167, 149, 129)", 
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      height: "2.5rem",
      padding: "0 1rem",
      width: "100%",
      backgroundColor: "#A79581",
      color: "white",
      caretColor: "white",
      
    }),

    singleValue: (defaultStyles) => ({
      ...defaultStyles, 
      color: "white" 
    }),

    dropdownIndicator: (defaultStyles) => ({
      ...defaultStyles, 
      color: "white !important"
    }),

    indicatorSeparator: (defaultStyles) => ({
      ...defaultStyles, 
      display: "none"
    }),

    menu: (defaultStyles) => ({
      ...defaultStyles,
      paddingTop: "0"
    }),

    menuList: (base) => ({
      ...base,

      "::-webkit-scrollbar": {
        display: "none"
      },
      "::-webkit-scrollbar-track": {
        display: "none"
      },
      "::-webkit-scrollbar-thumb": {
        display: "none"
      },
      "::-webkit-scrollbar-thumb:hover": {
        display: "none"
      }
    }),
  };

  // Display message to user while form is loading / has finished loading.
  const [message, setMessage] = React.useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
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

  // TODO: Form validation, mobile view, Check for logged in
  // Redirect user to login page if they are not logged in.
  /*
  useEffect(() => {
    if (loading) return;

    if (!user) navigate("/login");

  }, [user, loading, navigate]);
  */

  return (
    <div 
      style={{
        background:
          "linear-gradient(180deg, #220532 0%, #1A0732 16.67%, #0F204B 49.13%, #184773 80.98%, #396A98 100%)",
      }}
    >
      <div className="flex justify-center py-[50px]">
        <div 
          className="w-3/4 py-20 px-32"
          style={{ 
            backgroundImage: "url(" + BackgroundScroll + ")", 
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >

          {/* Form Title */}
          <div className="text-center font-minecraft">
            <h2 className="text-[#453119] text-[60px] font-bold">BostonHacks</h2>
            <h3 className="text-white text-[50px]">2023</h3>
          </div>

          <hr className="border border-black w-3/4 mx-auto"/>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* General Information Section */}
            <div className="my-[50px]">
              <h3 className="font-minecraft text-[#453119] text-[30px] font-bold">General Information</h3>

              {/* General Information Form Fields */}
              <div className="grid grid-cols-2 gap-4"> 
                <div>
                  <label className="ml-1 font-bold">First Name</label>
                  <input
                    placeholder="First Name"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('firstName', { required: true })}
                  />
                </div>

                <div>
                  <label className="ml-1 font-bold">Last Name</label>
                  <input
                    placeholder="Last Name"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('lastName', { required: true })}
                  />
                </div>
                
                <div>
                  <label className="ml-1 font-bold">Email</label>
                  <input
                    placeholder="Email"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('formEmail', { required: true })}
                  />
                </div>
                
                <div>
                  <label className="ml-1 font-bold">Phone Number</label>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('phoneNumber', { required: true })}
                  />
                </div>

                <div>
                  <label className="ml-1 font-bold">Date of Birth</label>
                  <input
                    type="date"
                    placeholder="Date of Birth"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('dateOfBirth', { required: true })}
                  />
                </div>

                <div>
                  <label className="ml-1 font-bold">Ethnicity</label>
                  <Controller
                    name="ethnicity"
                    control={control}
                    render={({ field }) => (
                      <Select
                        styles={selectFieldStyles}
                        options={ethnicities.map((ethnicityOption) => {
                          return { label: ethnicityOption, value: ethnicityOption };
                        })}
                        {...field}
                      />
                    )}
                  />
                </div>

                <div>
                  <label className="ml-1 font-bold">Gender</label>
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <Select
                        styles={selectFieldStyles}
                        options={genders.map((genderOption) => {
                          return { label: genderOption, value: genderOption };
                        })}
                        {...field}
                      />
                    )}
                  />
                </div>

                <div>
                  <label className="ml-1 font-bold">Pronouns</label>
                  <Controller
                    name="pronouns"
                    control={control}
                    render={({ field }) => (
                      <Select
                        styles={selectFieldStyles}
                        options={pronouns.map((pronounOption) => {
                          return { label: pronounOption, value: pronounOption };
                        })}
                        {...field}
                      />
                    )}
                  />
                </div>
              </div>
            </div>

            <hr className="border border-black w-3/4 mx-auto"/>

            {/* Address Information Section */}
            <div className="my-[50px]">
              <h3 className="font-minecraft text-[#453119] text-[30px] font-bold">Address Information</h3>
              
              {/* Address Information Form Fields */}
              <div className="grid grid-cols-2 gap-4"> 
                <div className="col-span-2">
                  <label className="ml-1 font-bold">Address</label>
                  <input
                    placeholder="Address"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('address', { required: true })}
                  />
                </div>

                <div>
                  <label className="ml-1 font-bold">Country</label>
                  <Controller
                    name="country"
                    control={control}
                    render={({ field }) => (
                      <Select
                        styles={selectFieldStyles}
                        options={countries.map((countryOption) => {
                          return { label: countryOption, value: countryOption };
                        })}
                        {...field}
                      />
                    )}
                  />
                </div>

                <div>
                  <label className="ml-1 font-bold">City</label>
                  <input
                    placeholder="City"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('city', { required: true })}
                  />
                </div>

                <div>
                  <label className="ml-1 font-bold">State</label>
                  <small className="ml-2">Select <i>"Outside US"</i> if not applicable</small>
                  <Controller
                    name="state"
                    control={control}
                    render={({ field }) => (
                      <Select
                        styles={selectFieldStyles}
                        options={states.map((stateOption) => {
                          return { label: stateOption, value: stateOption };
                        })}
                        {...field}
                      />
                    )}
                  />
                </div>

                <div>
                  <label className="ml-1 font-bold">Zip Code</label>
                  <input
                    placeholder="Zip Code"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('zipCode', { required: true })}
                  />
                </div>
              

              </div>
            </div>

            <hr className="border border-black w-3/4 mx-auto"/>

            {/* Education Section */}
            <div className="my-[50px]">
              <h3 className="font-minecraft text-[#453119] text-[30px] font-bold">Education</h3>
              
              {/* Education Form Fields */}
              <div className="grid grid-cols-2 gap-4"> 
                <div>
                  <label className="ml-1 font-bold">College</label>
                  <input
                    placeholder="College"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('college', { required: true })}
                  />
                </div>

                <div>
                  <label className="ml-1 font-bold">Graduation Year</label>
                  <input
                    placeholder="Graduation Year"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('collegeYear', { required: true })}
                  />
                </div>

                <div>
                  <label className="ml-1 font-bold">Major</label>
                  <Controller
                    name="major"
                    control={control}
                    render={({ field }) => (
                      <Select
                        styles={selectFieldStyles}
                        options={majors.map((majorOption) => {
                          return { label: majorOption, value: majorOption };
                        })}
                        {...field}
                      />
                    )}
                  />
                </div>

                <div>
                  <label className="ml-1 font-bold">Education Level</label>
                  <Controller
                    name="educationLevel"
                    control={control}
                    render={({ field }) => (
                      <Select
                        styles={selectFieldStyles}
                        options={educationLevels.map((educationLevelOption) => {
                          return { label: educationLevelOption, value: educationLevelOption };
                        })}
                        {...field}
                      />
                    )}
                  />
                </div>

              </div>
            </div>


          </form>

        </div>

        </div>
      </div>
  );
};

/*
<form onSubmit={handleSubmit(onSubmit)}>

        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        />
      </form>
*/

export default Application;
