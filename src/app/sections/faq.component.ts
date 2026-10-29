import { Component, computed, inject, signal } from '@angular/core';
import { LangService } from '../i18n/lang.service';

@Component({
  selector: 'app-faq',
  template: `
    <section id="faq" class="section bg-gray-50">
      <div class="container-x grid lg:grid-cols-[1fr_1.6fr] gap-12">
        <div>
          <span class="eyebrow">FAQ</span>
          <h2 class="section-title">{{ c().title }}</h2>
          <p class="section-sub">{{ c().more }} <a href="#contact" class="text-indigo-600 font-semibold hover:underline">{{ c().talk }}</a>.</p>
        </div>
        <div class="space-y-3">
          @for (q of c().faqs; track $index; let i = $index) {
            <div class="card overflow-hidden">
              <button (click)="toggle(i)" [attr.aria-expanded]="open() === i"
                class="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold text-gray-900 hover:bg-gray-50">
                {{ q.q }}
                <span class="shrink-0 w-7 h-7 rounded-full bg-indigo-50 text-indigo-600 grid place-items-center transition-transform"
                  [class.rotate-45]="open() === i">+</span>
              </button>
              @if (open() === i) {
                <p class="px-5 pb-5 -mt-1 text-gray-600 leading-relaxed">{{ q.a }}</p>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class FaqComponent {
  private readonly L = inject(LangService);
  readonly open = signal<number | null>(0);

  private readonly copy = {
    hi: {
      title: 'Aapke sawaal, hamare jawaab',
      more: 'Kuch aur poochna hai?',
      talk: 'Humse baat karein',
      faqs: [
        { q: 'Kya parents ko koi app download karni padegi?', a: 'Nahi. Parents ko saare updates seedhe unke WhatsApp par milte hain — reminders, receipts, attendance aur marks.' },
        { q: 'WhatsApp messages kis number se jaate hain?', a: 'Messages official WhatsApp Business API se aapke institute ke naam ke saath jaate hain, taaki aapka personal number block hone ka khatra na rahe.' },
        { q: 'Mera purana data Excel mein hai, kya import ho jayega?', a: 'Haan. Excel ya CSV file upload karo, students aur fees ka data kuch minute mein import ho jaata hai. Zaroorat ho to hamari team madad karegi.' },
        { q: 'Mujhe kitne WhatsApp messages chahiye honge?', a: 'Average har student ko mahine mein 6–8 messages jaate hain (fee reminders, absent alerts, receipt, test result). Yaani 100 students ke liye lagbhag 800 messages — Starter plan ke 1,000 kaafi hain. Kam pade to ₹249 mein 1,000 extra messages le sakte hain.' },
        { q: 'Messages ki limit khatam hone par kya hoga?', a: 'Limit ke 80% par aapko app aur WhatsApp par alert milega. Limit poori hone par automatic messages ruk jaate hain, lekin fees, attendance aur baaki app chalta rehta hai. Top-up lete hi messages phir se chalu.' },
        { q: 'Kya parents online fees pay kar sakte hain?', a: 'Haan. Har reminder mein UPI payment link hota hai. Payment hote hi khata update hota hai aur receipt apne aap chali jaati hai.' },
        { q: 'Mera data kitna safe hai?', a: 'Data encrypted cloud servers par store hota hai aur regular backup hota hai. Aapka data sirf aapka hai — hum kisi ko share nahi karte.' },
        { q: 'Free trial ke baad kya hoga?', a: '14 din ke baad aap koi bhi plan chun sakte hain. Plan nahi liya to account read-only ho jaata hai — aapka data delete nahi hota.' },
      ],
    },
    en: {
      title: 'Your questions, answered',
      more: 'Something else on your mind?',
      talk: 'Talk to us',
      faqs: [
        { q: 'Do parents need to download an app?', a: 'No. Parents get every update directly on WhatsApp — reminders, receipts, attendance and marks.' },
        { q: 'Which number are WhatsApp messages sent from?', a: "Messages go out through the official WhatsApp Business API under your institute's name, so your personal number is never at risk of being blocked." },
        { q: 'My old data is in Excel. Can I import it?', a: 'Yes. Upload an Excel or CSV file and your student and fee data is imported in minutes. Our team can help if needed.' },
        { q: 'How many WhatsApp messages will I need?', a: "On average each student gets 6–8 messages a month (fee reminders, absence alerts, receipts, test results). So 100 students need about 800 messages — the Starter plan's 1,000 is enough. If you run short, add 1,000 extra messages for ₹249." },
        { q: 'What happens when I hit the message limit?', a: "You'll get an alert in the app and on WhatsApp at 80% of your limit. Once the limit is reached, automatic messages pause, but fees, attendance and the rest of the app keep working. Messages resume as soon as you top up." },
        { q: 'Can parents pay fees online?', a: 'Yes. Every reminder includes a UPI payment link. Once paid, the ledger updates and a receipt goes out automatically.' },
        { q: 'How safe is my data?', a: 'Data is stored on encrypted cloud servers with regular backups. Your data belongs to you — we never share it.' },
        { q: 'What happens after the free trial?', a: "After 14 days you can choose any plan. If you don't, your account becomes read-only — your data is never deleted." },
      ],
    },
  };
  readonly c = computed(() => this.copy[this.L.lang()]);

  toggle(i: number) {
    this.open.set(this.open() === i ? null : i);
  }
}
