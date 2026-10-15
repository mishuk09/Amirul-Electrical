import fs from 'node:fs';
import path from 'node:path';

import { Photo } from '@/components/photo';
import { BadgeCheck, Check, ClipboardCheck, MapPin, MessageCircle, Quote, Star } from 'lucide-react';

const reviewSource = fs.readFileSync(path.join(process.cwd(), 'sources', 'Amirul Electrical Services-service.txt'), 'utf8');
const reviewNames = ['Ikmal Khairulezuan', 'Sri Vikneswaran', 'SYED FAREEZ BIN SYED NASIR'];

function getReview(name: string) {
  const start = reviewSource.indexOf(name);
  const review = start >= 0 ? reviewSource.slice(start) : '';
  const date = review.match(/\r?\n\d+ (?:months?|years?) ago\r?\n/);

  if (!date || date.index === undefined) {
    throw new Error(`Could not find the review for ${name} in the supplied source file.`);
  }

  const text = review.slice(date.index + date[0].length).split(/\r?\n\r?\n/)[0].trim();
  return text.replace(/\s*… More$/, '…');
}

const business = {
  phone: '016-788 9628',
  telephone: 'tel:+60167889628',
  whatsapp: 'https://wa.me/60167889628?text=Hi%20Amirul%20Electrical%20Services%2C%20I%27d%20like%20to%20ask%20about%20your%20services.',
  address: 'No 67, Jalan KI1, Taman Krubong Indah, 75260 Melaka',
  maps: 'https://www.google.com/maps/search/?api=1&query=Amirul+Electrical+Services+No+67+Jalan+KI1+Taman+Krubong+Indah+75260+Melaka',
  mapEmbed: 'https://www.google.com/maps?q=Amirul+Electrical+Services+No+67+Jalan+KI1+Taman+Krubong+Indah+75260+Melaka&output=embed',
};
const services = [
  { number: '01', title: 'Electrical installation', description: 'Planning an electrical installation? Tell us about your space and the work you need.', tag: 'POWER YOUR SPACE', image: '/images/5.png' },
  { number: '02', title: 'Wiring services', description: 'From a wiring concern to a planned upgrade, start with a conversation about your electrical needs.', tag: 'GET CONNECTED', image: '/images/3.png' },
  { number: '03', title: 'Aircond services', description: 'Make comfort part of your everyday. Contact us to discuss your air-conditioning service needs.', tag: 'KEEP YOUR COOL', image: '/images/4.png' },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }
