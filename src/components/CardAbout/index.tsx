import Image from 'next/image'
import Link from 'next/link'
import { Button, Container, ButtonAlternatives } from '../../styles/styles'
import { AboutContainer } from './styles'
import { ArrowRight, TelegramLogo } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function About() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <Container>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            width={200}
            height={200}
            className="AboutImg"
            src="/self.jpg"
            alt="Saravana's Image"
            loading="lazy"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <h2>Little About Me!!</h2>
            <li>
              A proud graduate of Kwame Nkrumah University of Science and Technology (KNUST), where I earned my Bachelor\'s degree in Computer Science and laid a strong foundation in tech.
            </li>
            <li>
              I'm a working professional diving deeper into the tech landscape, growing as an avid developer and passionate volunteer. At my core, I'm a problem-solver who is energized by exploring innovative ideas and new opportunities to make a measurable impact
            </li>
          </div>

          <div className='aboutButton'>
            <Link href={'/resume'}>
              <Button>
                Resume
                <TelegramLogo
                  style={{
                    marginBottom: '-0.1rem',
                    marginLeft: '0.2rem',
                  }}
                  size={16}
                  weight="bold"
                />
              </Button>
            </Link>
            <Link href={'/about'}>
              <ButtonAlternatives>
               Read more
                <ArrowRight
                  style={{
                    marginBottom: '-0.1rem',
                    marginLeft: '0.2rem'
                  }}
                  weight="bold"
                  size={16}
                />
              </ButtonAlternatives>
            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  );
}