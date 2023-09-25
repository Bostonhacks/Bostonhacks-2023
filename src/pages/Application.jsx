import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useNavigate } from 'react-router-dom';

import {
  auth,
  addApplicationDoc,
  db,
  storage,
} from '../firebase/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';

import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

// Import assets.
import BackgroundScroll from '../assets/images/ApplicationPage/ScrollBackground.svg';

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
  programmingList,
  shirtSizes,
} from '../components/ApplicationPageComponents/ApplicationOptions';

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
  const [programmingInputs, setProgrammingInputs] = React.useState([
    { language: '', experienceLevel: '' },
  ]);
  const [user, loading] = useAuthState(auth);
  const [resume, setResume] = useState(null);
  const navigate = useNavigate();
  const { register, handleSubmit, control } = useForm();
  const smallScreen = useMediaQuery({ maxWidth: 850 });

  // Function runs on application form submission.
  const onSubmit = async (data) => {
    // Allow null college major
    if (!data.collegeMajor) {
      data.collegeMajor = 'N/A';
    }

    const userDoc = doc(db, 'applications', applicationId);
    await updateDoc(userDoc, {
      firstName: data.firstName,
      lastName: data.lastName,
      formEmail: data.formEmail,
      phoneNumber: data.phoneNumber,
      dateOfBirth: data.dateOfBirth,
      address: data.address,
      city: data.city,
      zipCode: data.zipCode,
      college: data.college,
      collegeYear: data.collegeYear,
      hackathonsAttened: data.hackathonsAttened,
      diet: data.diet,
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
      languageExperience: programmingInputs,
      status: 'Submitted',
    });

    if (resume != null) {
      const resumeRef = ref(storage, `${applicationId}`);
      uploadBytes(resumeRef, resume).then(() => {
        navigate('/login');
      });
    } else {
      alert('please upload a resume');
      return;
    }
  };

  const onError = async (data, e) => {
    // console.log(data);
    console.log(e);
  };

  const handleChangeLanguage = (index, event) => {
    const values = [...programmingInputs];
    values[index].language = event.value;
    values[index].experienceLevel =
      values[index].experienceLevel === ''
        ? 'Novice'
        : values[index].experienceLevel;
    setProgrammingInputs(values);
  };

  const handleChangeExperience = (index, event) => {
    const values = [...programmingInputs];
    values[index].experienceLevel = event.target.value;
    setProgrammingInputs(values);
  };

  const handleAddInput = (e) => {
    e.preventDefault();
    const values = [...programmingInputs];
    if (values.length === 5) {
      return values;
    } else {
      setProgrammingInputs([
        ...programmingInputs,
        { language: '', experienceLevel: '' },
      ]);
    }
  };

  const handleRemoveInput = (e, index) => {
    e.preventDefault();
    const values = [...programmingInputs];
    values.splice(index, 1);
    setProgrammingInputs(values);
  };

  // TODO: Form validation, mobile view, Check for logged in
  // Redirect user to login page if they are not logged in.

  useEffect(() => {
    if (loading) return;

    console.log(user);
    if (!user) navigate('/login');
  }, [user, loading, navigate]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return smallScreen ? (
    <div>Mobile site coming soon, please apply on desktop for now!</div>
  ) : (
    <div
      style={{
        background:
          'linear-gradient(180deg, #220532 0%, #1A0732 16.67%, #0F204B 49.13%, #184773 80.98%, #396A98 100%)',
      }}
      className="w-[100vw] h-[100vh] overflow-hidden overscroll-none"
    >
      <div className="absolute w-[100vw] h-[100vh] flex items-center justify-center">
        <img
          className="absolute z-0 w-[1000px]"
          src={BackgroundScroll}
          alt=""
        />
      </div>

      <div
        className="absolute flex justify-center"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="h-[65vh] w-[80vh] overflow-scroll">
          {/* Form Title */}
          <div className="text-center font-minecraft">
            <h2 className="text-[#453119] text-[60px] font-bold">
              BostonHacks
            </h2>
            <h3 className="text-white text-[50px]">2023</h3>
          </div>

          <hr className="border border-black w-3/4 mx-auto" />

          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="p-1 lg:px-[50px]"
          >
            {/* General Information Section */}
            <div className="my-[50px]">
              <h3 className="font-minecraft text-[#453119] text-[30px] font-bold">
                General Information
              </h3>

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
                          return {
                            label: ethnicityOption,
                            value: ethnicityOption,
                          };
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

            <hr className="border border-black w-3/4 mx-auto" />

            {/* Address Information Section */}
            <div className="my-[50px]">
              <h3 className="font-minecraft text-[#453119] text-[30px] font-bold">
                Address Information
              </h3>

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
                  <small className="ml-2">
                    Select <i>"Outside US"</i> if not applicable
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

            <hr className="border border-black w-3/4 mx-auto" />

            {/* Education Section */}
            <div className="my-[50px]">
              <h3 className="font-minecraft text-[#453119] text-[30px] font-bold">
                Education
              </h3>

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
                          return {
                            label: educationLevelOption,
                            value: educationLevelOption,
                          };
                        })}
                        {...field}
                      />
                    )}
                  />
                </div>
              </div>
            </div>

            <hr className="border border-black w-3/4 mx-auto" />

            {/* Experience Section */}
            <div className="my-[50px]">
              <h3 className="font-minecraft text-[#453119] text-[30px] font-bold">
                Experience
              </h3>

              {/* Experience Form Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="ml-1 font-bold">
                    How many hackathons have you been to before?
                  </label>
                  <input
                    placeholder="# Attended"
                    min={0}
                    type="number"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('hackathonsAttened', { required: true })}
                  />
                </div>

                <div>
                  <label className="ml-1 font-bold">
                    Select the programming languages/technology you have
                    experience with:
                  </label>
                  <div>
                    {programmingInputs.map((programmingInput, index) => (
                      <div
                        key={index}
                        className="languageExp"
                        name="programmingExperience"
                      >
                        <Controller
                          name="languageExperience"
                          control={control}
                          render={({ field }) => (
                            <div className="languageSelect">
                              <Select
                                styles={selectFieldStyles}
                                options={programmingList.map((languageName) => {
                                  return {
                                    label: languageName,
                                    value: languageName,
                                  };
                                })}
                                onChange={(event) =>
                                  handleChangeLanguage(index, event)
                                }
                              />
                            </div>
                          )}
                        />
                        <select
                          onChange={(event) =>
                            handleChangeExperience(index, event)
                          }
                        >
                          <option value="Novice">Novice</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Expert">Expert</option>
                        </select>
                      </div>
                    ))}
                    <div className="w-full flex flex-row justify-between mt-3">
                      <button
                        className={`p-1 ${
                          programmingInputs.length >= 5
                            ? 'bg-gray-300'
                            : 'bg-gray-500'
                        } w-1/4 rounded-xl `}
                        onClick={handleAddInput}
                        disabled={programmingInputs.length >= 5 ? true : false}
                      >
                        +
                      </button>
                      <button
                        className={`p-1 ${
                          programmingInputs.length <= 1
                            ? 'bg-gray-300'
                            : 'bg-gray-500'
                        } w-1/4 rounded-xl `}
                        onClick={handleRemoveInput}
                        disabled={programmingInputs.length <= 1 ? true : false}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border border-black w-3/4 mx-auto" />

            {/* Misc Section */}
            <div className="my-[50px]">
              <h3 className="font-minecraft text-[#453119] text-[30px] font-bold">
                Miscellaneous
              </h3>

              {/* Misc Form Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="ml-1 font-bold">Dietary Restrictions</label>
                  <input
                    placeholder="Dietary Restrictions"
                    className="h-10 px-4 w-full bg-[#A79581] placeholder-white text-white shadow-inner shadow-black/25 rounded-xl"
                    {...register('diet', { required: true })}
                  />
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
                        options={sleepAccomodations.map(
                          (educationLevelOption) => {
                            return {
                              label: educationLevelOption,
                              value: educationLevelOption,
                            };
                          }
                        )}
                        {...field}
                      />
                    )}
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
                  />
                </div>
              </div>
            </div>

            <hr className="border border-black w-3/4 mx-auto" />

            {/* Links Section */}
            <div className="my-[50px]">
              <h3 className="font-minecraft text-[#453119] text-[30px] font-bold">
                Links
              </h3>

              {/* Links Form Fields */}
              <div className="grid grid-cols-2 gap-4">
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
              <label className="font-minecraft text-[#453119] text-[30px] font-bold">
                What are you most excited about attending Bostonhacks?
              </label>
              <p className="font-minecraft text-[#453119] text-[10px] font-bold mb-10">
                (Min 50 Max 400 Characters):
              </p>
              <textarea
                className="w-full h-[200px] resize-none p-1 rounded-xl"
                {...register('bostonhacks', {
                  required: true,
                  maxLength: 400,
                  minLength: 50,
                })}
              />
            </div>

            <hr className="border border-black w-3/4 mx-auto" />

            <div className="my-[50px]">
              <h2 className="font-minecraft text-[#453119] text-[30px] font-bold">
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
              <p className="font-minecraft text-[#453119] text-[30px] font-bold mb-10">
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
              <input
                type="submit"
                className="bg-green-600 p-2 rounded-lg cursor-pointer hover:bg-slate-400"
                value="Submit!"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Application;
