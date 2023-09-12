import { writable } from 'svelte/store'

/**
 * @type { import("svelte/store").Writable<Route> }
 */
export const route = writable('main')
