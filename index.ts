/**
 * index.ts — Barrel re-export for the entire data layer.
 *
 * The app imports ALL data and types from this single entry point:
 *   import { schemes, pressReleases, PressRelease, ... } from '../data';
 *
 * The AI data agent works on individual domain files.
 * This file should rarely need to change — only when a new domain file is added.
 */

export * from './ticker';
export * from './stats';
export * from './schemes';
export * from './newsFeed';
export * from './manifesto';
export * from './assemblyLog';
export * from './assemblyCalendar';
export * from './pressReleases';
export * from './cabinet';
