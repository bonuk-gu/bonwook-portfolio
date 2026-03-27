"use client";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppTheme from "@/theme/AppTheme";
import Projects from "@/components/Projects";
import Career from "@/components/Career";
import Title from "@/components/Title";
import Skills from "@/components/Skills";

export default function Blog(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Container
        maxWidth="md"
        component="main"
        sx={{ display: "flex", flexDirection: "column", my: 12, gap: 8 }}
      >
        <Title />
        <Projects />
        <Career />
        <Skills />
      </Container>
    </AppTheme>
  );
}
