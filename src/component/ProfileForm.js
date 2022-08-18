import React, { useState } from 'react'

function ProfileForm({ submit }) {
    const [profile, setprofiles] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: ""
    });

    const handler = (event) => {
        setprofiles((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const handleForm = (e) => {
        e.preventDefault();
            submit(profile)
    }


    return (
        <div className='formContainer'>
            <h3>profile Form</h3>
            <form onSubmit={handleForm}>

                <fieldset>
                    <legend>Bio data</legend>
                    <div className='names'>
                        <label>
                        </label>"lastname"
                        <input name='firstname' value={profile.firstname} type="text" onChange={handler} />
                        <label>
                        </label>"lastname"
                        <input name='firstname' value={profile.firstname} type="text" onChange={handler} />
                    </div>


                    <div className='names'>
                        <label>
                        </label>"lastname"
                        <input name='lastname' value={profile.lastname} type="text" onChange={handler} />
                        <label>
                        </label>"lastname"
                        <input name='lastname' value={profile.lastname} type="text" onChange={handler} />
                    </div>
                </fieldset>

                <button className='form' type='submit'>
                    Add Profile
                </button>
            </form>

        </div>
    );
}

export default ProfileForm