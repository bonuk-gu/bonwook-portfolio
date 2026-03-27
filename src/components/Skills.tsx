import { Box, Grid, Typography } from "@mui/material";
import SkillCard from "./SkillCard";

const skillData = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "MUI"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Nest.js", "MySQL", "TypeORM"],
  },
  {
    title: "Infra",
    items: ["AWS", "Docker", "Linux", "Nginx"],
  },
  {
    title: "Tools",
    items: ["Git", "Github", "Jira"],
  },
  {
    title: "Others",
    items: ["Python", "FFmpeg"],
  },
];

export default function Skills() {
  return (
    <Box>
      <Typography variant="h3">Skills</Typography>
      <Grid container mt={2} spacing={2} columns={12} alignItems="stretch">
        {skillData.map((skill, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }}>
            <SkillCard title={skill.title} items={skill.items} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
