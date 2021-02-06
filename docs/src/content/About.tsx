import React from 'react'
import { Header, Paragraph } from 'faanshu-ui'

const About = () => {
  return (
    <>
      <Header>About</Header>
      <Paragraph>
        <b>faanshu-ui</b> is a React ui library with easily integrated, reusable components.
        Our primary goal is to create a react library that helps creators to build a variety of web applications
        that maintains consistency, accessibility and minimal aethestics.
      </Paragraph>
      <Paragraph>
        In 2019, we started a side project outside of work/school.
        While building out the project, we wanted to turn those ui components into a dedicated design system
        for our future projects and for other developers who are interested.
        Even though this library is currently not fully matured, we are
        continuously working on improving it.
      </Paragraph>
      <Header fontSize="m">Creators</Header>
      <Paragraph>
        <a href="https://github.com/crispipear">Su Li - @crispipear</a>
        <br/>
        <a href="https://github.com/friedchickenli">Min Li - @friedchickenli</a>
      </Paragraph>
      <Header fontSize="m">Why the name faanshu?</Header>
      <Paragraph>
        We named this library "faan shu" which means "yam" in Cantonese, which is what our mom usually calls us.
      </Paragraph>
    </>
  )
}

export default About
