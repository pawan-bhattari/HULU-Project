import React from 'react'
import './header.css';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnTwoToneIcon from '@material-ui/icons/FlashOnTwoTone';
import LiveTvRoundedIcon from '@material-ui/icons/LiveTvRounded';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';


function Header() {
    return (
        <div className="header">

          <div className="Header__icons">  

          <div className="header__icon header__icon--active "> 
          <HomeIcon/>
          <p> Home </p>
          </div>

          <div className="header__icon"> 
          <FlashOnTwoToneIcon/>
          <p> Trending </p>
          </div>

          <div className="header__icon"> 
          <LiveTvRoundedIcon/>
          <p> Verified </p>
          </div>

          <div className="header__icon"> 
          <VideoLibraryRoundedIcon/>
          <p> Collection </p>
          </div>

          <div className="header__icon"> 
          <SearchRoundedIcon/>
          <p> Search </p>
          </div>

          <div className="header__icon"> 
          <PersonOutlineRoundedIcon/>
          <p> Account </p>
          </div>

          
          </div>

          <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt="hullu"/>
          
 
        </div>
      
    )
}

export default Header;
