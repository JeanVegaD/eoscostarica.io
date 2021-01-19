import React from "react";
import { Parallax, Background } from 'react-parallax';
import useBaseUrl from "@docusaurus/useBaseUrl";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import Layout from "@theme/Layout";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import clsx from "clsx";
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const ManagementTeam = [
    {
        img:"img/rodrigo.webp",
        name:"Rodrigo Fernández",
        position:"Founder, Chairman & Chief Strategist",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        linkedIn:"https://www.linkedin.com/in/rodrigo-fernandez-57b8b72a/",
        twitter:"https://twitter.com/rjfescazu"
    },
    {
        img:"img/edgar.webp",
        name:"Edgar Fernández",
        position:"Co-founder & Finance and Enterprise",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        linkedIn:"https://www.linkedin.com/in/edgarafernandez/",
        twitter:"https://twitter.com/fernane506"
    },
    {
        img:"img/xavier.webp",
        name:"Xavier Fernández",
        position:"Co-founder & Tech Lead",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        linkedIn:"https://www.linkedin.com/in/xaviercr/",
        twitter:"https://twitter.com/xaviercr"
    }
]


const MarketingSalesTeam = [
    {
        img:"img/luisdiego.webp",
        name:"Luis Diego Rojas",
        position:"Communications and Content Strategist",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        linkedIn:"https://www.linkedin.com/in/ldrojas/",
        twitter:"https://twitter.com/ldrojas"
    },
    {
        img:"img/rodolfo.webp",
        name:"Rodolfo Perez",
        position:"Art Director & Brand Manager",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        linkedIn:"https://www.linkedin.com/in/rodolfo-eduardo-p%C3%ABrez-nava-73442164/",
        twitter:"https://twitter.com/monsieurRoaf"
    },
]

const DevelopTeam = [
    {
        img:"img/adriel.webp",
        name:"Adriel Diaz",
        position:"Full Stack Developer",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        linkedIn:"https://www.linkedin.com/in/adriel-d%C3%ADaz-08226384/",
        twitter:""
    },
    {
        img:"img/allan.webp",
        name:"Allan Salazar",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        position:"Network Engineer",
        linkedIn:"",
        twitter:""
    },
    {
        img:"",
        name:"Andrés Gomez",
        position:"Cybersecurity Developer",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        linkedIn:"https://www.linkedin.com/in/andres-gomez-ramirez-bb7226156/",
        twitter:"https://twitter.com/kuronosec"
    },
    {
        img:"",
        name:"Angelo Castro",
        position:"Intern",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        linkedIn:"https://www.linkedin.com/in/angelo-castro-gamboa/",
        twitter:""
    },
    {
        img:"img/cris.webp",
        name:"Cristian Castro",
        position:"C++ Developer",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        linkedIn:"https://www.linkedin.com/in/cristian-castro-95193a3a/",
        twitter:""
    },
    {
        img:"",
        name:"Jean Vega",
        position:"Intern",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        linkedIn:"https://www.linkedin.com/in/jeanvegad/",
        twitter:""
    },
    {
        img:"img/jorge.webp",
        name:"Jorge Murillo",
        position:"Sr. UX Designer",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        linkedIn:"https://www.linkedin.com/in/jmurilloux/",
        twitter:"https://twitter.com/Oquedo"
    },
    {
        img:"",
        name:"Justin Castillo",
        position:"Intern",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        linkedIn:"https://www.linkedin.com/in/jacv/",
        twitter:"https://twitter.com/_JustinCast"
    },
    {
        img:"img/kevin.webp",
        name:"Kevin Castillo",
        position:"Full Stack Developer",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        linkedIn:"https://www.linkedin.com/in/kevin-castillo-mora/",
        twitter:""
    },
    {
        img:"img/ronald.webp",
        name:"Ronald Gallo",
        position:"Network Administrator",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        linkedIn:"",
        twitter:""
    },
    {
        img:"img/teto.webp",
        name:"Terencio Gómez",
        position:"Full Stack Developer",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        linkedIn:"https://www.linkedin.com/in/terencio-gomez-14784ba3/",
        twitter:""
    },
    {
        img:"img/julio.webp",
        name:"Victor Julio Madrigal",
        position:"Web Developer",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...",
        linkedIn:"",
        twitter:""
    },
    
]

