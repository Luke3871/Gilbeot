import svgPaths from "./svg-c1lfcjq8cv";
import imgFreeIconCaution45394721 from "figma:asset/541382b4734b7c75071b071e22e70b945142ebf5.png";
import imgHistory from "figma:asset/ea2ef4cea2d115c2dbf0fe8cfad9329c71837e2f.png";
import imgDistance from "figma:asset/b2cc293147aa05230b79ddfcd33c249c9131fdc4.png";
import imgHomeButton1 from "figma:asset/96d25598b2e1fe4a533c71d0332b4ee2b2923558.png";

function Component() {
  return (
    <div className="absolute bg-[#a2cba1] h-[55px] left-[calc(50%-2px)] rounded-[15px] top-[166px] translate-x-[-50%] w-[347px]" data-name="위험요소 알림">
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-0 pointer-events-none rounded-[15px]" />
      <div className="absolute left-[13px] size-[27px] top-[14px]" data-name="free-icon-caution-4539472 1">
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
  );
}

function Component1() {
  return (
    <div className="absolute contents left-[75px] top-[116px]" data-name="시간 거리">
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-60px)] text-[#6a7282] text-[18px] text-center text-nowrap top-[119px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        15분
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%+18.5px)] text-[#6a7282] text-[18px] text-nowrap top-[119px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        2.1km
      </p>
      <div className="absolute left-[75px] size-[27px] top-[118px]" data-name="history">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHistory} />
      </div>
      <div className="absolute left-[166px] size-[34px] top-[116px]" data-name="distance">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDistance} />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[286px] size-[32px] top-[38px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p2be67c80} id="Vector" stroke="var(--stroke-0, #A2CBA1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p10e75400} id="Vector_2" stroke="var(--stroke-0, #A2CBA1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pe638580} id="Vector_3" stroke="var(--stroke-0, #A2CBA1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #A2CBA1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #A2CBA1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-center left-[27px] rounded-[2.68435e+07px] top-[34px] w-[48px]" data-name="뒤로가기">
      <Icon1 />
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute h-[730px] left-0 top-0 w-[393px]" data-name="최단 경로">
      <Component />
      <Component1 />
      <div className="absolute bg-white h-[512px] left-[calc(50%+0.5px)] rounded-[20px] top-[235px] translate-x-[-50%] w-[352px]" data-name="최단경로">
        <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <Icon />
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_'Noto_Sans_Symbols:Regular',_sans-serif] font-normal leading-[25px] left-[75px] text-[#6a7282] text-[18px] text-nowrap top-[82px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        월곡사회복지관 → 고려대역
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-116.5px)] text-[#6a7282] text-[30px] top-[41px] tracking-[-1.5px] w-[117px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        최단 경로
      </p>
      <Component2 />
      <div className="absolute left-[326px] size-[26px] top-[41px]" data-name="home-button 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHomeButton1} />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p185fb780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p30ca5e80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pac25b80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.72668 9.00666L10.28 11.66" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p33364c70} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute bg-[#a2cba1] h-[36px] left-[280px] rounded-[2.68435e+07px] top-[759px] w-[76px]" data-name="공유">
      <Icon2 />
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[20px] left-[31px] text-[18px] text-nowrap text-white top-[7px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        공유
      </p>
    </div>
  );
}

export default function Component5() {
  return (
    <div className="relative size-full" data-name="최단 경로">
      <div className="absolute bg-white h-[852px] left-0 top-0 w-[393px]" data-name="bg" />
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%+0.5px)] text-[#6a7282] text-[18px] text-center text-nowrap top-[806px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        ©️ 고려대학교 따숨
      </p>
      <Component3 />
      <Component4 />
    </div>
  );
}