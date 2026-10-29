import { Component } from '@angular/core';

@Component({
  selector: 'app-highlights',
  template: `
    <section class="border-y border-gray-100 bg-white">
      <div class="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
        @for (h of items; track h.label) {
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
  readonly items = [
    { value: '2 min', label: 'to mark a full batch' },
    { value: '₹0', label: 'setup fee' },
    { value: '24/7', label: 'WhatsApp reminders' },
    { value: '2 languages', label: 'Hindi & English' },
  ];
}
