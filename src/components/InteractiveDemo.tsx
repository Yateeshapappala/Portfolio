"use client"

import type React from "react"
import { useState } from "react"
import { Button, Box, Paper, Typography, Tabs, Tab, Divider } from "@mui/material"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { motion, AnimatePresence } from "framer-motion"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"

const InteractiveDemo: React.FC = () => {
  const [showCode, setShowCode] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
  }

  const buttonCode = `
import { Button } from '@mui/material';

const GradientButton = () => (
  <Button 
    variant="contained" 
    sx={{ 
      background: 'linear-gradient(90deg, #6366f1, #ec4899)',
      '&:hover': {
        background: 'linear-gradient(90deg, #4f46e5, #db2777)',
      }
    }}
  >
    Click Me
  </Button>
);
  `

  const cardCode = `
import { Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const AnimatedCard = () => (
  <motion.div
    whileHover={{ y: -10 }}
    transition={{ duration: 0.3 }}
  >
    <Card 
      sx={{ 
        borderRadius: 4,
        overflow: 'hidden',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '4px',
          background: 'linear-gradient(90deg, #6366f1, #ec4899)',
        }
      }}
    >
      <CardContent>
        <Typography variant="h6">
          Animated Card
        </Typography>
      </CardContent>
    </Card>
  </motion.div>
);
  `

  const tabContent = [
    {
      title: "Gradient Button",
      code: buttonCode,
      component: (
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #6366f1, #ec4899)",
            "&:hover": {
              background: "linear-gradient(90deg, #4f46e5, #db2777)",
            },
          }}
        >
          Click Me
        </Button>
      ),
    },
    {
      title: "Animated Card",
      code: cardCode,
      component: (
        <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 4,
              overflow: "hidden",
              position: "relative",
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
            <Typography variant="h6">Animated Card</Typography>
          </Paper>
        </motion.div>
      ),
    },
  ]

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
      >
        <Box sx={{ p: 3, backgroundColor: "#f8fafc" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography variant="h6" fontWeight={600}>
              Interactive Component Demo
            </Typography>
            <Button
              variant="outlined"
              size="small"
              startIcon={showCode ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
              onClick={() => setShowCode(!showCode)}
              sx={{
                borderColor: "#6366f1",
                color: "#6366f1",
                "&:hover": {
                  borderColor: "#4f46e5",
                  backgroundColor: "rgba(99, 102, 241, 0.04)",
                },
              }}
            >
              {showCode ? "Hide Code" : "Show Code"}
            </Button>
          </Box>

          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#6366f1",
              },
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 500,
                "&.Mui-selected": {
                  color: "#6366f1",
                  fontWeight: 600,
                },
              },
            }}
          >
            {tabContent.map((tab, index) => (
              <Tab key={index} label={tab.title} />
            ))}
          </Tabs>
        </Box>

        <Divider />

        <Box sx={{ p: 4, display: "flex", justifyContent: "center", backgroundColor: "white" }}>
          {tabContent[activeTab].component}
        </Box>

        <AnimatePresence>
          {showCode && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Divider />
              <Box sx={{ p: 0 }}>
                <SyntaxHighlighter
                  language="tsx"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: "0 0 16px 16px",
                    maxHeight: "400px",
                  }}
                >
                  {tabContent[activeTab].code}
                </SyntaxHighlighter>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Paper>
    </motion.div>
  )
}

export default InteractiveDemo
