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
import Photo from '../photo'

export default function Discover({}) {
  let images = [
    { alt: 'Map of Hack Clubs around the world', src: '/home/map.png' },
    {
      alt: 'Hack Clubbers at SpaceX HQ in LA',
      src: '/home/zephyr-spacex.jpeg'
    },
    {
      alt: 'MA Hacks, Hack Clubber organized hackathon',
      src: '/hackathons/mahacks.jpeg'
    },
    { alt: 'AMA with Sal Khan', src: '/home/ama.png' },
    { alt: 'Hack Clubbers at Flagship, 2019', src: '/home/flagship_4.jpg' }
  ]

  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(
      `White sheets of paper\nWaiting to be printed on\nA blank console waits`
    )
    if (count === images.length - 1) {
      setCount(0)
    }
  }, [count, images.length])
  return (
    <>
      <Box as="section" sx={{ py: [4, 5, '82px'], color: 'black' }}>
        <Box
          sx={{
            position: 'relative',
            width: '90vw',
            maxWidth: 'layout',
            margin: 'auto'
          }}
        >
          <Text
            variant="title"
            as="h1"
            sx={{ fontSize: ['36px', '48px', '56px'] }}
          >
            Discover the{' '}
            <Text
              as="span"
              sx={{
                borderRadius: 'default',
                px: 1,
                mx: 0,
                whiteSpace: ['wrap', 'nowrap', 'nowrap'],
                color: 'white',
                background: theme => theme.util.gx('red', 'orange'),
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              joy of code
            </Text>
            , together.
          </Text>
          <Text
            variant="subtitle"
            as="p"
            sx={{
              fontSize: ['18px', '20px', '22px'],
              pb: [3, 3, 4],
              maxWidth: '62ch'
            }}
          >
            Every day, thousands of Hack&nbsp;Clubbers gather online and
            in-person to make things with code. Whether you're a beginner
            programmer or have years of experience, there's a place for you at
            Hack&nbsp;Club. Read about our{' '}
            <Link href="/philosophy" target="_blank" rel="noopener">
              hacker ethic
            </Link>
            .
          </Text>
          <Grid columns={[1, 1, 1, '2.5fr 3fr']} gap={[0, 3, 4]} pt={[3, 4]}>
            <Box
              sx={{
                position: 'relative',
                height: ['300px', '300px', '300px', '100%'],
                py: [3, 3, 3, 0]
              }}
              onClick={() => {
                setCount(count + 1)
              }}
            >
              <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
                <Box
                  sx={{
                    position: 'relative',
                    height: ['300px', '300px', '100%'],
                    figure: {
                      position: 'absolute',
                      transform:
                        count % 2 === 0 ? 'rotate(3deg)' : 'rotate(-3deg)',
                      height: '85%',
                      width: ['80%', '80%', '70%', '100%'],
                      marginLeft: ['10%', '10%', '15%', '0']
                    },
                    zIndex: 3,
                    '&:hover': {
                      cursor: 'pointer'
                    }
                  }}
                >
                  <Photo
                    src={
                      count === images.length - 2
                        ? images[0].src
                        : images.length - 1
                          ? images[1].src
                          : images[count + 2].src
                    }
                    alt={
                      count === images.length - 2
                        ? images[0].alt
                        : images.length - 1
                          ? images[1].alt
                          : images[count + 2].alt
                    }
                    width={3000}
                    height={2550}
                    showAlt
                  />
                </Box>
              </Box>
              <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
                <Box
                  sx={{
                    position: 'relative',
                    height: ['300px', '300px', '100%'],
                    figure: {
                      position: 'absolute',
                      transform:
                        count % 2 === 0 ? 'rotate(-3deg)' : 'rotate(3deg)',
                      height: '85%',
                      width: ['80%', '80%', '70%', '100%'],
                      marginLeft: ['10%', '10%', '15%', '0']
                    },
                    zIndex: 3,
                    '&:hover': {
                      cursor: 'pointer'
                    }
                  }}
                >
                  <Photo
                    src={
                      count === images.length - 1
                        ? images[0].src
                        : images[count + 1].src
                    }
                    alt={
                      count === images.length - 1
                        ? images[0].alt
                        : images[count + 1].alt
                    }
                    width={3000}
                    height={2550}
                    showAlt
                  />
                </Box>
              </Box>
              <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
                <Box
                  sx={{
                    position: 'relative',
                    height: ['300px', '300px', '100%'],
                    figure: {
                      position: 'absolute',
                      transform:
                        count % 2 === 0 ? 'rotate(3deg)' : 'rotate(-3deg)',
                      height: '85%',
                      width: ['80%', '80%', '70%', '100%'],
                      marginLeft: ['10%', '10%', '15%', '0']
                    },
                    zIndex: 3,
                    '&:hover': {
                      cursor: 'pointer'
                    }
                  }}
                >
                  <Photo
                    src={images[count].src}
                    alt={images[count].alt}
                    width={3000}
                    height={2550}
                    showAlt
                  />
                </Box>
              </Box>
            </Box>
            <Grid
              columns="1fr"
              sx={{
                gridColumnGap: 3,
                span: {
                  width: 36,
                  height: 36,
                  borderRadius: 24,
                  display: 'inline-block',
                  fontSize: 2,
                  lineHeight: '30px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  border: '3px solid currentColor'
                },
                p: { my: 0, fontSize: ['18px', '20px', '22px'] },
                strong: { display: 'block', fontSize: ['22px', 2, 3] }
              }}
              as="ul"
            >
              <Grid
                columns="auto 1fr"
                sx={{
                  transitionDuration: '0.52s',
                  py: 2,
                  px: 2,
                  color: 'inherit',
                  position: 'relative',
                  textDecoration: 'none',
                  borderRadius: 'extra'
                }}
                as="li"
              >
                <Text as="span" color="red" aria-hidden="true">
                  1
                </Text>
                <Text as="p" variant="subtitle">
                  <strong sx={{ mb: 1 }}>
                    Connect with other teenage coders
                  </strong>
                  Have a coding question? Looking for project feedback? You'll
                  find hundreds of fabulous people to talk to in our global{' '}
                  <Link href="/slack" target="_blank" rel="noopener">
                    Slack{' '}
                  </Link>
                  (like Discord), active at all hours.
                </Text>
              </Grid>
              <Grid
                columns="auto 1fr"
                sx={{
                  transitionDuration: '0.52s',
                  py: 2,
                  px: 2,
                  color: 'inherit',
                  position: 'relative',
                  textDecoration: 'none',
                  borderRadius: 'extra'
                }}
                as="li"
              >
                <Text as="span" color="orange" aria-hidden="true">
                  2
                </Text>
                <Text
                  as="p"
                  variant="subtitle"
                  sx={{
                    mt: 0
                  }}
                >
                  <strong sx={{ mb: 1 }}>
                    Build open source learning tools
                  </strong>
                  We build large open source projects together (
                  <Link href="https://github.com/hackclub" target="_blank">
                    3k+&nbsp;PRs a year
                  </Link>
                  ) like this website, a game engine, daily streak system, and
                  more!
                </Text>
              </Grid>
              <Grid
                columns="auto 1fr"
                sx={{
                  transitionDuration: '0.52s',
                  py: 2,
                  px: 2,
                  color: 'inherit',
                  position: 'relative',
                  textDecoration: 'none',
                  borderRadius: 'extra'
                }}
                as="li"
              >
                <Text as="span" color="yellow" aria-hidden="true">
                  3
                </Text>
                <Text as="p" variant="subtitle">
                  <strong sx={{ mb: 1 }}>Gather IRL with other makers</strong>
                  Meet other Hack&nbsp;Clubbers in your community to build
                  together at one of the 400+{' '}
                  <Link href="/clubs" target="_blank" rel="noopener">
                    Hack&nbsp;Clubs
                  </Link>{' '}
                  and{' '}
                  <Link href="/hackathons" target="_blank" rel="noopener">
                    high school hackathons
                  </Link>
                  .
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}
