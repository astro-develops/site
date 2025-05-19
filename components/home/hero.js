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
import BGImg from '../background-image'
import OuternetImgFile from '../../public/home/outernet-110.jpg'
import Comma from '../comma'
import Konami from 'react-konami-code'
import JSConfetti from 'js-confetti'
import Secret from '../secret'

export default function Hero({ slackData }) {
  let [reveal, setReveal] = useState(false)
  const [hover, setHover] = useState(true)

  useEffect(() => {
    if (reveal && !hover) {
      setTimeout(() => {
        setReveal(false)
      }, 2000)
    }
  }, [reveal, hover])

  let jsConfetti = useRef()

  useEffect(() => {
    jsConfetti.current = new JSConfetti()

    window.kc = `In the days of old, when gaming was young \nA mysterious code was found among \nA sequence of buttons, pressed in a row \nIt unlocked something special, we all know \n\nUp, up, down, down, left, right, left, right \nB, A, Start, we all have heard it's plight \nIn the 8-bit days, it was all the rage \nAnd it still lives on, with time, it will never age \n\nKonami Code, it's a legend of days gone by \nIt's a reminder of the classics we still try \nNo matter the game, no matter the system \nThe code will live on, and still be with them \n\nSo the next time you play, take a moment to pause \nAnd remember the code, and the Konami cause \nIt's a part of gaming's history, and a part of our lives \nLet's keep it alive, and let the Konami Code thrive!\n`
    window.paper = `Welcome, intrepid hacker! We'd love to have you in our community. Get your invite at hack.af/slack. Under "Why do you want to join the Hack Club Slack?" add a 🦄 and we'll ship you some exclusive stickers! `
  }, [])

  const easterEgg = () => {
    alert('Hey, you typed the Konami Code!')

    jsConfetti.current.addConfetti({
      confettiColors: [
        // Hack Club colours!
        '#ec3750',
        '#ff8c37',
        '#f1c40f',
        '#33d6a6',
        '#5bc0de',
        '#338eda',
        '#a633d6'
      ]
    })
  }

  return (
    <>
      <Secret
        reveal={reveal}
        onMouseEnter={() => {
          setHover(true)
          console.log(hover)
        }}
        onMouseOut={() => {
          setReveal(false)
        }}
      />
      <Konami action={easterEgg}>
        {"Hey, I'm an Easter Egg! Look at me!"}
      </Konami>
      <Box
        as="header"
        sx={{
          bg: 'dark',
          pt: [5, 6],
          pb: [2, 3],
          textAlign: 'left',
          position: 'relative',
          overflowX: 'hidden'
        }}
      >
        <BGImg
          src={OuternetImgFile}
          alt="Hack Clubbers gather in the great outdoors of Cabot, VT, for an experience unlike any other: Outernet. 📸 Photo by Matt Gleich, Hack Clubber in NH!"
          priority
          gradient="linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.45))"
        />
        <Box
          sx={{
            width: '90vw',
            maxWidth: [null, 'layout'],
            position: 'relative',
            mx: 'auto',
            py: [4, 4, 4],
            textShadow: 'text'
          }}
        >
          <Text
            variant="eyebrow"
            sx={{
              color: 'sunken',
              pb: 2,
              position: 'relative',
              display: 'block'
            }}
            as="h4"
          >
            Welcome to Hack&nbsp;Club
          </Text>
          <Heading>
            <Text
              as="p"
              variant="title"
              sx={{
                color: 'white',
                mb: [3, 4],
                zIndex: 1,
                textAlign: 'left',
                fontSize: ['42px', '52px', '64px'],
                lineHeight: 1.2,
                width: '100%'
              }}
            >
              We are <Comma>{slackData.total_members_count}</Comma>{' '}
              <Text
                sx={{
                  color: 'transparent',
                  ml: 2,
                  mr: 3,
                  whiteSpace: 'nowrap'
                }}
              >
                <Text
                  onClick={() => {
                    !reveal ? setReveal(true) : setReveal(false)
                  }}
                  sx={{
                    // lineHeight: 0.875,
                    px: 2,
                    backgroundColor: 'red',
                    position: 'absolute',
                    borderRadius: 10,
                    transform: 'rotate(-3deg) translateY(-5px)',
                    color: 'white',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    '&:hover': {
                      cursor: 'pointer'
                    }
                  }}
                  aria-hidden="true"
                >
                  teen hackers
                </Text>
                teen hackers
              </Text>
              <br sx={{ display: ['inline', 'none', 'none'] }} /> from around
              the world who code together
            </Text>
            <Button
              variant="ctaLg"
              as="a"
              href="/slack"
              mt={[3, 0, 0]}
              mr={3}
              sx={{ transformOrigin: 'center left' }}
            >
              Join Slack
            </Button>
            <Button
              variant="ctaLg"
              as="a"
              href="https://shipwrecked.hack.club/3"
              mt={3}
              sx={{
                transformOrigin: 'left',
                backgroundImage: t => t.util.gx('green', 'blue')
              }}
            >
              Sign Up: Private Island Hackathon
            </Button>
          </Heading>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: ['flex-start', 'flex-start', 'flex-end'],
            marginRight: 2,
            mt: [4, 3, 1]
          }}
        >
          <Badge
            as="a"
            href="https://outernet.hackclub.com/"
            target="_blank"
            rel="noopener"
            variant="pill"
            sx={{
              zIndex: '1',
              bg: 'black',
              color: 'white',
              opacity: 1,
              textDecoration: 'none',
              fontWeight: 'normal',
              ':hover': { opacity: 1 },
              transition: '0.3s ease'
              // mixBlendMode: 'multiply'
            }}
            title="📸 Photo by Matt Gleich, Hack Clubber in NH!"
          >
            Hackers at Outernet in Vermont
          </Badge>
        </Box>
      </Box>
    </>
  )
}
