/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Kenny Nguyen</title>
        <meta
          name="description"
          content="I'm Kenny Nguyen. I live in Greater Los Angeles, where I work as a Software Engineer, specializing in TypeScript and Remote Procedure Call(RPC) frameworks. In my free time, I enjoy crafting custom mechanical keyboards, exploring the vibrant local food scene, and hiking in the beautiful Southern California landscapes"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              I’m Kenny Nguyen. I live in Greater Los Angeles where I work as a Software Engineer, specializing in TypeScript, React, and the gRPC ecosystem.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hello and welcome! I'm a seasoned software engineer based in the vibrant city of Los Angeles. My journey in the tech industry has been an exciting one, filled with continuous learning and growth. I've spent years honing my skills in software development, working with a variety of programming languages and methodologies. I'm proficient in React, TypeScript, gRPC, and have extensive experience in both front-end and back-end development. 
              </p>
              <p>
                As a dedicated Software Engineer, I bring a unique blend of technical expertise and creative passion to my work. I have a deep-seated interest in building custom mechanical keyboards, a hobby that not only fuels my creativity but also burns a hole in my pocket.
              </p>
              <p>
                My most recent accomplishment is the development of a load testing tool for gRPC services. This project allowed me to leverage my strong understanding of distributed systems and network protocols, resulting in a robust tool that improves the performance testing process of gRPC services.
              </p>
              <p>
                Throughout my career, I've consistently strived to push the boundaries of what's possible, always seeking innovative solutions to complex problems. Whether it's fine-tuning a keyboard's tactile response or optimizing a service's network performance, my goal remains the <em>same</em>{' '}: to create exceptional, high-quality products that make a difference.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/* <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink> */}
              <SocialLink href="https://github.com/kennysghub?tab=overview&from=2023-07-01&to=-07-29" target="_blank" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/kenknguyen/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:nguyenkenneth@pm.me"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                nguyenkenneth@pm.me
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
