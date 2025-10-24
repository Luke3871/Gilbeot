import { useState } from 'react';
import svgPaths from "../imports/svg-c1lfcjq8cv";
import imgFreeIconCaution45394721 from "figma:asset/541382b4734b7c75071b071e22e70b945142ebf5.png";
import imgHistory from "figma:asset/ea2ef4cea2d115c2dbf0fe8cfad9329c71837e2f.png";
import imgDistance from "figma:asset/b2cc293147aa05230b79ddfcd33c249c9131fdc4.png";
import imgHomeButton1 from "figma:asset/96d25598b2e1fe4a533c71d0332b4ee2b2923558.png";
import RouteShareModal from './RouteShareModal';

interface FastRouteNavigationProps {
  onClose: () => void;
  onHome?: () => void;
  departure: string;
  destination: string;
}

export default function FastRouteNavigation({ onClose, onHome, departure, destination }: FastRouteNavigationProps) {
  const [showShareModal, setShowShareModal] = useState(false);

  const handleVoiceGuide = () => {
    const utterance = new SpeechSynthesisUtterance(
      `최단 경로로 안내합니다. ${departure || '월곡사회복지관'}에서 ${destination || '고려대역'}까지 15분 소요되며, 거리는 2.1킬로미터입니다. 경로상에 3개의 위험 요소가 있습니다.`
    );
    utterance.lang = 'ko-KR';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleHome = () => {
    if (onHome) {
      onHome();
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="bg-white relative rounded-[30px] w-[393px] h-[852px]" data-name="최단 경로 내비게이션">
        {/* 뒤로가기 버튼 */}
        <button 
          onClick={onClose}
          className="absolute content-stretch flex h-[40px] items-center justify-center left-[27px] rounded-[2.68435e+07px] top-[34px] w-[48px] bg-transparent border-0 cursor-pointer"
        >
          <div className="relative shrink-0 size-[16px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g>
                <path d={svgPaths.p203476e0} stroke="#A2CBA1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d="M12.6667 8H3.33333" stroke="#A2CBA1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </g>
            </svg>
          </div>
        </button>
        
        {/* 타이틀 */}
        <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-116.5px)] text-[#6a7282] text-[30px] top-[41px] tracking-[-1.5px] w-[117px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          최단 경로
        </p>

        {/* 음성/설정 아이콘 */}
        <button 
          onClick={handleVoiceGuide}
          className="absolute left-[286px] size-[32px] top-[38px] bg-transparent border-0 cursor-pointer hover:opacity-70 transition-opacity"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g>
              <path d={svgPaths.p2be67c80} stroke="#A2CBA1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p10e75400} stroke="#A2CBA1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.pe638580} stroke="#A2CBA1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </g>
          </svg>
        </button>

        {/* 홈 버튼 */}
        <button 
          onClick={handleHome}
          className="absolute left-[326px] size-[26px] top-[41px] bg-transparent border-0 cursor-pointer hover:opacity-70 transition-opacity"
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHomeButton1} />
        </button>
        
        {/* 출발지 → 도착지 */}
        <div className="absolute left-[75px] top-[82px] max-w-[280px]">
          <p className="font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_'Noto_Sans_Symbols:Regular',_sans-serif] font-normal leading-[25px] text-[#6a7282] text-[18px] tracking-[-1.5px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            {departure || '월곡사회복지관'} →
          </p>
          <p className="font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] text-[#6a7282] text-[18px] tracking-[-1.5px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            {destination || '고려대역'}
          </p>
        </div>

        {/* 시간/거리 정보 (아이콘 포함) */}
        <div className="absolute left-[75px] top-[143px] flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="size-[27px]">
              <img alt="" className="w-full h-full object-cover" src={imgHistory} />
            </div>
            <p className="font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] text-[#6a7282] text-[18px] tracking-[-1.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
              15분
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-[34px]">
              <img alt="" className="w-full h-full object-cover" src={imgDistance} />
            </div>
            <p className="font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[25px] text-[#6a7282] text-[18px] tracking-[-1.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
              2.1km
            </p>
          </div>
        </div>

        {/* 위험 요소 알림 */}
        <div className="absolute bg-[#a2cba1] h-[55px] left-[calc(50%-2px)] rounded-[15px] top-[166px] translate-x-[-50%] w-[347px]">
          <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-0 pointer-events-none rounded-[15px]" />
          <div className="absolute left-[13px] size-[27px] top-[14px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFreeIconCaution45394721} />
          </div>
          <div className="absolute flex flex-col font-['Nunito:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium h-[18px] justify-center leading-[0] left-[44px] text-[18px] text-white top-[28px] translate-y-[-50%] w-[297px]">
            <p className="leading-[28px]">
              경로상에<span className="text-[#ffb400]"> </span>
              <span className="text-[#f54900]">3</span>
              <span>{`개의 `}</span>
              <span className="text-[#f54900]">위험 요소</span>가 있습니다.
            </p>
          </div>
        </div>

        {/* 지도 영역 */}
        <div className="absolute bg-white h-[512px] left-[calc(50%+0.5px)] rounded-[20px] top-[235px] translate-x-[-50%] w-[352px]">
          <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
          <iframe 
            src="https://luke3871.github.io/Gilbeot/src/scenario_1_맑음.html"
            className="absolute inset-0 w-full h-full rounded-[20px]"
            title="최단 경로 지도"
            style={{ border: 'none' }}
            allow="geolocation; fullscreen"
            loading="lazy"
          />
        </div>

        {/* 저작권 */}
        <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%+0.5px)] text-[#6a7282] text-[18px] text-center text-nowrap top-[806px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          ©️ 고려대학교 따숨
        </p>

        {/* 공유 버튼 */}
        <button 
          onClick={() => setShowShareModal(true)}
          className="absolute bg-[#a2cba1] h-[36px] left-[280px] rounded-[2.68435e+07px] top-[759px] w-[76px] cursor-pointer hover:bg-[#92bb91] transition-colors border-0"
        >
          <div className="absolute left-[12px] size-[16px] top-[10px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g>
                <path d={svgPaths.p185fb780} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d={svgPaths.p30ca5e80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d={svgPaths.pac25b80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d="M5.72668 9.00666L10.28 11.66" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d={svgPaths.p33364c70} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </g>
            </svg>
          </div>
          <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[20px] left-[31px] text-[18px] text-nowrap text-white top-[7px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            공유
          </p>
        </button>
      </div>
      </div>

      {/* 경로 공유 모달 */}
      {showShareModal && (
        <RouteShareModal 
          onClose={() => setShowShareModal(false)}
          departure={departure}
          destination={destination}
        />
      )}
    </>
  );
}
