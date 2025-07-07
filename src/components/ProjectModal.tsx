"use client"

import type React from "react"
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  Stack,
  Box,
  Chip,
  IconButton,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import GitHubIcon from "@mui/icons-material/GitHub"
import { motion, AnimatePresence } from "framer-motion"
import type { FrontendProject } from "./data/projects"

const ProjectModal: React.FC<{
  open: boolean
  onClose: () => void
  project: FrontendProject
}> = ({ open, onClose, project }) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"))
  const isDarkMode = theme.palette.mode === "dark"

  return (
    <AnimatePresence>
      {open && (
        <Dialog
          open={open}
          onClose={onClose}
          fullScreen={fullScreen}
          scroll="body"
          PaperProps={{
            sx: {
              maxWidth: 800,
              width: "100%",
              m: 2,
              borderRadius: 3,
              overflow: "hidden",
              backgroundColor: theme.palette.background.paper,
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Top Header with Gradient */}
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  height: "120px",
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  position: "relative",
                }}
              >
                <IconButton
                  onClick={onClose}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: theme.palette.common.white,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              {/* Modal Card */}
              <Box
                sx={{
                  position: "relative",
                  mt: -6,
                  mx: 3,
                  p: 3,
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: 3,
                  boxShadow: theme.shadows[4],
                }}
              >
                <DialogTitle sx={{ p: 0, mb: 2 }}>
                  <Typography variant="h5" fontWeight={700}>
                    {project.title}
                  </Typography>
                </DialogTitle>

                <DialogContent
                  sx={{
                    p: 0,
                    maxHeight: fullScreen ? "calc(100vh - 180px)" : 600,
                    overflowY: "auto",
                  }}
                >
                  <Box sx={{ px: 3, pb: 3 }}>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {project.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                        Technologies
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                        {project.techStack.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: theme.palette.primary[isDarkMode ? "dark" : "light"],
                              color: theme.palette.primary.main,
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                        Key Features
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                        {project.features.map((feature) => (
                          <Box
                            component="li"
                            key={feature}
                            sx={{ mb: 1, color: theme.palette.text.secondary }}
                          >
                            <Typography variant="body2">{feature}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>

                    <Box>
                      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                        Challenges & Solutions
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                        {project.challenges.map((challenge) => (
                          <Box
                            component="li"
                            key={challenge}
                            sx={{ mb: 1, color: theme.palette.text.secondary }}
                          >
                            <Typography variant="body2">{challenge}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>

                  {project.screenshots?.[0] && (
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        sx={{ mb: 2, textAlign: "center" }}
                      >
                        Project Preview
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          borderRadius: 3,
                          overflow: "hidden",
                          mx: "auto",
                          maxWidth: "100%",
                          border: `1px solid ${theme.palette.divider}`,
                          boxShadow: theme.shadows[3],
                          transition: "transform 0.3s ease-in-out",
                          "&:hover img": {
                            transform: "scale(1.03)",
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={project.screenshots[0]}
                          alt={`${project.title} screenshot`}
                          sx={{
                            width: "100%",
                            maxHeight: 300,
                            objectFit: "cover",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      </Box>
                    </Box>
                  )}
                </DialogContent>
              </Box>
            </Box>

            {/* Bottom Actions */}
            <DialogActions sx={{ p: 3, pt: 0 }}>
              <Button
                onClick={onClose}
                variant="outlined"
                sx={{
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  "&:hover": {
                    borderColor: theme.palette.primary.dark,
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                Close
              </Button>
              <Button
                href={project.liveDemoUrl}
                target="_blank"
                variant="contained"
                startIcon={<OpenInNewIcon fontSize="small" />}
                sx={{
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  "&:hover": {
                    background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                  },
                }}
              >
                Live Demo
              </Button>
              <Button
                href={project.githubUrl}
                target="_blank"
                variant="contained"
                startIcon={<GitHubIcon fontSize="small" />}
                sx={{
                  background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.error.main})`,
                  "&:hover": {
                    background: `linear-gradient(90deg, ${theme.palette.secondary.dark}, ${theme.palette.error.dark})`,
                  },
                }}
              >
                View on GitHub
              </Button>
            </DialogActions>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
