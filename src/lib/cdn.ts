const CDN_BASE = "https://cdn.light-lens.com";

function clean(name: string) {
  return name.replace(/^\.\//, "");
}

// collection = "shoots" or "equestrian" (matches the top-level folder in the bucket)
// folder = the raw post directory name (matches what you uploaded to R2 via rclone)
export function cdnUrl(collection: string, folder: string, filename: string, transform?: string) {
  const path = `${collection}/${encodeURIComponent(folder)}/${encodeURIComponent(clean(filename))}`;
  return transform
    ? `${CDN_BASE}/cdn-cgi/image/${transform}/${path}`
    : `${CDN_BASE}/${path}`;
}

export const THUMB = "width=800,height=800,quality=75,format=auto";
export const FULL = "width=2000,height=2000,quality=80,format=auto";
