import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  const openInNewTab = (url) => {
  const newTab = window.open(url, '_blank');
    newTab.focus();
  }
  
  return (
    <Card as="article">
      <Card.Title as="h3">
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <a href={href}target="_blank"rel="noreferrer"><Card.Cta>{cta}</Card.Cta></a>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Kenny Nguyen</title>
        <meta
          name="description"
          content="I’ve spoken at events all around the world and been interviewed for many podcasts."
        />
      </Head>
      <SimpleLayout
        title="Some events I was invited to speak at."
        intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing."
      >
        <div className="space-y-20">
        <SpeakingSection title="Conferences">
            <Appearance
              href="https://events.linuxfoundation.org/grpc-conf/"
              title="Load Testing gRPC Services in Node"
              description="Developed gRPSeek, a developer tool to enhance data observability by load testing gRPC services in a Node environment and visualizing key metrics to build latency reduction strategies, as well as throughput optimization to increase reliability"
              event="gRPC Conf 2023, September 2023"
              cta="(Upcoming)"
              target="_blank"
            />
            {/* <Appearance
              href="#"
              title="Bootstrapping an aerospace company to $17M ARR"
              description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
              event="The Escape Velocity Show, March 2022"
              cta="Listen to podcast"
            />
            <Appearance
              href="#"
              title="Programming your company operating system"
              description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
              event="How They Work Radio, September 2021"
              cta="Listen to podcast"
            /> */}
          </SpeakingSection>
          <SpeakingSection title="Presentations">
            <Appearance
              href="#"
              title="Microservices"
              description="A technical deep-dive into how system architecture evolved into microservices, what microservices look like today, and what the future of system design looks like."
              event="Jeeny + Bractlet Sponsored Tech Talk,  NYC"
              cta="Watch video"
            />
            {/* <Appearance
              href="#"
              title="Lessons learned from our first product recall"
              description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
              event="Business of Startups 2020"
              cta="Watch video"
            /> */}
          </SpeakingSection>
         
        </div>
      </SimpleLayout>
    </>
  )
}
