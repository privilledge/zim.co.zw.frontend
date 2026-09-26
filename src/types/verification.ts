/**
 * Every record on the portal carries a verification status. It is the core
 * trust signal described in the scope, so it is a shared type rather than
 * something each feature redefines.
 *
 * This will eventually mirror the enum returned by the Spring Boot API.
 */
export type VerificationStatus = 'verified' | 'review' | 'outdated';
