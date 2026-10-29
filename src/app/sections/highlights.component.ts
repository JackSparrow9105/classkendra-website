import { Component, computed, inject } from '@angular/core';
import { LangService } from '../i18n/lang.service';

@Component({
  selector: 'app-highlights',
  template: `
    <section class="border-y border-gray-100 bg-white">
      <div class="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
        @for (h of c(); track $index) {
          <div class="py-8 px-4 text-center">
            <p class="text-2xl md:text-3xl font-extrabold text-indigo-700">{{ h.value }}</p>
            <p class="mt-1 text-sm text-gray-500 font-medium">{{ h.label }}</p>
          </div>
        }
      </div>
    </section>
  `,
})
export class HighlightsComponent {
  private readonly L = inject(LangService);

  private readonly copy = {
    hi: [
      { value: '2 min', label: 'mein poore batch ki attendance' },
      { value: '₹0', label: 'setup fee' },
      { value: '24/7', label: 'WhatsApp reminders' },
      { value: '2 bhasha', label: 'Hindi & English' },
    ],
    en: [
      { value: '2 min', label: 'to mark a full batch' },
      { value: '₹0', label: 'setup fee' },
      { value: '24/7', label: 'WhatsApp reminders' },
      { value: '2 languages', label: 'Hindi & English' },
    ],
  };
  readonly c = computed(() => this.copy[this.L.lang()]);
}
