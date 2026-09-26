import { apiClient } from '@/services/apiClient';

/** A general message to the team, as opposed to a record submission. */

export type ContactTopic = 'general' | 'correction' | 'partnership' | 'problem';

export interface ContactPayload {
  name: string;
  email: string;
  topic: ContactTopic;
  message: string;
}

export async function sendContactMessage(payload: ContactPayload): Promise<void> {
  await apiClient.post('/contact-messages', payload);
}
