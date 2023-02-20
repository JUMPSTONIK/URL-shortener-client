import { useWindowSize } from '../Hooks/useWindowSize';
export const BgBoostMobile = () => {
    return (
        <div
            style={{ position: 'absolute', left: '0', top: '0', width: '100%', zIndex: '-1' }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={`${useWindowSize().width}`}
                height="300"
                preserveAspectRatio="xMidYMid slice"
                viewBox={`0 0 375 300`}
            >
                <g fill="#4B3F6B" fill-rule="evenodd">
                    <path d="M-263.351 570.909c29.685 77.331 73.689 123.988 171.79 127.377 98.102 3.39 167.085-60.547 256.043-73.22 88.958-12.674 135.24 107.895 240.73 152.532 105.488 44.638 274.775.333 377.9-125.622C886.24 526.021 878.62 327.29 799.392 238.798 720.162 150.307 608.257 84.743 243.5 224.76c-364.757 140.017-536.537 268.818-506.852 346.149zM-514-377.482c0 82.833 24.36 142.16 114.732 180.482 90.371 38.321 177.686 3.352 265.277 23.4 87.59 20.048 87.59 149.195 170.077 228.671 82.486 79.476 256.405 98.781 397.82 18.15 141.415-80.632 205.52-268.896 163.267-379.902C554.919-417.687 473.943-519 83.236-519S-514-460.314-514-377.482z" />
                </g>
            </svg>
        </div>
    );
};
