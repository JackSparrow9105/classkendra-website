import { Component, computed, inject, signal } from '@angular/core';
import { LangService } from '../i18n/lang.service';

type TabId = 'dashboard' | 'attendance' | 'parent';

interface Student {
  name: string;
  roll: number;
  present: boolean;
}

@Component({
  selector: 'app-demo',
  template: `
    <section id="demo" class="section bg-gradient-to-b from-white to-indigo-50/60">
      <div class="container-x">
        <div class="text-center max-w-2xl mx-auto">
          <span class="eyebrow">Live demo</span>
          <h2 class="section-title">See ClassKendra in Action</h2>
          <p class="section-sub mx-auto">{{ ui().sub }}</p>
        </div>

        <div class="mt-10 flex justify-center">
          <div class="inline-flex p-1.5 bg-white rounded-2xl border border-gray-200 shadow-sm" role="tablist">
            @for (t of tabs; track t.id) {
              <button role="tab" [attr.aria-selected]="active() === t.id" (click)="active.set(t.id)"
                class="px-4 sm:px-5 py-2 rounded-xl text-sm font-semibold transition"
                [class.bg-indigo-600]="active() === t.id" [class.text-white]="active() === t.id"
                [class.text-gray-600]="active() !== t.id">
                {{ t.label }}
              </button>
            }
          </div>
        </div>

        <div class="mt-14 grid lg:grid-cols-2 gap-14 items-center">
          <!-- Copy -->
          <div class="order-2 lg:order-1 max-w-lg mx-auto lg:mx-0">
            <h3 class="text-2xl md:text-3xl font-extrabold text-gray-900">{{ current().title }}</h3>
            <p class="mt-4 text-gray-600 text-lg">{{ current().text }}</p>
            <ul class="mt-6 space-y-3">
              @for (p of current().points; track p) {
                <li class="flex gap-3 text-gray-700">
                  <span class="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center text-xs font-bold">✓</span>
                  {{ p }}
                </li>
              }
            </ul>
          </div>

          <!-- Phone -->
          <div class="order-1 lg:order-2 flex justify-center">
            <div class="phone">
              <div class="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
              <div class="phone-screen">
                @switch (active()) {
                  @case ('dashboard') {
                    <div class="bg-indigo-600 text-white px-5 pt-10 pb-6 rounded-b-3xl">
                      <p class="text-indigo-200 text-xs">{{ ui().hello }}</p>
                      <h4 class="font-bold text-lg">Today's Overview</h4>
                    </div>
                    <div class="p-4 space-y-4 overflow-y-auto">
                      <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                        <p class="text-gray-500 text-[11px] font-bold uppercase tracking-wider">Pending Fees</p>
                        <p class="text-3xl font-extrabold text-red-500 mt-1">₹{{ pendingFees() }}</p>
                        <p class="text-xs text-gray-500 mt-1">{{ reminderSent() ? ui().sent : '18 students · 6 overdue' }}</p>
                        <button (click)="reminderSent.set(true)" [disabled]="reminderSent()"
                          class="mt-3 w-full text-sm font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition"
                          [class.bg-whatsapp]="!reminderSent()" [class.text-white]="!reminderSent()"
                          [class.bg-green-50]="reminderSent()" [class.text-green-700]="reminderSent()">
                          {{ reminderSent() ? 'Reminders Sent ✓' : 'Send WhatsApp Reminders' }}
                        </button>
                      </div>
                      <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                        <div class="flex justify-between items-center">
                          <p class="text-gray-500 text-[11px] font-bold uppercase tracking-wider">Today's Attendance</p>
                          <span class="text-xs font-bold text-green-600">{{ percent() }}%</span>
                        </div>
                        <div class="w-full bg-gray-100 rounded-full h-2 mt-3">
                          <div class="bg-green-500 h-2 rounded-full transition-all" [style.width.%]="percent()"></div>
                        </div>
                        <button (click)="active.set('attendance')" class="mt-3 w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm font-bold py-2 rounded-xl">Mark Now →</button>
                      </div>
                      <div class="grid grid-cols-2 gap-3">
                        <div class="bg-white p-3 rounded-2xl border border-gray-100">
                          <p class="text-[11px] text-gray-500 font-semibold">Collected (Oct)</p>
                          <p class="font-extrabold text-gray-900">₹1,07,500</p>
                        </div>
                        <div class="bg-white p-3 rounded-2xl border border-gray-100">
                          <p class="text-[11px] text-gray-500 font-semibold">Active students</p>
                          <p class="font-extrabold text-gray-900">124</p>
                        </div>
                      </div>
                    </div>
                  }
                  @case ('attendance') {
                    <div class="bg-white px-5 pt-10 pb-4 border-b border-gray-100">
                      <p class="text-xs text-gray-500">Class 10 · Physics · 4:00 PM</p>
                      <div class="flex items-center justify-between">
                        <h4 class="font-bold text-lg text-gray-900">Attendance</h4>
                        <span class="text-sm font-bold text-indigo-600">{{ presentCount() }}/{{ students().length }}</span>
                      </div>
                    </div>
                    <ul class="flex-1 overflow-y-auto divide-y divide-gray-100 bg-white">
                      @for (s of students(); track s.roll) {
                        <li>
                          <button (click)="toggle(s.roll)" class="w-full flex items-center gap-3 px-5 py-3 text-left hover:bg-gray-50">
                            <span class="w-9 h-9 rounded-full bg-indigo-50 text-indigo-700 grid place-items-center text-sm font-bold">{{ s.name.charAt(0) }}</span>
                            <span class="flex-1">
                              <span class="block text-sm font-semibold text-gray-900">{{ s.name }}</span>
                              <span class="block text-[11px] text-gray-400">Roll {{ s.roll }}</span>
                            </span>
                            <span class="text-xs font-bold px-3 py-1 rounded-full"
                              [class.bg-green-100]="s.present" [class.text-green-700]="s.present"
                              [class.bg-red-100]="!s.present" [class.text-red-600]="!s.present">
                              {{ s.present ? 'P' : 'A' }}
                            </span>
                          </button>
                        </li>
                      }
                    </ul>
                    <div class="p-4 bg-white border-t border-gray-100">
                      <button (click)="active.set('parent')" class="w-full btn-primary text-sm">Save &amp; alert {{ students().length - presentCount() }} parents</button>
                    </div>
                  }
                  @case ('parent') {
                    <div class="bg-whatsapp-dark text-white px-4 pt-10 pb-3 flex items-center gap-3">
                      <div class="w-9 h-9 rounded-full bg-indigo-500 grid place-items-center text-sm">📘</div>
                      <div>
                        <p class="font-semibold text-sm leading-tight">Sharma Coaching Centre</p>
                        <p class="text-[11px] text-green-100">online</p>
                      </div>
                    </div>
                    <div class="flex-1 bg-whatsapp-chat p-3 space-y-2.5 overflow-y-auto text-[13px]">
                      <div class="bg-white rounded-lg rounded-tl-none p-2.5 shadow-sm max-w-[90%]">
                        ⚠️ <b>Riya</b> aaj Physics class (4 PM) mein <b>absent</b> thi. Koi problem ho to batayein.
                        <p class="text-[10px] text-gray-400 text-right">4:12 PM</p>
                      </div>
                      <div class="bg-whatsapp-bubble rounded-lg rounded-tr-none p-2.5 shadow-sm max-w-[80%] ml-auto">
                        Ji sir, tabiyat thodi kharab thi. Kal aayegi.
                        <p class="text-[10px] text-gray-500 text-right">4:20 PM ✓✓</p>
                      </div>
                      <div class="bg-white rounded-lg rounded-tl-none p-2.5 shadow-sm max-w-[90%]">
                        🧾 Receipt: ₹2,500 received for <b>Riya</b> (Nov). Thank you!
                        <div class="mt-2 flex items-center gap-2 bg-gray-50 rounded-md p-2 border border-gray-100">
                          <span class="text-red-500 font-bold text-[10px] border border-red-200 rounded px-1">PDF</span>
                          <span class="text-[12px] text-gray-700">Receipt_CK1042.pdf</span>
                        </div>
                        <p class="text-[10px] text-gray-400 text-right">7:05 PM</p>
                      </div>
                      <div class="bg-white rounded-lg rounded-tl-none p-2.5 shadow-sm max-w-[90%]">
                        📝 Unit Test result — <b>Riya</b>: Physics 44/50, Maths 39/50. Class avg: 36.
                        <p class="text-[10px] text-gray-400 text-right">8:30 PM</p>
                      </div>
                    </div>
                  }
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class DemoComponent {
  private readonly L = inject(LangService);

  readonly tabs: { id: TabId; label: string }[] = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'attendance', label: 'Attendance' },
    { id: 'parent', label: 'Parent view' },
  ];

  private readonly copy = {
    hi: {
      sub: 'Tab chuniye aur try kijiye — attendance screen par students ko tap karke dekhiye.',
      hello: 'Namaste, Sharma Sir 👋',
      sent: '18 parents ko reminder bheja gaya ✓',
      tabs: {
        dashboard: {
          title: 'Poora institute, ek screen par',
          text: 'Subah app kholo aur turant dekho — kitni fees pending hai, aaj kaun aaya, is mahine kitna collect hua.',
          points: ['Pending fees aur defaulters list', 'Ek tap mein sabko WhatsApp reminder', 'Monthly collection ka live hisaab'],
        },
        attendance: {
          title: '30 students, 2 minute',
          text: 'Default sab present. Sirf absent students par tap karo aur save — parents ko alert apne aap chala jaata hai.',
          points: ['Batch-wise attendance', 'Absent par turant parent alert', 'Monthly attendance report'],
        },
        parent: {
          title: 'Parents ko koi app download nahi karni',
          text: 'Sab updates seedhe unke WhatsApp par aate hain — absent alert, fee receipt, test result.',
          points: ['Professional messages aapke institute ke naam se', 'PDF receipts automatic', 'Parents reply bhi kar sakte hain'],
        },
      },
    },
    en: {
      sub: 'Pick a tab and try it — tap students on the attendance screen.',
      hello: 'Hello, Sharma Sir 👋',
      sent: 'Reminder sent to 18 parents ✓',
      tabs: {
        dashboard: {
          title: 'Your whole institute on one screen',
          text: "Open the app in the morning and see instantly: pending fees, who came today, and how much you've collected this month.",
          points: ['Pending fees and defaulters list', 'WhatsApp reminders to everyone in one tap', 'Live monthly collection totals'],
        },
        attendance: {
          title: '30 students, 2 minutes',
          text: 'Everyone starts as present. Tap only the absent students and save — parents are alerted automatically.',
          points: ['Batch-wise attendance', 'Instant alerts to parents of absent students', 'Monthly attendance report'],
        },
        parent: {
          title: "Parents don't need to download anything",
          text: 'Every update lands right in their WhatsApp — absence alerts, fee receipts, test results.',
          points: ["Professional messages in your institute's name", 'Automatic PDF receipts', 'Parents can reply too'],
        },
      },
    },
  };
  readonly ui = computed(() => this.copy[this.L.lang()]);

  readonly active = signal<TabId>('dashboard');
  readonly current = computed(() => this.ui().tabs[this.active()]);
  readonly reminderSent = signal(false);
  readonly pendingFees = signal('45,000');

  readonly students = signal<Student[]>([
    { name: 'Aarav Gupta', roll: 1, present: true },
    { name: 'Riya Sharma', roll: 2, present: false },
    { name: 'Kabir Singh', roll: 3, present: true },
    { name: 'Ananya Verma', roll: 4, present: true },
    { name: 'Ishaan Yadav', roll: 5, present: true },
    { name: 'Meera Jain', roll: 6, present: false },
    { name: 'Arjun Mishra', roll: 7, present: true },
    { name: 'Sara Khan', roll: 8, present: true },
  ]);
  readonly presentCount = computed(() => this.students().filter((s) => s.present).length);
  readonly percent = computed(() => Math.round((this.presentCount() / this.students().length) * 100));

  toggle(roll: number) {
    this.students.update((list) => list.map((s) => (s.roll === roll ? { ...s, present: !s.present } : s)));
  }
}
