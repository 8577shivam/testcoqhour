import React from 'react'

const PatientList = ({list}) => {
  return (
    <div>
        {
            list?.map((item,index)=>{
                return (
                  <div key={index} className="listItem">
                    <div>
                        <img width="48px" src={item.profile_picture} alt="imagesec"/>
                    </div>
                    <div>
                    <p>{item.name}</p>
                    <span>{item.age}</span>
                    <span>{item.gender}</span>
                    </div>
                  </div>
                );
            })
        }
    </div>
  )
}

export default PatientList