"use client"

import type React from "react"
import {
  Card,
  CardActions,
  Button,
  Typography,
  Stack,
  Box,
  Chip,
  useTheme,
} from "@mui/material"
import { motion } from "framer-motion"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import GitHubIcon from "@mui/icons-material/GitHub"
import type { FrontendProject } from "./data/projects"

export const ProjectCard: React.FC<{
  project: FrontendProject
  onViewDetails: () => void
  index: number
}> = ({ project, onViewDetails, index }) => {
  const theme = useTheme()
  const gradient = "linear-gradient(90deg, #6366f1, #ec4899)" // You can also move this to theme if reused elsewhere

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
          backgroundColor: theme.palette.background.paper,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background: gradient,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, mb: 1, color: "text.primary" }}
          >
            {project.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2, lineHeight: 1.6 }}
          >
            {project.description}
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap" gap={0.5} mb={2}>
            {project.techStack.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  background: gradient,
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "0.7rem",
                }}
              />
            ))}
          </Stack>
        </Box>

        <CardActions
          sx={{
            p: 2,
            pt: 0,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            size="small"
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<OpenInNewIcon fontSize="small" />}
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.main,
            }}
          >
            Live Demo
          </Button>
          <Box>
            <Button
              size="small"
              onClick={onViewDetails}
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
              }}
            >
              Details
            </Button>
            <Button
              size="small"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon fontSize="small" />}
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
              }}
            >
              Code
            </Button>
          </Box>
        </CardActions>
      </Card>
    </motion.div>
  )
}
