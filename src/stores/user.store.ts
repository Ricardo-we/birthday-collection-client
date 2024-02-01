import { writable } from 'svelte/store';
import storage from './storage';
import type { User } from '../types/User';

export const userWritable = storage<{user?: User, token?: string} | null>("user", null);
