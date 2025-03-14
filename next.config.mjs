import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    }
};

export default withPayload(nextConfig);
