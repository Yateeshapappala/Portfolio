"use client"

import type React from "react"
import {
  Box,
  Container,
  Typography,
  IconButton,
  Link,
  Divider,
  useTheme,
} from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"

const Footer: React.FC = () => {
  const theme = useTheme()
  const primaryGradient = "linear-gradient(90deg, #6366f1, #ec4899)"
  const highlightColor = theme.palette.primary.main
  const isDark = theme.palette.mode === "dark"

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        mt: 8,
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: { xs: 4, md: 0 },
            flexWrap: "wrap",
          }}
        >
          {/* Brand and Social Links */}
          <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 25%" } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: primaryGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Yateesha Pappala
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Passionate full-stack developer and ML enthusiast crafting modern digital experiences.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {[
                {
                  icon: <GitHubIcon fontSize="small" />,
                  href: "https://github.com/Yateeshapappala",
                  label: "GitHub",
                },
                {
                  icon: <LinkedInIcon fontSize="small" />,
                  href: "https://www.linkedin.com/in/yateesha-pappala-11047922a/",
                  label: "LinkedIn",
                },
                {
                  icon: <EmailIcon fontSize="small" />,
                  href: "mailto:yateeshapappala@gmail.com",
                  label: "Email",
                },
              ].map(({ icon, href, label }) => (
                <Link key={label} href={href} target="_blank" rel="noopener" color="inherit">
                  <IconButton size="small" sx={{ color: highlightColor }}>
                    {icon}
                  </IconButton>
                </Link>
              ))}
            </Box>
          </Box>

          {/* Resource Links */}
          <Box sx={{ flex: { xs: "1 1 50%", md: "1 1 15%" } }}>
            <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
              Links
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
              {[
                { label: "GitHub", href: "https://github.com/Yateeshapappala" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/yateesha-pappala-11047922a/" },
                { label: "LeetCode", href: "https://leetcode.com/u/yateeshapappala/" },
                { label: "Resume", href: "/Yateesha_Pappala_Resume.pdf" },
              ].map(({ label, href }) => (
                <Box component="li" key={label} sx={{ mb: 1 }}>
                  <Link
                    href={href}
                    underline="hover"
                    target="_blank"
                    rel="noopener"
                    color="text.secondary"
                    sx={{
                      fontSize: "0.875rem",
                      transition: "color 0.3s",
                      "&:hover": {
                        color: highlightColor,
                      },
                    }}
                  >
                    {label}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Contact */}
          <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 30%" } }}>
            <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
              Get In Touch
            </Typography>
            <Link
              href="mailto:yateeshapappala@gmail.com"
              underline="hover"
              sx={{
                color: highlightColor,
                fontWeight: 500,
                fontSize: "0.875rem",
              }}
            >
              yateeshapappala@gmail.com
            </Link>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Yateesha Pappala. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
