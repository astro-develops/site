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
import Trail from '../index/cards/trail'
import Scrapyard from '../index/cards/scrapyard'
import Neighborhood from '../index/cards/neighborhood'
import Slack from '../index/cards/slack'

export default function Event({ slackData, events }) {
  let [slackKey, setSlackKey] = useState(0)

  const spotlightRef = useRef()
  useEffect(() => {
    const handler = event => {
      var rect = document.getElementById('spotlight').getBoundingClientRect()
      var x = event.clientX - rect.left //x position within the element.
      var y = event.clientY - rect.top //y position within the element.

      spotlightRef.current.style.background = `radial-gradient(
        circle at ${x}px ${y}px,
        rgba(132, 146, 166, 0) 10px,
        rgba(249, 250, 252, 0.9) 80px
      )`
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])
  return (
    <>
      <Box
        id="spotlight"
        as="section"
        sx={{
          backgroundImage: `
              linear-gradient(rgba(249, 250, 252, 0.7), rgba(249, 250, 252, 0.7)),
              url('https://icons.hackclub.com/api/icons/0x8492a6/glyph:rep.svg')
            `,
          backgroundSize: '40px 40px',
          backgroundRepeat: 'repeat',
          position: 'relative'
        }}
      >
        <Box
          ref={spotlightRef}
          sx={{
            position: 'absolute',
            zIndex: 2,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: 'snow',
            pointerEvents: 'none'
          }}
        />
        <Box
          sx={{
            position: 'relative',
            width: '90vw',
            maxWidth: 'layout',
            margin: 'auto',
            zIndex: 5
          }}
          py={[4, 4, 5]}
        >
          <Box>
            <Text variant="title" sx={{ fontSize: ['36px', 4, 5] }}>
              Connect with{' '}
              <Text
                as="span"
                sx={{
                  borderRadius: 'default',
                  px: 2,
                  mx: 0,
                  whiteSpace: 'nowrap',
                  color: 'white',
                  bg: 'red'
                }}
              >
                builders
              </Text>{' '}
              from around the world
            </Text>
            <Text
              variant="subtitle"
              as="p"
              sx={{ fontSize: ['18px', '20px', '22px'], pb: [3, 0, 0] }}
            >
              We gather both online and in-person to share our love of code and
              make things together!
            </Text>
          </Box>
          <Neighborhood />
          <Trail />
          <Scrapyard />
          <Slack slackKey={slackKey} data={slackData} events={events} />
        </Box>
      </Box>
    </>
  )
}
