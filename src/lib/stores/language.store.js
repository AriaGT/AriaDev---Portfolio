import { writable } from 'svelte/store';

/** @type { import("svelte/store").Writable<Language> } */
export const language = writable('ES');
