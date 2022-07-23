import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";
import { url } from "inspector";

// Import your app's Link Resolver (if your app uses one)
import { linkResolver } from "../../prismicio";
/**
 * This API endpoint will be called by a Prismic webhook. The webhook
 * will send an object containing a list of added, updated, or deleted
 * documents. Pages for those documents will be rebuilt.
 *
 * The Prismic webhook must send the correct secret.
 */
export default async function handler(req, res) {
  if (req.body.type === "api-update" && req.body.documents.length > 0) {
    // Check for secret to confirm this is a valid request

    // If you have a `createClient()` function defined elsewhere in
    // your app, use that instead
    const client = prismic.createClient("passion-fruit");

    // Get a list of URLs for any new, updated, or deleted documents
    const documents = await client.getAllByIDs(req.body.documents);
    const urls = documents.map((doc) => prismicH.asLink(doc, linkResolver));
    try {
      // Revalidate the URLs for those documents
      res.revalidate(urls)
      // await Promise.all(urls.map(async (url) => await res.revalidate(url)));
      return res.json({ revalidated: true });
    } catch (err) {
      // If there was an error, Next.js will continue to show
      // the last successfully generated page
      return res.status(500).send("Error revalidating");
    }
  }

  // If the request's body is unknown, tell the requester
  return res.status(400).json({ message: "Invalid body" });
}