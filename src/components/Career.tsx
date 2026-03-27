import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

const articleInfo = [
  {
    tag: "Full-stack developer / CEO",
    title: "(주)패턴테크",
    description:
      "스타트업 초기 멤버로 합류해 웹 서비스 설계 및 개발을 담당했으며, 이후 대표 역할을 맡아 조직 운영을 수행했습니다. 서비스 아키텍처 설계, 주요 기능 개발, AWS 인프라 구축 및 운영 등 기술 전반에 참여하며 여러 웹 서비스를 기획부터 개발, 배포, 운영까지 직접 진행했습니다. 또한 정부 R&D 과제의 참여연구자/연구책임자로 참여하여 AI 및 웹 기반 시스템 개발을 수행하고, 사업 수행 전반을 총괄했습니다.",
    projects: [
      {
        type: "Project",
        title: "Dubright: 웹툰 + 더빙 콘텐츠 제작 및 관리 플랫폼 개발",
      },
      {
        type: "Project",
        title: "KStorage: 웹 기반 클라우드 스토리지 서비스 개발",
      },
      {
        type: "Project",
        title: "WearAgain: 의류 교환 활동을 위한 모바일·웹 플랫폼 개발",
      },
      {
        type: "Project",
        title: "스마트시티 표준 라이브러리 포털 및 툴킷 개발(국토교통부)",
      },
      {
        type: "Project",
        title:
          "산림 치유 코스 추천 알고리즘 및 서비스 어플리케이션(모바일 웹앱) 개발",
      },
      {
        type: "rnd",
        title:
          '"AI 분석 알고리즘을 활용한 침입자 분석, 실별, 대응하는 물리보안 시스템" (중소벤처기업부)',
      },
      {
        type: "rnd",
        title:
          '"디지털 콘텐츠 보호 및 관리를 위한 지능형 이미지 워터마킹 기반 브라우저 익스텐션 개발" (중소벤처기업부)',
      },
      {
        type: "rnd",
        title:
          '"MLOps/AI Multi Agent 기반 영상 콘텐츠 하이라이트 자동 생성 SW 개발" (중소벤처기업부)',
      },
    ],
    date: "2020.08 - 2026.02",
  },
  {
    tag: "인턴",
    title: "한국아이티사업단(주)",
    description:
      "IT 분야로의 진로 전환을 준비하며 수행한 인턴십으로, LoRa(Long Range) 기반 저전력 통신 시스템 개발 프로젝트에 참여하여 개발 보조 업무를 수행하였습니다. 해당 기간 동안 독학을 통해 컴퓨터 프로그래밍에 대한 기초 지식과 웹개발 역량을 익혔습니다.",
    projects: [
      { type: "rnd", title: "LoRa(Long Range) 기반 저전력 통신 시스템 개발" },
    ],
    date: "2019.07 - 2020.01",
  },
];

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",

  overflow: "hidden",
  textOverflow: "ellipsis",
});

// function Projects({
//   projects,
// }: {
//   projects: { type: string; title: string }[];
// }) {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "row",
//         gap: 2,
//         alignItems: "center",
//         justifyContent: "space-between",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//         }}
//       >
//         <ul>
//           {projects.map((project, index) => (
//             <li key={index}>
//               {project.type} : {project.title}
//             </li>
//           ))}
//         </ul>
//       </Box>
//     </Box>
//   );
// }

function Projects({
  projects,
}: {
  projects: { type: string; title: string }[];
  // projects: { category: string; title: string; summary: string }[];
}) {
  const serviceProjects = projects.filter(
    (project) => project.type === "Project",
  );
  const rndProjects = projects.filter((project) => project.type === "rnd");

  const renderProjectGroup = (
    label: string,
    // items: { category: string; title: string; summary: string }[]
    items: { type: string; title: string }[],
  ) => {
    if (items.length === 0) return null;

    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="subtitle2" color="text.secondary">
          {label}
        </Typography>

        <Box
          component="ul"
          sx={{
            m: 0,
            pl: 2,
            display: "flex",
            flexDirection: "column",
            gap: 0.75,
          }}
        >
          {items.map((item, index) => (
            <Box component="li" key={index}>
              <Typography variant="body2">
                <Box component="span" sx={{ fontWeight: 500 }}>
                  {item.title}
                </Box>
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    );
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1, pl: 1 }}
    >
      {renderProjectGroup("Service / Product", serviceProjects)}
      {renderProjectGroup("R&D", rndProjects)}
    </Box>
  );
}

export default function Career() {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Career & Experience
      </Typography>
      <Card variant="outlined" sx={{ mt: 2 }}>
        <Grid container spacing={6} columns={12}>
          {articleInfo.map((article, index) => (
            <Grid key={index} size={{ xs: 12 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 0.5,
                  height: "100%",
                }}
              >
                <Typography gutterBottom component="div">
                  {article.tag}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6">{article.title}</Typography>
                  <Typography variant="subtitle2">{article.date}</Typography>
                </Box>
                <StyledTypography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                >
                  {article.description}
                </StyledTypography>

                <Projects projects={article.projects} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  );
}
