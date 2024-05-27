import React from 'react'
import TestLogo from "../assets/TestLogo.svg"
import calender from "../assets/calender.svg"
import transaction  from "../assets/transaction.svg"
import group from "../assets/group.svg"
import home from "../assets/home.svg"
import chat from "../assets/chat.svg"
import navphoto from "../assets/navphoto.png"
import setting from "../assets/setting.svg"
import more from "../assets/more.svg"
const Navbar = () => {
    const renderMenuObjects=[
        {
            name:"OverView",
            imgUrl:home,
        },
        {
            name:"Patient",
            imgUrl:group,
        },
        {
            name:"Schedule",
            imgUrl:calender,
        },
        {
            name:"Message",
            imgUrl:chat,
        },
        {
            name:"Transactions",
            imgUrl:transaction,
        }
    ]
  return (
    <div className='navbarStyle'>
      <div className="logo">
        <img src={TestLogo} alt='logo'/>
      </div>
      <div className="menu">
        <ul className='listmenu'>
            {renderMenuObjects.map((menuItems)=>{
                return(
                    <li>
                        <img src={menuItems.imgUrl} alt='menu'/>
                        <p>{menuItems.name}</p>
                    </li>
                )
            })}
        </ul>
      </div>
      <div className="setting">
        <div className="listItem">
          <div>
            <img src={navphoto} alt="imagesec" />
          </div>
          <div>
            <p>"Dr. Jose Simmons"</p>
            <p>General Practitioner</p>
          </div>
        </div>
        <span className='vertical'></span>
      <div className='settingBox'>
        <img src={setting} alt='settingicon'/>
        <img src={more} alt='moreIcon'/>
      </div>

      </div>
    </div>
  );
}

export default Navbar