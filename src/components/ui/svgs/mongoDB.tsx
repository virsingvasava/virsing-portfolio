import type { SVGProps } from "react";

const MongoDB = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <title>MongoDB</title>
        {/* The dark green center spine */}
        <path
            fill="#116149"
            d="M11.56 19.34s.18 3.79.44 4.66c.26-.87.44-4.66.44-4.66z"
        />
        {/* The light green right side */}
        <path
            fill="#13AA52"
            d="M12 21.65V.29c-.11-.1-.23-.21-.35-.29h-.18c-.89 1.13-5.26 6.94-5.26 12.3 0 5.35 4.37 8.35 5.79 9.35z"
        />
        {/* The medium green left side */}
        <path
            fill="#499D4A"
            d="M12 21.65c1.42-1 5.79-4 5.79-9.35 0-5.36-4.37-11.17-5.26-12.3h-.18c-.12.08-.24.19-.35.29v21.36z"
        />
        {/* The bottom tip accent */}
        <path
            fill="#3FA045"
            d="M11.56 19.34c.15.53.31 1.25.44 2.31.13-1.06.29-1.78.44-2.31z"
        />
    </svg>
);

export { MongoDB };