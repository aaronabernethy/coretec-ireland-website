import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";
import memoryQueue from "@opennextjs/cloudflare/overrides/queue/memory-queue";

// Pre-built pages (product/industry/article pages) and the hourly-refreshed
// Case Histories page (pulled from Sanity) are stored in an R2 bucket.
// The memory queue handles background refreshes; fine for this site's traffic.
export default defineCloudflareConfig({
  incrementalCache: r2IncrementalCache,
  queue: memoryQueue,
});
