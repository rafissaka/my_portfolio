import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import projects from '../../data/projects';
import cardSkills from '../../data/skills'; // Import your skills data
import { AllBlogs } from './Blogs';
import { ProjectsContainer, ProjectsContent, TagButton } from './styles';
import { Container, Title } from '../../styles/styles';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface Projects {
  slug: string;
  url: string;
  title: string;
  type: string;
  img: string;
}

export function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>(['All']);
  const tags = ['All', ...new Set(projects.flatMap(project => project.tags.map((tag: any) => tag.name)))];
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');
 
  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  const toggleTag = (tag: string) => {
    setSelectedTags([tag]);
  };

  // Function to find matching skill from cardSkills
  const getSkillByName = (techName: string) => {
    return cardSkills.find(
      skill => skill.title.en.toLowerCase() === techName.toLowerCase()
    );
  };

  return (
    <Container id="projects">
      <Title>
        {currentLang === 'ta' ? 'வேலைகள்' : 'Works'}
        <span>
          <HiOutlineDesktopComputer />{currentLang === 'ta' ? 'திட்டம்' : 'Project'}
        </span>
        <Image className="vector" width={100} height={100} src="/vectors/code.svg" alt="project" />
      </Title>
     
      <div style={{
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem',
        padding: '0 2rem'
      }}
      className="tag-selection">
        {tags.map(tag => (
          <TagButton
            key={tag}
            selected={selectedTags.includes(tag)}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </TagButton>
        ))}
      </div>
     
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
        gap: '2rem',
        width: '100%',
        padding: '0 2rem'
      }}>
        {projects
          .filter(project =>
            selectedTags.includes('All') || project.tags.some((tag: any) => selectedTags.includes(tag.name))
          )
          .slice(0, 9)
          .map(project => (
            <Link 
              href={`${project.url}`} 
              key={project.id}
              style={{
                display: 'block',
                height: '100%',
                textDecoration: 'none'
              }}
            >
              <ProjectsContent style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                minHeight: '320px',
                maxHeight: '380px'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden'
                }}>
                  <Image
                    width={400}
                    height={380}
                    src={project.banner}
                    alt={project.title}
                    loading="lazy"
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%'
                    }}
                  />
                </div>
                <div className="title" style={{
                  position: 'relative',
                  zIndex: 1,
                  marginTop: 'auto',
                  padding: '1.5rem'
                }}>
                  <h2>{project.title}</h2>
                  <span>{project.type}</span>
                  <div className="tags" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    alignItems: 'center',
                    marginTop: '0.75rem'
                  }}>
                    {project.tech && project.tech.map((tech: any) => {
                      const skill = getSkillByName(tech.name);
                      const displayName = skill 
                        ? skill.title[currentLang] 
                        : tech.name;
                      
                      return (
                        <span 
                          key={tech.name}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem'
                          }}
                        >
                          {skill && skill.img && (
                            <Image
                              src={skill.img}
                              alt={displayName}
                              width={16}
                              height={16}
                              style={{
                                objectFit: 'contain'
                              }}
                            />
                          )}
                          {displayName}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </ProjectsContent>
            </Link>
          ))}
      </div>
     
      {/* <AllBlogs title={currentLang === 'ta' ? 'எனது அனைத்து வலைப்பதிவுகளையும் படிக்கவும்' : 'Read all of my Blogs'} /> */}
      
      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)) !important;
            gap: 1.5rem !important;
            padding: 0 1.5rem !important;
          }
        }
        
        @media (max-width: 640px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding: 0 1rem !important;
          }
        }
      `}</style>
    </Container>
  );
}