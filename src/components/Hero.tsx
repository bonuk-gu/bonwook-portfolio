// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";

// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import PhoneIcon from "@mui/icons-material/Phone";
// import { Card, Divider } from "@mui/material";

// export default function Hero() {
//   return (
//     <Box>
//       <Typography variant="h2" gutterBottom>
//         구본욱 (Bonwook Koo)
//       </Typography>
//       <Card variant="outlined" sx={{ mt: 2 }}>
//         <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
//           <Typography
//             component="div"
//             variant="subtitle2"
//             sx={{ display: "flex", alignItems: "center", gap: 1 }}
//           >
//             <MailOutlineIcon />
//             bigticket215@gmail.com
//           </Typography>
//           <Divider />
//           <Typography
//             component="div"
//             variant="subtitle2"
//             sx={{ display: "flex", alignItems: "center", gap: 1 }}
//           >
//             <PhoneIcon />
//             +82 10-3323-5673
//           </Typography>
//         </Box>

//         <Typography variant="body1">
//           React / Next.js 프론트엔드와 Node.js / Nest.js 백엔드를 중심으로 5년
//           이상 웹 서비스 개발을 수행해온 풀스택 개발자입니다. 소규모 팀 환경에서
//           요구사항 정의, 서비스 아키텍처 및 데이터 구조 설계, 인터랙티브 UI
//           구현, API 개발, AWS 인프라 구성, 운영 및 유지보수까지 전체 개발
//           사이클을 담당해본 경험이 있습니다. 빠른 개발이 요구되는 환경에서
//           문제를 스스로 정의하고 해결하며, 구조적인 설계와 안정적인 운영을
//           고려한 개발을 지향합니다.
//         </Typography>
//       </Card>
//     </Box>
//   );
// }

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

const highlights = [
  "TypeScript",
  "React / Next.js",
  "Node.js / Nest.js",
  "AWS / Docker",
];

export default function Hero() {
  return (
    <Box component="section">
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
        }}
      >
        구본욱 (Koo Bonwook)
      </Typography>
      <Card variant="outlined" sx={{ mt: 4 }}>
        <Stack spacing={3}>
          <Box>
            <Typography
              variant="h5"
              sx={{
                mt: 1,
                fontWeight: 700,
                lineHeight: 1.4,
              }}
            >
              제품 설계부터 개발, 배포, 운영까지 경험한 풀스택 개발자
            </Typography>
          </Box>

          <Stack direction="row" flexWrap="wrap" gap={1}>
            {highlights.map((item) => (
              <Chip key={item} label={item} size="small" />
            ))}
          </Stack>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 920,
              lineHeight: 1.8,
              wordBreak: "keep-all",
            }}
          >
            스타트업 초기 멤버로 합류해 고객미팅, 요구사항 정의, 서비스
            설계-개발-배포-운영까지 전 과정을 수행해 온 풀스택 개발자입니다.
            <br />
            React / Next.js와 Node.js / Nest.js를 중심으로 복잡한 인터랙티브
            UI와 서비스 구조를 설계하고 구현해왔습니다.
            <br />
            빠른 개발이 요구되는 환경에서도 구조적인 설계를 통해 복잡한 기능을
            안정적으로 구현하는 것을 강점으로 합니다.
          </Typography>

          <Divider />

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1.5, sm: 3 }}
            useFlexGap
            flexWrap="wrap"
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <MailOutlineIcon fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                bigticket215@gmail.com
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneIcon fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                +82 10-3323-5673
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
}
