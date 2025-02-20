import './SvgBg.css'
import { useState, useEffect } from 'react'

const SvgBG = () => {
  const width = 1440
  const height = 768
  const [winWidth, setWidth] = useState(1440)
  const [winHeight, setHeight] = useState(768)

  useEffect(() => {
    setWidth(window.width)
    setHeight(window.height)
    //eslint-disable-next-line
  }, [])

  console.log(winWidth)

  return (
    <svg
      version="1.1"
      id="Слой_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox={`0 0 ${winWidth || width} ${winHeight || height}`}
      style={{ enableBackground: `new 0 0 ${winWidth || width} ${winHeight || height}` }}
    >
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="-1"
        y1="384"
        x2="1441"
        y2="384"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <rect className="st0" width={winWidth || width} height={winHeight || height} />
      <linearGradient
        id="SVGID_2_"
        gradientUnits="userSpaceOnUse"
        x1="58.4"
        y1="93"
        x2="541.6"
        y2="93"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st1"
        d="M534.4,587.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S534.4,585.8,534.4,587.5L534.4,587.5z
         M59.4,762.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1C60.8,759.4,59.4,760.8,59.4,762.5z"
      />
      <linearGradient
        id="SVGID_3_"
        gradientUnits="userSpaceOnUse"
        x1="633.4"
        y1="243"
        x2="1116.6"
        y2="243"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st2"
        d="M1109.4,287.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1109.4,285.8,1109.4,287.5L1109.4,287.5
        z M634.4,762.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S634.4,760.8,634.4,762.5z"
      />
      <linearGradient
        id="SVGID_4_"
        gradientUnits="userSpaceOnUse"
        x1="133.4"
        y1="330.5"
        x2="216.6"
        y2="330.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st3"
        d="M134.4,287.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        C135.8,284.4,134.4,285.8,134.4,287.5L134.4,287.5z M209.4,587.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0
        c0-1.7-1.4-3.1-3.1-3.1C210.8,584.4,209.4,585.8,209.4,587.5L209.4,587.5z"
      />
      <linearGradient
        id="SVGID_5_"
        gradientUnits="userSpaceOnUse"
        x1="383.4"
        y1="405.5"
        x2="566.6"
        y2="405.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st4"
        d="M384.4,562.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S384.4,560.8,384.4,562.5z M559.4,162.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S559.4,160.8,559.4,162.5L559.4,162.5z"
      />
      <linearGradient
        id="SVGID_6_"
        gradientUnits="userSpaceOnUse"
        x1="283.4"
        y1="568"
        x2="766.6"
        y2="568"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st5"
        d="M759.4,137.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S759.4,135.8,759.4,137.5L759.4,137.5z
         M284.4,262.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S284.4,260.8,284.4,262.5z"
      />
      <linearGradient
        id="SVGID_7_"
        gradientUnits="userSpaceOnUse"
        x1="133.4"
        y1="218"
        x2="216.6"
        y2="218"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st6"
        d="M134.4,362.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        C135.8,359.4,134.4,360.8,134.4,362.5L134.4,362.5z M209.4,737.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0
        c0-1.7-1.4-3.1-3.1-3.1C210.8,734.4,209.4,735.8,209.4,737.5L209.4,737.5z"
      />
      <linearGradient
        id="SVGID_8_"
        gradientUnits="userSpaceOnUse"
        x1="933.4"
        y1="55.5"
        x2="1416.6"
        y2="55.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st7"
        d="M934.4,662.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S934.4,660.8,934.4,662.5z M1409.4,762.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1409.4,760.8,1409.4,762.5z"
      />
      <linearGradient
        id="SVGID_9_"
        gradientUnits="userSpaceOnUse"
        x1="583.4"
        y1="230.5"
        x2="766.6"
        y2="230.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st8"
        d="M759.4,312.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S759.4,310.8,759.4,312.5z M584.4,762.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S584.4,760.8,584.4,762.5z"
      />
      <linearGradient
        id="SVGID_10_"
        gradientUnits="userSpaceOnUse"
        x1="633.4"
        y1="468"
        x2="1116.6"
        y2="468"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st9"
        d="M634.4,337.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S634.4,335.8,634.4,337.5L634.4,337.5z
         M1109.4,262.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1109.4,260.8,1109.4,262.5z"
      />
      <linearGradient
        id="SVGID_11_"
        gradientUnits="userSpaceOnUse"
        x1="1058.37"
        y1="55.5"
        x2="1066.63"
        y2="55.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st10"
        d="M1059.4,687.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1059.4,685.8,1059.4,687.5
        L1059.4,687.5z M1059.4,737.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1059.4,735.8,1059.4,737.5z"
      />
      <linearGradient
        id="SVGID_12_"
        gradientUnits="userSpaceOnUse"
        x1="1408.4"
        y1="643"
        x2="1441.66"
        y2="643"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st11"
        d="M1409.4,237.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1409.4,235.8,1409.4,237.5
        L1409.4,237.5z M1434.4,12.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1434.4,10.8,1434.4,12.5L1434.4,12.5z"
      />
      <linearGradient
        id="SVGID_13_"
        gradientUnits="userSpaceOnUse"
        x1="908.4"
        y1="518"
        x2="1391.6"
        y2="518"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st12"
        d="M909.4,262.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S909.4,260.8,909.4,262.5z M1384.4,237.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1384.4,235.8,1384.4,237.5L1384.4,237.5z"
      />
      <linearGradient
        id="SVGID_14_"
        gradientUnits="userSpaceOnUse"
        x1="933.4"
        y1="255.5"
        x2="991.66"
        y2="255.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st13"
        d="M984.4,537.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S984.4,535.8,984.4,537.5z M934.4,487.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S934.4,485.8,934.4,487.5L934.4,487.5z"
      />
      <linearGradient
        id="SVGID_15_"
        gradientUnits="userSpaceOnUse"
        x1="983.4"
        y1="80.5"
        x2="1041.66"
        y2="80.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st14"
        d="M984.4,637.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S984.4,635.8,984.4,637.5z M1034.4,737.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1034.4,735.8,1034.4,737.5z"
      />
      <linearGradient
        id="SVGID_16_"
        gradientUnits="userSpaceOnUse"
        x1="1083.4"
        y1="430.5"
        x2="1441.6"
        y2="430.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st15"
        d="M1084.4,387.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1084.4,385.8,1084.4,387.5
        L1084.4,387.5z M1434.4,287.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1434.4,285.8,1434.4,287.5L1434.4,287.5z"
      />
      <linearGradient
        id="SVGID_17_"
        gradientUnits="userSpaceOnUse"
        x1="8.4"
        y1="718"
        x2="291.6"
        y2="718"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st16"
        d="M284.4,87.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S284.4,85.8,284.4,87.5L284.4,87.5z
         M9.4,12.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1S9.4,10.8,9.4,12.5L9.4,12.5z"
      />
      <linearGradient
        id="SVGID_18_"
        gradientUnits="userSpaceOnUse"
        x1="233.4"
        y1="368"
        x2="466.6"
        y2="368"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st17"
        d="M234.4,312.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        C235.8,309.4,234.4,310.8,234.4,312.5L234.4,312.5z M459.4,487.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1
        S459.4,485.8,459.4,487.5L459.4,487.5z"
      />
      <linearGradient
        id="SVGID_19_"
        gradientUnits="userSpaceOnUse"
        x1="608.4"
        y1="743"
        x2="1091.6"
        y2="743"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st18"
        d="M609.4,12.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S609.4,10.8,609.4,12.5L609.4,12.5z
         M1084.4,37.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1084.4,35.8,1084.4,37.5L1084.4,37.5z"
      />
      <linearGradient
        id="SVGID_20_"
        gradientUnits="userSpaceOnUse"
        x1="1233.4"
        y1="318"
        x2="1391.6"
        y2="318"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st19"
        d="M1234.4,287.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1234.4,285.8,1234.4,287.5
        L1234.4,287.5z M1384.4,612.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1384.4,610.8,1384.4,612.5z"
      />
      <linearGradient
        id="SVGID_21_"
        gradientUnits="userSpaceOnUse"
        x1="708.4"
        y1="30.5"
        x2="766.66"
        y2="30.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st20"
        d="M759.4,762.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S759.4,760.8,759.4,762.5z M709.4,712.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S709.4,710.8,709.4,712.5z"
      />
      <linearGradient
        id="SVGID_22_"
        gradientUnits="userSpaceOnUse"
        x1="283.4"
        y1="630.5"
        x2="641.6"
        y2="630.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st21"
        d="M284.4,237.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S284.4,235.8,284.4,237.5L284.4,237.5z
         M634.4,37.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S634.4,35.8,634.4,37.5L634.4,37.5z"
      />
      <linearGradient
        id="SVGID_23_"
        gradientUnits="userSpaceOnUse"
        x1="483.4"
        y1="305.5"
        x2="591.6"
        y2="305.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st22"
        d="M584.4,362.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S584.4,360.8,584.4,362.5z M484.4,562.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S484.4,560.8,484.4,562.5z"
      />
      <linearGradient
        id="SVGID_24_"
        gradientUnits="userSpaceOnUse"
        x1="508.4"
        y1="80.5"
        x2="541.66"
        y2="80.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st23"
        d="M534.4,612.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S534.4,610.8,534.4,612.5z M509.4,762.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1C510.8,759.4,509.4,760.8,509.4,762.5z"
      />
      <linearGradient
        id="SVGID_25_"
        gradientUnits="userSpaceOnUse"
        x1="1208.4"
        y1="243"
        x2="1241.66"
        y2="243"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st24"
        d="M1209.4,437.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1209.4,435.8,1209.4,437.5
        L1209.4,437.5z M1234.4,612.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1234.4,610.8,1234.4,612.5z"
      />
      <linearGradient
        id="SVGID_26_"
        gradientUnits="userSpaceOnUse"
        x1="833.4"
        y1="93"
        x2="1166.6"
        y2="93"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st25"
        d="M1159.4,587.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1159.4,585.8,1159.4,587.5
        L1159.4,587.5z M834.4,762.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S834.4,760.8,834.4,762.5z"
      />
      <linearGradient
        id="SVGID_27_"
        gradientUnits="userSpaceOnUse"
        x1="108.37"
        y1="605.5"
        x2="116.63"
        y2="605.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st26"
        d="M109.4,287.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S109.4,285.8,109.4,287.5z M109.4,37.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S109.4,35.8,109.4,37.5z"
      />
      <linearGradient
        id="SVGID_28_"
        gradientUnits="userSpaceOnUse"
        x1="1033.4"
        y1="680.5"
        x2="1391.6"
        y2="680.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st27"
        d="M1384.4,162.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1384.4,160.8,1384.4,162.5
        L1384.4,162.5z M1034.4,12.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1034.4,10.8,1034.4,12.5L1034.4,12.5z"
      />
      <linearGradient
        id="SVGID_29_"
        gradientUnits="userSpaceOnUse"
        x1="358.4"
        y1="243"
        x2="466.6"
        y2="243"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st28"
        d="M359.4,512.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1c0-1.7-1.4-3.1-3.1-3.1S359.4,510.8,359.4,512.5z
         M459.4,537.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S459.4,535.8,459.4,537.5z"
      />
      <linearGradient
        id="SVGID_30_"
        gradientUnits="userSpaceOnUse"
        x1="183.4"
        y1="318"
        x2="266.6"
        y2="318"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st29"
        d="M184.4,337.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        C185.8,334.4,184.4,335.8,184.4,337.5L184.4,337.5z M259.4,562.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1
        S259.4,560.8,259.4,562.5z"
      />
      <linearGradient
        id="SVGID_31_"
        gradientUnits="userSpaceOnUse"
        x1="1358.4"
        y1="93"
        x2="1441.6"
        y2="93"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st30"
        d="M1359.4,587.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1359.4,585.8,1359.4,587.5
        L1359.4,587.5z M1434.4,762.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1434.4,760.8,1434.4,762.5z"
      />
      <linearGradient
        id="SVGID_32_"
        gradientUnits="userSpaceOnUse"
        x1="658.4"
        y1="718"
        x2="966.6"
        y2="718"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st31"
        d="M959.4,87.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S959.4,85.8,959.4,87.5L959.4,87.5z
         M659.4,12.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S659.4,10.8,659.4,12.5L659.4,12.5z"
      />
      <linearGradient
        id="SVGID_33_"
        gradientUnits="userSpaceOnUse"
        x1="158.4"
        y1="618"
        x2="616.6"
        y2="618"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st32"
        d="M159.4,212.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1S159.4,210.8,159.4,212.5
        L159.4,212.5z M609.4,87.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S609.4,85.8,609.4,87.5L609.4,87.5z"
      />
      <linearGradient
        id="SVGID_34_"
        gradientUnits="userSpaceOnUse"
        x1="283.4"
        y1="443"
        x2="441.6"
        y2="443"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st33"
        d="M434.4,337.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S434.4,335.8,434.4,337.5L434.4,337.5z
         M284.4,312.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S284.4,310.8,284.4,312.5z"
      />
      <linearGradient
        id="SVGID_35_"
        gradientUnits="userSpaceOnUse"
        x1="1008.37"
        y1="255.5"
        x2="1016.63"
        y2="255.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st34"
        d="M1009.4,462.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1009.4,460.8,1009.4,462.5
        L1009.4,462.5z M1009.4,562.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1009.4,560.8,1009.4,562.5z"
      />
      <linearGradient
        id="SVGID_36_"
        gradientUnits="userSpaceOnUse"
        x1="783.4"
        y1="405.5"
        x2="866.6"
        y2="405.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st35"
        d="M859.4,412.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S859.4,410.8,859.4,412.5L859.4,412.5z
         M784.4,312.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S784.4,310.8,784.4,312.5z"
      />
      <linearGradient
        id="SVGID_37_"
        gradientUnits="userSpaceOnUse"
        x1="533.37"
        y1="543"
        x2="541.63"
        y2="543"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st36"
        d="M534.4,337.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S534.4,335.8,534.4,337.5L534.4,337.5z
         M534.4,112.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S534.4,110.8,534.4,112.5L534.4,112.5z"
      />
      <linearGradient
        id="SVGID_38_"
        gradientUnits="userSpaceOnUse"
        x1="183.4"
        y1="693"
        x2="541.6"
        y2="693"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st37"
        d="M184.4,137.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1S184.4,135.8,184.4,137.5
        L184.4,137.5z M534.4,12.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S534.4,10.8,534.4,12.5L534.4,12.5z"
      />
      <linearGradient
        id="SVGID_39_"
        gradientUnits="userSpaceOnUse"
        x1="308.37"
        y1="730.5"
        x2="316.63"
        y2="730.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st38"
        d="M309.4,62.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S309.4,60.8,309.4,62.5L309.4,62.5z
         M309.4,12.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S309.4,10.8,309.4,12.5L309.4,12.5z"
      />
      <linearGradient
        id="SVGID_40_"
        gradientUnits="userSpaceOnUse"
        x1="133.4"
        y1="468"
        x2="441.6"
        y2="468"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st39"
        d="M434.4,512.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1c0-1.7-1.4-3.1-3.1-3.1S434.4,510.8,434.4,512.5z
         M134.4,87.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1C135.8,84.4,134.4,85.8,134.4,87.5L134.4,87.5z
        "
      />
      <linearGradient
        id="SVGID_41_"
        gradientUnits="userSpaceOnUse"
        x1="608.37"
        y1="193"
        x2="616.63"
        y2="193"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st40"
        d="M609.4,412.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S609.4,410.8,609.4,412.5L609.4,412.5z
         M609.4,737.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S609.4,735.8,609.4,737.5z"
      />
      <linearGradient
        id="SVGID_42_"
        gradientUnits="userSpaceOnUse"
        x1="933.4"
        y1="80.5"
        x2="1391.6"
        y2="80.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st41"
        d="M1384.4,737.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1384.4,735.8,1384.4,737.5z
         M934.4,637.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S934.4,635.8,934.4,637.5z"
      />
      <linearGradient
        id="SVGID_43_"
        gradientUnits="userSpaceOnUse"
        x1="183.4"
        y1="243"
        x2="291.6"
        y2="243"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st42"
        d="M184.4,487.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        C185.8,484.4,184.4,485.8,184.4,487.5L184.4,487.5z M284.4,562.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1
        S284.4,560.8,284.4,562.5z"
      />
      <linearGradient
        id="SVGID_44_"
        gradientUnits="userSpaceOnUse"
        x1="158.4"
        y1="493"
        x2="216.66"
        y2="493"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st43"
        d="M209.4,312.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        C210.8,309.4,209.4,310.8,209.4,312.5L209.4,312.5z M159.4,237.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        S159.4,235.8,159.4,237.5L159.4,237.5z"
      />
      <linearGradient
        id="SVGID_45_"
        gradientUnits="userSpaceOnUse"
        x1="358.4"
        y1="430.5"
        x2="491.6"
        y2="430.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st44"
        d="M484.4,287.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S484.4,285.8,484.4,287.5L484.4,287.5z
         M359.4,387.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S359.4,385.8,359.4,387.5L359.4,387.5z"
      />
      <linearGradient
        id="SVGID_46_"
        gradientUnits="userSpaceOnUse"
        x1="1358.4"
        y1="168"
        x2="1391.66"
        y2="168"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st45"
        d="M1384.4,687.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1384.4,685.8,1384.4,687.5
        L1384.4,687.5z M1359.4,512.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1c0-1.7-1.4-3.1-3.1-3.1S1359.4,510.8,1359.4,512.5z"
      />
      <linearGradient
        id="SVGID_47_"
        gradientUnits="userSpaceOnUse"
        x1="1083.4"
        y1="30.5"
        x2="1141.66"
        y2="30.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st46"
        d="M1084.4,737.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1084.4,735.8,1084.4,737.5z
         M1134.4,737.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1134.4,735.8,1134.4,737.5z"
      />
      <linearGradient
        id="SVGID_48_"
        gradientUnits="userSpaceOnUse"
        x1="883.4"
        y1="680.5"
        x2="1366.6"
        y2="680.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st47"
        d="M884.4,137.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S884.4,135.8,884.4,137.5L884.4,137.5z
         M1359.4,37.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1359.4,35.8,1359.4,37.5L1359.4,37.5z"
      />
      <linearGradient
        id="SVGID_49_"
        gradientUnits="userSpaceOnUse"
        x1="583.4"
        y1="530.5"
        x2="691.6"
        y2="530.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st48"
        d="M684.4,362.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S684.4,360.8,684.4,362.5z M584.4,112.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S584.4,110.8,584.4,112.5L584.4,112.5z"
      />
      <linearGradient
        id="SVGID_50_"
        gradientUnits="userSpaceOnUse"
        x1="458.4"
        y1="143"
        x2="516.66"
        y2="143"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st49"
        d="M459.4,637.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S459.4,635.8,459.4,637.5z M509.4,612.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1C510.8,609.4,509.4,610.8,509.4,612.5z"
      />
      <linearGradient
        id="SVGID_51_"
        gradientUnits="userSpaceOnUse"
        x1="1183.4"
        y1="393"
        x2="1366.6"
        y2="393"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st50"
        d="M1184.4,487.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1184.4,485.8,1184.4,487.5
        L1184.4,487.5z M1359.4,262.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1359.4,260.8,1359.4,262.5z"
      />
      <linearGradient
        id="SVGID_52_"
        gradientUnits="userSpaceOnUse"
        x1="1158.4"
        y1="118"
        x2="1416.6"
        y2="118"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st51"
        d="M1159.4,562.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1159.4,560.8,1159.4,562.5z
         M1409.4,737.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1409.4,735.8,1409.4,737.5z"
      />
      <linearGradient
        id="SVGID_53_"
        gradientUnits="userSpaceOnUse"
        x1="333.4"
        y1="743"
        x2="416.6"
        y2="743"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st52"
        d="M409.4,37.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S409.4,35.8,409.4,37.5L409.4,37.5z
         M334.4,12.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S334.4,10.8,334.4,12.5L334.4,12.5z"
      />
      <linearGradient
        id="SVGID_54_"
        gradientUnits="userSpaceOnUse"
        x1="1058.4"
        y1="118"
        x2="1141.6"
        y2="118"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st53"
        d="M1134.4,687.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1134.4,685.8,1134.4,687.5
        L1134.4,687.5z M1059.4,612.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1059.4,610.8,1059.4,612.5z"
      />
      <linearGradient
        id="SVGID_55_"
        gradientUnits="userSpaceOnUse"
        x1="1033.4"
        y1="680.5"
        x2="1241.6"
        y2="680.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st54"
        d="M1234.4,62.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1234.4,60.8,1234.4,62.5L1234.4,62.5z
         M1034.4,112.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1034.4,110.8,1034.4,112.5L1034.4,112.5z"
      />
      <linearGradient
        id="SVGID_56_"
        gradientUnits="userSpaceOnUse"
        x1="8.4"
        y1="593"
        x2="91.6"
        y2="593"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st55"
        d="M84.4,112.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S84.4,110.8,84.4,112.5L84.4,112.5z
         M9.4,237.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1S9.4,235.8,9.4,237.5L9.4,237.5z"
      />
      <linearGradient
        id="SVGID_57_"
        gradientUnits="userSpaceOnUse"
        x1="8.4"
        y1="143"
        x2="91.6"
        y2="143"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st56"
        d="M84.4,662.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S84.4,660.8,84.4,662.5z M9.4,587.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1S9.4,585.8,9.4,587.5L9.4,587.5z"
      />
      <linearGradient
        id="SVGID_58_"
        gradientUnits="userSpaceOnUse"
        x1="1208.4"
        y1="430.5"
        x2="1341.6"
        y2="430.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st57"
        d="M1209.4,412.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1209.4,410.8,1209.4,412.5
        L1209.4,412.5z M1334.4,262.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1334.4,260.8,1334.4,262.5z"
      />
      <linearGradient
        id="SVGID_59_"
        gradientUnits="userSpaceOnUse"
        x1="558.4"
        y1="105.5"
        x2="616.66"
        y2="105.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st58"
        d="M609.4,562.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S609.4,560.8,609.4,562.5z M559.4,762.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S559.4,760.8,559.4,762.5z"
      />
      <linearGradient
        id="SVGID_60_"
        gradientUnits="userSpaceOnUse"
        x1="1033.4"
        y1="280.5"
        x2="1066.66"
        y2="280.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st59"
        d="M1059.4,412.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1059.4,410.8,1059.4,412.5
        L1059.4,412.5z M1034.4,562.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1034.4,560.8,1034.4,562.5z"
      />
      <linearGradient
        id="SVGID_61_"
        gradientUnits="userSpaceOnUse"
        x1="658.4"
        y1="93"
        x2="891.6"
        y2="93"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st60"
        d="M884.4,587.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S884.4,585.8,884.4,587.5L884.4,587.5z
         M659.4,762.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S659.4,760.8,659.4,762.5z"
      />
      <linearGradient
        id="SVGID_62_"
        gradientUnits="userSpaceOnUse"
        x1="608.4"
        y1="518"
        x2="941.6"
        y2="518"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st61"
        d="M934.4,162.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S934.4,160.8,934.4,162.5L934.4,162.5z
         M609.4,337.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S609.4,335.8,609.4,337.5L609.4,337.5z"
      />
      <linearGradient
        id="SVGID_63_"
        gradientUnits="userSpaceOnUse"
        x1="1283.4"
        y1="143"
        x2="1341.66"
        y2="143"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st62"
        d="M1334.4,662.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1334.4,660.8,1334.4,662.5z
         M1284.4,587.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1284.4,585.8,1284.4,587.5L1284.4,587.5z"
      />
      <linearGradient
        id="SVGID_64_"
        gradientUnits="userSpaceOnUse"
        x1="708.37"
        y1="405.5"
        x2="716.63"
        y2="405.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st63"
        d="M709.4,337.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S709.4,335.8,709.4,337.5L709.4,337.5z
         M709.4,387.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S709.4,385.8,709.4,387.5L709.4,387.5z"
      />
      <linearGradient
        id="SVGID_65_"
        gradientUnits="userSpaceOnUse"
        x1="958.4"
        y1="730.5"
        x2="1066.6"
        y2="730.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st64"
        d="M959.4,37.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S959.4,35.8,959.4,37.5L959.4,37.5z
         M1059.4,37.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1059.4,35.8,1059.4,37.5L1059.4,37.5z"
      />
      <linearGradient
        id="SVGID_66_"
        gradientUnits="userSpaceOnUse"
        x1="308.37"
        y1="155.5"
        x2="316.63"
        y2="155.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st65"
        d="M309.4,662.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S309.4,660.8,309.4,662.5z M309.4,562.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S309.4,560.8,309.4,562.5z"
      />
      <linearGradient
        id="SVGID_67_"
        gradientUnits="userSpaceOnUse"
        x1="683.37"
        y1="518"
        x2="691.63"
        y2="518"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st66"
        d="M684.4,212.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S684.4,210.8,684.4,212.5L684.4,212.5z
         M684.4,287.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S684.4,285.8,684.4,287.5L684.4,287.5z"
      />
      <linearGradient
        id="SVGID_68_"
        gradientUnits="userSpaceOnUse"
        x1="633.4"
        y1="518"
        x2="666.66"
        y2="518"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st67"
        d="M634.4,312.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S634.4,310.8,634.4,312.5z M659.4,187.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S659.4,185.8,659.4,187.5L659.4,187.5z"
      />
      <linearGradient
        id="SVGID_69_"
        gradientUnits="userSpaceOnUse"
        x1="1058.4"
        y1="305.5"
        x2="1141.6"
        y2="305.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st68"
        d="M1134.4,362.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1134.4,360.8,1134.4,362.5z
         M1059.4,562.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1059.4,560.8,1059.4,562.5z"
      />
      <linearGradient
        id="SVGID_70_"
        gradientUnits="userSpaceOnUse"
        x1="58.4"
        y1="480.5"
        x2="91.66"
        y2="480.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st69"
        d="M59.4,337.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        C60.8,334.4,59.4,335.8,59.4,337.5z M84.4,237.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S84.4,235.8,84.4,237.5z"
      />
      <linearGradient
        id="SVGID_71_"
        gradientUnits="userSpaceOnUse"
        x1="8.4"
        y1="68"
        x2="166.6"
        y2="68"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st70"
        d="M159.4,637.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        C160.8,634.4,159.4,635.8,159.4,637.5L159.4,637.5z M9.4,762.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        S9.4,760.8,9.4,762.5L9.4,762.5z"
      />
      <linearGradient
        id="SVGID_72_"
        gradientUnits="userSpaceOnUse"
        x1="533.4"
        y1="118"
        x2="641.6"
        y2="118"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st71"
        d="M634.4,612.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S634.4,610.8,634.4,612.5z M534.4,687.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S534.4,685.8,534.4,687.5L534.4,687.5z"
      />
      <linearGradient
        id="SVGID_73_"
        gradientUnits="userSpaceOnUse"
        x1="933.4"
        y1="393"
        x2="1066.6"
        y2="393"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st72"
        d="M934.4,437.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S934.4,435.8,934.4,437.5L934.4,437.5z
         M1059.4,312.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1059.4,310.8,1059.4,312.5z"
      />
      <linearGradient
        id="SVGID_74_"
        gradientUnits="userSpaceOnUse"
        x1="883.37"
        y1="43"
        x2="891.63"
        y2="43"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st73"
        d="M884.4,687.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S884.4,685.8,884.4,687.5L884.4,687.5z
         M884.4,762.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S884.4,760.8,884.4,762.5z"
      />
      <linearGradient
        id="SVGID_75_"
        gradientUnits="userSpaceOnUse"
        x1="733.4"
        y1="80.5"
        x2="891.6"
        y2="80.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st74"
        d="M734.4,762.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S734.4,760.8,734.4,762.5z M884.4,612.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S884.4,610.8,884.4,612.5z"
      />
      <linearGradient
        id="SVGID_76_"
        gradientUnits="userSpaceOnUse"
        x1="533.4"
        y1="180.5"
        x2="791.6"
        y2="180.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st75"
        d="M784.4,512.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1c0-1.7-1.4-3.1-3.1-3.1S784.4,510.8,784.4,512.5z
         M534.4,662.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S534.4,660.8,534.4,662.5z"
      />
      <linearGradient
        id="SVGID_77_"
        gradientUnits="userSpaceOnUse"
        x1="133.4"
        y1="718"
        x2="191.66"
        y2="718"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st76"
        d="M184.4,62.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        C185.8,59.4,184.4,60.8,184.4,62.5L184.4,62.5z M134.4,37.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        C135.8,34.4,134.4,35.8,134.4,37.5L134.4,37.5z"
      />
      <linearGradient
        id="SVGID_78_"
        gradientUnits="userSpaceOnUse"
        x1="333.4"
        y1="693"
        x2="366.66"
        y2="693"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st77"
        d="M359.4,112.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S359.4,110.8,359.4,112.5L359.4,112.5z
         M334.4,37.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S334.4,35.8,334.4,37.5L334.4,37.5z"
      />
      <linearGradient
        id="SVGID_79_"
        gradientUnits="userSpaceOnUse"
        x1="1258.4"
        y1="518"
        x2="1316.66"
        y2="518"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st78"
        d="M1259.4,237.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1259.4,235.8,1259.4,237.5
        L1259.4,237.5z M1309.4,262.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1309.4,260.8,1309.4,262.5z"
      />
      <linearGradient
        id="SVGID_80_"
        gradientUnits="userSpaceOnUse"
        x1="158.4"
        y1="93"
        x2="291.6"
        y2="93"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st79"
        d="M284.4,687.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S284.4,685.8,284.4,687.5L284.4,687.5z
         M159.4,662.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1C160.8,659.4,159.4,660.8,159.4,662.5
        L159.4,662.5z"
      />
      <linearGradient
        id="SVGID_81_"
        gradientUnits="userSpaceOnUse"
        x1="1383.4"
        y1="630.5"
        x2="1416.66"
        y2="630.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st80"
        d="M1384.4,62.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1384.4,60.8,1384.4,62.5L1384.4,62.5z
         M1409.4,212.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1409.4,210.8,1409.4,212.5L1409.4,212.5z"
      />
      <linearGradient
        id="SVGID_82_"
        gradientUnits="userSpaceOnUse"
        x1="108.4"
        y1="130.5"
        x2="141.66"
        y2="130.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st81"
        d="M134.4,612.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        C135.8,609.4,134.4,610.8,134.4,612.5L134.4,612.5z M109.4,662.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1
        S109.4,660.8,109.4,662.5z"
      />
      <linearGradient
        id="SVGID_83_"
        gradientUnits="userSpaceOnUse"
        x1="383.4"
        y1="155.5"
        x2="466.6"
        y2="155.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st82"
        d="M384.4,637.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S384.4,635.8,384.4,637.5z M459.4,587.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S459.4,585.8,459.4,587.5L459.4,587.5z"
      />
      <linearGradient
        id="SVGID_84_"
        gradientUnits="userSpaceOnUse"
        x1="233.4"
        y1="130.5"
        x2="291.66"
        y2="130.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st83"
        d="M234.4,612.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        C235.8,609.4,234.4,610.8,234.4,612.5L234.4,612.5z M284.4,662.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1
        S284.4,660.8,284.4,662.5z"
      />
      <linearGradient
        id="SVGID_85_"
        gradientUnits="userSpaceOnUse"
        x1="83.37"
        y1="330.5"
        x2="91.63"
        y2="330.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st84"
        d="M84.4,462.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S84.4,460.8,84.4,462.5L84.4,462.5z
         M84.4,412.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S84.4,410.8,84.4,412.5L84.4,412.5z"
      />
      <linearGradient
        id="SVGID_86_"
        gradientUnits="userSpaceOnUse"
        x1="708.4"
        y1="505.5"
        x2="991.6"
        y2="505.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st85"
        d="M984.4,237.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S984.4,235.8,984.4,237.5L984.4,237.5z
         M709.4,287.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S709.4,285.8,709.4,287.5L709.4,287.5z"
      />
      <linearGradient
        id="SVGID_87_"
        gradientUnits="userSpaceOnUse"
        x1="483.37"
        y1="43"
        x2="491.63"
        y2="43"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st86"
        d="M484.4,687.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S484.4,685.8,484.4,687.5L484.4,687.5z
         M484.4,762.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S484.4,760.8,484.4,762.5z"
      />
      <linearGradient
        id="SVGID_88_"
        gradientUnits="userSpaceOnUse"
        x1="1033.4"
        y1="380.5"
        x2="1066.66"
        y2="380.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st87"
        d="M1034.4,412.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1034.4,410.8,1034.4,412.5
        L1034.4,412.5z M1059.4,362.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1059.4,360.8,1059.4,362.5z"
      />
      <linearGradient
        id="SVGID_89_"
        gradientUnits="userSpaceOnUse"
        x1="183.4"
        y1="605.5"
        x2="391.6"
        y2="605.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st88"
        d="M184.4,162.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1S184.4,160.8,184.4,162.5
        L184.4,162.5z M384.4,162.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S384.4,160.8,384.4,162.5L384.4,162.5z"
      />
      <linearGradient
        id="SVGID_90_"
        gradientUnits="userSpaceOnUse"
        x1="158.4"
        y1="155.5"
        x2="216.66"
        y2="155.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st89"
        d="M209.4,612.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        C210.8,609.4,209.4,610.8,209.4,612.5L209.4,612.5z M159.4,612.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0
        c0-1.7-1.4-3.1-3.1-3.1C160.8,609.4,159.4,610.8,159.4,612.5L159.4,612.5z"
      />
      <linearGradient
        id="SVGID_91_"
        gradientUnits="userSpaceOnUse"
        x1="8.4"
        y1="618"
        x2="41.66"
        y2="618"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st90"
        d="M34.4,87.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        C35.8,84.4,34.4,85.8,34.4,87.5z M9.4,212.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1S9.4,210.8,9.4,212.5
        L9.4,212.5z"
      />
      <linearGradient
        id="SVGID_92_"
        gradientUnits="userSpaceOnUse"
        x1="308.4"
        y1="230.5"
        x2="366.66"
        y2="230.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st91"
        d="M309.4,512.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1c0-1.7-1.4-3.1-3.1-3.1S309.4,510.8,309.4,512.5z
         M359.4,562.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S359.4,560.8,359.4,562.5z"
      />
      <linearGradient
        id="SVGID_93_"
        gradientUnits="userSpaceOnUse"
        x1="808.4"
        y1="405.5"
        x2="891.6"
        y2="405.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st92"
        d="M884.4,412.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S884.4,410.8,884.4,412.5L884.4,412.5z
         M809.4,312.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S809.4,310.8,809.4,312.5z"
      />
      <linearGradient
        id="SVGID_94_"
        gradientUnits="userSpaceOnUse"
        x1="383.4"
        y1="393"
        x2="466.6"
        y2="393"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st93"
        d="M459.4,362.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S459.4,360.8,459.4,362.5z M384.4,387.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S384.4,385.8,384.4,387.5L384.4,387.5z"
      />
      <linearGradient
        id="SVGID_95_"
        gradientUnits="userSpaceOnUse"
        x1="683.4"
        y1="568"
        x2="816.6"
        y2="568"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st94"
        d="M809.4,212.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S809.4,210.8,809.4,212.5L809.4,212.5z
         M684.4,187.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S684.4,185.8,684.4,187.5L684.4,187.5z"
      />
      <linearGradient
        id="SVGID_96_"
        gradientUnits="userSpaceOnUse"
        x1="308.4"
        y1="305.5"
        x2="416.6"
        y2="305.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st95"
        d="M309.4,412.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S309.4,410.8,309.4,412.5L309.4,412.5z
         M409.4,512.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1c0-1.7-1.4-3.1-3.1-3.1S409.4,510.8,409.4,512.5z"
      />
      <linearGradient
        id="SVGID_97_"
        gradientUnits="userSpaceOnUse"
        x1="158.4"
        y1="230.5"
        x2="266.6"
        y2="230.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st96"
        d="M159.4,537.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        C160.8,534.4,159.4,535.8,159.4,537.5L159.4,537.5z M259.4,537.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1
        S259.4,535.8,259.4,537.5z"
      />
      <linearGradient
        id="SVGID_98_"
        gradientUnits="userSpaceOnUse"
        x1="8.4"
        y1="693"
        x2="66.66"
        y2="693"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st97"
        d="M59.4,112.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        C60.8,109.4,59.4,110.8,59.4,112.5L59.4,112.5z M9.4,37.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        S9.4,35.8,9.4,37.5L9.4,37.5z"
      />
      <linearGradient
        id="SVGID_99_"
        gradientUnits="userSpaceOnUse"
        x1="708.4"
        y1="593"
        x2="1116.6"
        y2="593"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st98"
        d="M1109.4,162.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1109.4,160.8,1109.4,162.5
        L1109.4,162.5z M709.4,187.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S709.4,185.8,709.4,187.5L709.4,187.5z"
      />
      <linearGradient
        id="SVGID_100_"
        gradientUnits="userSpaceOnUse"
        x1="1083.4"
        y1="155.5"
        x2="1191.6"
        y2="155.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st99"
        d="M1184.4,612.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1184.4,610.8,1184.4,612.5z
         M1084.4,612.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1084.4,610.8,1084.4,612.5z"
      />
      <linearGradient
        id="SVGID_101_"
        gradientUnits="userSpaceOnUse"
        x1="808.4"
        y1="693"
        x2="891.6"
        y2="693"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st100"
        d="M884.4,62.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S884.4,60.8,884.4,62.5L884.4,62.5z
         M809.4,87.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S809.4,85.8,809.4,87.5L809.4,87.5z"
      />
      <linearGradient
        id="SVGID_102_"
        gradientUnits="userSpaceOnUse"
        x1="183.4"
        y1="380.5"
        x2="266.6"
        y2="380.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st101"
        d="M259.4,387.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S259.4,385.8,259.4,387.5L259.4,387.5z
         M184.4,387.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1C185.8,384.4,184.4,385.8,184.4,387.5
        L184.4,387.5z"
      />
      <linearGradient
        id="SVGID_103_"
        gradientUnits="userSpaceOnUse"
        x1="1208.4"
        y1="368"
        x2="1391.6"
        y2="368"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st102"
        d="M1209.4,462.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1209.4,460.8,1209.4,462.5
        L1209.4,462.5z M1384.4,337.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1384.4,335.8,1384.4,337.5L1384.4,337.5z"
      />
      <linearGradient
        id="SVGID_104_"
        gradientUnits="userSpaceOnUse"
        x1="1158.37"
        y1="393"
        x2="1166.63"
        y2="393"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st103"
        d="M1159.4,437.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1159.4,435.8,1159.4,437.5
        L1159.4,437.5z M1159.4,312.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1159.4,310.8,1159.4,312.5z"
      />
      <linearGradient
        id="SVGID_105_"
        gradientUnits="userSpaceOnUse"
        x1="158.4"
        y1="680.5"
        x2="241.6"
        y2="680.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st104"
        d="M159.4,112.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        C160.8,109.4,159.4,110.8,159.4,112.5L159.4,112.5z M234.4,62.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0
        c0-1.7-1.4-3.1-3.1-3.1C235.8,59.4,234.4,60.8,234.4,62.5L234.4,62.5z"
      />
      <linearGradient
        id="SVGID_106_"
        gradientUnits="userSpaceOnUse"
        x1="958.4"
        y1="605.5"
        x2="1091.6"
        y2="605.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st105"
        d="M1084.4,162.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1084.4,160.8,1084.4,162.5
        L1084.4,162.5z M959.4,162.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S959.4,160.8,959.4,162.5L959.4,162.5z"
      />
      <linearGradient
        id="SVGID_107_"
        gradientUnits="userSpaceOnUse"
        x1="1058.4"
        y1="655.5"
        x2="1191.6"
        y2="655.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st106"
        d="M1184.4,112.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1184.4,110.8,1184.4,112.5
        L1184.4,112.5z M1059.4,112.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1059.4,110.8,1059.4,112.5L1059.4,112.5z"
      />
      <linearGradient
        id="SVGID_108_"
        gradientUnits="userSpaceOnUse"
        x1="233.4"
        y1="568"
        x2="341.6"
        y2="568"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st107"
        d="M234.4,187.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1S234.4,185.8,234.4,187.5
        L234.4,187.5z M334.4,212.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S334.4,210.8,334.4,212.5L334.4,212.5z"
      />
      <linearGradient
        id="SVGID_109_"
        gradientUnits="userSpaceOnUse"
        x1="908.4"
        y1="405.5"
        x2="991.6"
        y2="405.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st108"
        d="M909.4,412.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S909.4,410.8,909.4,412.5L909.4,412.5z
         M984.4,312.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S984.4,310.8,984.4,312.5z"
      />
      <linearGradient
        id="SVGID_110_"
        gradientUnits="userSpaceOnUse"
        x1="883.4"
        y1="430.5"
        x2="966.6"
        y2="430.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st109"
        d="M884.4,362.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S884.4,360.8,884.4,362.5z M959.4,312.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S959.4,310.8,959.4,312.5z"
      />
      <linearGradient
        id="SVGID_111_"
        gradientUnits="userSpaceOnUse"
        x1="633.4"
        y1="218"
        x2="716.6"
        y2="218"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st110"
        d="M709.4,512.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1c0-1.7-1.4-3.1-3.1-3.1S709.4,510.8,709.4,512.5z
         M634.4,587.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S634.4,585.8,634.4,587.5L634.4,587.5z"
      />
      <linearGradient
        id="SVGID_112_"
        gradientUnits="userSpaceOnUse"
        x1="8.4"
        y1="118"
        x2="91.6"
        y2="118"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st111"
        d="M84.4,687.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S84.4,685.8,84.4,687.5z M9.4,612.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1S9.4,610.8,9.4,612.5L9.4,612.5z"
      />
      <linearGradient
        id="SVGID_113_"
        gradientUnits="userSpaceOnUse"
        x1="333.4"
        y1="55.5"
        x2="491.6"
        y2="55.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st112"
        d="M484.4,662.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S484.4,660.8,484.4,662.5z M334.4,762.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S334.4,760.8,334.4,762.5z"
      />
      <linearGradient
        id="SVGID_114_"
        gradientUnits="userSpaceOnUse"
        x1="458.4"
        y1="430.5"
        x2="491.66"
        y2="430.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st113"
        d="M459.4,312.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S459.4,310.8,459.4,312.5z M484.4,362.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S484.4,360.8,484.4,362.5z"
      />
      <linearGradient
        id="SVGID_115_"
        gradientUnits="userSpaceOnUse"
        x1="1258.4"
        y1="643"
        x2="1341.6"
        y2="643"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st114"
        d="M1259.4,87.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1259.4,85.8,1259.4,87.5L1259.4,87.5z
         M1334.4,162.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1334.4,160.8,1334.4,162.5L1334.4,162.5z"
      />
      <linearGradient
        id="SVGID_116_"
        gradientUnits="userSpaceOnUse"
        x1="1408.4"
        y1="255.5"
        x2="1441.66"
        y2="255.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st115"
        d="M1409.4,562.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1409.4,560.8,1409.4,562.5z
         M1434.4,462.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1434.4,460.8,1434.4,462.5L1434.4,462.5z"
      />
      <linearGradient
        id="SVGID_117_"
        gradientUnits="userSpaceOnUse"
        x1="933.4"
        y1="5.5"
        x2="1016.6"
        y2="5.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st116"
        d="M934.4,762.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S934.4,760.8,934.4,762.5z
         M1009.4,762.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1009.4,760.8,1009.4,762.5z"
      />
      <linearGradient
        id="SVGID_118_"
        gradientUnits="userSpaceOnUse"
        x1="1108.4"
        y1="580.5"
        x2="1166.66"
        y2="580.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st117"
        d="M1109.4,212.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1109.4,210.8,1109.4,212.5
        L1109.4,212.5z M1159.4,162.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1159.4,160.8,1159.4,162.5L1159.4,162.5z"
      />
      <linearGradient
        id="SVGID_119_"
        gradientUnits="userSpaceOnUse"
        x1="208.4"
        y1="368"
        x2="266.66"
        y2="368"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st118"
        d="M259.4,412.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S259.4,410.8,259.4,412.5L259.4,412.5z
         M209.4,387.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1C210.8,384.4,209.4,385.8,209.4,387.5
        L209.4,387.5z"
      />
      <linearGradient
        id="SVGID_120_"
        gradientUnits="userSpaceOnUse"
        x1="508.4"
        y1="205.5"
        x2="566.66"
        y2="205.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st119"
        d="M559.4,562.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S559.4,560.8,559.4,562.5z M509.4,562.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1C510.8,559.4,509.4,560.8,509.4,562.5z"
      />
      <linearGradient
        id="SVGID_121_"
        gradientUnits="userSpaceOnUse"
        x1="83.4"
        y1="55.5"
        x2="141.66"
        y2="55.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st120"
        d="M134.4,687.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        C135.8,684.4,134.4,685.8,134.4,687.5L134.4,687.5z M84.4,737.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1
        S84.4,735.8,84.4,737.5z"
      />
      <linearGradient
        id="SVGID_122_"
        gradientUnits="userSpaceOnUse"
        x1="558.4"
        y1="243"
        x2="641.6"
        y2="243"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st121"
        d="M634.4,437.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S634.4,435.8,634.4,437.5L634.4,437.5z
         M559.4,612.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S559.4,610.8,559.4,612.5z"
      />
      <linearGradient
        id="SVGID_123_"
        gradientUnits="userSpaceOnUse"
        x1="1083.37"
        y1="230.5"
        x2="1091.63"
        y2="230.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st122"
        d="M1084.4,512.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1c0-1.7-1.4-3.1-3.1-3.1S1084.4,510.8,1084.4,512.5z
         M1084.4,562.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1084.4,560.8,1084.4,562.5z"
      />
      <linearGradient
        id="SVGID_124_"
        gradientUnits="userSpaceOnUse"
        x1="1133.4"
        y1="93"
        x2="1291.6"
        y2="93"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st123"
        d="M1134.4,637.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1134.4,635.8,1134.4,637.5z
         M1284.4,712.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1284.4,710.8,1284.4,712.5z"
      />
      <linearGradient
        id="SVGID_125_"
        gradientUnits="userSpaceOnUse"
        x1="858.4"
        y1="430.5"
        x2="916.66"
        y2="430.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st124"
        d="M859.4,362.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S859.4,360.8,859.4,362.5z M909.4,312.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S909.4,310.8,909.4,312.5z"
      />
      <linearGradient
        id="SVGID_126_"
        gradientUnits="userSpaceOnUse"
        x1="1333.4"
        y1="393"
        x2="1391.66"
        y2="393"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st125"
        d="M1384.4,387.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1384.4,385.8,1384.4,387.5
        L1384.4,387.5z M1334.4,362.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1334.4,360.8,1334.4,362.5z"
      />
      <linearGradient
        id="SVGID_127_"
        gradientUnits="userSpaceOnUse"
        x1="358.4"
        y1="755.5"
        x2="441.6"
        y2="755.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st126"
        d="M434.4,12.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S434.4,10.8,434.4,12.5L434.4,12.5z
         M359.4,12.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S359.4,10.8,359.4,12.5L359.4,12.5z"
      />
      <linearGradient
        id="SVGID_128_"
        gradientUnits="userSpaceOnUse"
        x1="1258.4"
        y1="305.5"
        x2="1316.66"
        y2="305.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st127"
        d="M1309.4,487.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1309.4,485.8,1309.4,487.5
        L1309.4,487.5z M1259.4,437.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1259.4,435.8,1259.4,437.5L1259.4,437.5z"
      />
      <linearGradient
        id="SVGID_129_"
        gradientUnits="userSpaceOnUse"
        x1="8.37"
        y1="405.5"
        x2="16.63"
        y2="405.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st128"
        d="M9.4,337.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1S9.4,335.8,9.4,337.5L9.4,337.5z
         M9.4,387.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1S9.4,385.8,9.4,387.5L9.4,387.5z"
      />
      <linearGradient
        id="SVGID_130_"
        gradientUnits="userSpaceOnUse"
        x1="533.4"
        y1="280.5"
        x2="616.6"
        y2="280.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st129"
        d="M609.4,437.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S609.4,435.8,609.4,437.5L609.4,437.5z
         M534.4,537.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S534.4,535.8,534.4,537.5z"
      />
      <linearGradient
        id="SVGID_131_"
        gradientUnits="userSpaceOnUse"
        x1="1158.4"
        y1="80.5"
        x2="1216.66"
        y2="80.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st130"
        d="M1209.4,712.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1209.4,710.8,1209.4,712.5z
         M1159.4,662.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1159.4,660.8,1159.4,662.5z"
      />
      <linearGradient
        id="SVGID_132_"
        gradientUnits="userSpaceOnUse"
        x1="8.4"
        y1="105.5"
        x2="41.66"
        y2="105.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st131"
        d="M34.4,687.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1S34.4,685.8,34.4,687.5z
         M9.4,637.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1S9.4,635.8,9.4,637.5L9.4,637.5z"
      />
      <linearGradient
        id="SVGID_133_"
        gradientUnits="userSpaceOnUse"
        x1="383.4"
        y1="705.5"
        x2="491.6"
        y2="705.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st132"
        d="M484.4,12.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S484.4,10.8,484.4,12.5L484.4,12.5z
         M384.4,112.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S384.4,110.8,384.4,112.5L384.4,112.5z"
      />
      <linearGradient
        id="SVGID_134_"
        gradientUnits="userSpaceOnUse"
        x1="333.4"
        y1="505.5"
        x2="491.6"
        y2="505.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st133"
        d="M484.4,212.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S484.4,210.8,484.4,212.5L484.4,212.5z
         M334.4,312.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S334.4,310.8,334.4,312.5z"
      />
      <linearGradient
        id="SVGID_135_"
        gradientUnits="userSpaceOnUse"
        x1="1283.4"
        y1="655.5"
        x2="1366.6"
        y2="655.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st134"
        d="M1284.4,87.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1284.4,85.8,1284.4,87.5L1284.4,87.5z
         M1359.4,137.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1359.4,135.8,1359.4,137.5L1359.4,137.5z"
      />
      <linearGradient
        id="SVGID_136_"
        gradientUnits="userSpaceOnUse"
        x1="908.4"
        y1="80.5"
        x2="966.66"
        y2="80.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st135"
        d="M959.4,712.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S959.4,710.8,959.4,712.5z M909.4,662.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S909.4,660.8,909.4,662.5z"
      />
      <linearGradient
        id="SVGID_137_"
        gradientUnits="userSpaceOnUse"
        x1="908.37"
        y1="43"
        x2="916.63"
        y2="43"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st136"
        d="M909.4,687.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S909.4,685.8,909.4,687.5L909.4,687.5z
         M909.4,762.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S909.4,760.8,909.4,762.5z"
      />
      <linearGradient
        id="SVGID_138_"
        gradientUnits="userSpaceOnUse"
        x1="208.4"
        y1="555.5"
        x2="266.66"
        y2="555.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st137"
        d="M259.4,212.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S259.4,210.8,259.4,212.5L259.4,212.5z
         M209.4,212.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1S209.4,210.8,209.4,212.5L209.4,212.5z"
      />
      <linearGradient
        id="SVGID_139_"
        gradientUnits="userSpaceOnUse"
        x1="183.4"
        y1="255.5"
        x2="241.66"
        y2="255.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st138"
        d="M184.4,512.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        C185.8,509.4,184.4,510.8,184.4,512.5L184.4,512.5z M234.4,512.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0
        c0-1.7-1.4-3.1-3.1-3.1C235.8,509.4,234.4,510.8,234.4,512.5L234.4,512.5z"
      />
      <linearGradient
        id="SVGID_140_"
        gradientUnits="userSpaceOnUse"
        x1="1258.4"
        y1="255.5"
        x2="1316.66"
        y2="255.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st139"
        d="M1259.4,512.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1c0-1.7-1.4-3.1-3.1-3.1S1259.4,510.8,1259.4,512.5z
         M1309.4,512.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1c0-1.7-1.4-3.1-3.1-3.1S1309.4,510.8,1309.4,512.5z"
      />
      <linearGradient
        id="SVGID_141_"
        gradientUnits="userSpaceOnUse"
        x1="1408.4"
        y1="143"
        x2="1441.66"
        y2="143"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st140"
        d="M1409.4,587.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1409.4,585.8,1409.4,587.5
        L1409.4,587.5z M1434.4,662.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1434.4,660.8,1434.4,662.5z"
      />
      <linearGradient
        id="SVGID_142_"
        gradientUnits="userSpaceOnUse"
        x1="8.4"
        y1="693"
        x2="66.66"
        y2="693"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st141"
        d="M59.4,87.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1C60.8,84.4,59.4,85.8,59.4,87.5z
         M9.4,62.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1S9.4,60.8,9.4,62.5L9.4,62.5z"
      />
      <linearGradient
        id="SVGID_143_"
        gradientUnits="userSpaceOnUse"
        x1="8.37"
        y1="55.5"
        x2="16.63"
        y2="55.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st142"
        d="M9.4,687.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1S9.4,685.8,9.4,687.5L9.4,687.5z
         M9.4,737.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1S9.4,735.8,9.4,737.5L9.4,737.5z"
      />
      <linearGradient
        id="SVGID_144_"
        gradientUnits="userSpaceOnUse"
        x1="1083.4"
        y1="268"
        x2="1241.6"
        y2="268"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st143"
        d="M1234.4,562.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1234.4,560.8,1234.4,562.5z
         M1084.4,437.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1084.4,435.8,1084.4,437.5L1084.4,437.5z"
      />
      <linearGradient
        id="SVGID_145_"
        gradientUnits="userSpaceOnUse"
        x1="433.4"
        y1="518"
        x2="516.6"
        y2="518"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st144"
        d="M434.4,262.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S434.4,260.8,434.4,262.5z M509.4,237.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1C510.8,234.4,509.4,235.8,509.4,237.5L509.4,237.5z"
      />
      <linearGradient
        id="SVGID_146_"
        gradientUnits="userSpaceOnUse"
        x1="508.4"
        y1="305.5"
        x2="566.66"
        y2="305.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st145"
        d="M559.4,437.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S559.4,435.8,559.4,437.5L559.4,437.5z
         M509.4,487.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1C510.8,484.4,509.4,485.8,509.4,487.5L509.4,487.5z"
      />
      <linearGradient
        id="SVGID_147_"
        gradientUnits="userSpaceOnUse"
        x1="1083.4"
        y1="243"
        x2="1216.6"
        y2="243"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st146"
        d="M1209.4,587.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1209.4,585.8,1209.4,587.5
        L1209.4,587.5z M1084.4,462.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1084.4,460.8,1084.4,462.5L1084.4,462.5z"
      />
      <linearGradient
        id="SVGID_148_"
        gradientUnits="userSpaceOnUse"
        x1="658.4"
        y1="330.5"
        x2="716.66"
        y2="330.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st147"
        d="M659.4,437.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S659.4,435.8,659.4,437.5L659.4,437.5z
         M709.4,437.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S709.4,435.8,709.4,437.5L709.4,437.5z"
      />
      <linearGradient
        id="SVGID_149_"
        gradientUnits="userSpaceOnUse"
        x1="208.4"
        y1="80.5"
        x2="266.66"
        y2="80.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st148"
        d="M209.4,687.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1
        C210.8,684.4,209.4,685.8,209.4,687.5L209.4,687.5z M259.4,687.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1
        S259.4,685.8,259.4,687.5L259.4,687.5z"
      />
      <linearGradient
        id="SVGID_150_"
        gradientUnits="userSpaceOnUse"
        x1="1183.4"
        y1="93"
        x2="1241.66"
        y2="93"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st149"
        d="M1234.4,687.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1234.4,685.8,1234.4,687.5
        L1234.4,687.5z M1184.4,662.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1184.4,660.8,1184.4,662.5z"
      />
      <linearGradient
        id="SVGID_151_"
        gradientUnits="userSpaceOnUse"
        x1="1183.4"
        y1="580.5"
        x2="1241.66"
        y2="580.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st150"
        d="M1184.4,212.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1184.4,210.8,1184.4,212.5
        L1184.4,212.5z M1234.4,162.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1234.4,160.8,1234.4,162.5L1234.4,162.5z"
      />
      <linearGradient
        id="SVGID_152_"
        gradientUnits="userSpaceOnUse"
        x1="758.4"
        y1="505.5"
        x2="841.6"
        y2="505.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st151"
        d="M834.4,262.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S834.4,260.8,834.4,262.5z M759.4,262.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S759.4,260.8,759.4,262.5z"
      />
      <linearGradient
        id="SVGID_153_"
        gradientUnits="userSpaceOnUse"
        x1="833.4"
        y1="443"
        x2="891.66"
        y2="443"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st152"
        d="M884.4,312.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S884.4,310.8,884.4,312.5z M834.4,337.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S834.4,335.8,834.4,337.5L834.4,337.5z"
      />
      <linearGradient
        id="SVGID_154_"
        gradientUnits="userSpaceOnUse"
        x1="383.4"
        y1="68"
        x2="466.6"
        y2="68"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st153"
        d="M459.4,662.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S459.4,660.8,459.4,662.5z M384.4,737.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S384.4,735.8,384.4,737.5z"
      />
      <linearGradient
        id="SVGID_155_"
        gradientUnits="userSpaceOnUse"
        x1="858.4"
        y1="330.5"
        x2="916.66"
        y2="330.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st154"
        d="M859.4,437.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S859.4,435.8,859.4,437.5L859.4,437.5z
         M909.4,437.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S909.4,435.8,909.4,437.5L909.4,437.5z"
      />
      <linearGradient
        id="SVGID_156_"
        gradientUnits="userSpaceOnUse"
        x1="283.4"
        y1="305.5"
        x2="341.66"
        y2="305.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st155"
        d="M334.4,462.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S334.4,460.8,334.4,462.5L334.4,462.5z
         M284.4,462.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S284.4,460.8,284.4,462.5L284.4,462.5z"
      />
      <linearGradient
        id="SVGID_157_"
        gradientUnits="userSpaceOnUse"
        x1="1283.4"
        y1="143"
        x2="1341.66"
        y2="143"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st156"
        d="M1284.4,612.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1284.4,610.8,1284.4,612.5z
         M1334.4,637.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1334.4,635.8,1334.4,637.5z"
      />
      <linearGradient
        id="SVGID_158_"
        gradientUnits="userSpaceOnUse"
        x1="108.4"
        y1="280.5"
        x2="141.66"
        y2="280.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st157"
        d="M109.4,462.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S109.4,460.8,109.4,462.5L109.4,462.5z
         M134.4,512.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1C135.8,509.4,134.4,510.8,134.4,512.5
        L134.4,512.5z"
      />
      <linearGradient
        id="SVGID_159_"
        gradientUnits="userSpaceOnUse"
        x1="1133.4"
        y1="705.5"
        x2="1216.6"
        y2="705.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st158"
        d="M1134.4,62.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1134.4,60.8,1134.4,62.5L1134.4,62.5z
         M1209.4,62.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1209.4,60.8,1209.4,62.5L1209.4,62.5z"
      />
      <linearGradient
        id="SVGID_160_"
        gradientUnits="userSpaceOnUse"
        x1="533.4"
        y1="55.5"
        x2="591.66"
        y2="55.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st159"
        d="M534.4,712.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S534.4,710.8,534.4,712.5z M584.4,712.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S584.4,710.8,584.4,712.5z"
      />
      <linearGradient
        id="SVGID_161_"
        gradientUnits="userSpaceOnUse"
        x1="383.4"
        y1="468"
        x2="466.6"
        y2="468"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st160"
        d="M459.4,287.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S459.4,285.8,459.4,287.5L459.4,287.5z
         M384.4,312.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S384.4,310.8,384.4,312.5z"
      />
      <linearGradient
        id="SVGID_162_"
        gradientUnits="userSpaceOnUse"
        x1="933.4"
        y1="755.5"
        x2="1016.6"
        y2="755.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st161"
        d="M934.4,12.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S934.4,10.8,934.4,12.5L934.4,12.5z
         M1009.4,12.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1009.4,10.8,1009.4,12.5L1009.4,12.5z"
      />
      <linearGradient
        id="SVGID_163_"
        gradientUnits="userSpaceOnUse"
        x1="1283.4"
        y1="330.5"
        x2="1341.66"
        y2="330.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st162"
        d="M1334.4,462.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1334.4,460.8,1334.4,462.5
        L1334.4,462.5z M1284.4,412.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1284.4,410.8,1284.4,412.5L1284.4,412.5z"
      />
      <linearGradient
        id="SVGID_164_"
        gradientUnits="userSpaceOnUse"
        x1="408.4"
        y1="368"
        x2="466.66"
        y2="368"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st163"
        d="M409.4,412.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S409.4,410.8,409.4,412.5L409.4,412.5z
         M459.4,387.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S459.4,385.8,459.4,387.5L459.4,387.5z"
      />
      <linearGradient
        id="SVGID_165_"
        gradientUnits="userSpaceOnUse"
        x1="908.4"
        y1="730.5"
        x2="941.66"
        y2="730.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st164"
        d="M934.4,62.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S934.4,60.8,934.4,62.5L934.4,62.5z
         M909.4,12.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S909.4,10.8,909.4,12.5L909.4,12.5z"
      />
      <linearGradient
        id="SVGID_166_"
        gradientUnits="userSpaceOnUse"
        x1="33.4"
        y1="480.5"
        x2="66.66"
        y2="480.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st165"
        d="M34.4,312.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1S34.4,310.8,34.4,312.5
        L34.4,312.5z M59.4,262.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1C60.8,259.4,59.4,260.8,59.4,262.5
        L59.4,262.5z"
      />
      <linearGradient
        id="SVGID_167_"
        gradientUnits="userSpaceOnUse"
        x1="33.4"
        y1="55.5"
        x2="66.66"
        y2="55.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st166"
        d="M34.4,737.5c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1S34.4,735.8,34.4,737.5z
         M59.4,687.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1l0,0c0-1.7-1.4-3.1-3.1-3.1C60.8,684.4,59.4,685.8,59.4,687.5z"
      />
      <linearGradient
        id="SVGID_168_"
        gradientUnits="userSpaceOnUse"
        x1="633.37"
        y1="530.5"
        x2="641.63"
        y2="530.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st167"
        d="M634.4,262.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S634.4,260.8,634.4,262.5z M634.4,212.5
        c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S634.4,210.8,634.4,212.5L634.4,212.5z"
      />
      <linearGradient
        id="SVGID_169_"
        gradientUnits="userSpaceOnUse"
        x1="1208.4"
        y1="268"
        x2="1291.6"
        y2="268"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st168"
        d="M1209.4,512.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1c0-1.7-1.4-3.1-3.1-3.1S1209.4,510.8,1209.4,512.5z
         M1284.4,487.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1284.4,485.8,1284.4,487.5L1284.4,487.5z"
      />
      <linearGradient
        id="SVGID_170_"
        gradientUnits="userSpaceOnUse"
        x1="1433.37"
        y1="180.5"
        x2="1441.63"
        y2="180.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st169"
        d="M1434.4,612.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1434.4,610.8,1434.4,612.5z
         M1434.4,562.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1434.4,560.8,1434.4,562.5z"
      />
      <linearGradient
        id="SVGID_171_"
        gradientUnits="userSpaceOnUse"
        x1="1408.37"
        y1="255.5"
        x2="1416.63"
        y2="255.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st170"
        d="M1409.4,537.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1409.4,535.8,1409.4,537.5z
         M1409.4,487.5c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1S1409.4,485.8,1409.4,487.5L1409.4,487.5z"
      />
      <linearGradient
        id="SVGID_172_"
        gradientUnits="userSpaceOnUse"
        x1="-1"
        y1="384"
        x2="1441"
        y2="384"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <rect className="st171" width={winWidth || width} height={winHeight || height} />
      <linearGradient
        id="SVGID_173_"
        gradientUnits="userSpaceOnUse"
        x1="5.3"
        y1="380.5"
        x2="1444.9001"
        y2="380.5"
        gradientTransform="matrix(1 0 0 -1 0 768)"
      >
        <stop offset="2.165098e-07" style={{ stopColor: '#00FFD9', stopOpacity: '0.76' }} />
        <stop offset="1" style={{ stopColor: '#FF00A1' }} />
      </linearGradient>
      <path
        className="st172"
        d="M537.5,587.5h-50l-175,175h-250 M531.3,587.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S531.3,584,531.3,587.5z M56.3,762.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3C59,756.3,56.3,759,56.3,762.5z
         M1112.5,287.5l-475,475 M1106.3,287.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1106.3,284,1106.3,287.5z
         M631.3,762.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S631.3,759,631.3,762.5z M137.5,287.5l-125,125v150l25,25h175
         M131.3,287.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S131.3,284,131.3,287.5z M206.3,587.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S206.3,584,206.3,587.5z M387.5,562.5h75l25-25v-75l75-75v-225 M381.3,562.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S381.3,559,381.3,562.5z M556.3,162.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S556.3,159,556.3,162.5z M762.5,137.5h-25l-75-75h-125l-200,200h-50 M756.3,137.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S756.3,134,756.3,137.5z M281.3,262.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S281.3,259,281.3,262.5z M137.5,362.5l225,225v100l-50,50h-100 M131.3,362.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S131.3,359,131.3,362.5z M206.3,737.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S206.3,734,206.3,737.5z M937.5,662.5l100,100h375 M931.3,662.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S931.3,659,931.3,662.5z M1406.3,762.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1406.3,759,1406.3,762.5z M762.5,312.5v75l100,100v25l-250,250h-25 M756.3,312.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        s-2.8-6.3-6.3-6.3S756.3,309,756.3,312.5z M581.3,762.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S581.3,759,581.3,762.5z M637.5,337.5l25-25h75l25-25h325l25-25 M631.3,337.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        s-2.8-6.3-6.3-6.3S631.3,334,631.3,337.5z M1106.3,262.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1106.3,259,1106.3,262.5z M1062.5,687.5v50 M1056.3,687.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1056.3,684,1056.3,687.5z M1056.3,737.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1056.3,734,1056.3,737.5z
         M1412.5,237.5l25-25v-200 M1406.3,237.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1406.3,234,1406.3,237.5z
         M1431.3,12.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1431.3,9,1431.3,12.5z M912.5,262.5h175l150-150h25l125,125
         M906.3,262.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S906.3,259,906.3,262.5z M1381.3,237.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1381.3,234,1381.3,237.5z M987.5,537.5l-50-50 M981.3,537.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S981.3,534,981.3,537.5z M931.3,487.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S931.3,484,931.3,487.5z M987.5,637.5v25l50,50v25 M981.3,637.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S981.3,634,981.3,637.5z M1031.3,737.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1031.3,734,1031.3,737.5z
         M1087.5,387.5v-50l175-175h25l125,125h25 M1081.3,387.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1081.3,384,1081.3,387.5z M1431.3,287.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1431.3,284,1431.3,287.5z
         M287.5,87.5l-75-75h-200 M281.3,87.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S281.3,84,281.3,87.5z M6.3,12.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3S16,6.3,12.5,6.3S6.3,9,6.3,12.5z M237.5,312.5h25l175,175h25 M231.3,312.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S231.3,309,231.3,312.5z M456.3,487.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S456.3,484,456.3,487.5z M612.5,12.5h25l100,100h275l75-75 M606.3,12.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S606.3,9,606.3,12.5z M1081.3,37.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1081.3,34,1081.3,37.5z M1237.5,287.5h150l50,50v100l-50,50v125 M1231.3,287.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        s-2.8-6.3-6.3-6.3S1231.3,284,1231.3,287.5z M1381.3,612.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1381.3,609,1381.3,612.5z M762.5,762.5l200-200v-25l-25-25h-25l-200,200 M756.3,762.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        s-2.8-6.3-6.3-6.3S756.3,759,756.3,762.5z M706.3,712.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S706.3,709,706.3,712.5z M287.5,237.5h50l225-225h25l25,25h25 M281.3,237.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S281.3,234,281.3,237.5z M631.3,37.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S631.3,34,631.3,37.5z M587.5,362.5
        v100l-100,100 M581.3,362.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S581.3,359,581.3,362.5z M481.3,562.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S481.3,559,481.3,562.5z M537.5,612.5l-25,25v125 M531.3,612.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S531.3,609,531.3,612.5z M506.3,762.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S506.3,759,506.3,762.5z M1212.5,437.5l125-125h50l25,25v100l-175,175 M1206.3,437.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1206.3,434,1206.3,437.5z M1231.3,612.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1231.3,609,1231.3,612.5z M1162.5,587.5h-200l-125,125v50 M1156.3,587.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1156.3,584,1156.3,587.5z M831.3,762.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S831.3,759,831.3,762.5z M112.5,287.5v-250 M106.3,287.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S106.3,284,106.3,287.5z M106.3,37.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S106.3,34,106.3,37.5z M1387.5,162.5
        l25-25v-75l-50-50h-325 M1381.3,162.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1381.3,159,1381.3,162.5z
         M1031.3,12.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1031.3,9,1031.3,12.5z M362.5,512.5l25,25h75 M356.3,512.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S356.3,509,356.3,512.5z M456.3,537.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S456.3,534,456.3,537.5z M187.5,337.5h-75l-75,75v100l50,50h175 M181.3,337.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S181.3,334,181.3,337.5z M256.3,562.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S256.3,559,256.3,562.5z M1362.5,587.5v25l75,75v75 M1356.3,587.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1356.3,584,1356.3,587.5z M1431.3,762.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1431.3,759,1431.3,762.5z M962.5,87.5h-25l-75-75h-200 M956.3,87.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S956.3,84,956.3,87.5z M656.3,12.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S656.3,9,656.3,12.5z M162.5,212.5l75,75
        h125l125-125v-25l50-50h75 M156.3,212.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S156.3,209,156.3,212.5z
         M606.3,87.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S606.3,84,606.3,87.5z M437.5,337.5l-25,25h-50l-50-50h-25
         M431.3,337.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S431.3,334,431.3,337.5z M281.3,312.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S281.3,309,281.3,312.5z M1012.5,462.5v100 M1006.3,462.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        s-2.8-6.3-6.3-6.3S1006.3,459,1006.3,462.5z M1006.3,562.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1006.3,559,1006.3,562.5z M862.5,412.5h-50l-25-25v-75 M856.3,412.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S856.3,409,856.3,412.5z M781.3,312.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S781.3,309,781.3,312.5z M537.5,337.5
        v-225 M531.3,337.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S531.3,334,531.3,337.5z M531.3,112.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S531.3,109,531.3,112.5z M187.5,137.5l50-50h25l50,50h100l125-125
         M181.3,137.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S181.3,134,181.3,137.5z M531.3,12.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S531.3,9,531.3,12.5z M312.5,62.5v-50 M306.3,62.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        c0-3.5-2.8-6.3-6.3-6.3S306.3,59,306.3,62.5z M306.3,12.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S306.3,9,306.3,12.5z M437.5,512.5l-175-175h-50l-75-75v-175 M431.3,512.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S431.3,509,431.3,512.5z M131.3,87.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S131.3,84,131.3,87.5z M612.5,412.5
        h150l75,75v25l-225,225 M606.3,412.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S606.3,409,606.3,412.5z M606.3,737.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S606.3,734,606.3,737.5z M1387.5,737.5h-225l-125-125h-75l-25,25
         M1381.3,737.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1381.3,734,1381.3,737.5z M931.3,637.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S931.3,634,931.3,637.5z M187.5,487.5l-50,50h-50l-25-25v-100l25-25h50
        l150,150v25 M181.3,487.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S181.3,484,181.3,487.5z M281.3,562.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S281.3,559,281.3,562.5z M212.5,312.5l-50-50v-25 M206.3,312.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S206.3,309,206.3,312.5z M156.3,237.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S156.3,234,156.3,237.5z M487.5,287.5l25,25v50l-75,75h-25l-50-50 M481.3,287.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S481.3,284,481.3,287.5z M356.3,387.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S356.3,384,356.3,387.5z M1387.5,687.5v-25l-75-75v-25l50-50 M1381.3,687.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1381.3,684,1381.3,687.5z M1356.3,512.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1356.3,509,1356.3,512.5z M1087.5,737.5h50 M1081.3,737.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1081.3,734,1081.3,737.5z M1131.3,737.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1131.3,734,1131.3,737.5z
         M887.5,137.5h300l100-100h75 M881.3,137.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S881.3,134,881.3,137.5z
         M1356.3,37.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1356.3,34,1356.3,37.5z M687.5,362.5h-75l-25-25v-225
         M681.3,362.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S681.3,359,681.3,362.5z M581.3,112.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S581.3,109,581.3,112.5z M462.5,637.5l25-25h25 M456.3,637.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S456.3,634,456.3,637.5z M506.3,612.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S506.3,609,506.3,612.5z M1187.5,487.5v-225l75-75h25l75,75 M1181.3,487.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1181.3,484,1181.3,487.5z M1356.3,262.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1356.3,259,1356.3,262.5z
         M1162.5,562.5l150,150h75l25,25 M1156.3,562.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1156.3,559,1156.3,562.5z
         M1406.3,737.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1406.3,734,1406.3,737.5z M412.5,37.5h-50l-25-25
         M406.3,37.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S406.3,34,406.3,37.5z M331.3,12.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S331.3,9,331.3,12.5z M1137.5,687.5v-25l-25-25h-25l-25-25 M1131.3,687.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1131.3,684,1131.3,687.5z M1056.3,612.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1056.3,609,1056.3,612.5z M1237.5,62.5l-25-25h-100l-75,75 M1231.3,62.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        c0-3.5-2.8-6.3-6.3-6.3S1231.3,59,1231.3,62.5z M1031.3,112.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1031.3,109,1031.3,112.5z M87.5,112.5v100l-25,25h-50 M81.3,112.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S81.3,109,81.3,112.5z M6.3,237.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S6.3,234,6.3,237.5z M87.5,662.5l-75-75
         M81.3,662.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S81.3,659,81.3,662.5z M6.3,587.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S6.3,584,6.3,587.5z M1212.5,412.5v-150l50-50h25l50,50 M1206.3,412.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1206.3,409,1206.3,412.5z M1331.3,262.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1331.3,259,1331.3,262.5z M612.5,562.5l125-125h25l50,50v25l-250,250 M606.3,562.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        s-2.8-6.3-6.3-6.3S606.3,559,606.3,562.5z M556.3,762.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S556.3,759,556.3,762.5z M1062.5,412.5l-25,25v125 M1056.3,412.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1056.3,409,1056.3,412.5z M1031.3,562.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1031.3,559,1031.3,562.5z
         M887.5,587.5h-25l-175,175h-25 M881.3,587.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S881.3,584,881.3,587.5z
         M656.3,762.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S656.3,759,656.3,762.5z M937.5,162.5h-275l-50,50v125
         M931.3,162.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S931.3,159,931.3,162.5z M606.3,337.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S606.3,334,606.3,337.5z M1337.5,662.5h-50l-25-25v-25l25-25 M1331.3,662.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1331.3,659,1331.3,662.5z M1281.3,587.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1281.3,584,1281.3,587.5z M712.5,337.5v50 M706.3,337.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S706.3,334,706.3,337.5z M706.3,387.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S706.3,384,706.3,387.5z M962.5,37.5
        h100 M956.3,37.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S956.3,34,956.3,37.5z M1056.3,37.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1056.3,34,1056.3,37.5z M312.5,662.5l25-25v-50l-25-25 M306.3,662.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S306.3,659,306.3,662.5z M306.3,562.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S306.3,559,306.3,562.5z M687.5,212.5v75 M681.3,212.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S681.3,209,681.3,212.5z M681.3,287.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S681.3,284,681.3,287.5z M637.5,312.5
        v-25l25-25v-75 M631.3,312.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S631.3,309,631.3,312.5z M656.3,187.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S656.3,184,656.3,187.5z M1137.5,362.5l-75,75v125 M1131.3,362.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1131.3,359,1131.3,362.5z M1056.3,562.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1056.3,559,1056.3,562.5z M62.5,337.5l25-25v-75 M56.3,337.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3C59,331.3,56.3,334,56.3,337.5z M81.3,237.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        s-2.8-6.3-6.3-6.3S81.3,234,81.3,237.5z M162.5,637.5l-125,125h-25 M156.3,637.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        s-2.8-6.3-6.3-6.3S156.3,634,156.3,637.5z M6.3,762.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S6.3,759,6.3,762.5z
         M637.5,612.5v50l-25,25h-75 M631.3,612.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S631.3,609,631.3,612.5z
         M531.3,687.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S531.3,684,531.3,687.5z M937.5,437.5l125-125 M931.3,437.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S931.3,434,931.3,437.5z M1056.3,312.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1056.3,309,1056.3,312.5z M887.5,687.5v75 M881.3,687.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        s-2.8-6.3-6.3-6.3S881.3,684,881.3,687.5z M881.3,762.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S881.3,759,881.3,762.5z M737.5,762.5l150-150 M731.3,762.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S731.3,759,731.3,762.5z M881.3,612.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S881.3,609,881.3,612.5z M787.5,512.5
        v-25l-25-25h-25l-200,200 M781.3,512.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S781.3,509,781.3,512.5z
         M531.3,662.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S531.3,659,531.3,662.5z M187.5,62.5l-25-25h-25 M181.3,62.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3c0-3.5-2.8-6.3-6.3-6.3S181.3,59,181.3,62.5z M131.3,37.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S131.3,34,131.3,37.5z M362.5,112.5l-25-25v-50 M356.3,112.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S356.3,109,356.3,112.5z M331.3,37.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S331.3,34,331.3,37.5z M1262.5,237.5l25,25h25 M1256.3,237.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1256.3,234,1256.3,237.5z M1306.3,262.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1306.3,259,1306.3,262.5z
         M287.5,687.5l-25,25h-50l-50-50 M281.3,687.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S281.3,684,281.3,687.5z
         M156.3,662.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S156.3,659,156.3,662.5z M1387.5,62.5v75l-25,25v25l25,25h25
         M1381.3,62.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3c0-3.5-2.8-6.3-6.3-6.3S1381.3,59,1381.3,62.5z M1406.3,212.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1406.3,209,1406.3,212.5z M137.5,612.5v25l-25,25 M131.3,612.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S131.3,609,131.3,612.5z M106.3,662.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S106.3,659,106.3,662.5z M387.5,637.5h25l50-50 M381.3,637.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S381.3,634,381.3,637.5z M456.3,587.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S456.3,584,456.3,587.5z M237.5,612.5l50,50 M231.3,612.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S231.3,609,231.3,612.5z M281.3,662.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S281.3,659,281.3,662.5z M87.5,462.5
        v-50 M81.3,462.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S81.3,459,81.3,462.5z M81.3,412.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S81.3,409,81.3,412.5z M987.5,237.5l-25-25h-100l-25,25h-75l-50,50 M981.3,237.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S981.3,234,981.3,237.5z M706.3,287.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S706.3,284,706.3,287.5z M487.5,687.5v75 M481.3,687.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        s-2.8-6.3-6.3-6.3S481.3,684,481.3,687.5z M481.3,762.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S481.3,759,481.3,762.5z M1037.5,412.5l25-25v-25 M1031.3,412.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1031.3,409,1031.3,412.5z M1056.3,362.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1056.3,359,1056.3,362.5z
         M187.5,162.5l25-25h75l50,50h25l25-25 M181.3,162.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S181.3,159,181.3,162.5
        z M381.3,162.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S381.3,159,381.3,162.5z M212.5,612.5h-50 M206.3,612.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S206.3,609,206.3,612.5z M156.3,612.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S156.3,609,156.3,612.5z M37.5,87.5l-25,25v100 M31.3,87.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        s-2.8-6.3-6.3-6.3S31.3,84,31.3,87.5z M6.3,212.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S6.3,209,6.3,212.5z
         M312.5,512.5l50,50 M306.3,512.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S306.3,509,306.3,512.5z M356.3,562.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S356.3,559,356.3,562.5z M887.5,412.5l-75-75v-25 M881.3,412.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S881.3,409,881.3,412.5z M806.3,312.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S806.3,309,806.3,312.5z M462.5,362.5h-25l-25,25h-25 M456.3,362.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S456.3,359,456.3,362.5z M381.3,387.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S381.3,384,381.3,387.5z M812.5,212.5h-100l-25-25 M806.3,212.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S806.3,209,806.3,212.5z M681.3,187.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S681.3,184,681.3,187.5z M312.5,412.5
        h-25l-25,25v25l25,25h100l25,25 M306.3,412.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S306.3,409,306.3,412.5z
         M406.3,512.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S406.3,509,406.3,512.5z M162.5,537.5h100 M156.3,537.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S156.3,534,156.3,537.5z M256.3,537.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S256.3,534,256.3,537.5z M62.5,112.5l25-25v-25l-25-25h-50 M56.3,112.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3C59,106.3,56.3,109,56.3,112.5z M6.3,37.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        s-2.8-6.3-6.3-6.3S6.3,34,6.3,37.5z M1112.5,162.5l-75,75h-25l-50-50h-250 M1106.3,162.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        s-2.8-6.3-6.3-6.3S1106.3,159,1106.3,162.5z M706.3,187.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S706.3,184,706.3,187.5z M1187.5,612.5h-100 M1181.3,612.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1181.3,609,1181.3,612.5z M1081.3,612.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1081.3,609,1081.3,612.5z
         M887.5,62.5l-25,25h-50 M881.3,62.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3c0-3.5-2.8-6.3-6.3-6.3S881.3,59,881.3,62.5z
         M806.3,87.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S806.3,84,806.3,87.5z M262.5,387.5l-25-25h-25l-25,25
         M256.3,387.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S256.3,384,256.3,387.5z M181.3,387.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S181.3,384,181.3,387.5z M1212.5,462.5l125-125h50 M1206.3,462.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1206.3,459,1206.3,462.5z M1381.3,337.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1381.3,334,1381.3,337.5z M1162.5,437.5v-125 M1156.3,437.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1156.3,434,1156.3,437.5z M1156.3,312.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1156.3,309,1156.3,312.5z
         M162.5,112.5l25-25h25l25-25 M156.3,112.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S156.3,109,156.3,112.5z
         M231.3,62.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3c0-3.5-2.8-6.3-6.3-6.3S231.3,59,231.3,62.5z M1087.5,162.5l-50,50h-25l-50-50
         M1081.3,162.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1081.3,159,1081.3,162.5z M956.3,162.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S956.3,159,956.3,162.5z M1187.5,112.5h-50l-25-25h-25l-25,25
         M1181.3,112.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1181.3,109,1181.3,112.5z M1056.3,112.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1056.3,109,1056.3,112.5z M237.5,187.5l25-25h25l50,50 M231.3,187.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S231.3,184,231.3,187.5z M331.3,212.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S331.3,209,331.3,212.5z M912.5,412.5h25l50-50v-50 M906.3,412.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S906.3,409,906.3,412.5z M981.3,312.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S981.3,309,981.3,312.5z M887.5,362.5l50-50h25 M881.3,362.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S881.3,359,881.3,362.5z M956.3,312.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S956.3,309,956.3,312.5z M712.5,512.5
        l-75,75 M706.3,512.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S706.3,509,706.3,512.5z M631.3,587.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S631.3,584,631.3,587.5z M87.5,687.5l-75-75 M81.3,687.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S81.3,684,81.3,687.5z M6.3,612.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        s-2.8-6.3-6.3-6.3S6.3,609,6.3,612.5z M487.5,662.5l-100,100h-50 M481.3,662.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        s-2.8-6.3-6.3-6.3S481.3,659,481.3,662.5z M331.3,762.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S331.3,759,331.3,762.5z M462.5,312.5l25,25v25 M456.3,312.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S456.3,309,456.3,312.5z M481.3,362.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S481.3,359,481.3,362.5z M1262.5,87.5
        l75,75 M1256.3,87.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1256.3,84,1256.3,87.5z M1331.3,162.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1331.3,159,1331.3,162.5z M1412.5,562.5l25-25v-75 M1406.3,562.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1406.3,559,1406.3,562.5z M1431.3,462.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1431.3,459,1431.3,462.5z M937.5,762.5h75 M931.3,762.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        s-2.8-6.3-6.3-6.3S931.3,759,931.3,762.5z M1006.3,762.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1006.3,759,1006.3,762.5z M1112.5,212.5l50-50 M1106.3,212.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1106.3,209,1106.3,212.5z M1156.3,162.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1156.3,159,1156.3,162.5z
         M262.5,412.5h-25l-25-25 M256.3,412.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S256.3,409,256.3,412.5z
         M206.3,387.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S206.3,384,206.3,387.5z M562.5,562.5h-50 M556.3,562.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S556.3,559,556.3,562.5z M506.3,562.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S506.3,559,506.3,562.5z M137.5,687.5l-50,50 M131.3,687.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        s-2.8-6.3-6.3-6.3S131.3,684,131.3,687.5z M81.3,737.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S81.3,734,81.3,737.5
        z M637.5,437.5l25,25v25l-100,100v25 M631.3,437.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S631.3,434,631.3,437.5z
         M556.3,612.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S556.3,609,556.3,612.5z M1087.5,512.5v50 M1081.3,512.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1081.3,509,1081.3,512.5z M1081.3,562.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1081.3,559,1081.3,562.5z M1137.5,637.5h75l75,75 M1131.3,637.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1131.3,634,1131.3,637.5z M1281.3,712.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1281.3,709,1281.3,712.5z M862.5,362.5l50-50 M856.3,362.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S856.3,359,856.3,362.5z M906.3,312.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S906.3,309,906.3,312.5z
         M1387.5,387.5l-25-25h-25 M1381.3,387.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1381.3,384,1381.3,387.5z
         M1331.3,362.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1331.3,359,1331.3,362.5z M437.5,12.5h-75 M431.3,12.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S431.3,9,431.3,12.5z M356.3,12.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        s-2.8-6.3-6.3-6.3S356.3,9,356.3,12.5z M1312.5,487.5l-50-50 M1306.3,487.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1306.3,484,1306.3,487.5z M1256.3,437.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1256.3,434,1256.3,437.5z
         M12.5,337.5v50 M6.3,337.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S6.3,334,6.3,337.5z M6.3,387.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S6.3,384,6.3,387.5z M612.5,437.5l25,25v25l-50,50h-50 M606.3,437.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S606.3,434,606.3,437.5z M531.3,537.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S531.3,534,531.3,537.5z M1212.5,712.5l-50-50 M1206.3,712.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1206.3,709,1206.3,712.5z M1156.3,662.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1156.3,659,1156.3,662.5z M37.5,687.5v-25l-25-25 M31.3,687.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S31.3,684,31.3,687.5z M6.3,637.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S6.3,634,6.3,637.5z M487.5,12.5v25
        l-75,75h-25 M481.3,12.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S481.3,9,481.3,12.5z M381.3,112.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S381.3,109,381.3,112.5z M487.5,212.5h-25l-100,100h-25 M481.3,212.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S481.3,209,481.3,212.5z M331.3,312.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S331.3,309,331.3,312.5z M1287.5,87.5h50l25,25v25 M1281.3,87.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1281.3,84,1281.3,87.5z M1356.3,137.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1356.3,134,1356.3,137.5z M962.5,712.5l-50-50 M956.3,712.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S956.3,709,956.3,712.5z M906.3,662.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S906.3,659,906.3,662.5z M912.5,687.5
        l25,25v25l-25,25 M906.3,687.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S906.3,684,906.3,687.5z M906.3,762.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S906.3,759,906.3,762.5z M262.5,212.5h-50 M256.3,212.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S256.3,209,256.3,212.5z M206.3,212.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S206.3,209,206.3,212.5z M187.5,512.5h50 M181.3,512.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        s-2.8-6.3-6.3-6.3S181.3,509,181.3,512.5z M231.3,512.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S231.3,509,231.3,512.5z M1262.5,512.5h50 M1256.3,512.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1256.3,509,1256.3,512.5z M1306.3,512.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1306.3,509,1306.3,512.5z
         M1412.5,587.5v50l25,25 M1406.3,587.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1406.3,584,1406.3,587.5z
         M1431.3,662.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1431.3,659,1431.3,662.5z M62.5,87.5l-25-25h-25 M56.3,87.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3C59,81.3,56.3,84,56.3,87.5z M6.3,62.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3c0-3.5-2.8-6.3-6.3-6.3S6.3,59,6.3,62.5z M12.5,687.5v50 M6.3,687.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        s-2.8-6.3-6.3-6.3S6.3,684,6.3,687.5z M6.3,737.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S6.3,734,6.3,737.5z
         M1237.5,562.5l-125-125h-25 M1231.3,562.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1231.3,559,1231.3,562.5z
         M1081.3,437.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1081.3,434,1081.3,437.5z M437.5,262.5l25-25h50
         M431.3,262.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S431.3,259,431.3,262.5z M506.3,237.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S506.3,234,506.3,237.5z M562.5,437.5v25l-25,25h-25 M556.3,437.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S556.3,434,556.3,437.5z M506.3,487.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S506.3,484,506.3,487.5z M1212.5,587.5l-125-125 M1206.3,587.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1206.3,584,1206.3,587.5z M1081.3,462.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1081.3,459,1081.3,462.5z
         M662.5,437.5h50 M656.3,437.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S656.3,434,656.3,437.5z M706.3,437.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S706.3,434,706.3,437.5z M212.5,687.5h50 M206.3,687.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S206.3,684,206.3,687.5z M256.3,687.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S256.3,684,256.3,687.5z M1237.5,687.5h-25l-25-25 M1231.3,687.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1231.3,684,1231.3,687.5z M1181.3,662.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1181.3,659,1181.3,662.5z M1187.5,212.5l50-50 M1181.3,212.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1181.3,209,1181.3,212.5z M1231.3,162.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1231.3,159,1231.3,162.5z
         M837.5,262.5h-75 M831.3,262.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S831.3,259,831.3,262.5z M756.3,262.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S756.3,259,756.3,262.5z M887.5,312.5h-25l-25,25 M881.3,312.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S881.3,309,881.3,312.5z M831.3,337.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S831.3,334,831.3,337.5z M462.5,662.5h-25l-50,50v25 M456.3,662.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S456.3,659,456.3,662.5z M381.3,737.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S381.3,734,381.3,737.5z M862.5,437.5h50 M856.3,437.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S856.3,434,856.3,437.5z M906.3,437.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S906.3,434,906.3,437.5z M337.5,462.5
        h-50 M331.3,462.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S331.3,459,331.3,462.5z M281.3,462.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S281.3,459,281.3,462.5z M1287.5,612.5h25l25,25 M1281.3,612.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1281.3,609,1281.3,612.5z M1331.3,637.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1331.3,634,1331.3,637.5z M112.5,462.5l25,25v25 M106.3,462.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S106.3,459,106.3,462.5z M131.3,512.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S131.3,509,131.3,512.5z M1137.5,62.5h75 M1131.3,62.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3c0-3.5-2.8-6.3-6.3-6.3
        S1131.3,59,1131.3,62.5z M1206.3,62.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3c0-3.5-2.8-6.3-6.3-6.3S1206.3,59,1206.3,62.5z
         M537.5,712.5h50 M531.3,712.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S531.3,709,531.3,712.5z M581.3,712.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S581.3,709,581.3,712.5z M462.5,287.5h-50l-25,25 M456.3,287.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S456.3,284,456.3,287.5z M381.3,312.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S381.3,309,381.3,312.5z M937.5,12.5h75 M931.3,12.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3
        s-2.8-6.3-6.3-6.3S931.3,9,931.3,12.5z M1006.3,12.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1006.3,9,1006.3,12.5z
         M1337.5,462.5h-25l-25-25v-25 M1331.3,462.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1331.3,459,1331.3,462.5z
         M1281.3,412.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1281.3,409,1281.3,412.5z M412.5,412.5h25l25-25
         M406.3,412.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S406.3,409,406.3,412.5z M456.3,387.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S456.3,384,456.3,387.5z M937.5,62.5v-25l-25-25 M931.3,62.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3c0-3.5-2.8-6.3-6.3-6.3S931.3,59,931.3,62.5z M906.3,12.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S906.3,9,906.3,12.5z M37.5,312.5l25-25v-25 M31.3,312.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S31.3,309,31.3,312.5z M56.3,262.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3C59,256.3,56.3,259,56.3,262.5z
         M37.5,737.5l25-25v-25 M31.3,737.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S31.3,734,31.3,737.5z M56.3,687.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3C59,681.3,56.3,684,56.3,687.5z M637.5,262.5v-50 M631.3,262.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S631.3,259,631.3,262.5z M631.3,212.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S631.3,209,631.3,212.5z M1212.5,512.5l25-25h50 M1206.3,512.5c0,3.5,2.8,6.3,6.3,6.3
        s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1206.3,509,1206.3,512.5z M1281.3,487.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1281.3,484,1281.3,487.5z M1437.5,612.5v-50 M1431.3,612.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3
        S1431.3,609,1431.3,612.5z M1431.3,562.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1431.3,559,1431.3,562.5z
         M1412.5,537.5v-50 M1406.3,537.5c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1406.3,534,1406.3,537.5z M1406.3,487.5
        c0,3.5,2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3S1406.3,484,1406.3,487.5z"
      />
    </svg>
  )
}

export default SvgBG
