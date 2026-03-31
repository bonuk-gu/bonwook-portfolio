"use client";

import { useState } from "react";

import ProjectCard from "./ProjectCard";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const projectContents = [
  {
    id: "dubright",
    img: "/images/dubright01.jpg",
    type: "웹 플랫폼",
    title: "Dubright",
    description:
      "웹툰과 성우 더빙을 결합한 새로운 콘텐츠 형식 ‘보이스툰’을 제작하기 위해 개발된 웹 플랫폼입니다. 이미지, 오디오, 스크립트가 시간 축 기반으로 정밀하게 동기화되어야 하는 제작 환경을 제공하기 위해, 브라우저 상에서 웹툰 스크롤과 더빙 타이밍을 함께 편집할 수 있는 인터랙티브 제작 도구 형태로 설계되었습니다. 연출 단계에서는 웹툰 이미지의 자동 스크롤과 대사 타이밍을 통합적으로 편집할 수 있는 ‘연출 화면’을 제공하고, 성우는 ‘더빙 화면’에서 배역을 선택해 대사 단위 녹음을 진행하며, 연출가는 ‘검수 화면’에서 다양한 더빙 결과를 비교·적용하고 오디오 효과를 추가할 수 있습니다.",
  },
  {
    id: "kstorage",
    img: "/images/kstorage-main.jpg",
    type: "클라우드 스토리지 서비스",
    title: "KStorage",
    description:
      "파일 업로드, 탐색, 공유 기능을 제공하는 웹 기반 클라우드 스토리지 서비스입니다. 폴더 단위 업로드, 경로 기반 파일 탐색, 사용자 간 공유 기능을 포함한 파일 관리 시스템을 구현하였으며, AWS S3 기반 저장 구조, WebSocket 업로드 처리, 메타데이터 동기화 로직 등을 설계하여 웹 환경에서 파일을 안정적으로 관리할 수 있도록 개발하였습니다.",
  },
  {
    id: "wearagain",
    img: "/images/wearagain-main.png",
    type: "모바일&웹 플랫폼",
    title: "WearAgain",
    description:
      "사회적 임팩트 기업 ‘다시입다연구소’의 의류 순환 활동을 디지털화하기 위해 개발된 모바일·웹 통합 플랫폼입니다. 오프라인 중심으로 운영되던 의류 교환 행사의 참여자, 의류, 티켓, 이벤트 정보를 효율적으로 관리하고, 지속적인 커뮤니티 참여를 유도하기 위한 서비스로 기획되었습니다. 사용자, 의류, 이벤트 간의 관계를 중심으로 데이터 구조를 설계하고, 이를 기반으로 Web / Mobile / Backend가 유기적으로 연결되는 구조를 구현했습니다. Monorepo 구조와 마이그레이션 기반 DB 관리 방식을 도입하여 협업 환경에서도 데이터 구조의 일관성과 개발 생산성을 유지할 수 있도록 했습니다.",
  },
];

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box mb={2}>
        <Typography variant="h3" gutterBottom>
          Main Projects
        </Typography>
      </Box>
      <Grid container spacing={2} columns={12} alignItems="flex-start">
        {projectContents.map((project) => {
          const isExpanded = expandedProject === project.id;
          const isHidden = expandedProject && !isExpanded;

          return (
            <Grid
              key={project.id}
              size={{
                xs: 12,
                md: expandedProject ? (isExpanded ? 12 : 4) : 4,
              }}
              sx={{
                transition: "all 0.3s ease",
                display: isHidden ? "none" : "flex",
                pointerEvents: isHidden ? "none" : "auto",
              }}
            >
              <ProjectCard
                {...project}
                expanded={isExpanded}
                onToggle={() =>
                  setExpandedProject(isExpanded ? null : project.id)
                }
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
