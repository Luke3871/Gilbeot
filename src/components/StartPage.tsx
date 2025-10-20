import svgPaths from "../imports/svg-814tfsz32d";
import imgRoute1 from "figma:asset/e3c8fd4b353f063201270839856224c6f3ff56b0.png";

function Group1() {
  return (
    <div className="absolute contents left-[95px] top-[150.6px]">
      <div className="absolute left-[125.95px] size-[140.223px] top-[183.48px]" data-name="route 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRoute1} />
      </div>
      <p className="absolute font-['NanumGothic:Regular',_sans-serif] h-[49.32px] leading-[28px] left-[141.42px] not-italic text-[30px] text-white top-[201.86px] w-[55.122px]">🧓🏻</p>
      <p className="absolute font-['NanumGothic:Regular',_sans-serif] h-[27.078px] leading-[28px] left-[220.72px] not-italic text-[30px] text-white top-[263.75px] w-[29.012px]">👵🏼</p>
      <div className="absolute h-[206.95px] left-[95px] top-[150.6px] w-[202.115px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203 207">
          <path d={svgPaths.p3b8eca00} fill="var(--fill-0, white)" fillOpacity="0.1" id="Ellipse 1" stroke="var(--stroke-0, white)" strokeWidth="2.5" />
        </svg>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute contents left-[95px] top-[150.6px]" data-name="logo">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#a2cba1] h-[852px] left-0 top-0 w-[393px]" data-name="bg" />
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal h-[25px] leading-[25px] left-1/2 text-[18px] text-center text-white top-[806px] tracking-[-1.5px] translate-x-[-50%] w-[155px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        ©️ 고려대학교 따숨
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal h-[25px] leading-[25px] left-1/2 text-[24px] text-center text-white top-[516px] tracking-[-1.5px] translate-x-[-50%] w-[277px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        고령층을 위한 안전 동행 지도
      </p>
      <p className="absolute font-['Nanum_Brush_Script:Regular',_sans-serif] h-[25.613px] leading-[25px] left-[189.02px] not-italic text-[95px] text-center text-white top-[426px] tracking-[-1.5px] translate-x-[-50%] w-[134.21px]">길벗</p>
      <Logo />
    </div>
  );
}

interface StartPageProps {
  onClick: () => void;
}

export default function StartPage({ onClick }: StartPageProps) {
  return (
    <div className="relative size-full cursor-pointer" data-name="시작 페이지" onClick={onClick}>
      <Group2 />
    </div>
  );
}
