import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-09we2vynuf";
import imgMagnifier1 from "figma:asset/d0e0353cab5ee4a2f8f42c9390cf467acd4dc4d7.png";
import imgTime1 from "figma:asset/86e4831e0d40d474414293ed96169ba9c720a7aa.png";
import RouteSelection from './RouteSelection';

type WeatherType = 'clear' | 'rain' | 'heatwave' | 'coldwave';

interface RouteSearchProps {
  onClose: () => void;
  weather?: WeatherType;
}

interface SearchHistory {
  departure: string;
  destination: string;
  timestamp: number;
}

export default function RouteSearch({ onClose, weather = 'clear' }: RouteSearchProps) {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [showRouteSelection, setShowRouteSelection] = useState(false);
  const [searchHistory, setSearchHistory] = useState<SearchHistory[]>([]);

  // 컴포넌트 마운트 시 localStorage에서 검색 내역 불러오기
  useEffect(() => {
    const savedHistory = localStorage.getItem('routeSearchHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  // 검색 내역 저장
  const saveToHistory = (dep: string, dest: string) => {
    const newHistory: SearchHistory = {
      departure: dep,
      destination: dest,
      timestamp: Date.now()
    };
    
    // 중복 제거 및 최신 항목 추가 (최대 5개까지)
    const updatedHistory = [
      newHistory,
      ...searchHistory.filter(h => !(h.departure === dep && h.destination === dest))
    ].slice(0, 5);
    
    setSearchHistory(updatedHistory);
    localStorage.setItem('routeSearchHistory', JSON.stringify(updatedHistory));
  };

  // 전체 삭제
  const clearAllHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('routeSearchHistory');
  };

  const handleSearch = () => {
    if (departure && destination) {
      saveToHistory(departure, destination);
      setShowRouteSelection(true);
    } else {
      alert('출발지와 도착지를 모두 입력해주세요.');
    }
  };

  const handleHistoryClick = (history: SearchHistory) => {
    setDeparture(history.departure);
    setDestination(history.destination);
    setShowRouteSelection(true);
  };

  if (showRouteSelection) {
    return (
      <RouteSelection
        onClose={() => setShowRouteSelection(false)}
        departure={departure}
        destination={destination}
        weather={weather}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="bg-white relative rounded-[30px] w-[393px] h-[852px]" data-name="경로 검색">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[25px] left-[345px] text-[#99a1af] text-[24px] text-nowrap top-[16px] tracking-[-1.5px] whitespace-pre bg-transparent border-0 cursor-pointer hover:text-[#6a7282]"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          x
        </button>

        {/* 타이틀 */}
        <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-0.5px)] text-[#6a7282] text-[30px] text-center text-nowrap top-[62px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          경로 검색
        </p>

        {/* 출발지 입력 */}
        <div className="absolute bg-white h-[52px] left-[calc(50%-0.5px)] rounded-[20px] top-[130px] translate-x-[-50%] w-[352px]">
          <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
          <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_Symbols2:Regular',_sans-serif] font-normal leading-[25px] left-[20px] text-[#967c58] text-[24px] top-[12.5px] tracking-[-1.5px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            ●
          </p>
          <input
            type="text"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            placeholder="출발지를 입력하세요"
            className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[44px] text-[#6a7282] text-[24px] top-[12.5px] tracking-[-1.5px] bg-transparent border-0 outline-none w-[280px]"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          />
        </div>

        {/* 화살표 */}
        <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_Symbols:Regular',_sans-serif] font-normal leading-[25px] left-[41px] text-[#6a7282] text-[24px] top-[191.5px] tracking-[-1.5px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          ↓
        </p>

        {/* 도착지 입력 */}
        <div className="absolute bg-white h-[52px] left-[calc(50%-0.5px)] rounded-[20px] top-[226px] translate-x-[-50%] w-[352px]">
          <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
          <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_Symbols2:Regular',_sans-serif] font-normal leading-[25px] left-[20px] text-[#765896] text-[24px] top-[12.5px] tracking-[-1.5px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            ●
          </p>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="도착지를 입력하세요"
            className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[44px] text-[#6a7282] text-[24px] top-[12.5px] tracking-[-1.5px] bg-transparent border-0 outline-none w-[280px]"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          />
        </div>

        {/* 검색 버튼 */}
        <button
          onClick={handleSearch}
          className="absolute bg-[#a2cba1] h-[48px] left-[calc(50%+0.5px)] rounded-[20px] top-[311px] translate-x-[-50%] w-[352px] cursor-pointer hover:bg-[#92bb91] transition-colors border-0"
        >
          <div className="absolute left-[calc(50%-91px)] size-[32px] top-[8px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMagnifier1} />
          </div>
          <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[28px] left-1/2 text-[24px] text-center text-nowrap text-white top-[10px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            경로 검색
          </p>
        </button>

        {/* 최근 검색 헤더 */}
        <div className="absolute left-[21px] top-[403px] w-[352px] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-[32px]">
              <img alt="" className="max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTime1} />
            </div>
            <p className="font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] text-[#6a7282] text-[24px] tracking-[-1.5px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
              최근 검색
            </p>
          </div>
          
          {searchHistory.length > 0 && (
            <button
              onClick={clearAllHistory}
              className="font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] text-[#a2cba1] text-[18px] tracking-[-1.5px] bg-transparent border-0 cursor-pointer hover:text-[#92bb91]"
              style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
            >
              전체 삭제
            </button>
          )}
        </div>

        {/* 최근 검색 목록 */}
        <div className="absolute left-[21px] top-[455px] w-[352px]">
          {searchHistory.length === 0 ? (
            <div className="bg-white h-[90px] rounded-[20px] border-[1.5px] border-[#a2cba1] flex items-center justify-center">
              <p className="font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal text-[#6a7282] text-[18px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                최근 검색 내역이 없습니다
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {searchHistory.map((history, index) => (
                <button
                  key={index}
                  onClick={() => handleHistoryClick(history)}
                  className="bg-white h-[90px] rounded-[20px] border-[1.5px] border-[#a2cba1] w-full cursor-pointer hover:bg-gray-50 transition-colors relative"
                >
                  <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_Symbols2:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[20px] text-[#6a7282] text-[18px] top-[9px] tracking-[-1.5px] text-left" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                    <span className="text-[#967c58]">●</span> {history.departure}
                  </p>
                  <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_Symbols:Regular',_sans-serif] font-normal leading-[25px] left-[22px] text-[#6a7282] text-[24px] top-[31.46px] tracking-[-1.5px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                    ↓
                  </p>
                  <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_Symbols2:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[20px] text-[#6a7282] text-[18px] top-[56px] tracking-[-1.5px] text-left" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
                    <span className="text-[#765896]">●</span> {history.destination}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 저작권 */}
        <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%+0.5px)] text-[#6a7282] text-[18px] text-center text-nowrap top-[806px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          ©️ 고려대학교 따숨
        </p>
      </div>
    </div>
  );
}
