"use client"

import type React from "react"
import { Box, Typography, Button, Container } from "@mui/material"
import { motion } from "framer-motion"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const HeroSection: React.FC<{ handleViewProjects: () => void; handleContact: () => void }> = ({ handleViewProjects, handleContact  }) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        background: "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)",
        borderRadius: "0 0 24px 24px",
      }}
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
          <Box sx={{ flex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 800,
                  mb: 2,
                  background: "linear-gradient(90deg, #6366f1, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Frontend Developer & UI Designer
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                  mb: 4,
                  fontWeight: 400,
                  lineHeight: 1.5,
                }}
              >
                Creating beautiful, responsive, and user-friendly web applications with modern technologies.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    background: "linear-gradient(90deg, #6366f1, #ec4899)",
                    "&:hover": {
                      background: "linear-gradient(90deg, #4f46e5, #db2777)",
                    },
                  }}
                  onClick={handleViewProjects}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleContact}
                  sx={{
                    borderColor: "#6366f1",
                    color: "#6366f1",
                    "&:hover": {
                      borderColor: "#4f46e5",
                      backgroundColor: "rgba(99, 102, 241, 0.04)",
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Box sx={{ display: "flex", gap: 3, mt: 6 }}>
                {[{ number: "4+", label: "Years Experience" }, { number: "20+", label: "Projects Completed" }, { number: "10+", label: "Happy Clients" }].map(
                  (item, idx) => (
                    <Box key={idx}>
                      <Typography variant="h3" fontWeight={700} color="primary">
                        {item.number}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.label}
                      </Typography>
                    </Box>
                  )
                )}
              </Box>
            </motion.div>
          </Box>

          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                position: "relative",
                height: "100%",
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
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  background: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h4" color="white" fontWeight={700} sx={{ textAlign: "center", p: 2 }}>
                  Your Portfolio Image Here
                </Typography>
              </Box>

              {/* Decorative elements */}
              <Box
                sx={{
                  position: "absolute",
                  width: "150px",
                  height: "150px",
                  borderRadius: "24px",
                  background: "rgba(236, 72, 153, 0.3)",
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
                  background: "rgba(99, 102, 241, 0.3)",
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

      <Box
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0) 70%)",
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
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, rgba(236, 72, 153, 0) 70%)",
          bottom: "-50px",
          left: "10%",
          zIndex: 0,
        }}
      />
    </Box>
  )
}

export default HeroSection