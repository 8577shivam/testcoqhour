import React, { useState } from 'react'
import ProfileDataCard from './ProfileDataCard';
import downloadIcon from "../assets/downloadIcon.svg"
import calender from "../assets/calender.svg"
import Femaleicon from "../assets/FemaleIcon.svg"
import InsuranceIcon from "../assets/InsuranceIcon.svg"
import PhoneIcon from "../assets/PhoneIcon.svg"

const PatientProfile = ({profileData}) => {
    const [profileDataShow, setprofileDataShow] = useState(profileData[0])
    console.log(profileDataShow,"profileDataShow")
  return (
    <div>
      <img src={profileDataShow.profile_picture} />
      <h2>{profileDataShow.name}</h2>
      <ProfileDataCard name="Date of Birth" cardData={profileDataShow?.date_of_birth} imgUrl={calender}/>
      <ProfileDataCard name="Gender" cardData={profileDataShow?.gender} imgUrl={Femaleicon}/>
      <ProfileDataCard name="Contact Info" cardData={profileDataShow?.phone_number} imgUrl={PhoneIcon}/>
      <ProfileDataCard name="Emergency Number" cardData={profileDataShow?.emergency_contact} imgUrl={PhoneIcon}/>
      <ProfileDataCard name="Insurance Provider" cardData={profileDataShow?.insurance_type} imgUrl={InsuranceIcon}/>
      <div>
        <button>Show All Information</button>
      </div>
      {
        ["Blood Tests", "CT Scan","Radiology report","X-rays","Urine Test"].map((item)=>{
            return(
                <div style={{display:"flex", justifyContent:"space-between", marginBlock:"12px"}}>
                    <p>{item}</p><img src={downloadIcon} alt="download icon"/>
                </div>
            )
        })
      }
    </div>
  );
}

export default PatientProfile