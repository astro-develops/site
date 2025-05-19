import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Link,
  Text
} from 'theme-ui'
import React, { useEffect, useRef, useState } from 'react'
import GitHub from '../index/github'
import Haxidraw from '../index/cards/haxidraw'
import Onboard from '../index/cards/onboard'
import Sprig from '../index/cards/sprig'
import Sinerider from '../index/cards/sinerider'
import SprigConsole from '../index/cards/sprig-console'
import Clubs from '../index/cards/clubs'
import Workshops from '../index/cards/workshops'
import HCB from '../index/cards/hcb'
import Hackathons from '../index/cards/hackathons'

export default function Explore({
  gitHubData,
  stars,
  game,
  consoleCount,
  hackathonsData,
  bankData
}) {
  let [gameImage, setGameImage] = useState('')
  let [gameImage1, setGameImage1] = useState('')
  let [github, setGithub] = useState(0)
  let [slackKey, setSlackKey] = useState(0)
  let [key, setKey] = useState(0)

  return (
    <>
      <Box>
        <Box py={[4, 5, '82px']}>
          <Box
            sx={{
              width: '90vw',
              maxWidth: 'layout',
              margin: 'auto',
              position: 'relative'
            }}
          >
            <Flex
              sx={{
                flexDirection: ['column', 'column', 'column', 'row'],
                justifyContent: gitHubData ? 'center' : 'flex-start',
                alignItems: [
                  'flex-start',
                  'flex-start',
                  'flex-start',
                  'center'
                ],
                gap: '10px'
              }}
            >
              <Box sx={{ mb: [3, 0, 0] }}>
                <Text
                  variant="title"
                  as="h2"
                  sx={{
                    fontSize: ['36px', '48px', '56px'],
                    maxWidth: '20ch'
                  }}
                >
                  We build{' '}
                  <Text
                    as="span"
                    sx={{
                      borderRadius: 'default',
                      mx: 0,
                      whiteSpace: 'nowrap',
                      color: 'orange'
                    }}
                  >
                    open source
                  </Text>{' '}
                  games and tools together
                </Text>
                <Text
                  variant="subtitle"
                  as="p"
                  sx={{
                    fontSize: ['18px', '20px', '22px'],
                    pb: [3, 0, 0],
                    maxWidth: '60ch'
                  }}
                >
                  In collaboration with engineers on the Hack&nbsp;Club team,
                  Hack Clubbers build learning tools for each other. Get
                  involved with these projects by building something with our
                  tools or contribute to the tools themselves.
                </Text>
              </Box>
              {gitHubData && (
                <Flex
                  sx={{
                    flexDirection: ['row', null, null, 'column'],
                    gap: [1, 2, 2],
                    alignItems: ['center', 'center', 'center', 'flex-start'],
                    flexWrap: 'wrap',
                    width: ['100%', null, null, 'fit-content'],

                    '& > a:nth-child(n+4)': {
                      display: ['none', null, null, 'flex']
                    }
                  }}
                >
                  <Text
                    sx={{
                      fontSize: ['11px', '11px', '14px'],
                      textAlign: 'left',
                      lineHeight: '90%',
                      fontStyle: 'italic',
                      width: 'fit-content'
                    }}
                  >
                    Live from GitHub
                  </Text>
                  {gitHubData
                    .filter(data => !data.user.endsWith('[bot]'))
                    .slice(0, 4)
                    .map((data, key) => {
                      return (
                        <GitHub
                          type={data.type}
                          img={data.userImage}
                          user={data.user}
                          time={data.time}
                          url={data.url}
                          message={data.message}
                          key={key}
                          opacity={1 / (key / 2 + 1)}
                        />
                      )
                    })}
                </Flex>
              )}
            </Flex>
            <Sprig
              delay={100}
              stars={stars.sprig.stargazerCount}
              game={game}
              gameImage={gameImage}
              gameImage1={gameImage1}
            />
            <Onboard stars={stars.onboard.stargazerCount} delay={100} />
            <Haxidraw stars={stars.blot.stargazerCount} delay={100} />
            <Sinerider delay={200} stars={stars.sinerider.stargazerCount} />
            <Box as="section" id="sprig">
              <SprigConsole
                delay={300}
                stars={stars.sprig.stargazerCount}
                consoleCount={consoleCount}
              />
            </Box>
            <Workshops delay={400} stars={stars.hackclub.stargazerCount} />
          </Box>
        </Box>
        <Box
          sx={{
            position: 'relative',
            background: 'snow',
            backgroundImage: `url('https://icons.hackclub.com/api/icons/0xF4F7FB/glyph:rep.svg')`,
            backgroundSize: '40px 40px',
            backgroundRepeat: 'repeat',
            backgroundPosition: '10% 10%'
            // '&:hover': {
            //   backgroundImage: `url('https://icons.hackclub.com/api/icons/0x000000/glyph:rep.svg')`
            // }
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0
            }}
          >
            {}
          </Box>
          <Box
            py={[4, 5, '82px']}
            sx={{
              width: '90vw',
              maxWidth: 'layout',
              margin: 'auto',
              position: 'relative'
            }}
          >
            <Box>
              <Text
                variant="title"
                as="h2"
                sx={{
                  fontSize: ['36px', '48px', '72px'],
                  width: '18ch',
                  textAlign: 'center',
                  margin: 'auto'
                }}
              >
                Find your{' '}
                <Text
                  as="span"
                  sx={{
                    borderRadius: 'default',
                    mx: 0,
                    whiteSpace: 'nowrap',
                    color: 'orange'
                  }}
                >
                  IRL community.
                </Text>
              </Text>
              <Text
                variant="subtitle"
                as="p"
                sx={{
                  fontSize: ['18px', '24px', '32px'],
                  margin: 'auto',
                  pt: 2,
                  textAlign: 'center'
                }}
              >
                Thousands of Hack Clubbers organize and participate in
                hackathons and after school coding clubs.
              </Text>
            </Box>
            <Clubs />
            <Hackathons
              delay={400}
              data={hackathonsData}
              stars={stars.hackathons.stargazerCount}
            />

            {/* <Events events={events} /> */}
            <HCB data={bankData} />
          </Box>
        </Box>
      </Box>
    </>
  )
}
