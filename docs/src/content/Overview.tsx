import React from 'react'
import { Header, Paragraph } from 'faansyu-ui'
import CodeSnippet from '../Demo/CodeSnippet';

const About = () => {
  return (
    <>
      <Header>Overview</Header>
      <Header tag="h2">Common types</Header>
      <Header anchor tag="h3">Variant</Header>
      <Paragraph>
        See <a href="./theme-and-styling#Variants">Variants</a>
      </Paragraph>
      <Header anchor tag="h3">Shade</Header>
      <Paragraph>
        See <a href="./theme-and-styling#Shades">Shades</a>
      </Paragraph>
    </>
  )
}

export default About
