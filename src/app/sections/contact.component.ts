import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  template: `
    <section id="contact" class="section">
      <div class="container-x">
        <div class="rounded-[2rem] bg-gradient-to-br from-indigo-600 to-purple-700 p-8 sm:p-12 lg:p-16 grid lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
          <div class="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/10 pointer-events-none"></div>
          <div class="relative text-white">
            <h2 class="text-3xl md:text-4xl font-extrabold leading-tight">Apne institute ko digital banaiye — aaj hi.</h2>
            <p class="mt-4 text-lg text-indigo-100">15 minute ka free demo book kijiye. Hum aapka data setup karne mein bhi madad karenge.</p>
            <ul class="mt-8 space-y-3 text-indigo-50">
              <li class="flex gap-3"><span>✓</span> Free setup &amp; data import</li>
              <li class="flex gap-3"><span>✓</span> Hindi mein training</li>
              <li class="flex gap-3"><span>✓</span> WhatsApp par support</li>
            </ul>
          </div>

          <div class="relative bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
            @if (submitted()) {
              <div class="text-center py-10">
                <div class="mx-auto w-16 h-16 rounded-full bg-green-100 text-green-600 grid place-items-center text-3xl">✓</div>
                <h3 class="mt-5 text-xl font-bold text-gray-900">Dhanyavaad, {{ form.value.name }}!</h3>
                <p class="mt-2 text-gray-600">Hamari team 24 ghante mein aapko call karegi.</p>
                <button (click)="reset()" class="mt-6 text-sm font-semibold text-indigo-600 hover:underline">Ek aur request bhejein</button>
              </div>
            } @else {
              <form [formGroup]="form" (ngSubmit)="submit()" class="space-y-4" novalidate>
                <h3 class="text-xl font-bold text-gray-900">Book a Free Demo</h3>
                <div>
                  <label for="name" class="block text-sm font-semibold text-gray-700 mb-1.5">Aapka naam</label>
                  <input id="name" formControlName="name" class="input" placeholder="e.g. Rakesh Sharma" />
                  @if (invalid('name')) { <p class="mt-1 text-xs text-red-600">Naam zaroori hai</p> }
                </div>
                <div>
                  <label for="institute" class="block text-sm font-semibold text-gray-700 mb-1.5">Institute ka naam</label>
                  <input id="institute" formControlName="institute" class="input" placeholder="e.g. Sharma Coaching Centre" />
                  @if (invalid('institute')) { <p class="mt-1 text-xs text-red-600">Institute ka naam zaroori hai</p> }
                </div>
                <div class="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label for="phone" class="block text-sm font-semibold text-gray-700 mb-1.5">WhatsApp number</label>
                    <input id="phone" formControlName="phone" class="input" inputmode="numeric" maxlength="10" placeholder="98XXXXXXXX" />
                    @if (invalid('phone')) { <p class="mt-1 text-xs text-red-600">Sahi 10-digit number daalein</p> }
                  </div>
                  <div>
                    <label for="students" class="block text-sm font-semibold text-gray-700 mb-1.5">Students</label>
                    <select id="students" formControlName="students" class="input">
                      <option value="lt100">100 se kam</option>
                      <option value="100-300">100 – 300</option>
                      <option value="300-1000">300 – 1000</option>
                      <option value="gt1000">1000+</option>
                    </select>
                  </div>
                </div>
                <button type="submit" class="btn-primary w-full py-3.5 text-base">Book Free Demo →</button>
                <p class="text-xs text-gray-400 text-center">Hum aapka number kisi ke saath share nahi karte.</p>
              </form>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  readonly submitted = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    institute: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    students: ['lt100'],
  });

  invalid(name: 'name' | 'institute' | 'phone'): boolean {
    const c = this.form.controls[name];
    return c.invalid && (c.touched || c.dirty);
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // TODO: send this.form.getRawValue() to your backend / CRM / Google Sheet here.
    console.log('Demo request', this.form.getRawValue());
    this.submitted.set(true);
  }

  reset() {
    this.form.reset();
    this.submitted.set(false);
  }
}
