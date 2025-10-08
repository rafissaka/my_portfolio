import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { BiUserPin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { ArrowLeft } from 'phosphor-react'
import * as S from '../styles/about'
import { ButtonAlt, Section, Title, ButtonSecondary } from '../styles/styles'
import { Instagram } from './api/Instagram'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import React from 'react'
import { Linkedin } from './api/Linkedin'

export default function About() {
  const { t, i18n } = useTranslation('common')
  const router = useRouter()
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en')

  useEffect(() => {
    const { locale } = router
    setCurrentLang(locale as 'en' | 'ta')
  }, [router.locale])

  return (
    <>
   <Head>
        <title>
          {currentLang === 'ta' ? 'பற்றி | ரஃபாட் இஸ்ஸாகா' : 'About | Raffat Issaka'}
        </title>
        <meta
          name="description"
          content={
            currentLang === 'ta'
              ? 'நான் ரஃபாட் இஸ்ஸாகா, குவாமே ந்குருமா விஞ்ஞான மற்றும் தொழில்நுட்பப் பல்கலைக்கழகத்தின் (KNUST) மாணவர், தகவல் தொழில்நுட்பத்தில் வலுவான அடித்தளத்தை உருவாக்கி வருகிறேன்.'
              : 'I am Raffat Issaka, a proud student of the Kwame Nkrumah University of Science and Technology (KNUST), building a solid foundation in information technology and software development.'
          }
        />
        <meta
          property="og:title"
          content={
            currentLang === 'ta' ? 'பற்றி | ரஃபாட் இஸ்ஸாகா' : 'About | Raffat Issaka'
          }
        />
        <meta
          property="og:description"
          content={
            currentLang === 'ta'
              ? 'நான் ரஃபாட் இஸ்ஸாகா, குவாமே ந்குருமா விஞ்ஞான மற்றும் தொழில்நுட்பப் பல்கலைக்கழகத்தின் (KNUST) மாணவர், தகவல் தொழில்நுட்பத்தில் வலுவான அடித்தளத்தை உருவாக்கி வருகிறேன்.'
              : 'I am Raffat Issaka, a proud student of the Kwame Nkrumah University of Science and Technology (KNUST), where I am pursuing a degree and building a strong foundation in technology and innovation.'
          }
        />
      </Head>

      <ScrollTop />
      <Section>
        <S.AboutContainer>
          <Title>
            <p>{currentLang === 'ta' ? '../பற்றி' : '../about'}</p>
            {currentLang === 'ta' ? 'என்னைப் பற்றி!!' : 'About Myself!!'}
            <span>
              <BiUserPin /> {currentLang === 'ta' ? 'பற்றி' : 'About'}
            </span>
          </Title>

          <S.AboutContent>
            <S.AboutImage>
              <Image
                className="AboutImg"
                src="/self.jpg"
                alt="Raffat Issaka"
                width={400}
                height={400}
                priority
              />

              <div className="links">
                <ul>
                  <Link
                    href="https://github.com/Visioncloudit"
                    target="_blank"
                    aria-label="Github"
                  >
                    <AiFillGithub size={25} />@Visioncloudit
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/raffatissaka/"
                    target="_blank"
                    aria-label="Linkedin"
                  >
                    <BsLinkedin size={25} />@raffatissaka
                  </Link>
                  <Link
                    href="https://api.whatsapp.com/send?phone=23324651346"
                    target="_blank"
                    aria-label="WhatsApp"
                  >
                    <RiWhatsappFill size={25} />+233 24651346
                  </Link>
                  <Link
                    href="mailto:raffatissaka@gmail.com"
                    className="email"
                    target="_blank"
                    aria-label="email"
                  >
                    <GrMail size={25} />rhissaka@gmail.com
                  </Link>
                </ul>
              </div>

              <S.AboutContact>
                <h3>
                  {currentLang === 'ta'
                    ? 'நாம் பேசலாம், ஒருவேளை ஒரு அற்புதமான திட்டத்தை உருவாக்கலாம்?'
                    : 'Let’s talk — maybe build something amazing together?'}
                </h3>
                <p>
                  {currentLang === 'ta'
                    ? 'எனக்கு ஒரு செய்தி அனுப்புங்கள்! 😉'
                    : 'Send me a message! 😉'}
                </p>
                <Link href="/contact">
                  <ButtonAlt>
                    {currentLang === 'ta' ? 'தொடர்பு கொள்ளவும்' : 'Contact'}
                  </ButtonAlt>
                </Link>
              </S.AboutContact>
            </S.AboutImage>

       
            <S.AboutDescription>
              <p style={{ textAlign: 'justify' }}>
                {currentLang === 'ta'
                  ? '👋 வணக்கம்! நான் ரஃபாட் இஸ்ஸாகா, 🎓 குவாமே ந்குருமா விஞ்ஞான மற்றும் தொழில்நுட்பப் பல்கலைக்கழகத்தின் மாணவர், தகவல் தொழில்நுட்பம் மற்றும் மென்பொருள் அபிவிருத்தியில் ஆர்வம் கொண்டவன்.'
                  : '👋 Hey there! I am Raffat Issaka, 🎓 a student at the Kwame Nkrumah University of Science and Technology (KNUST), passionate about information technology and software development.'}
              </p>
              <p style={{ textAlign: 'justify' }}>
                {currentLang === 'ta'
                  ? '💻 நான் ஒரு ஆர்வமுள்ள டெவலப்பர் மற்றும் தொழில்நுட்ப ஆர்வலன், நவீன தீர்வுகளை உருவாக்குவதிலும் புதிய தொழில்நுட்பங்களை கற்றுக்கொள்வதிலும் பெரும் ஆர்வம் கொண்டவன்.'
                  : "💻 I'm a passionate developer and tech enthusiast who loves building innovative solutions and learning emerging technologies."}
              </p>
              <p style={{ textAlign: 'justify' }}>
                {currentLang === 'ta'
                  ? '🎯 எனது இலக்கு தொழில்நுட்பத்தின் மூலம் ஆப்ரிக்காவில் தாக்கத்தை ஏற்படுத்துவதே. குறிப்பாக கல்வி, தொழில் மேலாண்மை மற்றும் செயற்கை நுண்ணறிவு துறைகளில் ஆராய்ச்சியிலும் அபிவிருத்தியிலும் ஈடுபட விரும்புகிறேன்.'
                  : '🎯 My goal is to make an impact in Africa through technology — especially in education, business management, and artificial intelligence.'}
              </p>
              <p style={{ textAlign: 'justify' }}>
                {currentLang === 'ta'
                  ? '🙌 என் சமூகத்தில் மாற்றத்தை உருவாக்கும் முயற்சிகளில் நான் ஈடுபட்டுள்ளேன் — இளம் மாணவர்களுக்கு டிஜிட்டல் திறன்களை கற்பிப்பது மற்றும் தொழில்நுட்பத்தை அனைவருக்கும் அணுகக்கூடியதாக மாற்றுவது எனது ஆர்வமாகும்.'
                  : "🙌 I'm also passionate about community impact — teaching digital skills to young learners and making technology more accessible for everyone."}
              </p>
              <p style={{ textAlign: 'justify' }}>
                {currentLang === 'ta'
                  ? '💪 நீங்கள் கடின உழைப்பாளி, ஆர்வமுள்ள மற்றும் சவால்களை ஏற்கும் ஒருவரைத் தேடுகிறீர்கள் என்றால் — நாம் ஒன்றிணைந்து அற்புதமான ஒன்றை உருவாக்கலாம்!'
                  : "💪 If you're looking for someone who's hardworking, passionate, and loves a challenge — let's connect and create something impactful!"}
              </p>
            </S.AboutDescription>
          </S.AboutContent>
        </S.AboutContainer>


      </Section>
      <Footer />
    </>
  )
}
