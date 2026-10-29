import { Component } from '@angular/core';
import { NavbarComponent } from './sections/navbar.component';
import { HeroComponent } from './sections/hero.component';
import { HighlightsComponent } from './sections/highlights.component';
import { ProblemComponent } from './sections/problem.component';
import { FeaturesComponent } from './sections/features.component';
import { HowItWorksComponent } from './sections/how-it-works.component';
import { DemoComponent } from './sections/demo.component';
import { AiComponent } from './sections/ai.component';
import { AudienceComponent } from './sections/audience.component';
import { ComparisonComponent } from './sections/comparison.component';
import { PricingComponent } from './sections/pricing.component';
import { FaqComponent } from './sections/faq.component';
import { ContactComponent } from './sections/contact.component';
import { FooterComponent } from './sections/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent, HeroComponent, HighlightsComponent, ProblemComponent, FeaturesComponent,
    HowItWorksComponent, DemoComponent, AiComponent, AudienceComponent, ComparisonComponent,
    PricingComponent, FaqComponent, ContactComponent, FooterComponent,
  ],
  template: `
    <app-navbar />
    <main id="top">
      <app-hero />
      <app-highlights />
      <app-problem />
      <app-features />
      <app-how-it-works />
      <app-demo />
      <app-ai />
      <app-audience />
      <app-comparison />
      <app-pricing />
      <app-faq />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class AppComponent {}