const Team = () => {
    const history = useHistory();
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const HeroSection = () => {
        return (
          <Box className={"containerSec"}>
            {!isMobile && 
                <Box className={"sectionHero"} style={{height:'auto'}}>
                    <Box className={"titleBox"}>
                        <h1>Meet the Essence of Our Company</h1>
                    </Box>
                    <TeamSection />
                </Box>
            }
            {isMobile && 
              <Box className={"sectionHeroMobile"}>
                <Box className={"logoMobileBox"}>
                  <img
                      className={"logoMobile"}
                      src={useBaseUrl("img/eoscr-logo.png")}
                      alt="EOS CR LOGO"
                    />
                </Box>
              <Box className={"titleBox"}>
                <h1>Meet the Essence of Our Company</h1>
              </Box>
            </Box>
          }
          </Box>
        )
    } 

    const PersonCard = ({img, name, position,bio, linkedIn, twitter}) => {
        return(
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box className={"avatarBox"}>
                        <Avatar variant="square" style={{width:"200px", height:"250px"}} src={img}><PersonIcon style={{width:'40%',height:'40%'}}/></Avatar>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                <Box >
                    <h3 className={"nameText"}>{name}</h3>
                    <p className={"positionText"}>{position}</p>
                    <p>{bio}</p>
                </Box>
                <Box className="socialMediaBox">
                    {linkedIn && 
                        <a href={linkedIn} target="_blank" className={"socialMediaIcon"}><LinkedInIcon style={{width:'30px', height:'30px'}}/></a>
                    }
                    {twitter && 
                        <a href={twitter} target="_blank" className={"socialMediaIcon"}><TwitterIcon style={{width:'30px', height:'30px'}}/></a>
                    }
                </Box>
                </Grid>

            </Grid>
            /*
            <Box>
                <Box className={"avatarBox"}>
                    <Avatar variant="square" style={{width:"250px", height:"250px"}} src={img}><PersonIcon style={{width:'40%',height:'40%'}}/></Avatar>
                </Box>
                <Box >
                    <h4 className={"nameText"}>{name}</h4>
                    <p className={"centerText"}>{positionLine1}</p>
                    {positionLine2 && 
                        <p className={"centerText"}>{positionLine2}</p>
                    }
                    
                </Box>
                <Box className="socialMediaBox">
                    {linkedIn && 
                        <IconButton href={linkedIn} target="_blank"><LinkedInIcon style={{width:'30px',height:'30px', color:"#5484b3"}} /></IconButton>
                    }
                    {twitter && 
                         <IconButton href={twitter} target="_blank"><TwitterIcon  style={{width:'30px',height:'30px', color:"#5484b3"}}/></IconButton>
                    }
                </Box>
            </Box>*/
        )
    }

    const TeamSection = () => {
        return(
            <Box className={"containerSec"}>
                <Box className={clsx("sectionNo",{["sectionPadding"] : isMobile})}>
                    <Box className={"doubleSpacingBox"}>
                        <Box className={"spacingBox"}>
                            <h2>Management Team</h2>
                        </Box>
                        <Box>
                            <Grid container spacing={3}>
                                {ManagementTeam.map((person) => (
                                    <Grid item xs={12} md={6} key={person.name}>
                                        <PersonCard 
                                            img={useBaseUrl(person.img)}
                                            name={person.name}
                                            position={person.position}
                                            bio={person.bio}
                                            linkedIn={person.linkedIn}
                                            twitter={person.twitter}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                    <Box className={"doubleSpacingBox"}>
                        <Box className={"spacingBox"}>
                            <h2>Marketing and Sales</h2>
                        </Box>
                        <Box>
                            <Grid container spacing={3}>
                                {MarketingSalesTeam.map((person) => (
                                    <Grid item xs={12} md={6} key={person.name}>
                                        <PersonCard 
                                            img={useBaseUrl(person.img)}
                                            name={person.name}
                                            position={person.position}
                                            bio={person.bio}
                                            linkedIn={person.linkedIn}
                                            twitter={person.twitter}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                    <Box className={"doubleSpacingBox"}>
                        <Box className={"spacingBox"}>
                            <h2>Development and Design</h2>
                        </Box>
                        <Box>
                            <Grid container spacing={5}>
                                {DevelopTeam.map((person) => (
                                    <Grid item xs={12} md={6} key={person.name}>
                                        <PersonCard 
                                            img={useBaseUrl(person.img)}
                                            name={person.name}
                                            position={person.position}
                                            bio={person.bio}
                                            linkedIn={person.linkedIn}
                                            twitter={person.twitter}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>    
                </Box>
            </Box>

        )
    }

    return (
        <Layout>
            <Box className={"mainContainer"}>
                {!isMobile && 
                <Parallax strength={800}>
                    <Background className={"bgParallax"}>
                        <Box className={"imgParallax"} />
                    </Background>
                    <HeroSection />
                </Parallax>
                }
                {isMobile && 
                <>
                    <HeroSection />
                    <TeamSection />
                </>
                } 
            </Box>
        </Layout>
    )
}



export default Team;