function WhatsAppIcon() { return <img className="whatsapp-icon" src="/images/WhatsApp.webp" alt="" aria-hidden="true" />; }
function ReviewerInitials({ name }: { name: string }) {
  return <span className="reviewer-avatar" aria-hidden="true">{name.split(' ').map(part => part[0]).slice(0, 2).join('')}</span>;
}
function Brand() {
  return <a href="#home" className="brand" aria-label="Amirul Electrical Services home"><span className="brand-mark" aria-hidden="true">ϟ</span><span>AMIRUL<small>ELECTRICAL SERVICES</small></span></a>;
}
function Header() {
  return <header className="site-header"><div className="container flex items-center justify-between gap-4 py-5">
    <Brand />
    <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex"><a href="#services">Our services</a><a href="#about">About us</a><a href="#testimonials">Reviews</a><a href="#location">Find us</a></nav>
    <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="button button-small"><WhatsAppIcon /> Let’s talk <Arrow /></a>
  </div></header>;
}
function Hero() {
  return <section className="hero" aria-labelledby="hero-title"><div className="container grid items-center gap-12 py-14 lg:grid-cols-2 lg:py-20">
    <div><p className="eyebrow"><span className="status-dot" /> YOUR LOCAL CONNECTION IN MELAKA</p>
      <h1 id="hero-title">Power on.<br />Stay cool.<br /><span>Feel at home.</span></h1>
      <p className="hero-copy">Electrical, wiring and aircond services, right here in Melaka. Let’s get your space working the way it should.</p>
      <div className="mt-8 flex flex-wrap gap-3"><a href={business.telephone} className="button">Call {business.phone} <Arrow /></a><a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="button button-whatsapp"><WhatsAppIcon /> WhatsApp us <Arrow /></a><a href="#services" className="button button-outline">Explore services <span aria-hidden="true">↓</span></a></div>
      <div className="hero-proof"><span className="rating"><span aria-label="4.4 out of 5 stars">★ 4.4</span> <span className="muted">/ 5</span></span><span>60 Google reviews<small>Based on the supplied business listing</small></span></div>
    </div>
    <div className="hero-visual"><Photo src="/images/8.png" alt="Amirul Electrical Services working on a local project" label="Good work. Close to home." className="hero-photo" />
      <div className="image-index">01 / ELECTRICAL & AIRCOND</div>
      <div className="availability"><span className="availability-icon" aria-hidden="true">↗</span><div><strong>Open 24 hours</strong><p>Call to confirm availability.</p></div></div>
    </div>
  </div></section>;
}
function Services() {
  return <section id="services" className="section" aria-labelledby="services-title"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">WHAT WE DO</p><h2 id="services-title">Everyday essentials.<br />One local contact.</h2></div><p>For the power you depend on<br className="hidden md:block" /> and the comfort you come home to.</p></div>
    <div className="grid gap-6 md:grid-cols-3">{services.map(service => <article key={service.number} className="service-card">
      <Photo src={service.image} alt={`${service.title} project in Melaka`} label={service.title} className="service-photo" />
      <div className="pt-6"><div className="flex justify-between items-center"><p className="eyebrow">{service.tag}</p><span className="service-number">{service.number}</span></div><h3>{service.title}</h3><p className="service-description">{service.description}</p><a className="text-link" href={business.telephone}>Enquire about this service <Arrow /></a></div>
    </article>)}</div>
  </div></section>;
}
function About() {
  return <section id="about" className="about section" aria-labelledby="about-title"><div className="container grid gap-12 lg:grid-cols-2">
    <div className="about-intro"><p className="eyebrow"><MapPin size={15} aria-hidden="true" /> BASED IN KRUBONG. HERE FOR MELAKA.</p><h2 id="about-title">Local service.<br />A direct conversation.</h2><p className="about-copy">Amirul Electrical Services is based in Taman Krubong Indah, Melaka. Whether you’re looking for electrical installation, wiring or aircond services, getting started is as simple as a phone call.</p><div className="about-location"><div className="about-location-icon"><MapPin size={21} aria-hidden="true" /></div><div><strong>Serving Melaka with care</strong><p>One local contact for the work your space depends on.</p></div></div><a href={business.maps} target="_blank" rel="noopener noreferrer" className="text-link">Find us on Google Maps <Arrow /></a></div>
    <div className="steps"><p className="steps-label">HOW IT WORKS</p>{[
      [MessageCircle, 'Tell us what you need', 'Share the issue, your location and the service you’re looking for.'],
      [ClipboardCheck, 'Discuss the details', 'Ask about the scope, pricing and available appointment times.'],
      [Check, 'Agree on the next step', 'Confirm the arrangements directly before any work begins.'],
    ].map(([Icon, title, description], index) => <div className="step" key={title as string}><div className="step-icon"><Icon size={19} aria-hidden="true" /></div><div className="step-content"><span>0{index + 1}</span><h3>{title as string}</h3><p>{description as string}</p></div></div>)}</div>
  </div></section>;
}
function Testimonials() {
  return <section id="testimonials" className="section testimonials" aria-labelledby="testimonials-title"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">FROM THE COMMUNITY</p><h2 id="testimonials-title">What customers<br />are saying.</h2></div><p>Reviews shown from the<br className="hidden md:block" /> supplied Google listing.</p></div>
    <div className="grid gap-6 md:grid-cols-3">{reviewNames.map(name => <figure className="testimonial-card" key={name}>
      <div className="testimonial-card-top"><Quote className="testimonial-quote-icon" size={28} strokeWidth={1.5} aria-hidden="true" /><span className="testimonial-source"><BadgeCheck size={15} aria-hidden="true" /> Google review</span></div>
      <div className="testimonial-rating" aria-label="5 out of 5 stars">{[1, 2, 3, 4, 5].map(star => <Star key={star} size={15} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />)}</div>
      <blockquote>“{getReview(name)}”</blockquote>
      <figcaption><ReviewerInitials name={name} /><span><strong>{name}</strong><small>Customer review</small></span></figcaption>
    </figure>)}</div>
  </div></section>;
}
function Contact() {
  return <section id="contact" className="section contact" aria-labelledby="contact-title"><div className="container">
    <div className="contact-panel grid gap-10 lg:grid-cols-[1.2fr_1fr]"><div><p className="eyebrow">LET’S GET STARTED</p><h2 id="contact-title">A better space<br />starts with a call.</h2><p>Have a job in mind? Let’s talk about it.</p><div className="contact-actions"><a href={business.telephone} className="contact-phone">{business.phone} <Arrow /></a><a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-whatsapp"><WhatsAppIcon /> WhatsApp us</a></div></div>
    <div className="contact-details"><div><h3>VISIT / FIND US</h3><address>{business.address}</address><a href={business.maps} target="_blank" rel="noopener noreferrer" className="text-link">Get directions <Arrow /></a></div><div><h3>OPENING HOURS</h3><p>Open 24 hours</p><small>Please call ahead to confirm service availability.</small></div></div></div>
  </div></section>;
}
function Location() {
  return <section id="location" className="location section" aria-labelledby="location-title"><div className="container">
    <div className="location-heading"><div><p className="eyebrow"><MapPin size={15} aria-hidden="true" /> FIND US IN MELAKA</p><h2 id="location-title">Close to home.<br />Easy to find.</h2></div><p>Visit Amirul Electrical Services in<br className="hidden md:block" /> Taman Krubong Indah.</p></div>
    <div className="location-panel">
      <div className="location-map"><iframe title="Map showing Amirul Electrical Services in Taman Krubong Indah, Melaka" src={business.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      <div className="location-details"><div className="location-pin"><MapPin size={22} aria-hidden="true" /></div><p className="eyebrow">OUR ADDRESS</p><address>{business.address}</address><p className="location-note">Open 24 hours. Please call ahead to confirm service availability.</p><a href={business.maps} target="_blank" rel="noopener noreferrer" className="button button-outline">See on Google Maps <Arrow /></a></div>
    </div>
  </div></section>;
}
function WhatsAppButton() {
  return <a className="whatsapp-button" href={business.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Amirul Electrical Services on WhatsApp">
    <img src="/images/WhatsApp.webp" alt="" aria-hidden="true" />
    <span>WhatsApp us</span>
  </a>;
}
export default function Home() {
  return <><a href="#main" className="skip-link">Skip to content</a><Header /><main id="main"><div id="home"><Hero /></div><div className="service-strip" aria-label="Service summary"><div className="container flex flex-wrap justify-between gap-4 py-5"><span>ELECTRICAL INSTALLATION</span><span aria-hidden="true">✳</span><span>WIRING SERVICES</span><span aria-hidden="true">✳</span><span>AIRCOND SERVICES</span></div></div><Services /><About /><Testimonials /><Location /><Contact /></main><footer><div className="container flex flex-col justify-between gap-6 py-8 md:flex-row md:items-center"><Brand /><p>Concept website by <a href="https://novanest.my" target="_blank" rel="noopener noreferrer">Novanest <Arrow /></a><small>Demo for presentation • Not the official business website</small></p></div></footer><WhatsAppButton /></>;
}
