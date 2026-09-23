export type ReadingStatus = "normal" | "warning" | "critical";

export type Reading = {
  id: string;
  sensorName: string;
  site: string;
  value: number;
  unit: string;
  recordedAt: string;
  status: ReadingStatus;
};

export type ReadingsQuery = {
  site?: string;
  status?: ReadingStatus;
  page: number;
  pageSize: number;
};

export type ReadingsResponse = {
  items: Reading[];
  page: number;
  pageSize: number;
  total: number;
};
