import Link from "next/link";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function Dubright() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>데모 보러가기</span>
        <ArrowDownwardIcon />
      </div>
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
          배역 선택 후 대사 단위 녹음을 진행할 수 있는 더빙 화면
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
          더빙본 비교 청취 / 오디오 트랙 및 특수 효과 적용 / 검수
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
          웹툰 + 더빙 콘텐츠를 재생할 수 있는 플레이어
        </li>
      </ul>
      <span>담당 역할</span>
      <ul>
        <li>
          오프라인 미팅을 통한 클라이언트 요구사항 분석 및 개발 범위, 일정 조율
        </li>
        <li>
          온라인 커뮤니케이션을 통한 요구사항 변경 관리 및 개발 진행 피드백 반영
        </li>
        <li>
          핵심 작업 화면(연출/더빙/검수) 프론트 UI 및 백엔드 API 설계/구현
        </li>
        <li>AWS 기반 서버 구성 및 배포 환경 구축</li>
        <li>
          배포 이후 오류 대응, 기능 개선, 추가 요구사항 반영 등 운영 및 유지보수
          수행
        </li>
      </ul>
      <span>주요 구현 내용</span>
      <ul>
        <li>연출, 더빙, 검수 등 단계별 작업 흐름을 고려한 UI 구조 설계</li>
        <li>
          음원 클립을 시각화하고 드래그 앤 드롭을 통해 재생 위치 및 속도를
          조절할 수 있는 타임라인 UI 구현
        </li>
        <li>
          웹툰 이미지 자동 스크롤의 타이밍, 속도, 방향을 설정할 수 있는
          '스크롤액션' 기능 구현
        </li>
        <li>
          이미지 스크롤, 스크립트 하이라이트, 오디오 타임라인 등 다중 요소를
          정밀하게 동기화하는 인터랙션 구현
        </li>
        <li>
          Web Audio API를 활용해 대사 단위 녹음, 재생, 재녹음, 업로드가 가능한
          더빙 화면 구현
        </li>
        <li>
          캐릭터별 성우들의 더빙 음원을 실시간으로 조회·재생할 수 있는 검수 UI
          및 API 구현
        </li>
        <li>ffmpeg 기반 비디오 합성 및 대사별 음성 특수효과 적용 기능 개발</li>
      </ul>
      <span>기술적 도전</span>
      <ul>
        <li>
          다중 인터랙션(타임라인, 오디오, 이미지 스크롤, UI 상태) 간의 일관성을
          유지하기 위한 상태 관리 구조 설계
        </li>
        <li>
          타임라인 좌표(px)와 재생 시간(ms) 간의 정밀한 매핑을 위한 시간-좌표
          변환 로직 설계
        </li>
        <li>
          millisecond 단위 재생 타이밍을 기준으로 애니메이션, 오디오, UI 상태를
          동기화하는 로직 설계 및 구현
        </li>
        <li>
          단일 타임라인 UI에서 드래그 시작 컨텍스트에 따라 인터랙션이 달라지는
          커스텀 드래그 앤 드롭 시스템을 설계하고,
          <br />
          좌표 변환 및 클립 충돌 처리 로직을 구현
        </li>
        <li>
          스크롤 액션에 의한 브라우저 상 스크롤 상태를 시간 함수로 정규화하여,
          웹툰 이미지/음원 파일을 프레임 단위로 동기화한
          <br /> 비디오 합성 파이프라인 구현
        </li>
        <li>
          Node.js 환경에서 직접 처리하기 어려운 ffmpeg 기반 영상 합성을 위해
          Python 스크립트를 별도 프로세스로 구성하고,
          <br />
          서버와의 연동 및 비동기 작업 흐름을 제어하는 미디어 처리 파이프라인
          설계
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
    </div>
  );
}
