import Link from "next/link";

export default function Dubright() {
  return (
    <div>
      <span>담당 역할</span>
      <ul>
        <li>클라이언트 요구사항 분석 및 개발 범위, 일정 조율</li>
        <li>
          핵심 작업 화면(UI) 및 백엔드 API 설계/구현 등 Full-stack 개발 수행
        </li>
        <li>AWS 기반 서버 및 데이터베이스 환경 구성 및 배포 환경 구축</li>
        <li>
          1차 배포 이후 오류 대응, 기능 개선, 추가 요구사항 반영 등 운영 및
          유지보수 수행
        </li>
      </ul>
      <span>기술 스택</span>
      <ul>
        <li>Frontend: React, Next.js</li>
        <li>Backend: Node.js, Nest.js</li>
        <li>Database: MySQL</li>
        <li>Infra: AWS EC2, nginx, pm2</li>
        <li>Others: ffmpeg, python</li>
      </ul>
      <span>주요 구현 내용</span>
      <ul>
        <li>
          <Link
            href={"https://dubright-demo.vercel.app/webtoon/26/producing/93"}
            target="_blank"
          >
            [연출 데모]
          </Link>{" "}
          웹툰 이미지 스크롤과 더빙 타이밍 등을 편집할 수 있는 연출 화면
        </li>
        <li>
          <Link
            href={
              "https://dubright-demo.vercel.app/webtoon/26/character/741/dubbing/93"
            }
            target="_blank"
          >
            [더빙 데모]
          </Link>{" "}
          배역 선택 후 녹음을 진행할 수 있는 더빙 화면
        </li>
        <li>
          <Link
            href={
              "https://dubright-demo.vercel.app/approval/26/round/93/dubApproval"
            }
            target="_blank"
          >
            [검수 데모]
          </Link>{" "}
          더빙 결과를 검수하고 오디오 이펙트를 설정할 수 있는 검수 화면
        </li>
        <li>
          <Link
            href={
              "https://dubright-demo.vercel.app/player/webtoonList/26/roundList/93/userId/1111"
            }
            target="_blank"
          >
            [재생 데모]
          </Link>{" "}
          최종 콘텐츠를 재생할 수 있는 플레이어
        </li>
      </ul>
      <span>기술적 도전</span>
      <ul>
        <li>
          연출, 더빙, 검수 등 단계별 작업 흐름을 고려한 편집형 UI 구조 설계
        </li>

        <li>
          웹툰 이미지 스크롤, 스크립트 하이라이트, 오디오 타임라인 등 다중
          요소를 정밀하게 동기화해야 하는 인터랙션 구현
        </li>

        <li>복잡한 상호작용이 많은 작업 화면을 위한 상태 관리 구조 설계</li>

        <li>
          화면 내 작업 영역의 레이아웃을 동적으로 조절할 수 있는 편집 UI 구현
        </li>

        <li>
          음원 클립을 시각화하고 드래그 앤 드롭 인터랙션을 통해 재생 위치, 속도,
          볼륨 등을 조절할 수 있는 타임라인 기반 편집 UI 구현
        </li>

        <li>
          Web Audio API 및 브라우저 녹음 기능을 활용해 대사 단위 녹음, 재생,
          재녹음, 업로드가 가능한 더빙 화면 구현
        </li>

        <li>
          캐릭터별 더빙 음원을 실시간으로 조회·재생할 수 있는 검수 UI 및 API
          구현
        </li>

        <li>
          FFmpeg 기반 이미지 스크롤 + 오디오 합성 및 대사별 음성 특수효과 적용
          기능 개발
        </li>
      </ul>
    </div>
  );
}
