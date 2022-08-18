import React from 'react'
import ProfileCard from './component/ProfileCard'
import ProfileForm from './component/ProfileForm'
import { useState } from 'react'

function App() {

  const [allProfiles, setAllprofiles] = useState([
    {
      firstname: "Yelfaare",
      lastname: "Adila",
      email: "Adila@gmail.com",
      phone: "0550824462"
    }
  ])

  const updateallprofiles = (profile) => {
    let arr = allProfiles;
    arr.push(profile)
    setAllprofiles([...arr])

  };

  return (
    <>
      <div className="app">
        <h1>Our profile maker</h1>
      </div>
      <ProfileForm submit={updateallprofiles} />
      <hr />
      <div className="list">
        {allProfiles.map((person, index) => (
          <ProfileCard key={index} Card={person} />
        ))}


      </div>
    </>
  )
}

export default App