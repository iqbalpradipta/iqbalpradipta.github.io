import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Box, Button, IconButton, Paper, Stack, Typography } from "@mui/material"
import { gsap } from "gsap"
import ChatIcon from "@mui/icons-material/Chat"
import CloseIcon from "@mui/icons-material/Close"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import faqData from "../../data/faq.json"
import Scrollbar from "../Custom/Scroll"

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
    <Stack direction="row" spacing={1} alignItems="flex-start" sx={{ alignSelf: "flex-start", maxWidth: "90%" }}>
      <Box
        sx={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "rgba(243, 237, 226, 0.08)",
          border: "1px solid var(--color-rule)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--color-accent-2)",
          flexShrink: 0,
        }}
      >
        <ChatBubbleOutlineIcon fontSize="small" />
      </Box>
      <Box
        sx={{
          px: 1.6,
          py: 1,
          borderRadius: "14px",
          background: "rgba(126, 140, 224, 0.15)",
          border: "1px solid rgba(126, 140, 224, 0.3)",
        }}
      >
        <Typography sx={{ fontWeight: 700, color: "var(--color-ink)", fontSize: "0.83rem" }}>{label}</Typography>
      </Box>
    </Stack>
  )
}

function AnswerBubble({ text }: { text: string }) {
  return (
    <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ alignSelf: "flex-end", maxWidth: "92%" }}>
      <Box
        sx={{
          px: 1.6,
          py: 1,
          borderRadius: "14px",
          background: "var(--color-paper-2)",
          border: "1px solid var(--color-rule)",
          color: "var(--color-ink-2)",
        }}
      >
        <Typography sx={{ fontSize: "0.8rem", lineHeight: 1.6 }}>{text}</Typography>
      </Box>
      <Box
        sx={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "var(--color-accent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#121018",
          flexShrink: 0,
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
    gsap.fromTo(iconRef.current, { scale: 1 }, { scale: 0.85, duration: 0.14, ease: "power1.inOut", yoyo: true, repeat: 1 })
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
        duration: 0.24,
        ease: "expo.in",
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
      conversationRef.current.scrollTo({ top: conversationRef.current.scrollHeight, behavior: "smooth" })
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

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
      ease: "expo.out",
      onComplete: () => setIsAnimating(false)
    })

    return () => {
      tween.kill()
    }
  }, [isOpen])

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 16, sm: 24 },
        right: { xs: 12, sm: 24 },
        zIndex: 1300,
        width: 56,
        height: 56,
        pointerEvents: "none",
      }}
    >
      {isOpen && (
        <Paper
          ref={chatContainerRef}
          elevation={0}
          sx={{
            position: "absolute",
            bottom: 72,
            right: 0,
            width: { xs: 320, sm: 380, md: 420 },
            maxWidth: "92vw",
            maxHeight: { xs: "72vh", sm: "80vh" },
            borderRadius: "24px",
            border: "1px solid var(--color-rule)",
            background: "rgba(22, 20, 29, 0.92)",
            backdropFilter: "blur(20px)",
            boxShadow: "var(--shadow-soft)",
            color: "var(--color-ink)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            pointerEvents: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 1.5,
              background: "rgba(32, 28, 43, 0.9)",
              borderBottom: "1px solid var(--color-rule)",
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 800, letterSpacing: "-0.01em", color: "var(--color-ink)" }}>Live Chat FAQ</Typography>
              <Typography sx={{ fontSize: "0.78rem", color: "var(--color-ink-3)" }}>Pilih pertanyaan untuk melihat jawabannya</Typography>
            </Box>
            <IconButton onClick={handleToggle} size="small" sx={{ color: "var(--color-ink)" }}>
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
              maxHeight: { xs: "46vh", sm: "56vh" },
              overflowX: "hidden",
            }}
            ref={conversationRef}
          >
            {conversation.length === 0 ? (
              <Typography sx={{ fontSize: "0.8rem", color: "var(--color-ink-3)" }}>
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

          <Stack spacing={1.2} sx={{ px: 2, py: 1.6, borderTop: "1px solid var(--color-rule)" }}>
            <Typography sx={{ fontSize: "0.85rem", lineHeight: 1.5, color: "var(--color-ink-2)" }}>{faqGreeting}</Typography>
            <Stack spacing={1}>
              {faqItems.map((item) => (
                <Button
                  key={item.id}
                  variant="outlined"
                  onClick={() => handleSelect(item)}
                  sx={{
                    justifyContent: "flex-start",
                    border: "1px solid var(--color-rule)",
                    color: "var(--color-ink)",
                    textTransform: "none",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    borderRadius: "12px",
                    transition: "all var(--dur-micro) var(--ease-out)",
                    "&:hover": {
                      borderColor: "var(--color-accent)",
                      backgroundColor: "rgba(245, 166, 35, 0.12)",
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
        aria-label="Open FAQ chat"
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "var(--color-accent)",
          color: "#121018",
          boxShadow: "0 8px 20px -4px rgba(245, 166, 35, 0.45)",
          pointerEvents: "auto",
          transition: "all var(--dur-short) var(--ease-out)",
          "&:hover": {
            background: "var(--color-accent)",
            transform: "translateY(-3px)",
            boxShadow: "0 12px 26px -4px rgba(245, 166, 35, 0.6)",
          },
        }}
      >
        <ChatIcon />
      </IconButton>
    </Box>
  )
}

export default FAQChat