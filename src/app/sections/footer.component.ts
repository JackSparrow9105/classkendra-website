import { Component, computed, inject } from '@angular/core';
import { LangService } from '../i18n/lang.service';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-gray-950 text-gray-400 pt-16 pb-8">
      <div class="container-x">
        <div class="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" class="flex items-center gap-2 text-xl font-extrabold text-white">
              <span class="grid place-items-center w-9 h-9 rounded-xl bg-indigo-600">📘</span> ClassKendra
            </a>
            <p class="mt-4 text-sm leading-relaxed max-w-xs">{{ tagline() }}</p>
          </div>
          @for (col of columns; track col.title) {
            <div>
              <h4 class="text-sm font-bold text-white uppercase tracking-wider">{{ col.title }}</h4>
              <ul class="mt-4 space-y-2.5 text-sm">
                @for (l of col.links; track l.label) {
                  <li><a [href]="l.href" class="hover:text-white transition">{{ l.label }}</a></li>
                }
              </ul>
            </div>
          }
        </div>
        <div class="mt-14 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between gap-4 text-sm">
          <p>© {{ year }} ClassKendra. Made in India 🇮🇳</p>
          <div class="flex gap-5">
            <a href="#" class="hover:text-white">Twitter</a>
            <a href="#" class="hover:text-white">LinkedIn</a>
            <a href="#" class="hover:text-white">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  private readonly L = inject(LangService);
  readonly tagline = computed(() =>
    this.L.lang() === 'en'
      ? 'Your institute\'s digital ledger. Fees, attendance and parent updates — all on WhatsApp.'
      : 'Aapki Class Ka Digital Khata. Fees, attendance aur parent updates — sab WhatsApp par.',
  );
  readonly year = new Date().getFullYear();

  readonly columns = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'ClassKendra AI', href: '#ai' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Live Demo', href: '#demo' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'FAQ', href: '#faq' },
        { label: 'Book a Demo', href: '#contact' },
        { label: 'Help Centre', href: '#' },
        { label: 'WhatsApp Support', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Refund Policy', href: '#' },
      ],
    },
  ];
}
