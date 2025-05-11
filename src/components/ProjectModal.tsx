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
import type { FrontendProject } from "./data/projects"
import CloseIcon from "@mui/icons-material/Close"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import GitHubIcon from "@mui/icons-material/GitHub"
import { motion, AnimatePresence } from "framer-motion"

const ProjectModal: React.FC<{
  open: boolean
  onClose: () => void
  project: FrontendProject
}> = ({ open, onClose, project }) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <AnimatePresence>
      {open && (
        <Dialog
          open={open}
          onClose={onClose}
          fullScreen={fullScreen}
          slotProps={{
            paper: {
              style: {
                borderRadius: 16,
                overflow: "hidden",
                maxWidth: "800px",
              },
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  height: "120px",
                  background: "linear-gradient(135deg, #6366f1, #ec4899)",
                  position: "relative",
                }}
              >
                <IconButton
                  onClick={onClose}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  mt: -6,
                  mx: 3,
                  p: 3,
                  backgroundColor: "white",
                  borderRadius: 3,
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
              >
                <DialogTitle sx={{ p: 0, mb: 2 }}>
                  <Typography variant="h5" fontWeight={700}>
                    {project.title}
                  </Typography>
                </DialogTitle>

                <DialogContent sx={{ p: 0 }}>
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
                            backgroundColor: "rgba(99, 102, 241, 0.1)",
                            color: "#6366f1",
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
                          sx={{
                            mb: 1,
                            color: "text.secondary",
                          }}
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
                          sx={{
                            mb: 1,
                            color: "text.secondary",
                          }}
                        >
                          <Typography variant="body2">{challenge}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </DialogContent>
              </Box>
            </Box>

            <DialogActions sx={{ p: 3, pt: 0 }}>
              <Button
                onClick={onClose}
                variant="outlined"
                sx={{
                  borderColor: "#6366f1",
                  color: "#6366f1",
                  "&:hover": {
                    borderColor: "#4f46e5",
                    backgroundColor: "rgba(99, 102, 241, 0.04)",
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
                  background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                  "&:hover": {
                    background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
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
                  background: "linear-gradient(90deg, #8b5cf6, #ec4899)",
                  "&:hover": {
                    background: "linear-gradient(90deg, #7c3aed, #db2777)",
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
