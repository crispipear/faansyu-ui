import React from 'react'
import { Header, Paragraph } from 'faansyu-ui'

const About = () => {
  return (
    <>
      <Header>About</Header>
      <Paragraph>
        <b>faansyu-ui</b> is a React ui library with easily integrated, reusable and customizable components.
Our primary goal is to create a kit that helps creators to build a variety of web applications
while maintaining design consistency, accessibility and minimal aethestics.
      </Paragraph>
      <Paragraph>
        This started a side project outside of work/school, we wanted to turn those ui components into a dedicated design system
        for our future projects and for other developers who are interested.
      </Paragraph>
      <Header fontSize="m">Creators</Header>
      <Paragraph>
        <a href="https://github.com/crispipear">Su Li - @crispipear</a>
        <br/>
        <a href="https://github.com/friedchickenli">Min Li - @friedchickenli</a>
      </Paragraph>
      <Header fontSize="m">Why the name faansyu?</Header>
      <Paragraph>
        We named this library "faan syu" (means "yam" in Cantonese)—which is what our mom usually calls us.
      </Paragraph>
    </>
  )
}

export default About
