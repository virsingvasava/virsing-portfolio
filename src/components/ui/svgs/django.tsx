import type { SVGProps } from "react";

const Django = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        {...props}
    >
        {/* Background */}
        <rect width="128" height="128" rx="24" fill="#092E20" />

        {/* Logo */}
        <g transform="translate(18 18) scale(0.72)">
            <path
                fill="#fff"
                d="M84.7 25h14.5v15.6H84.7V25zm0 22.7h14.5v55.6c0 16.5-10.2 27.1-28.7 27.1-9.5 0-18.7-2.1-25.2-6.2l6.2-12.7c4.6 2.6 11.2 4.3 17.4 4.3 8.9 0 15.8-4.5 15.8-15.1V47.7zM65.7 47.7V61c-4-8.8-12.5-14.3-23.9-14.3C21.4 46.7 5 61.9 5 84.7c0 22.7 16.4 37.9 36.9 37.9 11.3 0 19.9-5.5 23.9-14.3v13h14.5V47.7H65.7zM45.8 107.4c-12.5 0-22.3-9.5-22.3-22.7S33.3 62 45.8 62s22.3 9.5 22.3 22.7-9.8 22.7-22.3 22.7z"
            />
        </g>
    </svg>
);

export { Django };