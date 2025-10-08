import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeaderContainer, MobileIcon, NavMenu, Icons } from './styles'
import { List, X } from 'phosphor-react'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '../../styles/styles'
import { useThemeContext } from '../../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa';
import Settings from '../Settings/SettingsButton';
import AudioPlayer from '../Music/AudioPlayer';

export function Header() {
  const [open, setOpen] = useState(false);
  const { currentTheme, toggleTheme } = useThemeContext(); 
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <HeaderContainer style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div className="mobile-content" style={{ display: 'flex' }}>
        <Link href={'/'}>
          <div className="logo">
            <Image
              className="logo"
              width={40}
              height={40}
              src="/Logo1.png"
              alt="logo"
            />
          </div>
          <span>Raffat Hammed Issaka</span>
        </Link>
        <div className="settings">
          <Settings toggleTheme={toggleTheme} currentTheme={currentTheme} />
        </div>
        <style jsx>{`
          .settings {
            padding-top: 0.2rem;
            padding-bottom: 0.2rem;
            padding-left: 0.5rem;
            margin: 0 0.5rem;
          }
        `}</style>
        <MobileIcon onClick={handleOpen}>
          {open ? (
            <X size={30} weight="bold" />
          ) : (
            <List size={30} weight="bold" />
          )}
        </MobileIcon>
      </div>
      <NavMenu onClick={handleOpen} open={open}>
        <ul>
          <li>
            <Link href={'/'}>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href={'/about'}>
              <span>About</span>
            </Link>
          </li>
          {/* <li>
            <Link href={'/experience'}>
              <span>{currentLang === 'ta' ? 'அனுபவம்' : 'Experience'}</span>
            </Link>
          </li> */}
          {/* <li>
            <Link href={'/blog'}>
              <span>Blogs</span>
            </Link>
          </li> */}
          <li>
            <Link href={'/projects'}>
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link href={'/resume'}>
              <span>Resume</span>
            </Link>
          </li>
          <li>
            <Link href={'/contact'}>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
        <Icons>
          <Link
            href={'https://github.com/Saravanakumar2003'}
            target="_blank"
            aria-label="Link to Github">
            <FiGithub />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/saravanaramaswamy2003/'}
            target="_blank"
            aria-label="Link to Linkedin">
            <FiLinkedin />
          </Link>
          <Link
            href={'https://www.instagram.com/saravanakumar.me?utm_source=qr'}
            target="_blank"
            aria-label="Instagram">
            <FiInstagram />
          </Link>
          <Link
            href={'https://api.whatsapp.com/send?phone=+233248651346'}
            target="_blank"
            aria-label="Link to contact via WhatsApp">
            <FaWhatsapp />
          </Link>
        </Icons>
      </NavMenu>
    </HeaderContainer>
  );
}