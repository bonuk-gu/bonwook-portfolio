import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function SkillCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography variant="subtitle2" gutterBottom>
          {title}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {items.map((item, index) => (
            <Chip key={index} label={item} size="small" />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
