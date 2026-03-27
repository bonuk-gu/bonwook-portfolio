import Link from "next/link";

export default function WearAgain() {
  return (
    <div>
      <span>담당 역할</span>
      <ul>
        <li>서비스 요구사항 분석 및 전체 시스템 구조 설계 참여</li>
        <li>Web / Mobile / Backend 간 데이터 구조 및 API 설계</li>
        <li>일부 웹 & 모바일 기능 및 API 개발</li>
        <li>AWS EC2 기반 서버 및 데이터베이스 환경 구성 참여</li>
      </ul>
      <span>기술 스택</span>
      <ul>
        <li>Frontend: React, Next.js, React Native(Expo)</li>
        <li>Backend: Nest.js</li>
        <li>Database: MySQL, TypeORM</li>
        <li>Infra: AWS EC2, pm2</li>
        <li>Others: Docker</li>
      </ul>
      <span>주요 구현 내용</span>
      <ul>
        <li>의류 교환 행사 운영을 위한 Web / Mobile 통합 플랫폼 개발</li>
        <li>사용자, 의류, 티켓, 행사 정보를 관리하는 데이터베이스 구조 설계</li>
        <li>관리자 웹에서 의류 등록, 사용자 관리, 행사 관리 기능 개발</li>
        <li>
          React Native 기반 모바일 앱 일부 기능 개발 (QR 스캔, 사용자 화면 등)
        </li>
        <li>AWS EC2 기반 서버 환경 구성 및 서비스 배포</li>
      </ul>
      <span>기술적 도전</span>
      <ul>
        <li>
          Mobile / Web / Server가 동시에 개발되는 환경에서 코드 중복과 의존성
          관리 문제를 줄이기 위해 Monorepo 구조를 설계함
        </li>
        <li>
          개발자별 로컬 환경 차이로 인해 발생하는 DB 설정 문제를 해결하기 위해
          Docker 기반 MySQL 실행 환경을 구성하여 개발 환경 재현성을 확보함
        </li>
        <li>
          협업 과정에서 발생하는 DB 스키마 충돌 문제를 방지하기 위해 Migration
          기반 데이터베이스 버전 관리 체계를 구축함
        </li>
        <li>
          Web / Mobile / Backend 간 공통 데이터 구조를 정의하여 API 변경 시
          발생하는 오류를 줄이고 개발 효율을 개선함
        </li>
      </ul>
    </div>
  );
}
