import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { Card, Divider } from "@mui/material";

export default function Title() {
  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        구본욱 (Bonwook Koo)
      </Typography>
      <Card variant="outlined" sx={{ mt: 2 }}>
        <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
          <Typography
            component="div"
            variant="subtitle2"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <MailOutlineIcon />
            bigticket215@gmail.com
          </Typography>
          <Divider />
          <Typography
            component="div"
            variant="subtitle2"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <PhoneIcon />
            +82 10-3323-5673
          </Typography>
        </Box>

        <Typography variant="body1">
          React / Next.js 프론트엔드와 Node.js / Nest.js 백엔드를 중심으로 5년
          이상 웹 서비스 개발을 수행해온 풀스택 개발자입니다. 소규모 팀 환경에서
          요구사항 정의, 서비스 아키텍처 및 데이터 구조 설계, 인터랙티브 UI
          구현, API 개발, AWS 인프라 구성, 운영 및 유지보수까지 전체 개발
          사이클을 담당해본 경험이 있습니다. 빠른 개발이 요구되는 환경에서
          문제를 스스로 정의하고 해결하며, 구조적인 설계와 안정적인 운영을
          고려한 개발을 지향합니다.
        </Typography>
      </Card>
    </Box>
  );
}
