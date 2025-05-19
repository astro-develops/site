import { Box } from 'theme-ui'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Meta from '@hackclub/meta'
import Nav from '../components/nav'
import ForceTheme from '../components/force-theme'
import Footer from '../components/footer'
import Carousel from '../components/index/carousel'
import MailingList from '../components/index/cards/mailing-list'
import Hero from '../components/home/hero'
import Discover from '../components/home/discover'
import Event from '../components/home/event'
import Explore from '../components/home/explore'
import Community from '../components/home/community'

/** @jsxImportSource theme-ui */

function Page({
  hackathonsData,
  bankData,
  slackData,
  gitHubData,
  consoleCount,
  stars,
  // githubData2,
  game,
  gameTitle,
  events,
  carouselCards,
}) {

  const { asPath } = useRouter()



  return (
    <>
      <Meta
        as={Head}
        title="A Home for High School Hackers"
        description="Hack Club is a global nonprofit network of high school makers & student-led coding clubs where young people build the agency, the network, & the technical talent to think big & do big things in the world."
        image="https://cloud-lgl7kg862-hack-club-bot.vercel.app/0start__1_.png"
      />
      <Head>
        <meta
          property="og:logo"
          content="https://assets.hackclub.com/icon-rounded.png"
          size="512x512"
        />
      </Head>
      <ForceTheme theme="light" />
      <Nav />
      <Box
        as="main"
        sx={{
          overflowX: 'hidden',
          position: 'relative'
        }}
      >

        <Hero slackData={slackData} />
        <Discover />

        <Carousel cards={carouselCards} />
        <Event slackData={slackData} events={events} />
        <Explore gitHubData={gitHubData} stars={stars} game={game} consoleCount={consoleCount} hackathonsData={hackathonsData} bankData={bankData}/>
        <Community/>

        {new URL(asPath, 'http://example.com').searchParams.get('gen') ===
          'z' && (
          <>
            <Box
              sx={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  margin: 'auto',
                  width: 'fit-content',
                  lineHeight: 0
                }}
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/sJNK4VKeoBM?si=zvhDKhb9C5G2b4TJ&controls=1&autoplay=1&mute=1"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Box>
            </Box>
            <Box
              sx={{
                position: 'fixed',
                bottom: 0,
                right: 0,
                zIndex: 1000,
                lineHeight: 0
              }}
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/ChBg4aowzX8?si=X2J_T95yiaKXB2q4&controls=1&autoplay=1&mute=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Box>
            <Box
              sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                zIndex: 1000,
                lineHeight: 0
              }}
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/JDQr1vICu54?si=U6-9AFtk7EdTabfp&autoplay=1&mute=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Box>
          </>
        )}
        <MailingList />
      </Box>
      <Footer
        dark
        sx={{
          backgroundColor: 'dark',
          position: 'relative',
          overflow: 'hidden',
          textShadow: '0 1px 2px rgba(0,0,0,0.375)',
          'h2,span,p,a': { color: 'white !important' },
          '> div img': { objectPosition: ['left', 'center'] },
          svg: {
            fill: 'white',
            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.25))'
          }
        }}
      >
        <style>
          {`a{
          color: #338eda
        }`}
        </style>
      </Footer>
    </>
  )
}
const withCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export async function getStaticProps() {
  const carouselCards = require('../lib/carousel.json')

  // HCB: get total raised
  let bankData = []
  let initialBankData = await fetch('https://hcb.hackclub.com/stats')
  try {
    const bd = await initialBankData.json()
    let raised = bd.raised / 100

    bankData.push(
      `💰 ${raised.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })} raised`
    )
  } catch {
    bankData.push('error')
  }

  // Slack: get total raised
  const { Slack: Slacky } = require('./api/slack')
  let slackData = await Slacky()

  // GitHub: get latest github activity (currently this is erroring and
  // preventing the site from deploying

  const { fetchGitHub } = require('./api/github')
  let gitHubData = await fetchGitHub()

  //   let gitHubData = null

  // GitHub: get latest GitHub stars
  const { fetchStars } = require('./api/stars')
  let stars = await fetchStars()

  // Sprig: get newest games
  const { getGames } = require('./api/games')
  let game = await getGames()

  let gameTitle = []

  gameTitle = game.map(r => r.title)

  // Sprig: get console count
  const { getConsoles } = require('./api/sprig-console')
  const consoleCount = await getConsoles()

  // Hackathons: get latest hackathons
  let hackathonsData
  try {
    const response = await fetch(
      'https://hackathons.hackclub.com/api/events/upcoming'
    )
    if (response.ok) {
      hackathonsData = await response.json()
    } else {
      hackathonsData = [] // or some default value if the fetch fails
    }
  } catch (error) {
    hackathonsData = [] // or some default value if an error occurs
  }
  hackathonsData.sort((a, b) => new Date(a.start) - new Date(b.start))

  let events = []
  try {
    await fetch('https://events.hackclub.com/api/events/upcoming/').then(res =>
      res.json()
    )
  } catch (error) {
    console.error('Error fetching events:', error)
  }

  return {
    props: {
      game,
      gameTitle,
      gitHubData,
      consoleCount,
      hackathonsData,
      bankData,
      slackData,
      stars,
      events,
      carouselCards
    },
    revalidate: 60
  }
}

export default Page
