import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

const titleSx = {
  fontFamily: "var(--font-label)",
  fontSize: "0.68rem",
  fontWeight: 700,
  color: "#f5a623",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  textAlign: "left",
};

const filterCategories = ["ALL", "DEV TOOLS", "STACK & DB", "WORKSPACE"];

const inventoryItems = [
  { name: "VS Code", category: "DEV TOOLS", spec: "Monokai Pro / Tokyo Night, JetBrains Mono 14px" },
  { name: "Windows Terminal", category: "DEV TOOLS", spec: "PowerShell Core & Zsh with Oh My Posh" },
  { name: "TypeScript", category: "STACK & DB", spec: "Primary language for front-to-back type safety" },
  { name: "Go (Golang)", category: "STACK & DB", spec: "Lightweight microservices & concurrency routines" },
  { name: "Node.js & Express", category: "STACK & DB", spec: "REST API runtime & serverless endpoints" },
  { name: "React.js & Next.js", category: "STACK & DB", spec: "Frontend UI orchestration & SSR components" },
  { name: "PostgreSQL & Prisma", category: "STACK & DB", spec: "Relational data modeling, indexing, & ORM" },
  { name: "Git & GitHub", category: "DEV TOOLS", spec: "Version control & GitHub Actions CI/CD automation" },
  { name: "Postman", category: "DEV TOOLS", spec: "API testing, mock servers, & route specs" },
  { name: "Figma", category: "WORKSPACE", spec: "UI wireframing & design system tokens" },
  { name: "Dual Monitor Setup", category: "WORKSPACE", spec: "Main coding display + reference terminal view" },
];

function Uses() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredItems =
    activeFilter === "ALL"
      ? inventoryItems
      : inventoryItems.filter((item) => item.category === activeFilter);

  return (
    <Box sx={{ py: 0.5 }}>
      {/* Header & Interactive Filter Bar */}
      <Stack spacing={1.6} sx={{ mb: 2.6 }}>
        <Typography sx={titleSx}>EQUIPMENT & GEAR // INVENTORY</Typography>
        <Typography sx={{ fontSize: "0.85rem", color: "rgba(243, 237, 226, 0.55)", textAlign: "left" }}>
          A curated spec sheet of software, hardware, and dev tools I rely on daily.
        </Typography>

        {/* Single-Line Scrollable Filter Chips */}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            overflowX: "auto",
            whiteSpace: "nowrap",
            pb: 0.5,
            pt: 0.2,
            width: "100%",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <Box
                key={cat}
                onClick={() => setActiveFilter(cat)}
                sx={{
                  px: { xs: 1.2, sm: 1.4 },
                  py: 0.4,
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontFamily: "var(--font-label)",
                  fontSize: { xs: "0.62rem", sm: "0.68rem" },
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  flexShrink: 0,
                  background: isActive ? "#f5a623" : "rgba(255, 255, 255, 0.03)",
                  color: isActive ? "#121018" : "rgba(243, 237, 226, 0.6)",
                  border: `1px solid ${isActive ? "#f5a623" : "rgba(255, 255, 255, 0.08)"}`,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: isActive ? "#121018" : "#f3ede2",
                    borderColor: isActive ? "#f5a623" : "rgba(255, 255, 255, 0.18)",
                  },
                }}
              >
                {cat}
              </Box>
            );
          })}
        </Stack>
      </Stack>

      {/* Tabular Spec Inventory Table */}
      <Box
        sx={{
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          overflow: "hidden",
          background: "rgba(255, 255, 255, 0.015)",
        }}
      >
        {/* Table Header */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", sm: "160px 120px 1fr" },
            px: 2,
            py: 1,
            background: "rgba(255, 255, 255, 0.03)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <Typography sx={{ fontFamily: "var(--font-label)", fontSize: "0.64rem", fontWeight: 700, color: "rgba(243, 237, 226, 0.4)", textAlign: "left" }}>
            ITEM NAME
          </Typography>
          <Typography sx={{ fontFamily: "var(--font-label)", fontSize: "0.64rem", fontWeight: 700, color: "rgba(243, 237, 226, 0.4)", textAlign: "left", display: { xs: "none", sm: "block" } }}>
            CATEGORY
          </Typography>
          <Typography sx={{ fontFamily: "var(--font-label)", fontSize: "0.64rem", fontWeight: 700, color: "rgba(243, 237, 226, 0.4)", textAlign: "left" }}>
            SPECIFICATION / CONFIG
          </Typography>
        </Box>

        {/* Table Rows */}
        {filteredItems.map((item, idx) => (
          <Box
            key={item.name}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr 1fr", sm: "160px 120px 1fr" },
              px: 2,
              py: 1.4,
              borderBottom: idx < filteredItems.length - 1 ? "1px solid rgba(255, 255, 255, 0.05)" : "none",
              transition: "background 0.2s ease",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.04)",
              },
            }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: "0.88rem", color: "#f3ede2", textAlign: "left" }}>
              {item.name}
            </Typography>
            <Typography
              sx={{
                fontFamily: "var(--font-label)",
                fontSize: "0.68rem",
                color: "#7e8ce0",
                fontWeight: 600,
                textAlign: "left",
                display: { xs: "none", sm: "block" },
              }}
            >
              {item.category}
            </Typography>
            <Typography sx={{ fontSize: "0.84rem", color: "rgba(243, 237, 226, 0.7)", textAlign: "left" }}>
              {item.spec}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Uses;