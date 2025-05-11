import type React from "react"
import { useState } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Slide,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import { motion } from "framer-motion"

interface NavbarProps {
  window?: () => Window
}

const navItems = ["Projects", "Skills", "Demo", "Contact"]

const NavBar: React.FC<NavbarProps> = ({ window }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setMobileOpen(false)
    }
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Portfolio
        </Typography>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} onClick={() => handleNavClick(item)}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #6366f1, #ec4899)",
                "&:hover": {
                  background: "linear-gradient(90deg, #4f46e5, #db2777)",
                },
                width: "100%",
              }}
            >
              Resume
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
        <IconButton color="primary"><GitHubIcon /></IconButton>
        <IconButton color="primary"><LinkedInIcon /></IconButton>
        <IconButton color="primary"><EmailIcon /></IconButton>
      </Box>
    </Box>
  )

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "rgba(255, 255, 255, 0.9)", backdropFilter: "blur(10px)" }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                {/* Mobile menu icon */}
                <Box sx={{ display: { xs: "flex", sm: "none" } }}>
                  <IconButton onClick={handleDrawerToggle}>
                    <MenuIcon />
                  </IconButton>
                </Box>

                {/* Branding */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    background: "linear-gradient(90deg, #6366f1, #ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  Yateesh Portfolio
                </Typography>

                {/* Desktop nav items */}
                <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 3 }}>
                  {navItems.map((item, i) => (
                    <motion.div key={item} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                      <Button onClick={() => handleNavClick(item)} sx={{ fontWeight: 500 }}>{item}</Button>
                    </motion.div>
                  ))}
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                    <Button
                      variant="contained"
                      component="a"
                      href="https://drive.google.com/file/d/1uVjXgZCgrcDFn3sEIvWlxgIVnRA8muSG/view?usp=sharing"
                      target="_blank"
                      sx={{
                        background: "linear-gradient(90deg, #6366f1, #ec4899)",
                        "&:hover": {
                          background: "linear-gradient(90deg, #4f46e5, #db2777)",
                        },
                      }}
                    >
                      Resume
                    </Button>
                  </motion.div>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      <Toolbar />
    </>
  )
}

export default NavBar
