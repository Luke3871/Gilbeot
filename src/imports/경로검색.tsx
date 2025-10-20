import svgPaths from "./svg-09we2vynuf";
import imgMagnifier1 from "figma:asset/d0e0353cab5ee4a2f8f42c9390cf467acd4dc4d7.png";
import imgTime1 from "figma:asset/86e4831e0d40d474414293ed96169ba9c720a7aa.png";

function Icon() {
  return (
    <div className="absolute left-[306px] size-[32px] top-[259px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p2be67c80} id="Vector" stroke="var(--stroke-0, #967C58)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p10e75400} id="Vector_2" stroke="var(--stroke-0, #967C58)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pe638580} id="Vector_3" stroke="var(--stroke-0, #967C58)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute contents left-[31px] top-[197px]" data-name="출발지">
      <div className="absolute bg-white h-[56px] left-[calc(50%-1px)] rounded-[20px] top-[247px] translate-x-[-50%] w-[320px]" data-name="세부정보">
        <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_Symbols:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[27px] leading-[25px] left-[calc(50%-161px)] text-[#6a7282] text-[24px] top-[197px] tracking-[-1.5px] w-[175px] whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <span className="text-[#967c58]">●</span>
        <span>{`  출발지`}</span>
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[27px] leading-[25px] left-[calc(50%-141px)] text-[#6a7282] text-[18px] top-[261px] tracking-[-1.5px] w-[230px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        출발지를 입력하세요
      </p>
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[300px] size-[32px] top-[402px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p2be67c80} id="Vector" stroke="var(--stroke-0, #765896)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p10e75400} id="Vector_2" stroke="var(--stroke-0, #765896)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pe638580} id="Vector_3" stroke="var(--stroke-0, #765896)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute contents left-[31px] top-[340px]" data-name="도착지">
      <div className="absolute bg-white h-[56px] left-[calc(50%-1px)] rounded-[20px] top-[390px] translate-x-[-50%] w-[320px]" data-name="세부정보">
        <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_Symbols:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[27px] leading-[25px] left-[calc(50%-161px)] text-[#6a7282] text-[24px] top-[340px] tracking-[-1.5px] w-[175px] whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <span className="text-[#765896]">●</span>
        <span>{`  도착지`}</span>
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[27px] leading-[25px] left-[calc(50%-141px)] text-[#6a7282] text-[18px] top-[404px] tracking-[-1.5px] w-[230px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        도착지를 입력하세요
      </p>
      <Icon1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute bg-[#a2cba1] h-[48px] left-1/2 rounded-[15px] top-[639px] translate-x-[-50%] w-[320px]" data-name="경로검색">
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[123.38px] top-[645.97px]">
      <div className="absolute flex flex-col font-['Nunito:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium h-[28.044px] justify-center leading-[0] left-[203.01px] text-[22px] text-center text-white top-[663px] translate-x-[-50%] translate-y-[-50%] w-[87.136px]">
        <p className="leading-[28px]">경로 검색</p>
      </div>
      <div className="absolute left-[123.38px] size-[34.053px] top-[645.97px]" data-name="magnifier 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMagnifier1} />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute contents left-[32px] top-[639px]" data-name="경로 검색">
      <Component2 />
      <Group3 />
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute contents left-[31px] top-[482px]" data-name="최근 검색">
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-81px)] text-[#6a7282] text-[24px] text-center top-[485px] tracking-[-1.5px] translate-x-[-50%] w-[92px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        최근 검색
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%+154px)] text-[#a2cba1] text-[18px] text-right top-[482px] tracking-[-1.5px] translate-x-[-100%] w-[92px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        전체 삭제
      </p>
      <div className="absolute left-[31px] size-[25px] top-[485px]" data-name="time 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTime1} />
      </div>
      <div className="absolute bg-white h-[90px] left-[calc(50%-0.5px)] rounded-[20px] top-[528px] translate-x-[-50%] w-[319px]" data-name="최근 검색">
        <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_Symbols:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[11.364px] leading-[25px] left-[52px] text-[#6a7282] text-[0px] text-[18px] top-[537px] tracking-[-1.5px] w-[171px] whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <span className="text-[#967c58]">●</span> 월곡사회복지관
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_Symbols:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[11.364px] leading-[25px] left-[52px] text-[#6a7282] text-[0px] text-[18px] top-[584px] tracking-[-1.5px] w-[109px] whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <span className="text-[#765896]">●</span> 고려대역
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_Symbols:Regular',_sans-serif] font-normal h-[11.364px] leading-[25px] left-[54px] text-[#6a7282] text-[24px] top-[559.46px] tracking-[-1.5px] w-[12px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        ↓
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%+134px)] text-[#a2cba1] text-[18px] text-right top-[560px] tracking-[-1.5px] translate-x-[-100%] w-[92px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        방금 전
      </p>
    </div>
  );
}

export default function Component5() {
  return (
    <div className="bg-white relative rounded-[30px] size-full" data-name="경로 검색">
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[25px] left-[345px] text-[#99a1af] text-[24px] text-nowrap top-[16px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        x
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-0.5px)] text-[#6a7282] text-[30px] text-center text-nowrap top-[62px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        경로 검색
      </p>
      <div className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-0.5px)] text-[#6a7282] text-[24px] text-center text-nowrap top-[114px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="mb-0">출발지와 도착지를 입력하거나</p>
        <p>음성으로 말씀해주세요.</p>
      </div>
      <Component />
      <Component1 />
      <Component3 />
      <Component4 />
    </div>
  );
}