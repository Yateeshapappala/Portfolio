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
import { Box, Typography, Paper, Chip } from "@mui/material"
import { motion } from "framer-motion"

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const RadarChart: React.FC = () => {
  const labels = ["Python", "React.js", "TensorFlow", "Node.js", "TypeScript", "MongoDB"]
  const data = [90, 85, 80, 75, 80, 70]

  const chartData = {
    labels,
    datasets: [
      {
        label: "Skill Proficiency",
        data,
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        borderColor: "#6366f1",
        borderWidth: 2,
        pointBackgroundColor: "#6366f1",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#6366f1",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  }

  const options = {
    scales: {
      r: {
        angleLines: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        pointLabels: {
          font: {
            size: 12,
            weight: 600,
          },
          color: "#64748b",
        },
        ticks: {
          backdropColor: "transparent",
          color: "#64748b",
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
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        titleColor: "#1e293b",
        bodyColor: "#64748b",
        borderColor: "rgba(0, 0, 0, 0.1)",
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
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          background: "linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(249, 250, 251, 1) 100%)",
        }}
      >

        <Box sx={{ height: 400, maxWidth: 600, mx: "auto" }}>
          <Radar data={chartData} options={options} />
        </Box>

        {/* Additional Skills */}
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
                  backgroundColor: "rgba(99, 102, 241, 0.1)",
                  color: "#6366f1",
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
