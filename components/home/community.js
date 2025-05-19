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
import Stage from '../stage'
import Icon from '../icon'

export default function Community({}) {
  return (
    <>
      <Box py={[4, 5, '82px']}>
        <Box
          sx={{
            width: '90vw',
            maxWidth: 'layout',
            margin: 'auto'
          }}
        >
          <Box>
            <Text
              as="p"
              variant="eyebrow"
              sx={{ fontSize: ['22px', 2, 3], textAlign: 'center' }}
            >
              We've got a lot going on - Let's recap
            </Text>
            <Text
              variant="title"
              as="h2"
              sx={{
                fontSize: ['36px', '48px', '72px'],
                width: '16ch',
                textAlign: 'center',
                margin: 'auto'
              }}
            >
              Find your second home at{' '}
              <Text
                as="span"
                sx={{
                  borderRadius: 'default',
                  ml: 0,
                  whiteSpace: ['wrap', 'nowrap'],
                  background: theme => theme.util.gx('red', 'orange'),
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Hack&nbsp;Club
              </Text>
            </Text>
          </Box>
          <Grid
            pt={[3, 4]}
            pb={[4, 5]}
            gap={3}
            columns={[1, 2, 3]}
            sx={{
              textAlign: 'left',
              '> a, > div': {
                borderRadius: 'extra',
                boxShadow: 'elevated',
                p: [3, null, 4]
              },
              span: {
                boxShadow:
                  '-2px -2px 6px rgba(255,255,255,0.125), inset 2px 2px 6px rgba(0,0,0,0.1), 2px 2px 8px rgba(0,0,0,0.0625)'
              },
              svg: { fill: 'currentColor' }
            }}
          >
            <Card
              as="a"
              href="/slack"
              target="_blank"
              rel="noopener"
              variant="interactive"
              sx={{
                background:
                  'linear-gradient(32deg, rgba(51, 142, 218, 0.9) 0%, rgba(51, 214, 166, 0.9) 100%)',
                color: 'white',
                svg: { color: 'rgb(51, 142, 218)' },
                position: 'relative',
                '.icon': {
                  transition:
                    'transform 0.25s ease-in-out, opacity 0.25s ease-in-out'
                },
                ':hover,:focus': {
                  '.icon': {
                    transform: 'translateX(28px) translateY(-28px)',
                    opacity: 0
                  }
                }
              }}
            >
              <Icon
                glyph="external"
                size={32}
                className="icon"
                sx={{
                  position: 'absolute',
                  top: 2,
                  right: 2,
                  opacity: 0.3,
                  fontSize: ['18px', '20px', '22px'],
                  zIndex: 3,
                  color: 'white !important'
                }}
              />
              <Stage
                icon="slack"
                color="white"
                name="Join Our Slack"
                desc="Connect with other technical teenagers on Slack and hack on things together."
                sx={{
                  p: {
                    fontSize: ['18px', '20px', '22px']
                  },
                  h3: {
                    fontSize: ['22px', 2, 3]
                  }
                }}
              />
            </Card>
            <Card
              sx={{
                background: 'linear-gradient(-32deg, #6f31b7 14%, #fb558e 82%)',
                color: 'white',
                svg: { color: '#fb558e' },
                textDecoration: 'none',
                position: 'relative',
                '.icon': {
                  transition:
                    'transform 0.25s ease-in-out, opacity 0.25s ease-in-out'
                },
                ':hover,:focus': {
                  '.icon': {
                    transform: 'translateX(28px) translateY(-28px)',
                    opacity: 0
                  }
                }
              }}
              as="a"
              href="https://github.com/hackclub"
              variant="interactive"
              target="_blank"
              rel="noopener"
            >
              <Icon
                glyph="external"
                size={32}
                className="icon"
                sx={{
                  position: 'absolute',
                  top: 2,
                  right: 2,
                  opacity: 0.3,
                  fontSize: [1, '16px', '20px'],
                  zIndex: 3,
                  color: 'white !important'
                }}
              />
              <Stage
                icon="github"
                color="white"
                name="Explore Our Open Source Tools"
                desc="We're currently building a game engine, daily streak system, graphing game, and more!"
                sx={{
                  p: {
                    fontSize: [1, '16px', '20px']
                  },
                  h3: {
                    fontSize: ['22px', 2, 3]
                  }
                }}
              />
            </Card>
            <Card
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(255, 140, 55, 0.9) 0%, rgba(236, 55, 80, 0.9) 100%)',
                color: 'white',
                svg: { color: 'rgb(236, 55, 80)' },
                textDecoration: 'none',
                position: 'relative',
                '.icon': {
                  transition:
                    'transform 0.25s ease-in-out, opacity 0.43s ease-in-out'
                },
                ':hover,:focus': {
                  '.icon': {
                    transform: 'translateX(28px) translateY(-28px)',
                    opacity: 0
                  }
                }
              }}
              as="a"
              href="/clubs"
              variant="interactive"
              target="_blank"
              rel="noopener"
            >
              <Icon
                glyph="external"
                size={32}
                className="icon"
                sx={{
                  position: 'absolute',
                  top: 2,
                  right: 2,
                  opacity: 0.3,
                  fontSize: ['18px', '20px', '22px'],
                  zIndex: 3,
                  color: 'white !important'
                }}
              />
              <Stage
                icon="clubs"
                color="white"
                name="Start A Club"
                desc="Build an in-person community of high school hackers, and we're here to help."
                sx={{
                  p: {
                    fontSize: ['18px', '20px', '22px']
                  },
                  h3: {
                    fontSize: ['22px', 2, 3]
                  }
                }}
              />
            </Card>
          </Grid>
        </Box>
      </Box>
    </>
  )
}
