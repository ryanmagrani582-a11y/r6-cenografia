import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenisInstance(lenis: Lenis | null): void {
  instance = lenis;
}

export function getLenisInstance(): Lenis | null {
  return instance;
}

export function stopLenis(): void {
  instance?.stop();
}

export function startLenis(): void {
  instance?.start();
}
