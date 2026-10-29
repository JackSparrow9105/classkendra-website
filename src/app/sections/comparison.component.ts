import { Component, computed, inject } from '@angular/core';
import { LangService } from '../i18n/lang.service';

@Component({
  selector: 'app-comparison',
  template: `
    <section class="section bg-gray-50">
      <div class="container-x">
        <div class="text-center max-w-2xl mx-auto">
          <span class="eyebrow">Why switch</span>
          <h2 class="section-title">Register vs ClassKendra</h2>
        </div>
        <div class="mt-12 max-w-4xl mx-auto card overflow-hidden">
          <div class="grid grid-cols-[1.4fr_1fr_1fr] text-sm font-bold bg-gray-50 border-b border-gray-100">
            <div class="p-4 text-gray-500">{{ c().task }}</div>
            <div class="p-4 text-center text-gray-500">Register / Excel</div>
            <div class="p-4 text-center text-indigo-700 bg-indigo-50">ClassKendra</div>
          </div>
          @for (r of c().rows; track $index) {
            <div class="grid grid-cols-[1.4fr_1fr_1fr] text-sm border-b last:border-0 border-gray-100">
              <div class="p-4 font-medium text-gray-800">{{ r.task }}</div>
              <div class="p-4 text-center text-gray-500">{{ r.old }}</div>
              <div class="p-4 text-center font-semibold text-gray-900 bg-indigo-50/40">{{ r.ck }}</div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ComparisonComponent {
  private readonly L = inject(LangService);

  private readonly copy = {
    hi: {
      task: 'Kaam',
      rows: [
        { task: 'Fee reminders', old: 'Ek-ek call ❌', ck: 'Automatic WhatsApp ✅' },
        { task: 'Attendance', old: '10 min, kaagaz par', ck: '2 min, phone par ✅' },
        { task: 'Receipts', old: 'Haath se likhna', ck: 'PDF, turant ✅' },
        { task: 'Parent updates', old: 'PTM mein hi', ck: 'Har din, WhatsApp par ✅' },
        { task: 'Monthly report', old: 'Ghanton ka hisaab', ck: 'Ek click ✅' },
        { task: 'Data backup', old: 'Register kho gaya to?', ck: 'Cloud par safe ✅' },
      ],
    },
    en: {
      task: 'Task',
      rows: [
        { task: 'Fee reminders', old: 'Call one by one ❌', ck: 'Automatic WhatsApp ✅' },
        { task: 'Attendance', old: '10 min, on paper', ck: '2 min, on phone ✅' },
        { task: 'Receipts', old: 'Written by hand', ck: 'Instant PDF ✅' },
        { task: 'Parent updates', old: 'Only at PTMs', ck: 'Daily, on WhatsApp ✅' },
        { task: 'Monthly report', old: 'Hours of calculation', ck: 'One click ✅' },
        { task: 'Data backup', old: 'What if the register is lost?', ck: 'Safe in the cloud ✅' },
      ],
    },
  };
  readonly c = computed(() => this.copy[this.L.lang()]);
}
