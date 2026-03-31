import Link from "next/link";

export default function KStorage() {
  return (
    <div>
      <p>
        <Link href={"https://kstorage-demo.vercel.app/"} target="_blank">
          [KStorage 데모 바로가기]
        </Link>{" "}
        ID: admin@test.co.kr / PW: test12!@
      </p>
      <span>담당 역할</span>
      <ul>
        <li>서비스 전체 구조 설계 및 Full-stack 개발(단독 개발)</li>
        <li>웹 UI, 백엔드 서버, 데이터베이스 구조 설계 및 구현</li>
        <li>AWS 기반 서버 환경 구성 및 배포/운영 관리</li>
      </ul>
      <span>주요 구현 내용</span>
      <ul>
        <li>AWS S3 기반 파일 저장 구조를 사용하는 웹 스토리지 서비스 구현</li>
        <li>
          파일/폴더 생성, 이동, 삭제, 복원 기능을 포함한 파일 관리 시스템 구현
        </li>
        <li>사용자 그룹 기반 파일 공유 및 알림 기능 구현</li>
        <li>파일 탐색 UI 및 경로 기반 탐색 구조 구현</li>
        <li>파일 메타데이터 관리 및 DB 연동 구조 설계</li>
        <li>문서 파일 텍스트 추출 및 요약 기능 구현</li>
      </ul>
      <span>기술적 도전</span>
      <ul>
        <li>복수 파일 및 폴더 단위 업로드 기능 구현(중첩 폴더 구조 처리)</li>
        <li>
          폴더 내부를 재귀적으로 탐색하여 relative path 기반 메타데이터 생성 및
          경로 유지 업로드 로직 설계
        </li>
        <li>
          WebSocket 기반 파일 업로드 시스템 구현 및 실시간 progress UI 연동
        </li>
        <li>
          대량 파일 업로드 환경에서 업로드 순서 및 상태 동기화를 위한 큐 관리
          로직 구현
        </li>
        <li>중첩 디렉토리 구조 탐색 및 breadcrumbs 기반 경로 탐색 UI 구현</li>
        <li>AWS EC2 서버와 AWS S3 저장소를 분리한 스토리지 아키텍처 설계</li>
        <li>
          relative path 기반 S3 object key 생성 및 DB 메타데이터 동기화 로직
          구현
        </li>
        <li>
          사용자 간 파일/폴더 공유 기능을 위한 공유 테이블 설계 및 알림 표시
          기능 구현
        </li>
        <li>
          문서 파일(txt, doc, pdf) 텍스트 추출 및 AI API 기반 요약 기능 구현
        </li>
      </ul>
      <span>기술 스택</span>
      <ul>
        <li>Frontend: React, Next.js</li>
        <li>Backend: Node.js, Nest.js</li>
        <li>Database: MySQL</li>
        <li>Infra: AWS(EC2, S3), pm2</li>
        <li>Others: Websocket</li>
      </ul>
    </div>
  );
}
