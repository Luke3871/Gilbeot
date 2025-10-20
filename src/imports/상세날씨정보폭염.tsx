import svgPaths from "./svg-yezngrcust";
import imgDust11 from "figma:asset/e10ad9e8d1b82481f5067b6b593813ed38ae8b58.png";
import imgHumidity from "figma:asset/27f890e5b011c38fb96ca3ac808dfd97af25d096.png";
import imgWindSign1 from "figma:asset/aef798f88d84cfe8e567fd675d6099188e33a5a1.png";
import imgRain1 from "figma:asset/4ddb56cb46848ed111828f52202244ae748c0311.png";
import imgFreeIconHeatwave176495541 from "figma:asset/6848cddb290bc168041765604099d6db945b78f7.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Icon">
          <path d={svgPaths.p22e49700} id="Vector" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M32 5.33333V10.6667" id="Vector_2" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M32 53.3333V58.6667" id="Vector_3" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p36abb00} id="Vector_4" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p28ad7600} id="Vector_5" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M5.33333 32H10.6667" id="Vector_6" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M53.3333 32H58.6667" id="Vector_7" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.pc686800} id="Vector_8" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p3251c2c0} id="Vector_9" stroke="var(--stroke-0, #F0B100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[112.65px]" data-name="Container">
      <p className="absolute font-['Nunito:Medium',_sans-serif] font-medium leading-[40px] left-0 text-[#6a7282] text-[36px] top-[-0.8px] w-[57px]">27°</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-0 top-[44px] w-[112.65px]" data-name="Container">
      <p className="basis-0 font-['Nunito:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[20px]">맑음</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[28px] left-0 top-[76px] w-[112.65px]" data-name="Container">
      <p className="absolute font-['Nunito:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[28px] left-0 text-[#4a5565] text-[18px] text-nowrap top-[-0.4px] whitespace-pre">서울시 성북구</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[100px] relative shrink-0 w-[112.65px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[100px] relative w-[112.65px]">
        <Container />
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function WeatherDetailDialog() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[50px] items-center left-[21px] top-[44px] w-[271px]" data-name="WeatherDetailDialog">
      <Icon />
      <Container3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3a14cd80} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[28px] relative shrink-0 w-[104.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[104.938px]">
        <p className="absolute font-['Nunito:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[28px] left-0 text-[#364153] text-[18px] top-[-0.4px] w-[105px]">체감온도 30°</p>
      </div>
    </div>
  );
}

function WeatherDetailDialog1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[28px] items-center left-[24px] top-[135px] w-[265px]" data-name="WeatherDetailDialog">
      <Icon1 />
      <Text />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[177px] left-[23px] rounded-[16px] top-[157px] w-[335px]" data-name="현재 날씨">
      <WeatherDetailDialog />
      <WeatherDetailDialog1 />
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute contents left-[calc(50%-1.3px)] top-[411px] translate-x-[-50%]" data-name="시간별 예보">
      <div className="absolute bg-white h-[107px] left-[calc(50%-127.3px)] rounded-[20px] top-[411px] translate-x-[-50%] w-[73px]" data-name="5~3">
        <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <div className="absolute bg-white h-[107px] left-[calc(50%-43.3px)] rounded-[20px] top-[411px] translate-x-[-50%] w-[73px]" data-name="5~3">
        <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <div className="absolute bg-white h-[107px] left-[calc(50%+40.7px)] rounded-[20px] top-[411px] translate-x-[-50%] w-[73px]" data-name="5~3">
        <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <div className="absolute bg-white h-[107px] left-[calc(50%+124.7px)] rounded-[20px] top-[411px] translate-x-[-50%] w-[73px]" data-name="5~3">
        <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute contents font-normal leading-[25px] left-[40.2px] text-center text-nowrap top-[436px] tracking-[-1.5px] whitespace-pre" data-name="시간별예보1">
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] left-[64.7px] text-[#6a7282] text-[18px] top-[436px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        18시
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] left-[64.7px] text-[#a2cba1] text-[24px] top-[469px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        25℃
      </p>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute contents font-normal leading-[25px] left-[292.2px] text-center text-nowrap top-[436px] tracking-[-1.5px] whitespace-pre" data-name="시간별예보4">
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] left-[316.7px] text-[#6a7282] text-[18px] top-[436px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        21시
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] left-[316.7px] text-[#a2cba1] text-[24px] top-[469px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        19℃
      </p>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute contents font-normal leading-[25px] left-[208.2px] text-center text-nowrap top-[436px] tracking-[-1.5px] whitespace-pre" data-name="시간별예보3">
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] left-[232.7px] text-[#6a7282] text-[18px] top-[436px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        20시
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] left-[232.7px] text-[#a2cba1] text-[24px] top-[469px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        22℃
      </p>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute contents font-normal leading-[25px] left-[124.2px] text-center text-nowrap top-[436px] tracking-[-1.5px] whitespace-pre" data-name="시간별예보2">
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] left-[148.7px] text-[#6a7282] text-[18px] top-[436px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        19시
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] left-[148.7px] text-[#a2cba1] text-[24px] top-[469px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        24℃
      </p>
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute contents left-[28.2px] top-[365px]" data-name="시간별 예보">
      <Component5 />
      <Component1 />
      <Component4 />
      <Component3 />
      <Component2 />
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-9px)] text-[#6a7282] text-[24px] text-center text-nowrap top-[365px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        시간별 예보
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[24px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3383d380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function WeatherDetailDialog2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[274px]" data-name="WeatherDetailDialog">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[274px]">
        <Icon2 />
        <p className="absolute font-['Nunito:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium leading-[28px] left-[32px] text-[24px] text-nowrap text-white top-[-1px] whitespace-pre">옷차림 추천</p>
      </div>
    </div>
  );
}

