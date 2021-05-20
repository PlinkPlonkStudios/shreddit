# We should only really use this outside of production. In production we need to
# use one constant HMAC key, and keep it secret.

# Ensure api-server/secrets/ exists
[ -d "./secrets" ] || mkdir secrets
# Generate HMAC key
ts-node ./scripts/gen-hmac.ts > ./secrets/hmac-key.ts
