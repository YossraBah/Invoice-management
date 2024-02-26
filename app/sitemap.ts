import { MetadataRoute } from "next";

export default async function sitemap() : Promise<MetadataRoute.Sitemap> {
    return [
        {
            url:'https://invoice-management-dashboard.vercel.app/dashboard'
        },
        {
            url:'https://invoice-management-dashboard.vercel.app/login'
        }
    ]
}