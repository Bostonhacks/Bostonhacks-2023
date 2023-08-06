import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-dropdown-select";

// Importing options for some of the questions.
import { states, countries, majors, educationLevels } from "../components/ApplicationPageComponents/ApplicationOptions";

const Application = () => {
  const { register, handleSubmit, control } = useForm();

  // Function runs on application form submission.
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name:</label>
      <input className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" {...register("firstName", { required: true })} />

      <label>Last Name:</label>
      <input className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" {...register("lastName", { required: true })} />

      <label>Date of Birth:</label>
      <input type="date" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" {...register("dateOfBirth", { required: true })} />
      
      <label>Email:</label>
      <input placeholder="name@domain.com" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" {...register("email", { required: true })} />

      <label>Phone Number:</label>
      <input type="number" placeholder="1234567890" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" {...register("phoneNumber", { required: true })} />

      <label>Race / Ethnicity:</label><br/>
      <small>Check all that apply</small>
      <div id="ethnicity-checkboxes">
        <label>Asian Indian</label> <input type="checkbox" value="Asian Indian" {...register("ethnicity")}/>
        <label>East Asian</label> <input type="checkbox" value="East Asian" {...register("ethnicity")}/>
        <label>Guamanian / Chamorro</label> <input type="checkbox" value="Guamanian / Chamorro" {...register("ethnicity")}/>
        <label>Black / African</label> <input type="checkbox" value="Black / African" {...register("ethnicity")}/>
        <label>Middle Eastern</label> <input type="checkbox" value="Middle Eastern" {...register("ethnicity")}/>
        <label>Native Hawaiian</label> <input type="checkbox" value="Native Hawaiian" {...register("ethnicity")}/>
        <label>Hispanic / Latino / Spanish Origin</label> <input type="checkbox" value="Hispanic / Latino / Spanish Origin" {...register("ethnicity")}/>
        <label>Native American / Alaskan Native</label> <input type="checkbox" value="Native American / Alaskan Native" {...register("ethnicity")}/>
        <label>White</label> <input type="checkbox" value="White" {...register("ethnicity")}/>
        <label>Pacific Islander</label> <input type="checkbox" value="Pacific Islander" {...register("ethnicity")}/>
      </div>

      <label>Gender:</label>
      <small>Check all that apply</small>
      <div id="gender-checkboxes">
        <label>Man</label> <input type="checkbox" value="Man" {...register("gender")}/>
        <label>Woman</label> <input type="checkbox" value="Woman" {...register("gender")}/>
        <label>Binary</label> <input type="checkbox" value="Binary" {...register("gender")}/>
        <label>Prefer to self-describe</label> <input type="checkbox" value="Prefer to self-describe" {...register("gender")}/>
        <label>Prefer not to disclose</label> <input type="checkbox" value="Prefer not to disclose" {...register("gender")}/>
      </div>

      <label>Pronouns:</label>
      <small>Check all that apply</small>
      <div id="pronoun-checkboxes">
        <label>He / Him / His</label> <input type="checkbox" value="He / Him / His" {...register("pronouns")}/>
        <label>She / Her / Hers</label> <input type="checkbox" value="She / Her / Hers" {...register("pronouns")}/>
        <label>They / Them / Theirs</label> <input type="checkbox" value="They / Them / Theirs" {...register("pronouns")}/>
        <label>Ze / Hir / Hirs</label> <input type="checkbox" value="Ze / Hir / Hirs" {...register("pronouns")}/>
        <label>Xe / Xem / Xyrs</label> <input type="checkbox" value="Xe / Xem / Xyrs" {...register("pronouns")}/>
        <label>Ver / Vir / Vis</label> <input type="checkbox" value="Ver / Vir / Vis" {...register("pronouns")}/>
        <label>Te / Tem / Ter</label> <input type="checkbox" value="Te / Tem / Ter" {...register("pronouns")}/>
        <label>E / Eim / Eirs</label> <input type="checkbox" value="E / Eim / Eirs" {...register("pronouns")}/>
        <label>Others</label> <input type="checkbox" value="Others" {...register("pronouns")}/>
      </div>

      <label>Address:</label>
      <input className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" {...register("address", { required: true })} />
      
      <label>City:</label>
      <input className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" {...register("city", { required: true })} />
      
      <label>US State:</label>
      <small>Indicate "Outside US" if not applicable</small>
      <Controller
        name="state"
        control={control}
        render={({ field }) => 
        <Select 
            options={ states.map((stateOption) => { 
                return { label: stateOption, value: stateOption};
            })}
            {...field}
        />}
      />

      <label>Country:</label>
      <Controller
        name="country"
        control={control}
        render={({ field }) => 
        <Select 
            options={ countries.map((countryOption) => { 
                return { label: countryOption, value: countryOption};
            })}
            {...field}
        />}
      />
      
      <label>Zip Code:</label>
      <input type="number" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" {...register("zipCode", { required: true })} />

      <input {...register("college", { required: true })} />

      <label>Graduation Year:</label>
      <input type="number" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" {...register("gradYear", { required: true })} />
      
      <label>Major / Field of Study:</label>
      <Controller
        name="major"
        control={control}
        render={({ field }) => 
        <Select 
            options={ majors.map((majorOption) => { 
                return { label: majorOption, value: majorOption};
            })}
            {...field}
        />}
      />

      <label>Current Education Level:</label>
      <Controller
        name="educationLevel"
        control={control}
        render={({ field }) => 
        <Select 
            options={ educationLevels.map((educationLevelOption) => { 
                return { label: educationLevelOption, value: educationLevelOption};
            })}
            {...field}
        />}
      />

      <input type="submit" />
    </form>
  )
};

export default Application;
