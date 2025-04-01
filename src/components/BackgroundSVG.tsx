import { styled } from '@mui/system';

const BackgroundSVG = styled('svg')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  '& #backgroundImage': {
    animation: 'lavaFlow 6s ease-in-out infinite, opacityFlow 2s ease-in-out infinite, colorShift 3s ease-in-out infinite',
    transformOrigin: 'center',
  },
  '@keyframes lavaFlow': {
    '0%': { transform: 'translate(0, 0) scale(1,1)' },
    '25%': { transform: 'translate(150px, 150px) scale(1.8, 1.3)' },
    '50%': { transform: 'translate(-150px, -150px) scale(1.3, 1.5)' },
    '75%': { transform: 'translate(100px, -100px) scale(1.5, 1.2)' },
    '100%': { transform: 'translate(0, 0) scale(1,1)' },
  },
  '@keyframes opacityFlow': {
    '0%': { opacity: 0.8 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0.8 },
  },
  '@keyframes blurEffect': {
    '0%': { filter: 'blur(10px) hue-rotate(0deg)' },
    '50%': { filter: 'blur(15px) hue-rotate(45deg)' },
    '100%': { filter: 'blur(10px) hue-rotate(0deg)' },
  },
  '@keyframes colorShift': {
    '0%': { fill: '#ff4500' },
    '50%': { fill: '#ff6347' },
    '100%': { fill: '#ff4500' },
  },
});

export default function BackgroundSVGComponent() {
  return (
    <BackgroundSVG
      width="100%"
      height="100%"
      viewBox="0 0 1440 1080"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="1440" height="1080" fill="url(#pattern0_1_2)" fillOpacity="0.44" />
      <defs>
        <pattern id="pattern0_1_2" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#backgroundImage" transform="scale(0.00069990 0.000989999)" />
        </pattern>
        <image
          id="backgroundImage"
          width="1440"
          height="1080"
          preserveAspectRatio="none"
          xlinkHref="/assets/background/svgoverlay.svg"
        />
      </defs>
    </BackgroundSVG>
  );
}