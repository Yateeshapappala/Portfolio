"use client"

import type React from "react"
import { Box, Container, Typography, IconButton, Link, Divider } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"

const Footer: React.FC = () => {

  
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        mt: 8,
        backgroundColor: "#f8fafc",
        borderTop: "1px solid",
        borderColor: "divider",
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
          {/* Section 1 */}
          <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 25%" } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: "linear-gradient(90deg, #6366f1, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Yateesha Portfolio
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              A showcase of my frontend development projects and skills, built with React, TypeScript, and Material UI.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Link href="https://github.com/Yateeshapappala" target="_blank" rel="noopener" color="inherit">
                <IconButton size="small" sx={{ color: "#6366f1", "&:hover": { backgroundColor: "rgba(99, 102, 241, 0.1)" } }}>
                  <GitHubIcon fontSize="small" />
                </IconButton>
              </Link>
              <Link href="https://www.linkedin.com/in/yateesha-pappala-11047922a/" target="_blank" rel="noopener" color="inherit">
                <IconButton size="small" sx={{ color: "#6366f1", "&:hover": { backgroundColor: "rgba(99, 102, 241, 0.1)" } }}>
                  <LinkedInIcon fontSize="small" />
                </IconButton>
              </Link>
              <Link href="#" target="_blank" rel="noopener" color="inherit">
                <IconButton size="small" sx={{ color: "#6366f1", "&:hover": { backgroundColor: "rgba(99, 102, 241, 0.1)" } }}>
                  <TwitterIcon fontSize="small" />
                </IconButton>
              </Link>
              <Link href="#" target="_blank" rel="noopener" color="inherit">
                <IconButton size="small" sx={{ color: "#6366f1", "&:hover": { backgroundColor: "rgba(99, 102, 241, 0.1)" } }}>
                  <InstagramIcon fontSize="small" />
                </IconButton>
              </Link>
              <Link href="mailto:yateeshapappala@gmail.com" color="inherit">
                <IconButton size="small" sx={{ color: "#6366f1", "&:hover": { backgroundColor: "rgba(99, 102, 241, 0.1)" } }}>
                  <EmailIcon fontSize="small" />
                </IconButton>
              </Link>
            </Box>
          </Box>

          {/* Section 2 - Navigation */}
          {/* <Box sx={{ flex: { xs: "1 1 50%", md: "1 1 15%" } }}>
            <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
              Navigation
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
              {[
                { label: "Home", href: "#home" },
                { label: "Projects", href: "#projects" },
                { label: "Skills", href: "#skills" },
                { label: "Contact", href: "#contact" },
              ].map(({ label, href }) => (
                <Box component="li" key={label} sx={{ mb: 1 }}>
                  <Link
                    href={href}
                    underline="hover"
                    color="text.secondary"
                    sx={{
                      fontSize: "0.875rem",
                      "&:hover": {
                        color: "#6366f1",
                      },
                    }}
                  >
                    {label}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box> */}

          {/* Section 3 - Resources */}
          <Box sx={{ flex: { xs: "1 1 50%", md: "1 1 15%" } }}>
            <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
              Resources
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
              {[
                { label: "Blog", href: "#" },
                { label: "Documentation", href: "#" },
                { label: "GitHub", href: "https://github.com/Yateeshapappala" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/yateesha-pappala-11047922a/" },
              ].map(({ label, href }) => (
                <Box component="li" key={label} sx={{ mb: 1 }}>
                  <Link
                    href={href}
                    underline="hover"
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener" : undefined}
                    color="text.secondary"
                    sx={{
                      fontSize: "0.875rem",
                      "&:hover": {
                        color: "#6366f1",
                      },
                    }}
                  >
                    {label}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Section 4 - Contact */}
          <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 30%" } }}>
            <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
              Get In Touch
            </Typography>

            <Link
              href="mailto:yateeshapappala@gmail.com"
              underline="hover"
              sx={{
                color: "#6366f1",
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
          © {new Date().getFullYear()} Dev Portfolio. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
