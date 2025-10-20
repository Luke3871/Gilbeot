import { useState, useEffect, useRef } from 'react';
import svgPaths from "../imports/svg-spnwqt0hcg";
import imgMagnifier1 from "figma:asset/d0e0353cab5ee4a2f8f42c9390cf467acd4dc4d7.png";
import imgWeatherApp1 from "figma:asset/3c1b8a2cf2bd7b054f990d352f805fb6d4f57dac.png";
import WeatherDetailClear from './WeatherDetailClear';
import WeatherDetailRain from './WeatherDetailRain';
import WeatherDetailHeatwave from './WeatherDetailHeatwave';
import WeatherDetailColdwave from './WeatherDetailColdwave';
import RouteSearch from './RouteSearch';

declare global {
  interface Window {
    kakao: any;
  }
}

type WeatherType = 'clear' | 'rain' | 'heatwave' | 'coldwave' | null;

export default function MainPage() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [showWeatherModal, setShowWeatherModal] = useState<WeatherType>(null);
  const [currentWeather, setCurrentWeather] = useState<WeatherType>('clear'); // 현재 날씨 상태
  const [showRouteSearch, setShowRouteSearch] = useState(false);

  useEffect(() => {
    // 카카오맵 API 스크립트 로드
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_API_KEY_HERE&autoload=false`;
    script.async = true;
    
    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          if (mapContainer.current) {
            const options = {
              center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 서울 좌표
              level: 3
            };
            new window.kakao.maps.Map(mapContainer.current, options);
          }
        });
      }
    };

    script.onerror = () => {
      console.log('카카오맵 API 로드 실패 - 흰 화면 유지');
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleWeatherClick = () => {
    setShowWeatherModal(currentWeather);
  };

  const closeModal = () => {
    setShowWeatherModal(null);
  };

  const handleRouteSearchClick = () => {
    setShowRouteSearch(true);
  };

  const closeRouteSearch = () => {
    setShowRouteSearch(false);
  };

  const handleVoiceGuidance = () => {
    const text = "음성 안내를 시작합니다. 원하시는 기능을 말씀해주세요.";
    
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ko-KR';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    } else {
      alert(text);
    }
  };

  return (
    <div className="relative size-full" data-name="메인 페이지">
      <div className="absolute bg-white h-[852px] left-0 top-0 w-[393px]" data-name="bg" />
      
      {/* 지도 영역 */}
      <div 
        ref={mapContainer}
        className="absolute bg-white h-[502px] left-[calc(50%+0.5px)] rounded-[20px] top-[283px] translate-x-[-50%] w-[352px]"
      >
        <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      
      <div className="absolute bg-white h-[404px] left-1/2 rounded-[20px] top-[302px] translate-x-[-50%] w-[319px]">
        <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%+0.5px)] text-[#6a7282] text-[18px] text-center text-nowrap top-[806px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        ©️ 고려대학교 따숨
      </p>
      
      {/* 날씨 카드 - 클릭 가능 */}
      <div 
        onClick={handleWeatherClick}
        className="absolute bg-[rgba(255,255,255,0.95)] box-border content-stretch flex flex-col h-[149px] items-start left-[calc(50%+0.5px)] pl-[17.5px] pr-[1.5px] py-[17.5px] rounded-[16px] top-[114px] translate-x-[-50%] w-[352px] cursor-pointer hover:bg-white transition-colors" data-name="날씨 카드"
      >
        <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
        
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[315.2px]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-full items-center relative w-[315.2px]">
            <div className="relative shrink-0 size-[32px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-[32px]">
                <div className="absolute left-0 size-[32px] top-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g>
                      <path d={svgPaths.p7b98a00} stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="basis-0 grow h-[107.988px] min-h-px min-w-px relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[107.988px] relative w-full">
                <div className="absolute h-[36px] left-[0.5px] top-[-7.01px] w-[271.2px]">
                  <div className="absolute h-[36px] left-0 top-0 w-[47.2px]">
                    <p className="absolute font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[36px] left-0 text-[#a2cba1] text-[30px] top-[-0.4px] w-[48px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                      28°
                    </p>
                  </div>
                  <div className="absolute h-[28px] left-[55.2px] top-[8px] w-[36px]">
                    <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[28px] left-0 text-[#4a5565] text-[24px] text-nowrap top-[-0.4px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                      흐림
                    </p>
                  </div>
                </div>
                
                <div className="absolute content-stretch flex h-[20px] items-start left-[-0.5px] top-[37.99px] w-[271.2px]">
                  <p className="basis-0 font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[18px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                    서울시 강남구
                  </p>
                </div>
                
                <div className="absolute content-stretch flex h-[15.988px] items-start left-[-0.5px] top-[63.99px] w-[271.2px]">
                  <p className="basis-0 font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#6a7282] text-[18px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                    오후 01:55
                  </p>
                </div>
                
                <div className="absolute content-stretch flex gap-[12px] h-[20px] items-center left-0 top-[96.99px] w-[271.2px]">
                  <div className="h-[20px] relative shrink-0 w-[49.825px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[49.825px]">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g>
                            <path d={svgPaths.p3e9f9a40} stroke="#145EC9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPaths.p1a716f60} stroke="#145EC9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </g>
                        </svg>
                      </div>
                      <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0">
                        <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[20px] left-[-0.5px] text-[#4a5565] text-[18px] top-[-0.99px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                          13%
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-[20px] relative shrink-0 w-[49.825px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[49.825px]">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g>
                            <path d={svgPaths.p15e6ed80} stroke="#774C00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </g>
                        </svg>
                      </div>
                      <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0">
                        <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[20px] left-[-0.33px] text-[#4a5565] text-[18px] top-[-0.99px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                          82%
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-[20px] relative shrink-0 w-[50.25px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[50.25px]">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g>
                            <path d={svgPaths.p69dd000} stroke="#8BC9EF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPaths.p27014d80} stroke="#8BC9EF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPaths.pa49680} stroke="#8BC9EF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </g>
                        </svg>
                      </div>
                      <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0">
                        <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[20px] left-[-0.15px] text-[#4a5565] text-[18px] top-[-0.99px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                          0m/s
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[25px] text-[#6a7282] text-[24px] text-nowrap top-[72px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>{`오늘의 날씨를 확인하세요  `}</p>
      
      {/* 경로검색 버튼 */}
      <div 
        onClick={handleRouteSearchClick}
        className="absolute bg-[#a2cba1] h-[48px] left-1/2 rounded-[15px] top-[719px] translate-x-[-50%] w-[319px] cursor-pointer hover:bg-[#92bb91] transition-colors"
      >
        <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-0 pointer-events-none rounded-[15px]" />
        <div className="absolute contents left-[82px] top-[7px]">
          <div className="absolute flex flex-col font-['Nunito:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium justify-center leading-[0] left-[165.5px] text-[24px] text-center text-nowrap text-white top-[24px] translate-x-[-50%] translate-y-[-50%]">
            <p className="leading-[28px] whitespace-pre">경로 검색</p>
          </div>
          <div className="absolute left-[82px] size-[34px] top-[7px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMagnifier1} />
          </div>
        </div>
      </div>
      
      {/* 설정 아이콘 - 음성 안내 */}
      <div 
        onClick={handleVoiceGuidance}
        className="absolute left-[340px] size-[32px] top-[20px] cursor-pointer hover:opacity-70 transition-opacity"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g>
            <path d={svgPaths.p2be67c80} stroke="#A2CBA1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p10e75400} stroke="#A2CBA1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.pe638580} stroke="#A2CBA1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
      
      <div className="absolute left-[269px] size-[32px] top-[69px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWeatherApp1} />
      </div>

      {/* 날씨 모달 */}
      {showWeatherModal === 'clear' && <WeatherDetailClear onClose={closeModal} />}
      {showWeatherModal === 'rain' && <WeatherDetailRain onClose={closeModal} />}
      {showWeatherModal === 'heatwave' && <WeatherDetailHeatwave onClose={closeModal} />}
      {showWeatherModal === 'coldwave' && <WeatherDetailColdwave onClose={closeModal} />}
      
      {/* 경로검색 모달 */}
      {showRouteSearch && <RouteSearch onClose={closeRouteSearch} />}
    </div>
  );
}
