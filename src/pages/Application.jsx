import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { auth, db, storage } from '../firebase/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';

import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

// Import assets.
import BackgroundScroll from '../assets/images/ApplicationPage/ScrollBackground.svg';
import RegisterButton from '../components/ApplicationPageComponents/RegisterButton';

// Importing options for some of the questions.
import {
  ethnicities,
  genders,
  pronouns,
  states,
  countries,
  majors,
  educationLevels,
  sleepAccomodations,
  shirtSizes,
  diet,
} from '../components/ApplicationPageComponents/ApplicationOptions';
import { schools } from '../components/ApplicationPageComponents/ApplicationSchools';

const Application = ({ applicationId }) => {
  // Custom Select Field styles.
  const selectFieldStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: 'white',
      backgroundColor: state.isSelected
        ? 'rgb(167, 149, 129, 0.7)'
        : 'rgb(167, 149, 129)',
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      height: '2.5rem',
      padding: '0 1rem',
      width: '100%',
      backgroundColor: '#A79581',
      color: 'white',
      caretColor: 'white',
      borderRadius: '0.75rem',
    }),

    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: 'white',
    }),

    dropdownIndicator: (defaultStyles) => ({
      ...defaultStyles,
      color: 'white !important',
    }),

    indicatorSeparator: (defaultStyles) => ({
      ...defaultStyles,
      display: 'none',
    }),

    menu: (defaultStyles) => ({
      ...defaultStyles,
      paddingTop: '0',
    }),

    menuList: (base) => ({
      ...base,

      '::-webkit-scrollbar': {
        display: 'none',
      },
      '::-webkit-scrollbar-track': {
        display: 'none',
      },
      '::-webkit-scrollbar-thumb': {
        display: 'none',
      },
      '::-webkit-scrollbar-thumb:hover': {
        display: 'none',
      },
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: 'white',
    }),
  };

  // Display message to user while form is loading / has finished loading.
  const [resume, setResume] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // Function runs on application form submission.
  const onSubmit = async (data) => {
    // Allow null college major
    if (!data.collegeMajor) {
      data.collegeMajor = 'N/A';
    }

    if (resume != null) {
      const userDoc = doc(db, 'applications', applicationId);
      await updateDoc(userDoc, {
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        age: data.age,
        address: data.address,
        city: data.city,
        zipCode: data.zipCode,
        school: data.school,
        collegeYear: data.collegeYear,
        diet: data.diet['value'],
        github: data.github,
        linkedin: data.linkedin,
        portfolio: data.portfolio,
        bostonhacks: data.bostonhacks,
        acceptTerms: data.acceptTerms,
        acceptTerms2: data.acceptTerms2,
        acceptTerms3: data.acceptTerms3,
        ethnicity: data.ethnicity['value'],
        gender: data.gender['value'],
        pronouns: data.pronouns['value'],
        country: data.country['value'],
        state: data.state['value'],
        major: data.major['value'],
        educationLevel: data.educationLevel['value'],
        sleep: data.sleep['value'],
        shirtSize: data.shirtSize['value'],
        otherDiet: data.otherDiet,
        status: 'Submitted',
      });
      const resumeRef = ref(storage, `${applicationId}`);

      uploadBytes(resumeRef, resume).then(() => {
        alert('Application Submitted');
        navigate('/login');
      });
    } else {
      alert('please upload a resume');

      return;
    }
  };

  const onError = async (data, e) => {
    console.log(data);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div
      style={{
        background:
          'linear-gradient(180deg, #220532 0%, #1A0732 16.67%, #0F204B 49.13%, #184773 80.98%, #396A98 100%)',
      }}
      className="w-[100vw] h-[100vh] overflow-hidden overscroll-none"
    >
      <div className="absolute w-[100vw] h-[100vh] flex items-center justify-center">
        <img
          className="absolute z-0 h-[100vh] w-[1000px] object-cover md:object-none"
          src={BackgroundScroll}
          alt=""
        />
      </div>

      <div
        className="absolute flex justify-center w-full"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="h-[70vh] w-[90vh] overflow-auto mx-4">
          {/* Form Title */}
          <div className="text-center font-minecraft md:mt-5">
            <h2 className="text-[#453119] text-4xl sm:text-5xl font-bold">
              BostonHacks
            </h2>
            <h3 className="text-white text-4xl">2023</h3>
          </div>

          <hr className="border border-black w-3/4 mx-auto" />

          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="p-1 lg:px-[50px]"
          >
            {/* General Information Section */}
            <div className="my-[50px]">
              <h3 className="font-minecraft text-[#453119] text-2xl sm:text-3xl font-bold">
                General Information
              </h3>

              {/* General Information Form Fields */}
              <div className="md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <label className="ml-1 font-bold">First Name</label>
                  <input
                    placeholder="First Name"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('firstName', { required: true })}
                  />
                  {errors.firstName?.type === 'required' && (
                    <span className="text-red-500">Required</span>
                  )}
                </div>

                <div>
                  <label className="ml-1 font-bold">Last Name</label>
                  <input
                    placeholder="Last Name"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('lastName', { required: true })}
                  />
                  {errors.lastName?.type === 'required' && (
                    <span className="text-red-500">Required</span>
                  )}
                </div>

                <div>
                  <label className="ml-1 font-bold">Phone Number</label>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('phoneNumber', { required: true })}
                  />
                  {errors.phoneNumber?.type === 'required' && (
                    <span className="text-red-500">Required</span>
                  )}
                </div>

                <div>
                  <label className="ml-1 font-bold">Age</label>
                  <input
                    type="number"
                    placeholder="Age"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('age', { required: true })}
                  />
                  {errors.age?.type === 'required' && (
                    <span className="text-red-500">Required</span>
                  )}
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
                          return {
                            label: ethnicityOption,
                            value: ethnicityOption,
                          };
                        })}
                        {...field}
                      />
                    )}
                    rules={{ required: true }}
                  />
                  {errors.ethnicity?.type === 'required' && (
                    <span className="text-red-500">Required</span>
                  )}
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
                    rules={{ required: true }}
                  />
                  {errors.gender?.type === 'required' && (
                    <span className="text-red-500">Required</span>
                  )}
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
                    rules={{ required: true }}
                  />
                  {errors.pronouns?.type === 'required' && (
                    <span className="text-red-500">Required</span>
                  )}
                </div>
              </div>
            </div>

            <hr className="border border-black w-3/4 mx-auto" />

            {/* Address Information Section */}
            <div className="my-[50px]">
              <h3 className="font-minecraft text-[#453119] text-2xl sm:text-3xl font-bold">
                Address Information
              </h3>

              {/* Address Information Form Fields */}
              <div className="md:grid md:grid-cols-2 md:gap-4">
                <div className="md:col-span-2">
                  <label className="ml-1 font-bold">Address</label>
                  <input
                    placeholder="Address"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('address', { required: true })}
                  />
                  {errors.address?.type === 'required' && (
                    <span className="text-red-500">Required</span>
                  )}
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
                    rules={{ required: true }}
                  />
                  {errors.country?.type === 'required' && (
                    <span className="text-red-500">Required</span>
                  )}
                </div>

                <div>
                  <label className="ml-1 font-bold">City</label>
                  <input
                    placeholder="City"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('city', { required: true })}
                  />
                  {errors.city?.type === 'required' && (
                    <span className="text-red-500">Required</span>
                  )}
                </div>

                <div>
                  <label className="ml-1 font-bold">State</label>
                  <small className="ml-2">
                    Select <i>"Outside US"</i> if NA
                  </small>
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
                    rules={{ required: true }}
                  />
                  {errors.state?.type === 'required' && (
                    <span className="text-red-500">Required</span>
                  )}
                </div>

                <div>
                  <label className="ml-1 font-bold">Zip Code</label>
                  <input
                    placeholder="Zip Code"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('zipCode', { required: true })}
                  />
                  {errors.zipCode?.type === 'required' && (
                    <span className="text-red-500">Required</span>
                  )}
                </div>
              </div>
            </div>

            <hr className="border border-black w-3/4 mx-auto" />

            {/* Education Section */}
            <div className="my-[50px]">
              <h3 className="font-minecraft text-[#453119] text-2xl sm:text-3xl font-bold">
                Education
              </h3>

              {/* Education Form Fields */}
              <div className="md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <label className="ml-1 font-bold">School</label>
                  <Controller
                    name="school"
                    control={control}
                    render={({ field }) => (
                      <Select
                        styles={selectFieldStyles}
                        options={schools.map((schoolOption) => {
                          return { label: schoolOption, value: schoolOption };
                        })}
                        {...field}
                      />
                    )}
                    rules={{ required: true }}
                  />
                  {errors.school?.type === 'required' && (
                    <span className="text-red-500">Required</span>
                  )}
                </div>

                <div>
                  <label className="ml-1 font-bold">Graduation Year</label>
                  <input
                    placeholder="Graduation Year"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('collegeYear', { required: true })}
                  />
                  {errors.collegeYear?.type === 'required' && (
                    <span className="text-red-500">Required</span>
                  )}
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
                    rules={{ required: true }}
                  />
                  {errors.major?.type === 'required' && (
                    <span className="text-red-500">Required</span>
                  )}
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
                          return {
                            label: educationLevelOption,
                            value: educationLevelOption,
                          };
                        })}
                        {...field}
                      />
                    )}
                    rules={{ required: true }}
                  />
                  {errors.educationLevel?.type === 'required' && (
                    <span className="text-red-500">Required</span>
                  )}
                </div>
              </div>
            </div>

            <hr className="border border-black w-3/4 mx-auto" />

            {/* Misc Section */}
            <div className="my-[50px]">
              <h3 className="font-minecraft text-[#453119] text-2xl sm:text-3xl font-bold">
                Miscellaneous
              </h3>

              {/* Misc Form Fields */}
              <div className="md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <label className="ml-1 font-bold">Dietary Restrictions</label>
                  <Controller
                    name="diet"
                    control={control}
                    render={({ field }) => (
                      <Select
                        styles={selectFieldStyles}
                        options={diet.map((dietOption) => {
                          return { label: dietOption, value: dietOption };
                        })}
                        {...field}
                      />
                    )}
                    rules={{ required: true }}
                  />
                  {errors.diet?.type === 'required' && (
                    <span className="text-red-500">Required</span>
                  )}
                </div>

                <div>
                  <label className="ml-1 font-bold">
                    If other, please specify:
                  </label>
                  <input
                    placeholder=""
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('otherDiet')}
                  />
                </div>

                <div>
                  <label className="ml-1 font-bold">
                    What is your T-Shirt size?
                  </label>
                  <Controller
                    name="shirtSize"
                    control={control}
                    render={({ field }) => (
                      <Select
                        styles={selectFieldStyles}
                        options={shirtSizes.map((educationLevelOption) => {
                          return {
                            label: educationLevelOption,
                            value: educationLevelOption,
                          };
                        })}
                        {...field}
                      />
                    )}
                    rules={{ required: true }}
                  />
                  {errors.shirtSize?.type === 'required' && (
                    <span className="text-red-500">Required</span>
                  )}
                </div>

                <div>
                  <label className="ml-1 font-bold">
                    Do you need sleep accommodations?
                  </label>
                  <Controller
                    name="sleep"
                    control={control}
                    render={({ field }) => (
                      <Select
                        styles={selectFieldStyles}
                        options={sleepAccomodations.map((sleepOption) => {
                          return {
                            label: sleepOption,
                            value: sleepOption,
                          };
                        })}
                        {...field}
                      />
                    )}
                    rules={{ required: true }}
                  />
                  {errors.sleep?.type === 'required' && (
                    <span className="text-red-500">Required</span>
                  )}
                </div>
              </div>
            </div>

            <hr className="border border-black w-3/4 mx-auto" />

            {/* Links Section */}
            <div className="my-[50px]">
              <h3 className="font-minecraft text-[#453119] text-2xl sm:text-3xl font-bold">
                Links
              </h3>

              {/* Links Form Fields */}
              <div className="md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <label className="ml-1 font-bold">Github URL</label>
                  <input
                    placeholder="Github URL"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('github')}
                  />
                </div>

                <div>
                  <label className="ml-1 font-bold">LinkedIn URL</label>
                  <input
                    placeholder="LinkedIn URL"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('linkedin')}
                  />
                </div>

                <div>
                  <label className="ml-1 font-bold">Portfolio URL</label>
                  <input
                    placeholder="Portfolio URL"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('portfolio')}
                  />
                </div>
              </div>
            </div>

            <hr className="border border-black w-3/4 mx-auto" />

            <div className="my-[50px]">
              <label className="font-minecraft text-[#453119] text-2xl sm:text-3xl font-bold">
                What are you most excited about attending Bostonhacks?
              </label>
              <p className="font-minecraft text-[#453119] text-xl font-bold mb-10">
                (Min 50 Max 400 Characters):
              </p>
              <textarea
                placeholder="Tell us more!"
                className="w-full h-[200px] resize-none p-1 rounded-xl px-4 bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25"
                {...register('bostonhacks', {
                  required: true,
                  maxLength: 400,
                  minLength: 50,
                })}
              />
              {errors.bostonhacks?.type === 'required' && (
                <span className="text-red-500 ml-4">Required</span>
              )}
              {errors.bostonhacks?.type === 'minLength' && (
                <span className="text-red-500 ml-4">Tell us more!</span>
              )}
              {errors.bostonhacks?.type === 'maxLength' && (
                <span className="text-red-500 ml-4">Too many characters!</span>
              )}
            </div>

            <hr className="border border-black w-3/4 mx-auto" />

            <div className="my-[50px]">
              <h2 className="font-minecraft text-[#453119] text-2xl sm:text-3xl font-bold">
                MLH Terms and Conditions
              </h2>

              <div className="flex flex-row my-5">
                <input
                  className="mr-5"
                  type="checkbox"
                  {...register('acceptTerms', { required: true })}
                  id="acceptTerms"
                />
                <p className="">
                  Do you agree to the{' '}
                  <a
                    className="underline"
                    href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                  >
                    MLH Code of Conduct
                  </a>
                  ?
                </p>
                {errors.acceptTerms?.type === 'required' && (
                  <span className="text-red-500 ml-4">Required</span>
                )}
              </div>

              <div className="mb-5">
                <div className="flex flex-row">
                  <input
                    className="mr-5"
                    type="checkbox"
                    {...register('acceptTerms2', { required: true })}
                    id="acceptTerms2"
                  />
                  <p className="">
                    I authorize you to share my application/registration
                    information with Major League Hacking for event
                    administration, ranking, and MLH administration in-line with
                    the{' '}
                    <a className="underline" href="https://mlh.io/privacy">
                      MLH Privacy Policy.
                    </a>{' '}
                    I further agree to the terms of both the{' '}
                    <a
                      className="underline"
                      href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md"
                    >
                      MLH Contest Terms and Conditions
                    </a>{' '}
                    and the{' '}
                    <a className="underline" href="https://mlh.io/privacy">
                      MLH Privacy Policy.
                    </a>{' '}
                  </p>
                  {errors.acceptTerms2?.type === 'required' && (
                    <span className="text-red-500">Required</span>
                  )}
                </div>
              </div>

              <div className="">
                <div className="flex flex-row">
                  <input
                    className="mr-5"
                    type="checkbox"
                    {...register('acceptTerms3')}
                    id="acceptTerms3"
                  />
                  <p className="">
                    I authorize MLH to send me an email where I can further opt
                    into the MLH Hacker, Events, or Organizer Newsletters and
                    other communications from MLH.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border border-black w-3/4 mx-auto" />

            <div className="my-[50px]">
              <p className="font-minecraft text-[#453119] text-2xl sm:text-3xl font-bold mb-10">
                Resume Upload
              </p>
              <input
                type="file"
                placeholder="Please upload a copy of your resume:"
                accept=".pdf, .docx"
                onChange={(e) => {
                  setResume(e.target.files[0]);
                }}
              />
            </div>
            <div className="w-full flex justify-end">
              <RegisterButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Application;
