import { apiClient } from '@/services/apiClient';

/**
 * Submissions from the public: a new listing, a correction, or a report that
 * something has gone out of date.
 *
 * The scope makes source and verification date part of every record, so the
 * form asks for a source URL: a submission the team cannot trace back is one
 * they cannot publish.
 */

export type SubmissionKind = 'new-listing' | 'correction' | 'out-of-date';

export interface SubmissionPayload {
  kind: SubmissionKind;
  name: string;
  area: string;
  location: string;
  sourceUrl: string;
  details: string;
  email: string;
}

export async function submitInformation(payload: SubmissionPayload): Promise<void> {
  await apiClient.post('/submissions', payload);
}
