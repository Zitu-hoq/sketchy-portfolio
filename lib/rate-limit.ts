const FIVE_MINUTES = 5 * 60 * 1000;
const RATE_WINDOW = 60 * 1000;
const MAX_REQUESTS_PER_IP = 20;
const MAX_UNIQUE_IPS_PER_WINDOW = 10;

const submissions = new Map<string, number>();
const ipRequestLog = new Map<string, number[]>();
const globalRequestLog: { ip: string; timestamp: number }[] = [];

function getClientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function cleanupLogs() {
  const cutoff = Date.now() - RATE_WINDOW;

  while (globalRequestLog.length > 0 && globalRequestLog[0].timestamp < cutoff) {
    globalRequestLog.shift();
  }

  for (const [ip, timestamps] of ipRequestLog) {
    const filtered = timestamps.filter((t) => t >= cutoff);
    if (filtered.length === 0) {
      ipRequestLog.delete(ip);
    } else {
      ipRequestLog.set(ip, filtered);
    }
  }
}

export function checkRateLimit(req: Request):
  | { allowed: true; ip: string }
  | { allowed: false; status: number; error: string } {
  const ip = getClientIp(req);
  const now = Date.now();

  cleanupLogs();

  const uniqueIps = new Set(globalRequestLog.map((e) => e.ip));
  if (uniqueIps.size >= MAX_UNIQUE_IPS_PER_WINDOW && !uniqueIps.has(ip)) {
    return { allowed: false, status: 429, error: "Too many requests. Please try again later." };
  }

  const ipTimestamps = ipRequestLog.get(ip) || [];
  if (ipTimestamps.length >= MAX_REQUESTS_PER_IP) {
    return { allowed: false, status: 429, error: "Too many requests. Please slow down." };
  }

  const lastSubmission = submissions.get(ip);
  if (lastSubmission && now - lastSubmission < FIVE_MINUTES) {
    const remaining = Math.ceil((FIVE_MINUTES - (now - lastSubmission)) / 1000 / 60);
    return { allowed: false, status: 429, error: `Please wait ${remaining} minute(s) before sending another message.` };
  }

  globalRequestLog.push({ ip, timestamp: now });
  ipRequestLog.set(ip, [...ipTimestamps, now]);

  return { allowed: true, ip };
}

export function recordSubmission(ip: string) {
  submissions.set(ip, Date.now());
}
