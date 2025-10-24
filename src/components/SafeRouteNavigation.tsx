import { useState } from 'react';
import svgPaths from "../imports/svg-8rtyo7qwwc";
import imgFreeIconHeavyRain75125171 from "figma:asset/b51afe743783e5d334bfbc7fe3e4d8f95aa92ce2.png";
import imgFreeIconHeatwave176495541 from "figma:asset/6848cddb290bc168041765604099d6db945b78f7.png";
import imgFreeIconThermometer100438981 from "figma:asset/fce20544b46886313762578b47d2089e417d5c88.png";
import imgHistory from "figma:asset/ea2ef4cea2d115c2dbf0fe8cfad9329c71837e2f.png";
import imgDistance from "figma:asset/b2cc293147aa05230b79ddfcd33c249c9131fdc4.png";
import imgHomeButton1 from "figma:asset/96d25598b2e1fe4a533c71d0332b4ee2b2923558.png";
import imgFreeIconCaution45394722 from "figma:asset/541382b4734b7c75071b071e22e70b945142ebf5.png";
import RouteShareModal from './RouteShareModal';

type WeatherType = 'clear' | 'rain' | 'heatwave' | 'coldwave';

interface SafeRouteNavigationProps {
  onClose: () => void;
  onHome?: () => void;
  departure: string;
  destination: string;
  weather?: WeatherType;
}

