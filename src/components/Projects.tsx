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
      "웹툰과 성우들의 보이스가 결합된 새로운 형태의 콘텐츠 '보이스툰'의 제작 및 관리를 위한 웹 플랫폼. 웹툰 화면의 자동 스크롤과 성우들의 더빙 타이밍, 스크립트를 편집할 수 있는 ‘연출화면’, 성우들이 배역을 선택하여 더빙을 진행할 수 있는 ‘더빙화면’, 연출가들이 더빙 내역을 검수하고 다양한 오디오 이펙트를 적용 수 있는 더빙 ‘검수화면’, 완성된 콘텐츠를 재생할 수 있는 ‘플레이어’ 등으로 구성",
  },
  {
    id: "kstorage",
    img: "/images/kstorage-main.jpg",
    type: "클라우드 스토리지 서비스",
    title: "KStorage",
    description:
      "파일 업로드, 탐색, 공유 기능을 제공하는 웹 기반 클라우드 스토리지 서비스. 폴더 단위 업로드, 경로 기반 파일 탐색, 사용자 간 공유 기능을 포함한 파일 관리 시스템을 구현하였으며, AWS S3 기반 저장 구조, WebSocket 업로드 처리, 메타데이터 동기화 로직 등을 설계하여 웹 환경에서 파일을 안정적으로 관리할 수 있도록 개발.",
  },
  {
    id: "wearagain",
    img: "/images/wearagain-main.png",
    type: "모바일&웹 플랫폼",
    title: "WearAgain",
    description:
      "의류 교환 행사 운영을 지원하기 위해 개발된 모바일·웹 통합 플랫폼. 사용자, 의류, 이벤트, 운영 기능을 하나의 시스템으로 관리할 수 있도록 Web / Mobile / Backend 구조를 설계하고 구현했으며, 실제 서비스 운영이 가능한 구조를 목표로 개발. 협업 개발과 운영 환경을 고려하여 프로젝트 구조와 개발 환경을 함께 설계.",
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
