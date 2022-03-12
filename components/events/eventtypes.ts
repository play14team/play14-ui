export interface EventSummary {
  slug: string;
  name: string;
  start: Date;
  end: Date;
  status: string;
}

export interface Event extends EventSummary {
  description: string;
}
