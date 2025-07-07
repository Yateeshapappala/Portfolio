import { useState } from "react"
import { Container, Typography, Box } from "@mui/material"
import { motion } from "framer-motion"
import { projects, type FrontendProject } from "../components/data/projects"
import ProjectModal from "../components/ProjectModal"
import RadarChart from "../components/RadarChart"
import InteractiveDemo from "../components/InteractiveDemo"
import { ProjectCard } from "../components/ProjectCard"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"

const sectionFadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

type Props = {
  toggleTheme: () => void;
  isDarkMode:boolean;
}

const Home: React.FC<Props>  = ({toggleTheme, isDarkMode}) => {
  const [selectedProject, setSelectedProject] = useState<FrontendProject>(projects[0])
  const [modalOpen, setModalOpen] = useState(false)

  const handleViewDetails = (project: FrontendProject) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  const scrollToId = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
      <HeroSection
        handleViewProjects={() => scrollToId("Projects")}
        handleContact={() => scrollToId("Contact")}
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Projects Section */}
        <Box mb={8} id="Projects">
          <motion.div {...sectionFadeIn}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 4,
                background: "linear-gradient(90deg, #6366f1, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Featured Projects
            </Typography>
          </motion.div>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {projects.map((project, index) => (
              <Box
                key={project.id}
                sx={{
                  flexBasis: { xs: "100%", sm: "48%", md: "30%" },
                  minWidth: "280px",
                }}
              >
                <ProjectCard
                  project={project}
                  onViewDetails={() => handleViewDetails(project)}
                  index={index}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Skills Section */}
        <Box my={8} id="Skills">
          <motion.div {...sectionFadeIn}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 4,
                background: "linear-gradient(90deg, #6366f1, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Technical Skills
            </Typography>
          </motion.div>
          <RadarChart />
        </Box>

        {/* Interactive Components */}
        <Box my={8} id="Demo">
          <motion.div {...sectionFadeIn}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 4,
                background: "linear-gradient(90deg, #6366f1, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Interactive Components
            </Typography>
          </motion.div>
          <InteractiveDemo />
        </Box>

        {/* Contact Section */}
        <Box my={2} id="Contact">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Contact
          </Typography>
          <Typography>
            Feel free to reach out via LinkedIn, GitHub, or email!
          </Typography>
        </Box>
      </Container>

      <ProjectModal open={modalOpen} onClose={() => setModalOpen(false)} project={selectedProject} />
      <Footer />
    </>
  )
}

export default Home
