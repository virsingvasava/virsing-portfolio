import type { SVGProps } from "react";

const PHP = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        viewBox="0 24 120 72"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>PHP</title>
        {/* Main Ellipse - Adjusted to fill more vertical space */}
        <ellipse cx="60" cy="60" rx="58" ry="34" fill="#777BB4" />

        {/* Darker contrast ring */}
        <path
            fill="#4F5B93"
            d="M60 26C28 26 2 41.2 2 60s26 34 58 34 58-15.2 58-34-26-34-58-34zm0 62c-24 0-44-12.5-44-28s20-28 44-28 44 12.5 44 28-20 28-44 28z"
        />

        {/* Bold PHP Text */}
        <path
            fill="#FFFFFF"
            d="M31 46h10c6.5 0 11 2.5 11 9.5 0 7.5-5.5 10.5-13 10.5h-4l-2.5 13h-7.5L31 46zm8.5 14c4 0 6-1.5 6-4.5 0-3-2-4-5-4h-3.5l-1.5 8.5h4zM55 46h10c6.5 0 11 2.5 11 9.5 0 7.5-5.5 10.5-13 10.5h-4l-2.5 13h-7.5L55 46zm8.5 14c4 0 6-1.5 6-4.5 0-3-2-4-5-4h-3.5l-1.5 8.5h4zM83 46h7.5l-2 10.5h10.5l2-10.5h7.5l-2.5 13h-7.5l2-10.5H88.5l-2 10.5h-7.5l2.5-13z"
        />
    </svg>
);

export { PHP };