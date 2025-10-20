import { useState } from 'react';
import svgPaths from "../imports/svg-o7xi4fuzfe";
import imgRun from "figma:asset/09fd30c08c13d3c82e1d7a854c26f7b13a0b48a7.png";
import imgHistory from "figma:asset/ea2ef4cea2d115c2dbf0fe8cfad9329c71837e2f.png";
import imgDistance from "figma:asset/b2cc293147aa05230b79ddfcd33c249c9131fdc4.png";
import imgShield from "figma:asset/aeb1449f27d63f126cb034272c1641d145b189dd.png";
import FastRouteNavigation from './FastRouteNavigation';
import SafeRouteNavigation from './SafeRouteNavigation';

interface RouteSelectionProps {
  onClose: () => void;
  departure: string;
  destination: string;
}

export default function RouteSelection({ onClose, departure, destination }: RouteSelectionProps) {
  const [selectedRoute, setSelectedRoute] = useState<'fast' | 'safe' | null>(null);

  const handleFastRouteClick = () => {
    setSelectedRoute('fast');
  };

  const handleSafeRouteClick = () => {
    setSelectedRoute('safe');
  };

  const closeNavigation = () => {
    setSelectedRoute(null);
  };

  const handleHome = () => {
    onClose(); // 경로 선택 화면을 닫으면 메인페이지로 돌아감
  };

  if (selectedRoute === 'fast') {
    return <FastRouteNavigation onClose={closeNavigation} onHome={handleHome} departure={departure} destination={destination} />;
  }

  if (selectedRoute === 'safe') {
    return <SafeRouteNavigation onClose={closeNavigation} onHome={handleHome} departure={departure} destination={destination} />;
  }

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="relative size-full" data-name="경로 선택">
        <div className="absolute bg-white h-[852px] left-0 top-0 w-[393px]" data-name="bg" />
        
        <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%+0.5px)] text-[#6a7282] text-[18px] text-center text-nowrap top-[806px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          ©️ 고려대학교 따숨
        </p>

        {/* 경로 선택 상단 박스 */}
        <div className="absolute bg-white h-[198px] left-[calc(50%+0.5px)] rounded-[20px] top-[42px] translate-x-[-50%] w-[352px]" data-name="경로 선택">
          <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
          
          <button
            onClick={onClose}
            className="absolute content-stretch flex h-[40px] items-center justify-center left-[12px] rounded-[2.68435e+07px] top-[12px] w-[48px] cursor-pointer bg-transparent border-0 hover:opacity-70 transition-opacity z-10"
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
          
          <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-1/2 text-[#6a7282] text-[30px] text-center text-nowrap top-[19px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            경로 선택
          </p>
          
          <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_Symbols2:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[24px] text-[#6a7282] text-[24px] text-nowrap top-[74px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            <span className="text-[#967c58]">●</span>
            <span>{` ${departure || '월곡사회복지관'}`}</span>
          </p>
          
          <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_Symbols:Regular',_sans-serif] font-normal leading-[25px] left-[30px] text-[#6a7282] text-[24px] text-nowrap top-[111px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            ↓
          </p>
          
          <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_Symbols2:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[24px] text-[#6a7282] text-[24px] text-nowrap top-[148px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            <span className="text-[#765896]">●</span>
            <span>{` ${destination || '고려대역'}`}</span>
          </p>
        </div>

        {/* 최단 경로 */}
        <div 
          onClick={handleFastRouteClick}
          className="absolute contents left-[21px] top-[269px] cursor-pointer" 
          data-name="최단 경로"
        >
          <div className="absolute bg-white h-[157px] left-[calc(50%+0.5px)] rounded-[20px] top-[269px] translate-x-[-50%] w-[352px] hover:bg-gray-50 transition-colors" data-name="최단경로">
            <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
          </div>
          
          <div className="absolute bg-[#a2cba1] h-[48px] left-[calc(50%+0.5px)] rounded-[15px] top-[285px] translate-x-[-50%] w-[137px]" data-name="최단 경로">
            <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-0 pointer-events-none rounded-[15px]" />
          </div>
          
          <div className="absolute flex flex-col font-['Nunito:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium h-[18px] justify-center leading-[0] left-[calc(50%+0.5px)] text-[24px] text-center text-white top-[309px] translate-x-[-50%] translate-y-[-50%] w-[137px]">
            <p className="leading-[28px]">최단 경로</p>
          </div>
          
          <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%+0.5px)] text-[#6a7282] text-[18px] text-center text-nowrap top-[345px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            가장 빠른 경로로 안내합니다.
          </p>
          
          <div className="absolute left-[calc(50%-145px)] size-[27px] top-[382px]" data-name="history">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHistory} />
          </div>
          
          <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-110px)] text-[#6a7282] text-[18px] text-center text-nowrap top-[383px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            15분
          </p>
          
          <div className="absolute left-[calc(50%-66px)] size-[34px] top-[380px]" data-name="distance">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDistance} />
          </div>
          
          <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-23px)] text-[#6a7282] text-[18px] text-nowrap top-[383px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            2.1km
          </p>
          
          <div className="absolute left-[calc(50%+100px)] size-[52px] top-[357px]" data-name="run">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRun} />
          </div>
        </div>

        {/* 안전 경로 */}
        <div 
          onClick={handleSafeRouteClick}
          className="absolute contents left-[21px] top-[455px] cursor-pointer" 
          data-name="안전 경로"
        >
          <div className="absolute bg-white h-[244px] left-[calc(50%+0.5px)] rounded-[20px] top-[455px] translate-x-[-50%] w-[352px] hover:bg-gray-50 transition-colors" data-name="안전경로">
            <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
          </div>
          
          <div className="absolute bg-[#a2cba1] h-[48px] left-[calc(50%+0.5px)] rounded-[15px] top-[471px] translate-x-[-50%] w-[137px]" data-name="안전 경로">
            <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-0 pointer-events-none rounded-[15px]" />
          </div>
          
          <div className="absolute flex flex-col font-['Nunito:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium h-[18px] justify-center leading-[0] left-[calc(50%+0.5px)] text-[24px] text-center text-white top-[495px] translate-x-[-50%] translate-y-[-50%] w-[137px]">
            <p className="leading-[28px]">안전 경로</p>
          </div>
          
          <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_'Noto_Sans_Symbols2:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%+75px)] text-[#f0b100] text-[18px] text-nowrap top-[477px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            추천 ★
          </p>
          
          <div className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%+0.5px)] text-[#6a7282] text-[18px] text-center top-[531px] tracking-[-1.5px] translate-x-[-50%] w-[305px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            <p className="mb-0">고령자 맞춤 안전 경로</p>
            <p>위험요소를 피하고 안전시설을 경유합니다.</p>
          </div>
          
          <div className="absolute left-[calc(50%-145px)] size-[27px] top-[589px]" data-name="history">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHistory} />
          </div>
          
          <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-110px)] text-[#6a7282] text-[18px] text-center text-nowrap top-[590px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            22분
          </p>
          
          <div className="absolute left-[calc(50%-66px)] size-[34px] top-[587px]" data-name="distance">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDistance} />
          </div>
          
          <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-23px)] text-[#6a7282] text-[18px] text-nowrap top-[590px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            2.8 km
          </p>
          
          <div className="absolute bg-white h-[38px] left-[calc(50%-73px)] rounded-[30px] top-[643px] translate-x-[-50%] w-[161px]" data-name="위험요소 회피">
            <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[30px]" />
            <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-1/2 text-[#6a7282] text-[18px] text-center text-nowrap top-[6px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
              위험요소 3개 회피
            </p>
          </div>
          
          <div className="absolute bg-white h-[38px] left-[calc(50%+58px)] rounded-[30px] top-[643px] translate-x-[-50%] w-[89px]" data-name="쉼터 경유">
            <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[30px]" />
            <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-1/2 text-[#6a7282] text-[18px] text-center text-nowrap top-[6px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
              쉼터 경유
            </p>
          </div>
          
          <div className="absolute left-[calc(50%+118px)] size-[44px] top-[638px]" data-name="shield">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgShield} />
          </div>
        </div>
      </div>
    </div>
  );
}
