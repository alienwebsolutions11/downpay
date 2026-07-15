import { authenticate } from "../shopify.server";
import { isThemeBlockActive } from "../Utils/shopifyHelpers.server"; // apna actual path daalo
import { json } from "@remix-run/node";

export const loader = async ({ request }) => {
  const { session } = await authenticate.admin(request);

  const result = await isThemeBlockActive({
    shop: session.shop,
    accessToken: session.accessToken,
  });

  return json({ blockActive: result, checkedAt: new Date().toISOString() });
};