import { Box, Link, Stack, Typography } from "@mui/material";

const sectionWrapperSx = {
  border: "1px solid rgba(255,255,255,0.16)",
  borderRadius: "14px",
  background: "rgba(0,0,0,0.18)",
  px: { xs: 2, sm: 2.6 },
  py: { xs: 1.8, sm: 2.2 },
  color: "rgba(255,255,255,0.86)",
};

const sectionTitleSx = {
  fontSize: { xs: "0.95rem", sm: "1.05rem" },
  fontWeight: 700,
  color: "#ffe1d1",
  letterSpacing: 0.6,
  textTransform: "uppercase",
  mb: { xs: 1, sm: 1.4 },
};

const listTextSx = {
  lineHeight: 1.7,
  color: "rgba(255,255,255,0.85)",
};

const contactItems = [
  {
    label: "Location",
    value: "Bekasi, Indonesia",
  },
  {
    label: "Email",
    value: "iqbalpradipta2@gmail.com",
    href: "mailto:iqbalpradipta2@gmail.com",
  },
  {
    label: "Phone",
    value: "0813-8562-6786",
    href: "tel:+6281385626786",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/iqbalpradipta",
    href: "https://linkedin.com/in/iqbalpradipta",
  },
  {
    label: "GitHub",
    value: "github.com/iqbalpradipta",
    href: "https://github.com/iqbalpradipta",
  },
  {
    label: "Website",
    value: "iqbalpradipta.github.io",
    href: "https://iqbalpradipta.github.io",
  },
];

const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Go", "PHP"],
  },
  {
    label: "Technologies",
    items: ["PostgreSQL", "Node.js", "Express.js", "React.js", "Laravel"],
  },
  {
    label: "Other",
    items: ["Algorithms", "Data Structures", "Problem Solving"],
  },
];

const trainingHighlights = [
  "Program Fullstack Developer is an intensive 6-month experience covering core software development fundamentals.",
  "Completed a 60-70 hour/week schedule with a proven track record of producing high-performing software engineers.",
  "Coursework: Git, GitHub, REST API, PostgreSQL, TypeScript, ORM, Express.js, Node.js, React.js, React Native, Chakra UI, Clean Architecture.",
  "Capstone: Built Circle-apps with a full-featured social platform workflow.",
];

const workExperience = {
  company: "PT.Aigen Global Teknologi",
  role: "Jr. Full-Stack Developer (August 25 - Present)",
  highlights: [
    "Developed and maintained responsive web interfaces using Next.js, improving overall user experience.",
    "Contributed to full-stack feature development, supporting both frontend and backend tasks as needed.",
    "Integrated backend services via RESTful APIs.",
  ],
};

const certifications = [
  "Learn Go Course - Codecademy (Feb 2023)",
  "Basic Go Programming - MySkill.id (May 2023)",
  "Go (Basic) - HackerRank (May 2023)",
  "Problem Solving (Basic) - HackerRank (Sep 2023)",
];

const interests = [
  "Exploring emerging technology stacks.",
  "Studying the forex market and trading strategies.",
  "Learning about design principles and motion graphics.",
];

function Who() {
  return (
    <Stack spacing={{ xs: 2, sm: 2.5 }}>
      <Box sx={sectionWrapperSx}>
        <Typography sx={sectionTitleSx}>Summary</Typography>
        <Typography sx={listTextSx}>
          Enthusiastic Fullstack Developer with a strong interest in backend development using Node.js and
          practical experience through self-initiated and team-based projects. Built and deployed several
          applications, including a scalable social media platform and a real-time trivia game using React.js/Next.js.
          Passionate about learning new technologies, writing clean code, and solving real-world problems through
          software. Eager to contribute to a collaborative development team and grow as a software engineer.
        </Typography>
      </Box>

      <Box sx={sectionWrapperSx}>
        <Typography sx={sectionTitleSx}>Contact</Typography>
        <Stack spacing={0.8}>
          {contactItems.map((item) => (
            <Stack key={item.label} direction="row" spacing={1} flexWrap="wrap" alignItems="baseline">
              <Typography sx={{ fontWeight: 600, minWidth: 88, color: "rgba(255,255,255,0.72)" }}>
                {item.label}
              </Typography>
              {item.href ? (
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "#ffe1d1", fontWeight: 500 }}
                >
                  {item.value}
                </Link>
              ) : (
                <Typography sx={listTextSx}>{item.value}</Typography>
              )}
            </Stack>
          ))}
        </Stack>
      </Box>

      <Box sx={sectionWrapperSx}>
        <Typography sx={sectionTitleSx}>Technical Skills</Typography>
        <Stack spacing={1.4}>
          {skillGroups.map((group) => (
            <Box key={group.label}>
              <Typography sx={{ fontWeight: 600, color: "rgba(255,255,255,0.72)", mb: 0.6 }}>
                {group.label}
              </Typography>
              <Typography sx={listTextSx}>{group.items.join(", ")}</Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      <Box sx={sectionWrapperSx}>
        <Typography sx={sectionTitleSx}>Training</Typography>
        <Typography sx={{ fontWeight: 600, color: "rgba(255,255,255,0.82)" }}>
          DumbWays Indonesia - Fullstack Developer (Nov 2023 - Apr 2024)
        </Typography>
        <Box component="ul" sx={{ pl: 2.4, m: 0, ...listTextSx }}>
          {trainingHighlights.map((highlight) => (
            <Typography key={highlight} component="li" sx={{ ...listTextSx, mb: 0.8 }}>
              {highlight}
            </Typography>
          ))}
        </Box>
      </Box>

      <Box sx={sectionWrapperSx}>
        <Typography sx={sectionTitleSx}>Education</Typography>
        <Typography sx={{ fontWeight: 600, color: "rgba(255,255,255,0.82)" }}>
          Pelita Bangsa University - Informatics Engineering (Sep 2022 - Present)
        </Typography>
      </Box>

      <Box sx={sectionWrapperSx}>
        <Typography sx={sectionTitleSx}>Work Experience</Typography>
        <Typography sx={{ fontWeight: 600, color: "rgba(255,255,255,0.82)" }}>
          {workExperience.company}
        </Typography>
        <Typography sx={{ fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>
          {workExperience.role}
        </Typography>
        <Box component="ul" sx={{ pl: 2.4, m: 0, mt: 1.2 }}>
          {workExperience.highlights.map((item) => (
            <Typography key={item} component="li" sx={{ ...listTextSx, mb: 0.6 }}>
              {item}
            </Typography>
          ))}
        </Box>
      </Box>

      <Box sx={sectionWrapperSx}>
        <Typography sx={sectionTitleSx}>Certifications</Typography>
        <Box component="ul" sx={{ pl: 2.4, m: 0 }}>
          {certifications.map((item) => (
            <Typography key={item} component="li" sx={{ ...listTextSx, mb: 0.6 }}>
              {item}
            </Typography>
          ))}
        </Box>
      </Box>

      <Box sx={sectionWrapperSx}>
        <Typography sx={sectionTitleSx}>Interests</Typography>
        <Box component="ul" sx={{ pl: 2.4, m: 0 }}>
          {interests.map((item) => (
            <Typography key={item} component="li" sx={{ ...listTextSx, mb: 0.6 }}>
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </Stack>
  );
}

export default Who;
