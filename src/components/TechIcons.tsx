import type React from "react"
import { Tooltip, Box } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import CodeIcon from "@mui/icons-material/Code"
import DataObjectIcon from "@mui/icons-material/DataObject"
import LayersIcon from "@mui/icons-material/Layers"
import StorageIcon from "@mui/icons-material/Storage"
import GridViewIcon from "@mui/icons-material/GridView"
import PaletteIcon from "@mui/icons-material/Palette"
import MemoryIcon from "@mui/icons-material/Memory"

export const TechIcon: React.FC<{ tech: string }> = ({ tech }) => {
  const getIcon = () => {
    switch (tech) {
      case "GitHub":
        return <GitHubIcon fontSize="small" />
      case "React":
        return <LayersIcon fontSize="small" sx={{ color: "#61DAFB" }} />
      case "TypeScript":
        return <DataObjectIcon fontSize="small" sx={{ color: "#3178C6" }} />
      case "JavaScript":
        return <DataObjectIcon fontSize="small" sx={{ color: "#F7DF1E" }} />
      case "MUI":
        return <PaletteIcon fontSize="small" sx={{ color: "#007FFF" }} />
      case "Redux":
        return <StorageIcon fontSize="small" sx={{ color: "#764ABC" }} />
      case "Node.js":
        return <MemoryIcon fontSize="small" sx={{ color: "#339933" }} />
      case "Express":
        return <GridViewIcon fontSize="small" sx={{ color: "#000000" }} />
      case "MongoDB":
        return <StorageIcon fontSize="small" sx={{ color: "#47A248" }} />
      case "CSS":
        return <PaletteIcon fontSize="small" sx={{ color: "#1572B6" }} />
      default:
        return <CodeIcon fontSize="small" />
    }
  }

  return (
    <Tooltip title={tech}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 0.5,
          borderRadius: 1,
          backgroundColor: "rgba(99, 102, 241, 0.1)",
          color: "#6366f1",
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "rgba(99, 102, 241, 0.2)",
          },
        }}
      >
        {getIcon()}
      </Box>
    </Tooltip>
  )
}
