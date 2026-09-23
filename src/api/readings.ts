import fixtureReadings from "../../fixtures/readings.json";
import type { ReadingsQuery, ReadingsResponse, Reading } from "../types";

const DEFAULT_DELAY_MS = 700;

/**
 * Mock for GET /api/sensors/readings.
 *
 * The interview host can toggle these values while running the challenge.
 * A real implementation can replace this module without changing the screen.
 */
export const mockApiOptions = {
  delayMs: DEFAULT_DELAY_MS,
  shouldFail: false,
};

const readings = fixtureReadings as Reading[];

export async function getReadings(
  query: ReadingsQuery,
  signal?: AbortSignal,
): Promise<ReadingsResponse> {
  await delay(mockApiOptions.delayMs, signal);

  if (mockApiOptions.shouldFail) {
    throw new Error("Unable to load sensor readings.");
  }

  if (signal?.aborted) {
    throw new DOMException("The request was aborted.", "AbortError");
  }

  const filtered = readings.filter((reading) => {
    const matchesSite = !query.site || reading.site === query.site;
    const matchesStatus = !query.status || reading.status === query.status;
    return matchesSite && matchesStatus;
  });

  const start = (query.page - 1) * query.pageSize;

  return {
    items: filtered.slice(start, start + query.pageSize),
    page: query.page,
    pageSize: query.pageSize,
    total: filtered.length,
  };
}

function delay(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    const timeout = window.setTimeout(resolve, ms);
    signal?.addEventListener(
      "abort",
      () => {
        window.clearTimeout(timeout);
        reject(new DOMException("The request was aborted.", "AbortError"));
      },
      { once: true },
    );
  });
}
