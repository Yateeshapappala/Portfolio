"use client"

import type React from "react"
import { Card, CardActions, Button, Typography, Stack, Box, Chip } from "@mui/material"
import { motion } from "framer-motion"
import { TechIcon } from "./TechIcons"
import type { FrontendProject } from "./data/projects"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import GitHubIcon from "@mui/icons-material/GitHub"

export const ProjectCard: React.FC<{
  project: FrontendProject
  onViewDetails: () => void
  index: number
}> = ({ project, onViewDetails, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{
      y: -10,
      transition: { duration: 0.3 },
    }}
  >
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "4px",
          background: "linear-gradient(90deg, #6366f1, #ec4899)",
        },
      }}
    >
      <Box sx={{ p: 2, pb: 0 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 1,
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "text.primary",
              mb: 0,
            }}
          >
            {project.title}
          </Typography>
          <Chip
            label={project.techStack[0]}
            size="small"
            sx={{
              background: "linear-gradient(90deg, #6366f1, #ec4899)",
              color: "white",
              fontWeight: 500,
              fontSize: "0.7rem",
            }}
          />
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            lineHeight: 1.6,
            height: "3.2em",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {project.description}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          sx={{
            flexWrap: "wrap",
            gap: 0.5,
            mb: 2,
          }}
        >
          {project.techStack.map((tech) => (
            <motion.div key={tech} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <TechIcon tech={tech} />
            </motion.div>
          ))}
        </Stack>
      </Box>

      <CardActions
        sx={{
          mt: "auto",
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
            color: "#6366f1",
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
              color: "#6366f1",
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
              color: "#6366f1",
            }}
          >
            Code
          </Button>
        </Box>
      </CardActions>
    </Card>
  </motion.div>
)
