import svgPaths from "./svg-o7xi4fuzfe";
import imgRun from "figma:asset/09fd30c08c13d3c82e1d7a854c26f7b13a0b48a7.png";
import imgHistory from "figma:asset/ea2ef4cea2d115c2dbf0fe8cfad9329c71837e2f.png";
import imgDistance from "figma:asset/b2cc293147aa05230b79ddfcd33c249c9131fdc4.png";
import imgShield from "figma:asset/aeb1449f27d63f126cb034272c1641d145b189dd.png";

function Icon() {
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

function Button() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-center left-[32px] rounded-[2.68435e+07px] top-[54px] w-[48px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute contents left-[21px] top-[42px]" data-name="경로 선택">
      <div className="absolute bg-white h-[198px] left-[calc(50%+0.5px)] rounded-[20px] top-[42px] translate-x-[-50%] w-[352px]" data-name="경로 선택">
        <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_Symbols2:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[44px] text-[#6a7282] text-[24px] text-nowrap top-[116px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <span className="text-[#967c58]">●</span>
        <span>{` 월곡사회복지관`}</span>
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_Symbols2:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[44px] text-[#6a7282] text-[24px] text-nowrap top-[190px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <span className="text-[#765896]">●</span>
        <span>{` 고려대역`}</span>
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-1/2 text-[#6a7282] text-[30px] text-center text-nowrap top-[61px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        경로 선택
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_Symbols:Regular',_sans-serif] font-normal leading-[25px] left-[50px] text-[#6a7282] text-[24px] text-nowrap top-[153px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        ↓
      </p>
      <Button />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute bg-[#a2cba1] h-[48px] left-[calc(50%-85px)] rounded-[15px] top-[285px] translate-x-[-50%] w-[137px]" data-name="최단 경로">
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute contents left-[21px] top-[269px]" data-name="최단 경로">
      <div className="absolute bg-white h-[157px] left-[calc(50%+0.5px)] rounded-[20px] top-[269px] translate-x-[-50%] w-[352px]" data-name="최단경로">
        <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-54.5px)] text-[#6a7282] text-[18px] text-center text-nowrap top-[345px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        가장 빠른 경로로 안내합니다.
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-97px)] text-[#6a7282] text-[18px] text-center text-nowrap top-[383px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        15분
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-18.5px)] text-[#6a7282] text-[18px] text-nowrap top-[383px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        2.1km
      </p>
      <div className="absolute left-[300px] size-[52px] top-[357px]" data-name="run">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRun} />
      </div>
      <Component1 />
      <div className="absolute flex flex-col font-['Nunito:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium h-[18px] justify-center leading-[0] left-[112.5px] text-[24px] text-center text-white top-[309px] translate-x-[-50%] translate-y-[-50%] w-[137px]">
        <p className="leading-[28px]">최단 경로</p>
      </div>
      <div className="absolute left-[43px] size-[27px] top-[382px]" data-name="history">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHistory} />
      </div>
      <div className="absolute left-[134px] size-[34px] top-[380px]" data-name="distance">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDistance} />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute bg-[#a2cba1] h-[48px] left-[calc(50%-85px)] rounded-[15px] top-[471px] translate-x-[-50%] w-[137px]" data-name="최단 경로">
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute bg-white h-[38px] left-[calc(50%-72px)] rounded-[30px] top-[643px] translate-x-[-50%] w-[161px]" data-name="위험요소 회피">
      <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-1/2 text-[#6a7282] text-[18px] text-center text-nowrap top-[6px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        위험요소 3개 회피
      </p>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute bg-white h-[38px] left-[calc(50%+59px)] rounded-[30px] top-[643px] translate-x-[-50%] w-[89px]" data-name="위험요소 회피">
      <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-1/2 text-[#6a7282] text-[18px] text-center text-nowrap top-[6px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        쉼터 경유
      </p>
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute contents left-[21px] top-[455px]" data-name="안전 경로">
      <div className="absolute bg-white h-[244px] left-[calc(50%+0.5px)] rounded-[20px] top-[455px] translate-x-[-50%] w-[352px]" data-name="최단경로">
        <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <div className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-152.5px)] text-[#6a7282] text-[18px] text-nowrap top-[531px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="mb-0">고령자 맞춤 안전 경로</p>
        <p>위험요소를 피하고 안전시설을 경유합니다.</p>
      </div>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_'Noto_Sans_Symbols2:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-7.5px)] text-[#f0b100] text-[18px] text-nowrap top-[484px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        추천 ★
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-97px)] text-[#6a7282] text-[18px] text-center text-nowrap top-[590px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        22분
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-18.5px)] text-[#6a7282] text-[18px] text-nowrap top-[590px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        2.8 km
      </p>
      <Component3 />
      <div className="absolute flex flex-col font-['Nunito:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium h-[18px] justify-center leading-[0] left-[112.5px] text-[24px] text-center text-white top-[495px] translate-x-[-50%] translate-y-[-50%] w-[137px]">
        <p className="leading-[28px]">안전 경로</p>
      </div>
      <div className="absolute left-[43px] size-[27px] top-[589px]" data-name="history">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHistory} />
      </div>
      <div className="absolute left-[134px] size-[34px] top-[587px]" data-name="distance">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDistance} />
      </div>
      <Component4 />
      <div className="absolute left-[311px] size-[44px] top-[638px]" data-name="shield">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgShield} />
      </div>
      <Component5 />
    </div>
  );
}

export default function Component7() {
  return (
    <div className="relative size-full" data-name="경로 선택">
      <div className="absolute bg-white h-[852px] left-0 top-0 w-[393px]" data-name="bg" />
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%+0.5px)] text-[#6a7282] text-[18px] text-center text-nowrap top-[806px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        ©️ 고려대학교 따숨
      </p>
      <Component />
      <Component2 />
      <Component6 />
    </div>
  );
}