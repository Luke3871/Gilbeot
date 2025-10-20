import svgPaths from "../imports/svg-vfmp5ekpih";
import imgDust11 from "figma:asset/e10ad9e8d1b82481f5067b6b593813ed38ae8b58.png";
import imgHumidity from "figma:asset/27f890e5b011c38fb96ca3ac808dfd97af25d096.png";
import imgWindSign1 from "figma:asset/aef798f88d84cfe8e567fd675d6099188e33a5a1.png";
import imgRain1 from "figma:asset/4ddb56cb46848ed111828f52202244ae748c0311.png";
import imgFreeIconThermometer100438981 from "figma:asset/fce20544b46886313762578b47d2089e417d5c88.png";

interface WeatherDetailColdwaveProps {
  onClose: () => void;
}

export default function WeatherDetailColdwave({ onClose }: WeatherDetailColdwaveProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-[30px] w-[305px] max-h-[90vh] overflow-y-auto relative p-4" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-4 top-4 text-[#99a1af] text-[24px] bg-transparent border-0 cursor-pointer">x</button>
        
        <h2 className="text-[#6a7282] text-[30px] text-center mt-4 mb-1" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>상세 날씨 정보</h2>
        <p className="text-[#6a7282] text-[18px] text-center mb-6">현재 날씨와 시간별 예보, 건강 정보를 확인하세요</p>

        {/* 현재 날씨 카드 */}
        <div className="bg-gradient-to-br from-[#d4e7f3] to-[#8bc9ef] rounded-[16px] p-6 mb-6">
          <div className="flex gap-4 items-start mb-4">
            <img alt="" className="size-[52px]" src={imgFreeIconThermometer100438981} />
            <div>
              <p className="text-[#6a7282] text-[36px] font-medium leading-none"><span className="text-[#145ec9]">-9</span>°</p>
              <p className="text-[#364153] text-[20px] mt-2">한파</p>
              <p className="text-[#4a5565] text-[18px]">서울시 성북구</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.p3a14cd80} stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
            <p className="text-[#364153] text-[18px]">체감온도 -12°</p>
          </div>
        </div>

        {/* 시간별 예보 */}
        <div className="mb-6">
          <p className="text-[#6a7282] text-[24px] text-center mb-4" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>시간별 예보</p>
          <div className="grid grid-cols-4 gap-2">
            {[{ time: '18시', temp: '-7℃' }, { time: '19시', temp: '-8℃' }, { time: '20시', temp: '-9℃' }, { time: '21시', temp: '-10℃' }].map((item, idx) => (
              <div key={idx} className="bg-white h-[107px] rounded-[20px] border-[1.5px] border-[#a2cba1] flex flex-col items-center justify-center gap-2">
                <p className="text-[#6a7282] text-[18px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>{item.time}</p>
                <p className="text-[#a2cba1] text-[24px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>{item.temp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 옷차림 추천 */}
        <div className="bg-[#a2cba1] p-6 rounded-[16px] mb-4">
          <div className="flex items-center gap-2 mb-4">
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p3383d380} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <p className="text-white text-[24px] font-medium">옷차림 추천</p>
          </div>
          <div className="text-white text-[18px]">
            <p className="mb-1">두꺼운 외투, 목도리, 장갑 등</p>
            <p>방한 준비가 필요해요</p>
          </div>
        </div>

        {/* 건강 정보 */}
        <div className="bg-[#a2cba1] p-6 rounded-[16px] mb-6">
          <div className="flex items-center gap-2 mb-4">
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p3383d380} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <p className="text-white text-[24px] font-medium">건강 정보</p>
          </div>
          <div className="text-white text-[18px]">
            <p className="mb-1">체온 유지에 신경 쓰세요.</p>
            <p>노약자는 외출을 자제하는 것이 좋아요.</p>
          </div>
        </div>

        {/* 세부 정보 */}
        <div className="mb-6">
          <p className="text-[#6a7282] text-[24px] text-center mb-4" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>세부 정보</p>
          <div className="bg-white rounded-[20px] border-[1.5px] border-[#a2cba1] p-6 space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img alt="" className="size-[26px]" src={imgRain1} />
                <p className="text-[#6a7282] text-[24px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>강수확률</p>
              </div>
              <p className="text-[#a2cba1] text-[24px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>32%</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img alt="" className="size-[29px]" src={imgDust11} />
                <p className="text-[#6a7282] text-[24px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>미세먼지</p>
              </div>
              <p className="text-[#a2cba1] text-[24px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>좋음</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img alt="" className="size-[30px]" src={imgHumidity} />
                <p className="text-[#6a7282] text-[24px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>습도</p>
              </div>
              <p className="text-[#a2cba1] text-[24px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>58%</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img alt="" className="size-[23px]" src={imgWindSign1} />
                <p className="text-[#6a7282] text-[24px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>바람</p>
              </div>
              <p className="text-[#a2cba1] text-[24px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>4m/s</p>
            </div>
          </div>
        </div>

        {/* 확인 버튼 */}
        <button onClick={onClose} className="w-full bg-[#a2cba1] h-[48px] rounded-[20px] text-white text-[24px] font-medium hover:bg-[#92bb91] transition-colors">
          확인
        </button>
      </div>
    </div>
  );
}
