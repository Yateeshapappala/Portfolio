"use client"

import type React from "react"
import {
  Box,
  Typography,
  Button,
  Container,
  useTheme,
} from "@mui/material"
import { motion } from "framer-motion"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

type Props = {
  handleViewProjects: () => void
  handleContact: () => void
}

const HeroSection: React.FC<Props> = ({ handleViewProjects, handleContact }) => {
  const theme = useTheme()

  const highlightGradient = `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`

  return (
    <Box
      sx={theme => ({
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.light}10 100%)`,
        borderRadius: "0 0 24px 24px",
      })}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 8,
          }}
        >
          {/* Text Section */}
          <Box sx={{ flex: 1 }}>
            <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontSize: { xs: "2.4rem", md: "3.4rem" },
                  fontWeight: 800,
                  mb: 2,
                  background: highlightGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Full-Stack Developer & ML Enthusiast
              </Typography>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <Typography variant="h5" sx={{ mb: 4, fontWeight: 400, color: "text.secondary" }}>
                I design scalable web apps & intelligent ML solutions.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
                I’m passionate about crafting seamless user experiences and solving real-world problems with code.
              </Typography>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.4 }}>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={handleViewProjects}
                  aria-label="View Projects"
                  sx={{
                    background: highlightGradient,
                    "&:hover": {
                      background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                    },
                  }}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleContact}
                  aria-label="Contact Me"
                  sx={{
                    borderColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.main,
                    "&:hover": {
                      borderColor: theme.palette.primary.dark,
                      backgroundColor: `${theme.palette.secondary.light}10`,
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.6 }}>
              <Box sx={{ display: "flex", gap: 3, mt: 6 }}>
                {[
                  { number: "3+", label: "Projects in Production" },
                  { number: "93.3%", label: "ML Model Accuracy" },
                  { number: "500+", label: "Users Impacted" },
                ].map((item, idx) => (
                  <Box key={idx}>
                    <Typography variant="h3" fontWeight={700} color="primary">
                      {item.number}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Box>

          {/* Image Section */}
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: { xs: "300px", md: "400px" },
                  borderRadius: "24px",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.primary.dark})`,
                }}
              >
                <img
                  src="/images/profile.png"
                  alt="Yateesha Pappala profile picture"
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "24px",
                  }}
                />
              </Box>

              {/* Decorative Blurs */}
              <Box
                sx={{
                  position: "absolute",
                  width: "150px",
                  height: "150px",
                  borderRadius: "24px",
                  background: `${theme.palette.primary.light}4D`,
                  top: "-20px",
                  right: "-20px",
                  zIndex: -1,
                  backdropFilter: "blur(8px)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: `${theme.palette.primary.light}4D`,
                  bottom: "-10px",
                  left: "-10px",
                  zIndex: -1,
                  backdropFilter: "blur(8px)",
                }}
              />
            </motion.div>
          </Box>
        </Box>
      </Container>

      {/* Background Decor */}
      <Box
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.palette.primary.light}1A 0%, ${theme.palette.primary.light}00 70%)`,
          top: "-100px",
          right: "-100px",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, rgba(6, 182, 212, 0) 70%)",
          bottom: "-50px",
          left: "10%",
          zIndex: 0,
        }}
      />
    </Box>
  )
}

export default HeroSection
