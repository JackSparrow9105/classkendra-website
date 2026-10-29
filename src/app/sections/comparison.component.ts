import { Component } from '@angular/core';

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
            <div class="p-4 text-gray-500">Kaam</div>
            <div class="p-4 text-center text-gray-500">Register / Excel</div>
            <div class="p-4 text-center text-indigo-700 bg-indigo-50">ClassKendra</div>
          </div>
          @for (r of rows; track r.task) {
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
  readonly rows = [
    { task: 'Fee reminders', old: 'Ek-ek call ❌', ck: 'Automatic WhatsApp ✅' },
    { task: 'Attendance', old: '10 min, kaagaz par', ck: '2 min, phone par ✅' },
    { task: 'Receipts', old: 'Haath se likhna', ck: 'PDF, turant ✅' },
    { task: 'Parent updates', old: 'PTM mein hi', ck: 'Har din, WhatsApp par ✅' },
    { task: 'Monthly report', old: 'Ghanton ka hisaab', ck: 'Ek click ✅' },
    { task: 'Data backup', old: 'Register kho gaya to?', ck: 'Cloud par safe ✅' },
  ];
}
