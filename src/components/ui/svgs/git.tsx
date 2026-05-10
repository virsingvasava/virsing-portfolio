import type { SVGProps } from "react";

const Git = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <title>Git</title>
        <path fill="#F05032" d="M24 6C14 6 6 14 6 24s8 18 18 18 18-8 18-18S34 6 24 6z" />
        <path fill="#fff" d="M28 20h-8v-4h8v4zm-4 4h-4v8h4v-8zm8 0h-4v8h4v-8z" />
    </svg>
);

export { Git };