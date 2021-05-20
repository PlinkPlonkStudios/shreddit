import { createHmac } from "crypto";

import { hmacKey } from "@secrets/."

const hmac = createHmac("sha256", hmacKey);

export const hash = (input: string) => {
	return hmac.update(input).digest("hex");
};
