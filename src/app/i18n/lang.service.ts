import { Injectable, effect, signal } from '@angular/core';

/** 'hi' = Hinglish (default), 'en' = English */
export type Lang = 'hi' | 'en';
export type Tr<T> = Record<Lang, T>;

const STORAGE_KEY = 'ck-lang';

function initialLang(): Lang {
  // 1. ?lang=en in the URL (handy for sharing an English link)
  try {
    const q = new URLSearchParams(window.location.search).get('lang');
    if (q === 'en' || q === 'hi') return q;
  } catch { /* ignore */ }
  // 2. Visitor's last choice
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'hi') return saved;
  } catch { /* storage blocked */ }
  // 3. Default: Hinglish
  return 'hi';
}

@Injectable({ providedIn: 'root' })
export class LangService {
  readonly lang = signal<Lang>(initialLang());

  constructor() {
    effect(() => {
      const l = this.lang();
      document.documentElement.lang = l === 'en' ? 'en' : 'hi-Latn';
      try { localStorage.setItem(STORAGE_KEY, l); } catch { /* storage blocked */ }
    });
  }

  set(l: Lang) {
    this.lang.set(l);
  }
}
