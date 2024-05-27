import React from 'react'

const ProfileDataCard = ({cardData,name,imgUrl}) => {
  {console.log(cardData)}
  return (
    <div className="listItem">
    <div>
      <img src={imgUrl} alt="imagesec" />
    </div>
    <div>
      <p>{name}</p>
      <p>{cardData}</p>
    </div>
  </div>
  )
}

export default ProfileDataCard