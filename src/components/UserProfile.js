import '../styles/UserProfile.css';
import { MdLocationOn } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';
import { FaRegBuilding } from 'react-icons/fa';

import CardBg from './CardBg';

// import { useContext } from 'react';
// import { ThemeContext } from '../contexts/themeContext';
import { useTheme } from '../contexts/themeContext';

import moment from 'moment'; // for date formatting

const UserCard = ({ user }) => {
  const { theme } = useTheme();
  // console.log('theme from USER PROFILE:', theme);
  return (
    <CardBg>
      <section className='profile-container'>
        <div className='card-header'>
          <img
            src={user.avatar_url}
            alt={user.name}
          />
          <div className='card-header-info'>
            <h1 className='name'>{user.name}</h1>
            <div className='login'>@{user.login}</div>
            <div className='date'>Joined {moment(user.created_at).format('DD MMM yyyy')}</div>
          </div>
        </div>

        <div className='card-content'>
          <p className='bio'>{user.bio ? user.bio : 'This profile has no bio'}</p>
          <div className='github-link'>
            <BsGithub className='github-icon' />
            <a
              href={`https://github.com/${user.login}`}
              target='_blank'
              rel='noreferrer'>{`https://github.com/${user.login}`}</a>
          </div>
          <div className={`repos-container ${theme}`}>
            <div className='repos-container-heading'>Repos</div>
            <div className='repos-container-heading'>Followers</div>
            <div className='repos-container-heading'>Following</div>
            <div className={`repos-container-row ${theme}`}>{user.public_repos ? user.public_repos : 'n/a'}</div>
            <div className={`repos-container-row ${theme}`}>{user.followers ? user.followers : 'n/a'}</div>
            <div className={`repos-container-row ${theme}`}>{user.following ? user.following : 'n/a'}</div>
          </div>
        </div>

        <div className='card-footer'>
          <div className='card-footer-info'>
            <MdLocationOn className='icons' />
            <div>{user.location ? user.location : 'Not available'}</div>
          </div>
          <div className='card-footer-info'>
            <BsTwitter className='icons' />
            <div>{user.twitter_username ? user.twitter_username : 'Not available'}</div>
          </div>
          <div className='card-footer-info'>
            <CgWebsite className='icons' />
            <div>{user.blog ? user.blog : 'Not available'}</div>
          </div>
          <div className='card-footer-info'>
            <FaRegBuilding className='icons' />
            <div>{user.company ? user.company : 'Not available'}</div>
          </div>
        </div>
      </section>
    </CardBg>
  );
};

export default UserCard;
