export function analyze(input) {
  const protectedIps = new Set(input.allowlist);
  const seen = new Set();
  const decisions = [];
  for (const {ip,confidence,sources} of input.indicators) {
    if (seen.has(ip)) continue;
    seen.add(ip);
    const valid = /^\d{1,3}(\.\d{1,3}){3}$/.test(ip) && ip.split(".").every(part => Number(part) <= 255 && String(Number(part)) === part);
    const action = !valid ? "invalid" : protectedIps.has(ip) ? "allowlisted" : confidence >= 90 && sources >= 2 ? "propose block" : "review";
    decisions.push({ip,action});
  }
  return {mode:"dry run", proposed:decisions.filter(row => row.action === "propose block").length, decisions};
}
