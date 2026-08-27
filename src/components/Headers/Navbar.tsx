import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import Modal from "./Modal";
import { useEffect, useState } from "react";

function Navbar() {
  const [timeStr, setTimeStr] = useState("");
  const [locationName, setLocationName] = useState("JAKARTA, ID");
  const [timezoneStr, setTimezoneStr] = useState("UTC+7");

  // 1. Live Clock & Timezone
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Timezone offset (e.g. UTC+7)
    const offsetMin = -new Date().getTimezoneOffset();
    const offsetHours = Math.floor(Math.abs(offsetMin) / 60);
    const sign = offsetMin >= 0 ? "+" : "-";
    setTimezoneStr(`UTC${sign}${offsetHours}`);

    return () => clearInterval(interval);
  }, []);

  // 2. Geolocation with Reverse Geocoding & Fallback to JAKARTA, ID
  useEffect(() => {
    if (!("geolocation" in navigator)) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          if (res.ok) {
            const data = await res.json();
            const city =
              data.city ||
              data.locality ||
              data.principalSubdivision ||
              "JAKARTA";
            const countryCode = data.countryCode || "ID";
            setLocationName(`${city.toUpperCase()}, ${countryCode}`);
          }
        } catch {
          // Fallback to Jakarta on API error
          setLocationName("JAKARTA, ID");
        }
      },
      () => {
        // Fallback to Jakarta if user denies geolocation
        setLocationName("JAKARTA, ID");
      },
      { timeout: 5000 }
    );
  }, []);

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        px: { xs: 1, sm: 1.5, md: 2 },
        py: { xs: 0.5, sm: 1 },
      }}
    >
      <Toolbar disableGutters sx={{ justifyContent: "space-between", gap: 2 }}>
        {/* Dynamic User Telemetry Bar */}
        <Stack direction="row" spacing={1.2} alignItems="center">
          <Box
            sx={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#2ecc71",
              boxShadow: "0 0 8px #2ecc71",
            }}
          />
          <Typography
            sx={{
              fontFamily: "var(--font-label)",
              fontSize: { xs: "0.65rem", sm: "0.72rem" },
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "rgba(243, 237, 226, 0.75)",
              textTransform: "uppercase",
            }}
          >
            📍 {locationName} • 🕒 {timeStr || "00:00:00"} ({timezoneStr})
          </Typography>
        </Stack>

        {/* Right Side: Quick Links Menu */}
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Modal />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;