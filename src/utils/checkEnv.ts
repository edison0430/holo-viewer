export function toBoolean(data?: string): boolean {
  return data == null ? false : data === 'true';
}
