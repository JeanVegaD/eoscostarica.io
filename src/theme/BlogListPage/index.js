/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import { useMediaQuery } from 'react-responsive'
import Box from '@material-ui/core/Box'
import { Parallax, Background } from 'react-parallax'
import BlogPostItem from '@theme/BlogPostItem'

const colors = ["rgb(255,255,255,0)", "rgb(240,240,240,0.5)"]

const metaData={
  title:"EOS Costa Rica: Blog",
  description:"",
  img:"img/metaImgBlack.png",
}


function BlogListPage(props) {
  const {
    metadata,
    items,
  } = props;
  const {
    siteConfig: {
      title: siteTitle
    }
  } = useDocusaurusContext();
  const {
    blogDescription,
    blogTitle,
    permalink
  } = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && 
          <Box className="sectionHeroBlog" style={{marginBottom: "100px"}}>
            <Box className="titleBox">
              <h1>Read Our  <br/> Articles</h1>
            </Box>
          </Box>
        }
        {isMobile && 
          <Box className="sectionHeroMobileBlog">
            <Box className="titleBox">
            <h1>Read Our  <br/> Articles</h1>
            </Box>
          </Box>
        }
      </Box>
    )
  }

  const ListArticles = () => {
    return(
      <Box className="containerSec">
        <Box className="section">
          {items.map(({content: BlogPostContent},index ) => 
            <BlogPostItem 
              key={BlogPostContent.metadata.permalink}
              frontMatter={BlogPostContent.frontMatter}
              metadata={BlogPostContent.metadata}
              truncated={BlogPostContent.metadata.truncated}
              color={colors[index%2]}
              isMobile={isMobile}
            />
          )}
        </Box>
      </Box>
    )
  }

  return(
    <Layout
      title={metaData.title}
      description={metaData.description}
      image={metaData.img}
    >
      {isDesktop && 
        <Box className="mainContainer">
          <Parallax strength={800}>
            <Background className="bgParallax">
                <Box className="imgParallax"/>
            </Background>
            <HeroSection />
            <ListArticles />
          </Parallax>
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <HeroSection />
          <ListArticles />
        </Box>
      }
    </Layout>
  )
}

export default BlogListPage;