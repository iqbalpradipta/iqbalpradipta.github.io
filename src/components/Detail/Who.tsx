import { Box, Grid, Link, Stack, Typography, Button } from "@mui/material";
import { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const sectionWrapperSx = {
  py: { xs: 2.2, sm: 2.6 },
  borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
  "&:last-of-type": {
    borderBottom: "none",
  },
};

const sectionTitleSx = {
  fontFamily: "var(--font-label)",
  fontSize: "0.68rem",
  fontWeight: 700,
  color: "#f5a623",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  mb: { xs: 1.6, sm: 2 },
  textAlign: "left",
};

const listTextSx = {
  lineHeight: 1.8,
  fontSize: "0.9rem",
  color: "rgba(243, 237, 226, 0.82)",
  textAlign: "left",
};

const skillGroups = [
  { label: "LANGUAGES", items: ["JavaScript", "TypeScript", "Go", "PHP"] },
  { label: "TECHNOLOGIES", items: ["PostgreSQL", "Node.js", "Express.js", "React.js", "Laravel"] },
  { label: "CORE CONCEPTS", items: ["Algorithms", "Data Structures", "RESTful APIs", "Clean Architecture"] },
];

const workExperience = {
  company: "PT. Aigen Global Teknologi",
  role: "Jr. Full-Stack Developer",
  period: "August 2025 — Present",
  highlights: [
    "Developing and maintaining web applications using Next.js, React, and TypeScript.",
    "Integrated backend services with REST APIs for frontend features.",
    "Participated in fullstack tasks across user interface and backend logic.",
  ],
};

const trainingHighlights = [
  "Completed a 6-month intensive fullstack developer bootcamp with 60–70 hours/week of hands-on coding.",
  "Built REST APIs, database schemas, and responsive web applications using React.js, Express.js, and PostgreSQL.",
  "Capstone project: Circle-apps social media platform.",
];

function Who() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("iqbalpradipta2@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Stack spacing={0}>
      {/* Authentic Developer Bio Statement */}
      <Box sx={sectionWrapperSx}>
        <Typography sx={sectionTitleSx}>ABOUT</Typography>
        <Typography
          sx={{
            fontSize: { xs: "1.08rem", sm: "1.18rem" },
            fontWeight: 500,
            lineHeight: 1.65,
            color: "#f3ede2",
            letterSpacing: "-0.01em",
            textAlign: "left",
          }}
        >
          Fullstack Developer based in Bekasi. Experienced in developing social networks, real-time arcade games, and custom API services using{" "}
          <span style={{ color: "#7e8ce0", fontWeight: 700 }}>Node.js, Go, and React</span>.
        </Typography>
        <Typography sx={{ ...listTextSx, mt: 1.6, fontSize: "0.88rem", color: "rgba(243, 237, 226, 0.75)" }}>
          I focus on shipping reliable working software, optimizing database queries, and continuously learning new tools to solve practical software problems.
        </Typography>
      </Box>

      {/* Interactive Direct Contact Cards (Opsi 1) */}
      <Box sx={sectionWrapperSx}>
        <Typography sx={sectionTitleSx}>GET IN TOUCH</Typography>
        <Grid container spacing={2}>
          {/* Card 1: Email */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                p: 2,
                borderRadius: "16px",
                background: "rgba(255, 255, 255, 0.025)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 1.5,
                transition: "all 0.2s ease",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(245, 166, 35, 0.4)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Stack spacing={0.8} alignItems="flex-start">
                <Stack direction="row" spacing={1} alignItems="center">
                  <MailOutlineIcon sx={{ fontSize: 18, color: "#f5a623" }} />
                  <Typography
                    sx={{
                      fontFamily: "var(--font-label)",
                      fontSize: "0.66rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      color: "rgba(243, 237, 226, 0.5)",
                    }}
                  >
                    EMAIL
                  </Typography>
                </Stack>
                <Link
                  href="mailto:iqbalpradipta2@gmail.com"
                  underline="none"
                  sx={{
                    color: "#f3ede2",
                    fontWeight: 600,
                    fontSize: "0.86rem",
                    wordBreak: "break-word",
                    "&:hover": { color: "#f5a623" },
                  }}
                >
                  iqbalpradipta2@gmail.com
                </Link>
              </Stack>
              <Button
                size="small"
                onClick={handleCopyEmail}
                startIcon={copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
                sx={{
                  alignSelf: "flex-start",
                  color: copied ? "#2ecc71" : "rgba(243, 237, 226, 0.6)",
                  fontFamily: "var(--font-label)",
                  fontSize: "0.7rem",
                  textTransform: "none",
                  p: 0,
                  minWidth: 0,
                  "&:hover": { color: "#f3ede2", background: "transparent" },
                }}
              >
                {copied ? "Copied!" : "Copy Email"}
              </Button>
            </Box>
          </Grid>

          {/* Card 2: WhatsApp */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                p: 2,
                borderRadius: "16px",
                background: "rgba(255, 255, 255, 0.025)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 1.5,
                transition: "all 0.2s ease",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(126, 140, 224, 0.5)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Stack spacing={0.8} alignItems="flex-start">
                <Stack direction="row" spacing={1} alignItems="center">
                  <WhatsAppIcon sx={{ fontSize: 18, color: "#7e8ce0" }} />
                  <Typography
                    sx={{
                      fontFamily: "var(--font-label)",
                      fontSize: "0.66rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      color: "rgba(243, 237, 226, 0.5)",
                    }}
                  >
                    WHATSAPP
                  </Typography>
                </Stack>
                <Link
                  href="https://wa.me/6281385626786"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "#f3ede2",
                    fontWeight: 600,
                    fontSize: "0.86rem",
                    "&:hover": { color: "#7e8ce0" },
                  }}
                >
                  0813-8562-6786
                </Link>
              </Stack>
              <Typography
                sx={{
                  fontFamily: "var(--font-label)",
                  fontSize: "0.7rem",
                  color: "#2ecc71",
                  fontWeight: 600,
                }}
              >
                ● Quick Response
              </Typography>
            </Box>
          </Grid>

          {/* Card 3: Location & Availability */}
          <Grid item xs={12} sm={12} md={4}>
            <Box
              sx={{
                p: 2,
                borderRadius: "16px",
                background: "rgba(255, 255, 255, 0.025)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 1.5,
              }}
            >
              <Stack spacing={0.8} alignItems="flex-start">
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocationOnOutlinedIcon sx={{ fontSize: 18, color: "#f5a623" }} />
                  <Typography
                    sx={{
                      fontFamily: "var(--font-label)",
                      fontSize: "0.66rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      color: "rgba(243, 237, 226, 0.5)",
                    }}
                  >
                    LOCATION
                  </Typography>
                </Stack>
                <Typography sx={{ color: "#f3ede2", fontWeight: 600, fontSize: "0.86rem" }}>
                  Bekasi, Indonesia
                </Typography>
              </Stack>
              <Typography
                sx={{
                  fontSize: "0.74rem",
                  color: "rgba(243, 237, 226, 0.55)",
                  lineHeight: 1.4,
                }}
              >
                Available for Remote & On-site roles
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Technical Stack */}
      <Box sx={sectionWrapperSx}>
        <Typography sx={sectionTitleSx}>TECHNICAL STACK</Typography>
        <Stack spacing={2}>
          {skillGroups.map((group) => (
            <Box key={group.label}>
              <Typography
                sx={{
                  fontFamily: "var(--font-label)",
                  fontSize: "0.66rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "rgba(243, 237, 226, 0.4)",
                  mb: 0.8,
                  textAlign: "left",
                }}
              >
                {group.label}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {group.items.map((skill) => (
                  <Box
                    key={skill}
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      borderRadius: "6px",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      fontSize: "0.8rem",
                      color: "#f3ede2",
                      fontFamily: "var(--font-label)",
                      fontWeight: 600,
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: "#f5a623",
                        color: "#f5a623",
                      },
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Experience */}
      <Box sx={sectionWrapperSx}>
        <Typography sx={sectionTitleSx}>EXPERIENCE</Typography>
        <Box sx={{ width: "100%" }}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" flexWrap="wrap" gap={1}>
            <Typography sx={{ fontWeight: 800, color: "#f3ede2", fontSize: "0.98rem", textAlign: "left" }}>
              {workExperience.company}
            </Typography>
            <Typography
              sx={{
                fontFamily: "var(--font-label)",
                fontSize: "0.7rem",
                color: "#f5a623",
                fontWeight: 600,
              }}
            >
              {workExperience.period}
            </Typography>
          </Stack>
          <Typography sx={{ fontWeight: 600, color: "#7e8ce0", fontSize: "0.85rem", mt: 0.3, textAlign: "left" }}>
            {workExperience.role}
          </Typography>
          <Box component="ul" sx={{ pl: 2.2, m: 0, mt: 1.2, textAlign: "left" }}>
            {workExperience.highlights.map((item) => (
              <Typography key={item} component="li" sx={{ ...listTextSx, mb: 0.6 }}>
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Education & Training */}
      <Box sx={sectionWrapperSx}>
        <Typography sx={sectionTitleSx}>EDUCATION & TRAINING</Typography>
        <Stack spacing={1.8}>
          <Box>
            <Typography sx={{ fontWeight: 700, color: "#f3ede2", textAlign: "left" }}>
              DumbWays Indonesia — Fullstack Developer Program
            </Typography>
            <Typography sx={{ fontSize: "0.78rem", color: "rgba(243, 237, 226, 0.45)", fontFamily: "var(--font-label)", mt: 0.2, textAlign: "left" }}>
              Nov 2023 — Apr 2024
            </Typography>
            <Box component="ul" sx={{ pl: 2.2, m: 0, mt: 1, textAlign: "left" }}>
              {trainingHighlights.map((highlight) => (
                <Typography key={highlight} component="li" sx={{ ...listTextSx, mb: 0.6 }}>
                  {highlight}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box sx={{ pt: 1.2, borderTop: "1px dashed rgba(255, 255, 255, 0.08)" }}>
            <Typography sx={{ fontWeight: 700, color: "#f3ede2", textAlign: "left" }}>
              Pelita Bangsa University — Informatics Engineering
            </Typography>
            <Typography sx={{ fontSize: "0.78rem", color: "rgba(243, 237, 226, 0.45)", fontFamily: "var(--font-label)", mt: 0.2, textAlign: "left" }}>
              Sep 2022 — Present
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Who;