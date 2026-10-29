import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { LangService } from '../i18n/lang.service';
import { LangToggleComponent } from '../i18n/lang-toggle.component';

@Component({
  selector: 'app-navbar',
  imports: [LangToggleComponent],
  template: `
    <header
      class="sticky top-0 z-50 transition-all duration-300"
      [class]="scrolled() ? 'bg-white/90 backdrop-blur shadow-sm' : 'bg-white'"
    >
      <nav class="container-x flex items-center justify-between gap-3 h-16" aria-label="Main">
        <a href="#top" class="flex items-center gap-2 text-xl font-extrabold text-indigo-900 shrink-0">
          <span class="grid place-items-center w-9 h-9 rounded-xl bg-indigo-600 text-lg shadow-sm">📘</span>
          <span class="hidden min-[400px]:inline">ClassKendra</span>
        </a>

        <div class="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-600">
          @for (l of c().links; track l.href) {
            <a [href]="l.href" class="hover:text-indigo-600 transition">{{ l.label }}</a>
          }
        </div>

        <div class="flex items-center gap-2 lg:gap-3">
          <app-lang-toggle />
          <a href="#contact" class="hidden lg:inline text-sm font-semibold text-gray-700 hover:text-indigo-600 px-2">{{ c().demo }}</a>
          <a href="#pricing" class="hidden lg:inline-flex btn-primary text-sm">{{ c().trial }}</a>
          <button
            class="lg:hidden p-2 -mr-2 rounded-lg text-gray-700 hover:bg-gray-100"
            (click)="open.set(!open())"
            [attr.aria-expanded]="open()"
            aria-label="Toggle menu"
          >
            @if (open()) {
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M6 6l12 12M18 6L6 18"/></svg>
            } @else {
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg>
            }
          </button>
        </div>
      </nav>

      @if (open()) {
        <div class="lg:hidden border-t border-gray-100 bg-white shadow-lg">
          <div class="container-x py-4 flex flex-col gap-1">
            @for (l of c().links; track l.href) {
              <a [href]="l.href" (click)="open.set(false)"
                 class="py-2.5 px-3 rounded-lg font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700">{{ l.label }}</a>
            }
            <a href="#pricing" (click)="open.set(false)" class="btn-primary mt-3">{{ c().trial }}</a>
          </div>
        </div>
      }
    </header>
  `,
})
export class NavbarComponent {
  private readonly L = inject(LangService);
  readonly open = signal(false);
  readonly scrolled = signal(false);

  private readonly copy = {
    hi: {
      demo: 'Demo Book Karein',
      trial: 'Free Trial Shuru Karein',
      links: [
        { href: '#features', label: 'Features' },
        { href: '#how', label: 'Kaise kaam kare' },
        { href: '#demo', label: 'Demo' },
        { href: '#ai', label: 'AI ✨' },
        { href: '#pricing', label: 'Pricing' },
        { href: '#faq', label: 'FAQ' },
      ],
    },
    en: {
      demo: 'Book Demo',
      trial: 'Start Free Trial',
      links: [
        { href: '#features', label: 'Features' },
        { href: '#how', label: 'How it works' },
        { href: '#demo', label: 'Demo' },
        { href: '#ai', label: 'AI ✨' },
        { href: '#pricing', label: 'Pricing' },
        { href: '#faq', label: 'FAQ' },
      ],
    },
  };
  readonly c = computed(() => this.copy[this.L.lang()]);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 8);
  }
}
