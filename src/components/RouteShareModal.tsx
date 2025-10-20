import imgFreeIconKakaoTalk3669973 from "figma:asset/b551b51b4621ec6926af30fbc56e3971b997ed91.png";
import imgMessage1 from "figma:asset/5025ec0decf57e3cd116686df873d13faf720b61.png";

interface RouteShareModalProps {
  onClose: () => void;
  departure: string;
  destination: string;
}

export default function RouteShareModal({ onClose, departure, destination }: RouteShareModalProps) {
  const handleKakaoShare = () => {
    alert('카카오톡으로 경로를 공유합니다.');
  };

  const handleMessageShare = () => {
    alert('메시지로 경로를 공유합니다.');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]" onClick={onClose}>
      <div className="bg-white relative rounded-[30px] w-[393px] h-[500px]" onClick={(e) => e.stopPropagation()}>
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
          경로 공유
        </p>

        {/* 서브타이틀 */}
        <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-0.5px)] text-[#6a7282] text-[24px] text-center text-nowrap top-[114px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          경로를 다른 사람들과 공유해보세요
        </p>

        {/* 경로 정보 박스 */}
        <div className="absolute bg-white h-[90px] left-[calc(50%-0.5px)] rounded-[20px] top-[166px] translate-x-[-50%] w-[319px]">
          <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
          
          {/* 출발지 */}
          <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_Symbols2:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[20px] text-[#6a7282] text-[18px] top-[9px] tracking-[-1.5px] whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            <span className="text-[#967c58]">●</span> {departure || '월곡사회복지관'}
          </p>
          
          {/* 화살표 */}
          <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_Symbols:Regular',_sans-serif] font-normal leading-[25px] left-[22px] text-[#6a7282] text-[24px] top-[31.46px] tracking-[-1.5px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            ↓
          </p>
          
          {/* 도착지 */}
          <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_Symbols2:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[20px] text-[#6a7282] text-[18px] top-[56px] tracking-[-1.5px] whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            <span className="text-[#765896]">●</span> {destination || '고려대역'}
          </p>
        </div>

        {/* 카카오톡 공유 */}
        <button 
          onClick={handleKakaoShare}
          className="absolute bg-[#a2cba1] h-[118px] left-[calc(50%-84.5px)] rounded-[15px] top-[283px] translate-x-[-50%] w-[151px] cursor-pointer hover:opacity-90 transition-opacity border-0"
        >
          <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-0 pointer-events-none rounded-[15px]" />
          <div className="absolute left-[55px] size-[42px] top-[17px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFreeIconKakaoTalk3669973} />
          </div>
          <div className="absolute flex flex-col font-['Nunito:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold h-[27.918px] justify-center leading-[0] left-[calc(50%-0.76px)] text-[24px] text-center text-white top-[86px] translate-x-[-50%] w-[101.537px]">
            <p className="leading-[28px]">카카오톡</p>
          </div>
        </button>

        {/* 메시지 공유 */}
        <button 
          onClick={handleMessageShare}
          className="absolute bg-[#a2cba1] h-[118px] left-[calc(50%+83.5px)] rounded-[15px] top-[283px] translate-x-[-50%] w-[151px] cursor-pointer hover:opacity-90 transition-opacity border-0"
        >
          <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-0 pointer-events-none rounded-[15px]" />
          <div className="absolute left-[54px] size-[43px] top-[19px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMessage1} />
          </div>
          <div className="absolute flex flex-col font-['Nunito:Bold',_'Noto_Sans_KR:Bold',_sans-serif] font-bold h-[27.918px] justify-center leading-[0] left-[calc(50%-0.76px)] text-[24px] text-center text-white top-[86px] translate-x-[-50%] w-[101.537px]">
            <p className="leading-[28px]">메시지</p>
          </div>
        </button>

        {/* 취소 버튼 */}
        <button 
          onClick={onClose}
          className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-2.5px)] text-[#6a7282] text-[24px] text-center text-nowrap top-[447px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre cursor-pointer hover:text-[#4a5565] bg-transparent border-0" 
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          취소
        </button>
      </div>
    </div>
  );
}
