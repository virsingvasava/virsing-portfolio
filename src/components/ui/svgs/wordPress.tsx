import type { SVGProps } from "react";

const WordPress = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        viewBox="0 24 120 72"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>WordPress</title>

        {/* Main Ellipse */}
        <ellipse
            cx="60"
            cy="60"
            rx="58"
            ry="34"
            fill="#21759B"
        />

        {/* Darker Contrast Ring */}
        <path
            fill="#145A75"
            d="M60 26C28 26 2 41.2 2 60s26 34 58 34 58-15.2 58-34-26-34-58-34zm0 62c-24 0-44-12.5-44-28s20-28 44-28 44 12.5 44 28-20 28-44 28z"
        />

        {/* WordPress W */}
        <path
            fill="#FFFFFF"
            d="M39 47h7l4.5 17 5-17h7l5 17 4.5-17h7L70 77h-7l-5-17-5 17h-7L39 47z"
        />

        {/* WordPress Circle Detail */}
        <circle
            cx="60"
            cy="60"
            r="25"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            opacity="0.9"
        />
    </svg>
);

export { WordPress };