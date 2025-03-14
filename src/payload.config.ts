import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig, CollectionConfig, FieldHook } from "payload";
import { s3Storage } from "@payloadcms/storage-s3";

const formatSlug: FieldHook = async ({ value, data }) => {
    return data?.title?.replace(/ /g, '-').toLowerCase() ?? value;
};

const Media: CollectionConfig = {
    slug: "media",
    access: {
        create: ({ req: { user } }) => {
            return Boolean(user)
        },
        update: ({ req: { user }}) => {
            return Boolean(user)
        },
        delete: ({ req: { user }}) => {
            return Boolean(user)
        },
        read: () => {
            return true
        }
    },
    upload: {
        staticDir: "media",
        imageSizes: [
            {
                name: "thumbnail",
                width: 400,
                height: 300,
                position: "centre",
            },
            {
                name: "card",
                width: 768,
                height: 1024,
                position: "centre",
            },
            {
                name: "tablet",
                width: 1024,
                height: undefined,
                position: "centre",
            },
        ],
        adminThumbnail: "thumbnail",
        mimeTypes: ["image/*"],
    },
    fields: [
        {
            name: "alt",
            type: "text",
        },
    ],
}

const Posts: CollectionConfig = {
    slug: "posts",
    access: {
        create: ({ req: { user } }) => {
            return Boolean(user)
        },
        update: ({ req: { user }}) => {
            return Boolean(user)
        },
        delete: ({ req: { user }}) => {
            return Boolean(user)
        },
        read: () => {
            return true
        }
    },
    fields: [
        {
            name: "title",
            type: "text",
        },
        {
            name: "content",
            type: "richText",
        },
        {
            name: "description",
            type: "textarea",
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
        },
        {
            name: 'slug',
            type: 'text',
            hooks: {
              beforeChange: [
                formatSlug,
              ],
            },
            admin: {
              readOnly: true,
            },
        },
    ]
}

export default buildConfig({
    editor: lexicalEditor(),
    collections: [
        Posts,
        Media
    ],
    secret: process.env.PAYLOAD_SECRET || "",
    plugins: [
        s3Storage({
          collections: {
            media: true
          },
          bucket: process.env.S3_BUCKET!,
          config: {
            credentials: {
              accessKeyId: process.env.S3_ACCESS_KEY_ID!,
              secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
            },
            endpoint: process.env.S3_ENDPOINT,
            region: process.env.S3_REGION ?? "auto",
          },
        }),
    ],
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI,
        },
    }),
    sharp,
})