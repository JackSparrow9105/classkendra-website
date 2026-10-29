import { Component, inject } from '@angular/core';
import { Lang, LangService } from './lang.service';

@Component({
  selector: 'app-lang-toggle',
  template: `
    <div class="inline-flex p-1 bg-gray-100 rounded-xl text-xs font-bold" role="group" aria-label="Language">
      @for (o of options; track o.id) {
        <button type="button" (click)="L.set(o.id)" [attr.aria-pressed]="L.lang() === o.id"
          class="px-2.5 sm:px-3 py-1.5 rounded-lg transition"
          [class]="L.lang() === o.id ? 'bg-white text-indigo-700 shadow-sm' : 'text-gray-500 hover:text-gray-800'">
          {{ o.label }}
        </button>
      }
    </div>
  `,
})
export class LangToggleComponent {
  readonly L = inject(LangService);
  readonly options: { id: Lang; label: string }[] = [
    { id: 'hi', label: 'Hinglish' },
    { id: 'en', label: 'English' },
  ];
}
