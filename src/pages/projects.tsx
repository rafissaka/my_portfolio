import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import projects from "../data/projects";
import cardSkills from "../data/skills";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import * as S from "../styles/projects";
import * as T from "../styles/styles";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { ArrowRight } from "phosphor-react";
import Github from "../components/Github/Github";
import { useRouter } from "next/router";

interface ProjectsProps {
  target: HTMLInputElement;
}

export default function Projects() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const currentLang = router.locale as 'en' | 'ta' || 'en';

  const handleChange = (e: ProjectsProps) => {
    setQuery(e.target.value);
  };

  const projectFilter = projects.filter((project) =>
    project.title.toLowerCase().includes(query.toLowerCase())
  );

  // Function to find matching skill from cardSkills
  const getSkillByName = (techName: string) => {
    return cardSkills.find(
      skill => skill.title.en.toLowerCase() === techName.toLowerCase()
    );
  };

  return (
    <>
      <Head>
        <title>Projects | Raffat Issaka </title>
        <meta
          name="description"
          content="I love to code using tools like React, NextJS, Tailwind, Styled Components and more! Here are some of my favorite projects."
        />
        <meta property="og:title" content="Projects | Raffat Issaka" />
        <meta
          property="og:description"
          content="I love to code using tools like React, NextJS, Tailwind, Styled Components and more! Here are some of my favorite projects."
        />
      </Head>

      <ScrollTop />
      <T.Section>
        <T.Title>
          <p>../projects</p>
          Project Works
          <span>
            <HiOutlineDesktopComputer /> Projects
          </span>
        </T.Title>
        <T.Description>
          Here you can see some of the work I have done. Feel free to browse and
          explore the projects to see how they were created, the technologies
          used, and the features implemented.
        </T.Description>

        <S.ProjectsContainer>
          <S.ProjectsContent>
            <div className="search">
              <p>Search by project name</p>

              <div className="input">
                <input
                  type="text"
                  placeholder="Type here..."
                  value={query}
                  onChange={handleChange}
                />
                <FaSearch />
              </div>
            </div>

            {!projectFilter.length && (
              <h3 className="not-found">Project not found 🙁</h3>
            )}

            {projectFilter.map((project) => {
              return (
                <>
                  <div className="border" key={project.id} />
                  <S.ProjectsItem>
                    <div className="banner">
                      <Image
                        style={{ borderRadius: "20px", objectFit: "cover" }}
                        width={500}
                        height={300}
                        src={project.banner}
                        alt={project.title}
                      />
                    </div>

                    <div>
                      <div className="title">
                        <h2>{project.title}</h2>
                      </div>
                      <div className="description">
                        <p>{project.description}</p>
                        <h4 style={{marginBottom:"1rem"}} className="date">Tech Stack:</h4>
                        <div className="tags" style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.75rem',
                          alignItems: 'center'
                        }}>
                          {project.tech.map((tech: any) => {
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
                                  gap: '0.5rem'
                                }}
                              >
                                {skill && skill.img && (
                                  <Image
                                    src={skill.img}
                                    alt={displayName}
                                    width={20}
                                    height={20}
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
                      <Link href={`${project.url}`}>
                        <T.ButtonAlternatives>
                          View Project
                          <ArrowRight
                            style={{
                              marginBottom: "-0.1rem",
                            }}
                            weight="bold"
                            size={16}
                          />
                        </T.ButtonAlternatives>
                      </Link>
                    </div>
                  </S.ProjectsItem>
                </>
              );
            })}

            
          </S.ProjectsContent>
        </S.ProjectsContainer>
        {/* <T.Title>
          <p>../github</p>
          Github Profile
          <span>
            <HiOutlineDesktopComputer /> Stats
          </span>
        </T.Title>
        <Github />
        <p className="github">
              Hey, hey... I have more projects on{" "}
              <a href="https://github.com/Saravanakumar2003" style={{textDecoration: 'underline',}}> my GitHub </a>
              !!
        </p> */}
      </T.Section>
      <Footer />
    </>
  );
}