export default function SafeRouteNavigation({ onClose, onHome, departure, destination, weather = 'clear' }: SafeRouteNavigationProps) {
  const [showShareModal, setShowShareModal] = useState(false);

  // 날씨별 메시지 및 아이콘
  const weatherInfo = {
    rain: {
      message1: '비가 와서 길이 미끄러우니',
      message2: '경사로 적은 길을 추천드려요.',
      icon: imgFreeIconHeavyRain75125171,
      voiceMessage: '비가 와서 길이 미끄러우니 경사로 적은 길을 추천드려요.'
    },
    heatwave: {
      message1: '날씨가 더우니',
      message2: '그늘진 길을 추천드려요.',
      icon: imgFreeIconHeatwave176495541,
      voiceMessage: '날씨가 더우니 그늘진 길을 추천드려요.'
    },
    coldwave: {
      message1: '날씨가 추워 길이 미끄러우니',
      message2: '미끄럽지 않은 길을 추천드려요.',
      icon: imgFreeIconThermometer100438981,
      voiceMessage: '날씨가 추워 길이 미끄러우니 미끄럽지 않은 길을 추천드려요.'
    },
    clear: {
      message1: '안전한 경로를',
      message2: '추천드려요.',
      icon: imgFreeIconHeavyRain75125171, // 맑음은 일단 기본 아이콘 사용
      voiceMessage: '안전한 경로를 추천드려요.'
    }
  };

  const currentWeatherInfo = weatherInfo[weather];

  const handleVoiceGuide = () => {
    const utterance = new SpeechSynthesisUtterance(
      `안전 경로로 안내합니다. ${departure || '월곡사회복지관'}에서 ${destination || '고려대역'}까지 22분 소요되며, 거리는 2.8킬로미터입니다. ${currentWeatherInfo.voiceMessage} 위험 요소 3개를 회피합니다.`
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
      <div className="bg-white relative rounded-[30px] w-[393px] h-[852px]" data-name="안전 경로 - 비">
        
        <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%+0.5px)] text-[#6a7282] text-[18px] text-center text-nowrap top-[806px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          ©️ 고려대학교 따숨
        </p>

        {/* 공유 버튼 */}
        <button 
          onClick={() => setShowShareModal(true)}
          className="absolute bg-[#a2cba1] h-[36px] left-[280px] rounded-[2.68435e+07px] top-[759px] w-[76px] cursor-pointer hover:bg-[#92bb91] transition-colors border-0"
          data-name="공유"
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

        {/* 안전 경로 메인 */}
        <div className="absolute h-[729.6px] left-0 top-0 w-[393px]" data-name="안전 경로">
          <div className="absolute bg-white h-[729.6px] left-0 top-0 w-[393px]" data-name="bg" />
          
          {/* 위험요소 알림 */}
          <div className="absolute bg-[#a2cba1] h-[82px] left-[50%] rounded-[15px] top-[176px] translate-x-[-50%] w-[347px]" data-name="위험요소 알림">
            <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-0 pointer-events-none rounded-[15px]" />
            <div className="absolute flex flex-col font-['Nunito:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium h-[18px] justify-center leading-[28px] left-[59px] text-[18px] text-white top-[42px] translate-y-[-50%] w-[297px]">
              <p className="mb-0">{currentWeatherInfo.message1}</p>
              <p>{currentWeatherInfo.message2}</p>
            </div>
            <div className="absolute left-[16px] size-[33px] top-[24px]" data-name="weather-icon">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={currentWeatherInfo.icon} />
            </div>
          </div>

          {/* 시간 거리 */}
          <div className="absolute left-[50%] top-[130px] translate-x-[-50%] flex items-center justify-center gap-4" data-name="시간 거리">
            <div className="flex items-center gap-1.5">
              <div className="size-[27px]" data-name="history">
                <img alt="" className="w-full h-full object-cover" src={imgHistory} />
              </div>
              <p className="font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] text-[#6a7282] text-[18px] tracking-[-1.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                22분
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="size-[34px]" data-name="distance">
                <img alt="" className="w-full h-full object-cover" src={imgDistance} />
              </div>
              <p className="font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[25px] text-[#6a7282] text-[18px] tracking-[-1.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                2.8km
              </p>
            </div>
          </div>

          {/* 지도 영역 */}
          <div className="absolute bg-white h-[485px] left-[50%] rounded-[20px] top-[258px] translate-x-[-50%] w-[352px]" data-name="최단경로">
            <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <iframe 
              src={
                weather === 'rain' ? 'https://raw.githubusercontent.com/Luke3871/Gilbeot/main/src/scenario_3_강수.html' :
                weather === 'heatwave' ? 'https://raw.githubusercontent.com/Luke3871/Gilbeot/main/src/scenario_5_폭염.html' :
                weather === 'coldwave' ? 'https://raw.githubusercontent.com/Luke3871/Gilbeot/main/src/scenario_9_한파.html' :
                'https://raw.githubusercontent.com/Luke3871/Gilbeot/main/src/scenario_1_맑음.html'
              }
              className="absolute inset-0 w-full h-full rounded-[20px]"
              title="안전 경로 지도"
              style={{ border: 'none' }}
              allow="geolocation; fullscreen"
              loading="lazy"
            />
          </div>

          {/* 음성/설정 아이콘 */}
          <button 
            onClick={handleVoiceGuide}
            className="absolute left-[286px] size-[32px] top-[38px] bg-transparent border-0 cursor-pointer hover:opacity-70 transition-opacity"
            data-name="Icon"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g>
                <path d={svgPaths.p2be67c80} stroke="#A2CBA1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d={svgPaths.p10e75400} stroke="#A2CBA1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d={svgPaths.pe638580} stroke="#A2CBA1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </g>
            </svg>
          </button>

          <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-58.5px)] text-[#6a7282] text-[30px] top-[41px] tracking-[-1.5px] w-[117px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            안전 경로
          </p>
          
          <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_'Noto_Sans_Symbols:Regular',_sans-serif] font-normal leading-[25px] left-[75px] text-[#6a7282] text-[18px] text-nowrap top-[82px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            {departure || '월곡사회복지관'} → {destination || '고려대역'}
          </p>

          {/* 뒤로가기 버튼 */}
          <button 
            onClick={onClose}
            className="absolute content-stretch flex h-[40px] items-center justify-center left-[27px] rounded-[2.68435e+07px] top-[34px] w-[48px] cursor-pointer bg-transparent border-0 hover:opacity-70 transition-opacity"
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

          {/* 홈 버튼 */}
          <button 
            onClick={handleHome}
            className="absolute left-[326px] size-[26px] top-[41px] bg-transparent border-0 cursor-pointer hover:opacity-70 transition-opacity"
            data-name="home-button 1"
          >
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHomeButton1} />
          </button>
        </div>

        {/* 위험 회피 뱃지 */}
        <div className="absolute bg-[#a2cba1] h-[36px] left-[123px] rounded-[2.68435e+07px] top-[759px] w-[146px]" data-name="공유">
          <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[20px] left-[31px] text-[18px] text-nowrap text-white top-[7px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            위험 3개 회피
          </p>
          <div className="absolute left-[4px] size-[27px] top-[3px]" data-name="free-icon-caution-4539472 2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFreeIconCaution45394722} />
          </div>
        </div>
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