function WeatherDetailDialog3() {
  return (
    <div className="h-[31px] relative shrink-0 w-[303px]" data-name="WeatherDetailDialog">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31px] relative w-[303px]">
        <p className="absolute font-['Nunito:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[29.25px] left-0 text-[18px] text-nowrap text-white top-[-21px] whitespace-pre">얇은 긴팔이나 반팔이 좋아요</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute bg-[#a2cba1] box-border content-stretch flex flex-col gap-[36px] h-[119px] items-start left-[28.2px] pl-[24px] pr-0 py-[24px] rounded-[16px] top-[554px] w-[327px]" data-name="옷차림 추천">
      <WeatherDetailDialog2 />
      <WeatherDetailDialog3 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[24px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3383d380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function WeatherDetailDialog4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[274px]" data-name="WeatherDetailDialog">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[274px]">
        <Icon3 />
        <p className="absolute font-['Nunito:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium leading-[28px] left-[32px] text-[24px] text-nowrap text-white top-[-1px] whitespace-pre">건강 정보</p>
      </div>
    </div>
  );
}

function WeatherDetailDialog5() {
  return (
    <div className="h-[31px] relative shrink-0 w-[400.8px]" data-name="WeatherDetailDialog">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31px] relative w-[400.8px]">
        <div className="absolute font-['Nunito:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[29.25px] left-0 text-[18px] text-nowrap text-white top-[-21px] whitespace-pre">
          <p className="mb-0">더위로 인한 탈수를 조심하세요.</p>
          <p>수분을 충분히 섭취하세요.</p>
        </div>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute bg-[#a2cba1] box-border content-stretch flex flex-col gap-[36px] h-[145px] items-start left-[26px] pl-[24px] pr-0 py-[24px] rounded-[16px] top-[707px] w-[327px]" data-name="건강 정보">
      <WeatherDetailDialog4 />
      <WeatherDetailDialog5 />
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute contents left-[26.2px] top-[873px]" data-name="세부 정보">
      <div className="absolute bg-white h-[211.184px] left-[calc(50%-1.8px)] rounded-[20px] top-[921.82px] translate-x-[-50%] w-[328px]" data-name="세부정보">
        <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[26.531px] leading-[25px] left-[calc(50%-7.3px)] text-[#6a7282] text-[24px] text-center top-[873px] tracking-[-1.5px] translate-x-[-50%] w-[89px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        세부 정보
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-98.8px)] text-[#6a7282] text-[24px] top-[1079.2px] tracking-[-1.5px] w-[116px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        바람
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[26.531px] leading-[25px] left-[calc(50%-98.8px)] text-[#6a7282] text-[24px] top-[951px] tracking-[-1.5px] w-[84px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        강수확률
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal h-[26.531px] leading-[25px] left-[calc(50%+128.2px)] text-[#a2cba1] text-[24px] text-right top-[951px] tracking-[-1.5px] translate-x-[-100%] w-[84px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        12%
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[26.531px] leading-[25px] left-[calc(50%+128.2px)] text-[#a2cba1] text-[24px] text-right top-[995px] tracking-[-1.5px] translate-x-[-100%] w-[84px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        좋음
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal h-[26.531px] leading-[25px] left-[calc(50%+128.2px)] text-[#a2cba1] text-[24px] text-right top-[1037px] tracking-[-1.5px] translate-x-[-100%] w-[84px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        78%
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal h-[26.531px] leading-[25px] left-[calc(50%+128.2px)] text-[#a2cba1] text-[24px] text-right top-[1079px] tracking-[-1.5px] translate-x-[-100%] w-[84px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        2m/s
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[26.531px] leading-[25px] left-[calc(50%-98.8px)] text-[#6a7282] text-[24px] top-[995px] tracking-[-1.5px] w-[116px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        미세먼지
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[26.531px] leading-[25px] left-[calc(50%-98.8px)] text-[#6a7282] text-[24px] top-[1037px] tracking-[-1.5px] w-[116px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        습도
      </p>
      <div className="absolute left-[47.2px] size-[29px] top-[993px]" data-name="dust (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDust11} />
      </div>
      <div className="absolute left-[46.2px] size-[30px] top-[1037px]" data-name="humidity">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHumidity} />
      </div>
      <div className="absolute left-[50.2px] size-[23px] top-[1081px]" data-name="wind-sign 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWindSign1} />
      </div>
      <div className="absolute left-[50px] size-[26px] top-[953px]" data-name="rain 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRain1} />
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="absolute bg-[#a2cba1] h-[48px] left-[calc(50%+2.7px)] rounded-[20px] top-[1168px] translate-x-[-50%] w-[327px]" data-name="경로검색">
      <div aria-hidden="true" className="absolute border-[#9da8ad] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="absolute flex flex-col font-['Nunito:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium justify-center leading-[0] left-[163.5px] text-[24px] text-center text-nowrap text-white top-[24px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[28px] whitespace-pre">확인</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[112.65px]" data-name="Container">
      <p className="absolute font-['Nunito:Medium',_sans-serif] font-medium leading-[40px] left-0 text-[#6a7282] text-[36px] top-[-0.8px] w-[57px]">
        <span className="text-[#f54900]">37</span>°
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-0 top-[44px] w-[112.65px]" data-name="Container">
      <p className="basis-0 font-['Nunito:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[20px]">폭염</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[28px] left-0 top-[76px] w-[112.65px]" data-name="Container">
      <p className="absolute font-['Nunito:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[28px] left-0 text-[#4a5565] text-[18px] text-nowrap top-[-0.4px] whitespace-pre">서울시 성북구</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[100px] relative shrink-0 w-[112.65px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[100px] relative w-[112.65px]">
        <Container4 />
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function WeatherDetailDialog6() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[50px] items-center left-[21px] top-[44px] w-[271px]" data-name="WeatherDetailDialog">
      <div className="relative shrink-0 size-[52px]" data-name="free-icon-heatwave-17649554 1">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFreeIconHeatwave176495541} />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[52px]" />
      </div>
      <Container7 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3a14cd80} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[104.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[104.938px]">
        <p className="absolute font-['Nunito:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[28px] left-0 text-[#364153] text-[18px] top-[-0.4px] w-[105px]">체감온도 40°</p>
      </div>
    </div>
  );
}

function WeatherDetailDialog7() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[28px] items-center left-[24px] top-[135px] w-[265px]" data-name="WeatherDetailDialog">
      <Icon4 />
      <Text1 />
    </div>
  );
}

function Component11() {
  return (
    <div className="absolute h-[177px] left-[23px] rounded-[16px] top-[157px] w-[335px]" data-name="현재 날씨">
      <WeatherDetailDialog6 />
      <WeatherDetailDialog7 />
    </div>
  );
}

function Component12() {
  return (
    <div className="absolute contents left-[calc(50%-1.3px)] top-[411px] translate-x-[-50%]" data-name="시간별 예보">
      <div className="absolute bg-white h-[107px] left-[calc(50%-127.3px)] rounded-[20px] top-[411px] translate-x-[-50%] w-[73px]" data-name="5~3">
        <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <div className="absolute bg-white h-[107px] left-[calc(50%-43.3px)] rounded-[20px] top-[411px] translate-x-[-50%] w-[73px]" data-name="5~3">
        <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <div className="absolute bg-white h-[107px] left-[calc(50%+40.7px)] rounded-[20px] top-[411px] translate-x-[-50%] w-[73px]" data-name="5~3">
        <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <div className="absolute bg-white h-[107px] left-[calc(50%+124.7px)] rounded-[20px] top-[411px] translate-x-[-50%] w-[73px]" data-name="5~3">
        <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="absolute contents font-normal leading-[25px] left-[40.2px] text-center text-nowrap top-[436px] tracking-[-1.5px] whitespace-pre" data-name="시간별예보1">
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] left-[64.7px] text-[#6a7282] text-[18px] top-[436px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        18시
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] left-[64.7px] text-[#a2cba1] text-[24px] top-[469px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        35℃
      </p>
    </div>
  );
}

function Component14() {
  return (
    <div className="absolute contents font-normal leading-[25px] left-[292.2px] text-center text-nowrap top-[436px] tracking-[-1.5px] whitespace-pre" data-name="시간별예보4">
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] left-[316.7px] text-[#6a7282] text-[18px] top-[436px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        21시
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] left-[316.7px] text-[#a2cba1] text-[24px] top-[469px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        32℃
      </p>
    </div>
  );
}

function Component15() {
  return (
    <div className="absolute contents font-normal leading-[25px] left-[208.2px] text-center text-nowrap top-[436px] tracking-[-1.5px] whitespace-pre" data-name="시간별예보3">
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] left-[232.7px] text-[#6a7282] text-[18px] top-[436px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        20시
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] left-[232.7px] text-[#a2cba1] text-[24px] top-[469px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        33℃
      </p>
    </div>
  );
}

function Component16() {
  return (
    <div className="absolute contents font-normal leading-[25px] left-[124.2px] text-center text-nowrap top-[436px] tracking-[-1.5px] whitespace-pre" data-name="시간별예보2">
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] left-[148.7px] text-[#6a7282] text-[18px] top-[436px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        19시
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] left-[148.7px] text-[#a2cba1] text-[24px] top-[469px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        33℃
      </p>
    </div>
  );
}

function Component17() {
  return (
    <div className="absolute contents left-[28.2px] top-[365px]" data-name="시간별 예보">
      <Component12 />
      <Component13 />
      <Component14 />
      <Component15 />
      <Component16 />
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-9px)] text-[#6a7282] text-[24px] text-center text-nowrap top-[365px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        시간별 예보
      </p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[24px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3383d380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function WeatherDetailDialog8() {
  return (
    <div className="h-[28px] relative shrink-0 w-[274px]" data-name="WeatherDetailDialog">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[274px]">
        <Icon5 />
        <p className="absolute font-['Nunito:Medium',_'Noto_Sans_KR:Medium',_sans-serif] font-medium leading-[28px] left-[32px] text-[24px] text-nowrap text-white top-[-1px] whitespace-pre">옷차림 추천</p>
      </div>
    </div>
  );
}

function WeatherDetailDialog9() {
  return (
    <div className="h-[31px] relative shrink-0 w-[303px]" data-name="WeatherDetailDialog">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31px] relative w-[303px]">
        <div className="absolute font-['Nunito:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[29.25px] left-0 text-[18px] text-nowrap text-white top-[-21px] whitespace-pre">
          <p className="mb-0">가벼운 반팔이나</p>
          <p>통풍이 잘 되는 옷을 입으세요.</p>
        </div>
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="absolute bg-[#a2cba1] box-border content-stretch flex flex-col gap-[36px] h-[142px] items-start left-[28px] pl-[24px] pr-0 py-[24px] rounded-[16px] top-[554px] w-[327px]" data-name="옷차림 추천">
      <WeatherDetailDialog8 />
      <WeatherDetailDialog9 />
    </div>
  );
}

function Component19() {
  return (
    <div className="absolute contents left-[26.2px] top-[873px]" data-name="세부 정보">
      <div className="absolute bg-white h-[211.184px] left-[calc(50%-1.8px)] rounded-[20px] top-[921.82px] translate-x-[-50%] w-[328px]" data-name="세부정보">
        <div aria-hidden="true" className="absolute border-[#a2cba1] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[26.531px] leading-[25px] left-[calc(50%-7.3px)] text-[#6a7282] text-[24px] text-center top-[873px] tracking-[-1.5px] translate-x-[-50%] w-[89px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        세부 정보
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-98.8px)] text-[#6a7282] text-[24px] top-[1079.2px] tracking-[-1.5px] w-[116px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        바람
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[26.531px] leading-[25px] left-[calc(50%-98.8px)] text-[#6a7282] text-[24px] top-[951px] tracking-[-1.5px] w-[84px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        강수확률
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal h-[26.531px] leading-[25px] left-[calc(50%+128.2px)] text-[#a2cba1] text-[24px] text-right top-[951px] tracking-[-1.5px] translate-x-[-100%] w-[84px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        52%
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[26.531px] leading-[25px] left-[calc(50%+128.2px)] text-[#a2cba1] text-[24px] text-right top-[995px] tracking-[-1.5px] translate-x-[-100%] w-[84px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        좋음
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal h-[26.531px] leading-[25px] left-[calc(50%+128.2px)] text-[#a2cba1] text-[24px] text-right top-[1037px] tracking-[-1.5px] translate-x-[-100%] w-[84px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        88%
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal h-[26.531px] leading-[25px] left-[calc(50%+128.2px)] text-[#a2cba1] text-[24px] text-right top-[1079px] tracking-[-1.5px] translate-x-[-100%] w-[84px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        2m/s
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[26.531px] leading-[25px] left-[calc(50%-98.8px)] text-[#6a7282] text-[24px] top-[995px] tracking-[-1.5px] w-[116px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        미세먼지
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal h-[26.531px] leading-[25px] left-[calc(50%-98.8px)] text-[#6a7282] text-[24px] top-[1037px] tracking-[-1.5px] w-[116px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        습도
      </p>
      <div className="absolute left-[47.2px] size-[29px] top-[993px]" data-name="dust (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDust11} />
      </div>
      <div className="absolute left-[46.2px] size-[30px] top-[1037px]" data-name="humidity">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHumidity} />
      </div>
      <div className="absolute left-[50.2px] size-[23px] top-[1081px]" data-name="wind-sign 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWindSign1} />
      </div>
      <div className="absolute left-[50px] size-[26px] top-[953px]" data-name="rain 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRain1} />
      </div>
    </div>
  );
}

export default function Component21() {
  return (
    <div className="bg-white relative rounded-[30px] size-full" data-name="상세 날씨 정보 - 폭염">
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[25px] left-[345px] text-[#99a1af] text-[24px] text-nowrap top-[16px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        x
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-0.5px)] text-[#6a7282] text-[30px] text-center text-nowrap top-[62px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        상세 날씨 정보
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-1px)] text-[#6a7282] text-[0px] text-center text-nowrap top-[95px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <span className="text-[18px]">현재 날씨와 시간별 예보, 건강 정보를 확인하세요</span>
        <span className="text-[30px]"> </span>
      </p>
      <Component />
      <Component6 />
      <Component7 />
      <Component8 />
      <Component9 />
      <Component10 />
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[25px] left-[345px] text-[#99a1af] text-[24px] text-nowrap top-[16px] tracking-[-1.5px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        x
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-0.5px)] text-[#6a7282] text-[30px] text-center text-nowrap top-[62px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        상세 날씨 정보
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[25px] left-[calc(50%-1px)] text-[#6a7282] text-[0px] text-center text-nowrap top-[95px] tracking-[-1.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <span className="text-[18px]">현재 날씨와 시간별 예보, 건강 정보를 확인하세요</span>
        <span className="text-[30px]"> </span>
      </p>
      <Component11 />
      <Component17 />
      <Component18 />
      <Component19 />
      <Component10 />
    </div>
  );
}