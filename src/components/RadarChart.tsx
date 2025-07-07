"use client"

import type React from "react"
import { Radar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js"
import { Box, Typography, Paper, Chip, useTheme } from "@mui/material"
import { motion } from "framer-motion"

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const RadarChart: React.FC = () => {
  const theme = useTheme()
  const isDark = theme.palette.mode === "dark"

  const labels = ["Python", "React.js", "TensorFlow", "Node.js", "TypeScript", "MongoDB"]
  const data = [90, 85, 80, 75, 80, 70]

  const chartData = {
    labels,
    datasets: [
      {
        label: "Skill Proficiency",
        data,
        backgroundColor: isDark ? "rgba(99, 102, 241, 0.2)" : "rgba(99, 102, 241, 0.2)",
        borderColor: theme.palette.primary.main,
        borderWidth: 2,
        pointBackgroundColor: theme.palette.primary.main,
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: theme.palette.primary.main,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  }

  const options = {
    scales: {
      r: {
        angleLines: {
          color: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
        },
        grid: {
          color: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
        },
        pointLabels: {
          font: {
            size: 12,
            weight: 600,
          },
          color: theme.palette.text.secondary,
        },
        ticks: {
          backdropColor: "transparent",
          color: theme.palette.text.secondary,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: isDark ? "#1e293b" : "rgba(255, 255, 255, 0.9)",
        titleColor: isDark ? "#f8fafc" : "#1e293b",
        bodyColor: isDark ? "#cbd5e1" : "#64748b",
        borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        callbacks: {
          label: (context: any) => `${context.label}: ${context.raw}%`,
        },
      },
    },
  }

  const additionalSkills = [
    "C++", "Java", "HTML", "CSS", "Express.js", "Django",
    "Scikit-learn", "Keras", "SQL", "Git", "Postman", "LeetCode"
  ]

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: 4,
          boxShadow: theme.shadows[4],
          background: isDark
            ? "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
        }}
      >
        <Box sx={{ height: 400, maxWidth: 600, mx: "auto" }}>
          <Radar data={chartData} options={options} />
        </Box>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="subtitle1" fontWeight={600}>
            Also Familiar With
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1, mt: 1 }}>
            {additionalSkills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                size="small"
                sx={{
                  backgroundColor: isDark
                    ? "rgba(99, 102, 241, 0.15)"
                    : "rgba(99, 102, 241, 0.1)",
                  color: theme.palette.primary.main,
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>
        </Box>
      </Paper>
    </motion.div>
  )
}

export default RadarChart
