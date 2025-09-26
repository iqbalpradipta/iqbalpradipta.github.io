import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Box, Button, IconButton, Paper, Stack, Typography } from '@mui/material'
import { gsap } from 'gsap'
import ChatIcon from '@mui/icons-material/Chat'
import CloseIcon from '@mui/icons-material/Close'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import faqData from '../../data/faq.json'
import Scrollbar from '../Custom/Scroll'

type FAQItem = {
  id: string
  question: string
  answer: string
}

const faqItems = faqData.items as FAQItem[]
const faqGreeting = faqData.greeting as string

type ConversationEntry = FAQItem

function QuestionBubble({ label }: { label: string }) {

  return (
    <Stack direction="row" spacing={1} alignItems="flex-start" sx={{ alignSelf: 'flex-start', maxWidth: '90%' }}>
      <Box
        sx={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: 'rgba(248,246,227,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffe1d1',
        }}
      >
        <ChatBubbleOutlineIcon fontSize="small" />
      </Box>
      <Box
        sx={{
          px: 1.6,
          py: 1,
          borderRadius: '12px',
          background: 'linear-gradient(135deg, rgba(173,130,105,0.45) 0%, rgba(66,43,34,0.6) 100%)',
          border: '1px solid rgba(255,255,255,0.14)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.25)',
        }}
      >
        <Typography sx={{ fontWeight: 600, color: '#ffe1d1', fontSize: '0.83rem' }}>{label}</Typography>
      </Box>
    </Stack>
  )
}

function AnswerBubble({ text }: { text: string }) {
  return (
    <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ alignSelf: 'flex-end', maxWidth: '92%' }}>
      <Box
        sx={{
          px: 1.6,
          py: 1,
          borderRadius: '12px',
          background: 'rgba(248,246,227,0.12)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: '#f8f6e3',
          boxShadow: '0 10px 20px rgba(0,0,0,0.22)',
        }}
      >
        <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.6 }}>{text}</Typography>
      </Box>
      <Box
        sx={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: 'rgba(173,130,105,0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffe1d1',
        }}
      >
        <PersonOutlineIcon fontSize="small" />
      </Box>
    </Stack>
  )
}

function FAQChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [conversation, setConversation] = useState<ConversationEntry[]>([])
  const conversationRef = useRef<HTMLDivElement | null>(null)
  const chatContainerRef = useRef<HTMLDivElement | null>(null)
  const iconRef = useRef<HTMLButtonElement | null>(null)
  const scrollbarStyles = Scrollbar()

  const animateIcon = () => {
    if (!iconRef.current) {
      return
    }

    gsap.killTweensOf(iconRef.current)
    gsap.fromTo(iconRef.current, { scale: 1 }, { scale: 0.85, duration: 0.14, ease: 'power1.inOut', yoyo: true, repeat: 1 })
  }

  const handleToggle = () => {
    if (isAnimating) {
      return
    }

    animateIcon()

    if (isOpen) {
      if (!chatContainerRef.current) {
        setIsOpen(false)
        setIsAnimating(false)
        return
      }

      setIsAnimating(true)
      gsap.killTweensOf(chatContainerRef.current)
      gsap.to(chatContainerRef.current, {
        autoAlpha: 0,
        y: 24,
        scale: 0.92,
        duration: 0.28,
        ease: 'power2.in',
        onComplete: () => {
          setIsAnimating(false)
          setIsOpen(false)
        },
      })
    } else {
      setIsAnimating(true)
      setIsOpen(true)
    }
  }


  const handleSelect = (item: FAQItem) => {
    setConversation((prev) => [...prev, item])
  }

  useEffect(() => {
    if (conversationRef.current) {
      conversationRef.current.scrollTo({ top: conversationRef.current.scrollHeight, behavior: 'smooth' })
    }
  }, [conversation])

  useLayoutEffect(() => {
    if (!isOpen) {
      return
    }

    const element = chatContainerRef.current
    if (!element) {
      setIsAnimating(false)
      return
    }

    gsap.killTweensOf(element)
    gsap.set(element, { autoAlpha: 0, y: 24, scale: 0.92 })
    const tween = gsap.to(element, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.32,
      ease: 'power3.out',
      onComplete: () => setIsAnimating(false)
    })

    return () => {
      tween.kill()
    }
  }, [isOpen])

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 16, sm: 24 },
        right: { xs: 12, sm: 24 },
        zIndex: 1300,
        width: 56,
        height: 56,
        pointerEvents: 'none',
      }}
    >
      {isOpen && (
        <Paper
          ref={chatContainerRef}
          elevation={8}
          sx={{
            position: 'absolute',
            bottom: 72,
            right: 0,
            width: { xs: 320, sm: 380, md: 420 },
            maxWidth: '92vw',
            maxHeight: { xs: '72vh', sm: '80vh' },
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.18)',
            background: 'rgba(32,24,20,0.94)',
            backdropFilter: 'blur(8px)',
            color: '#f8f6e3',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            pointerEvents: 'auto',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 2,
              py: 1.5,
              background: 'linear-gradient(90deg, rgba(173,130,105,0.85) 0%, rgba(66,43,34,0.85) 100%)',
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 700, letterSpacing: 0.6 }}>Live Chat FAQ</Typography>
              <Typography sx={{ fontSize: '0.8rem', opacity: 0.8 }}>Pilih pertanyaan untuk melihat jawabannya</Typography>
            </Box>
            <IconButton onClick={handleToggle} size="small" sx={{ color: '#f8f6e3' }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          <Stack
            spacing={1.8}
            sx={{
              ...scrollbarStyles.scrollBox,
              px: 2.4,
              py: 1.8,
              flexGrow: 1,
              maxHeight: { xs: '46vh', sm: '56vh' },
              overflowX: 'hidden',
            }}
            ref={conversationRef}
          >
            {conversation.length === 0 ? (
              <Typography sx={{ fontSize: '0.8rem', opacity: 0.7 }}>
                Belum ada percakapan. Klik salah satu pertanyaan di bawah untuk mulai mengobrol.
              </Typography>
            ) : (
              conversation.map((item, index) => (
                <Stack key={`${item.id}-${index}`} spacing={1.2}>
                  <QuestionBubble label={item.question} />
                  <AnswerBubble text={item.answer} />
                </Stack>
              ))
            )}
          </Stack>

          <Stack spacing={1.2} sx={{ px: 2, py: 1.6, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.5 }}>{faqGreeting}</Typography>
            <Stack spacing={1}>
              {faqItems.map((item) => (
                <Button
                  key={item.id}
                  variant="outlined"
                  onClick={() => handleSelect(item)}
                  sx={{
                    justifyContent: 'flex-start',
                    borderColor: 'rgba(248,246,227,0.26)',
                    color: '#f8f6e3',
                    textTransform: 'none',
                    fontSize: '0.85rem',
                    borderRadius: '10px',
                    '&:hover': {
                      borderColor: '#ad8269',
                      backgroundColor: 'rgba(173,130,105,0.18)',
                    },
                  }}
                >
                  {item.question}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Paper>
      )}

      <IconButton
        ref={iconRef}
        onClick={handleToggle}
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'linear-gradient(90deg, #ad8269 0%, #6b5449 100%)',
          color: '#f8f6e3',
          boxShadow: '0 16px 26px rgba(0,0,0,0.35)',
          pointerEvents: 'auto',
          '&:hover': {
            background: 'linear-gradient(90deg, #c99a7f 0%, #846455 100%)',
          },
        }}
      >
        <ChatIcon />
      </IconButton>
    </Box>
  )
}

export default FAQChat




