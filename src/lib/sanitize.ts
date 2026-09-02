const MAX_FIELD = 500;
const MAX_MESSAGE = 5000;

export function stripTags(value: string) {
  return value.replace(/<[^>]*>/g, "").replace(/[<>]/g, "");
}

export function cleanField(value: unknown, max = MAX_FIELD) {
  if (typeof value !== "string") return "";
  return stripTags(value).replace(/\s+/g, " ").trim().slice(0, max);
}

export function cleanMessage(value: unknown) {
  if (typeof value !== "string") return "";
  return stripTags(value).replace(/\r\n/g, "\n").trim().slice(0, MAX_MESSAGE);
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
