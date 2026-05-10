import type { SVGProps } from "react";

const RestApi = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        fill="none"
        viewBox="6 10 36 28"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>REST APIs</title>

        {/* Server / Block */}
        <rect
            x="8"
            y="12"
            width="14"
            height="24"
            rx="2"
            fill="#4F46E5"
        />

        {/* API Lines / Connections */}
        <path
            d="M22 20h8M22 28h8"
            stroke="#4F46E5"
            strokeWidth="3"
            strokeLinecap="round"
        />

        {/* Right Server / Block */}
        <rect
            x="30"
            y="16"
            width="12"
            height="16"
            rx="2"
            fill="#6366F1"
        />

        {/* Dots representing endpoints */}
        <circle cx="35" cy="21" r="1.5" fill="#fff" />
        <circle cx="39" cy="21" r="1.5" fill="#fff" />
        <circle cx="35" cy="26" r="1.5" fill="#fff" />
        <circle cx="39" cy="26" r="1.5" fill="#fff" />

        {/* Arrow indicating data flow */}
        <path
            d="M26 24L30 24"
            stroke="#A5B4FC"
            strokeWidth="2.5"
            strokeLinecap="round"
        />
        <path
            d="M29 22.5L30 24L29 25.5"
            fill="none"
            stroke="#A5B4FC"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export { RestApi };