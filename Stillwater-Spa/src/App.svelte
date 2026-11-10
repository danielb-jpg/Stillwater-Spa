<script>
  import {
    WHATSAPP, treatments, packages, moodBlurbs, moods, art,
    rituals, sanctuary, memberships,
  } from './data.js'

  const options = [...treatments.map((t) => `${t[0]} (${t[3]})`), ...packages]
  const today = new Date().toISOString().split('T')[0]
  const year = new Date().getFullYear()
  const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi Stillwater, I’d like to book a treatment.')}`

  let mood = $state('Relax')
  let added = $state(-1)
  let track
  let form = $state({ name: '', phone: '', service: options[0], guests: '1 guest', date: '', time: '', notes: '' })

  const shown = $derived(
    treatments.map((t, i) => ({ t, i })).filter((o) => o.t[4].includes(mood)),
  )

  function pick(m) {
    mood = m
    added = -1
    if (track) track.scrollLeft = 0
  }

  function addToBooking(i) {
    form.service = options[i]
    added = i
    location.hash = 'book'
  }

  function book(e) {
    e.preventDefault()
    const f = form
    const lines = [
      'New booking request',
      `Name: ${f.name}`,
      `Phone: ${f.phone}`,
      `Treatment: ${f.service}`,
      `Guests: ${f.guests}`,
      `Date: ${f.date}`,
      `Time: ${f.time}`,
    ]
    if (f.notes) lines.push(`Notes: ${f.notes}`)
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank')
  }

  // fade-in on scroll
  function reveal(node) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            node.classList.add('on')
            io.disconnect()
          }
        }),
      { threshold: 0.1 },
    )
    io.observe(node)
    return { destroy: () => io.disconnect() }
  }
</script>

<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="pb" viewBox="0 0 200 170">
    <ellipse cx="100" cy="140" rx="62" ry="20" fill="var(--a)" />
    <ellipse cx="100" cy="106" rx="46" ry="16" fill="var(--b)" />
    <ellipse cx="100" cy="76" rx="32" ry="12" fill="var(--c)" />
    <ellipse cx="100" cy="52" rx="20" ry="8" fill="var(--a)" />
  </symbol>
  <symbol id="wv" viewBox="0 0 200 170">
    <g fill="none" stroke="var(--a)" stroke-width="3" stroke-linecap="round">
      <path d="M40 60c20-18 20 18 40 0s20 18 40 0 20 18 40 0" />
      <path d="M40 92c20-18 20 18 40 0s20 18 40 0 20 18 40 0" />
      <path d="M40 124c20-18 20 18 40 0s20 18 40 0 20 18 40 0" />
    </g>
  </symbol>
</svg>

<header class="nav">
  <div class="wrap">
    <a href="#top" class="brand">Stillwater</a>
    <ul>
      <li><a href="#treatments">Treatments</a></li>
      <li><a href="#days">Spa days</a></li>
      <li><a href="#sanctuary">Sanctuary</a></li>
      <li><a href="#member">Membership</a></li>
      <li><a href="#visit">Visit</a></li>
    </ul>
    <a href="#book" class="btn">Book now</a>
  </div>
</header>

<main id="top">
  <section class="hero">
    <svg class="rip" viewBox="0 0 800 800" aria-hidden="true">
      <circle cx="400" cy="400" r="120" /><circle cx="400" cy="400" r="210" />
      <circle cx="400" cy="400" r="300" /><circle cx="400" cy="400" r="390" />
    </svg>
    <div class="in">
      <svg class="mark" viewBox="0 0 100 100" role="img" aria-label="Stillwater leaf mark">
        <circle cx="50" cy="50" r="46" fill="none" stroke="#A9B79F" stroke-width="2" />
        <path d="M50 22c22 6 26 32 0 56-26-24-22-50 0-56z" fill="#A9B79F" />
        <path d="M50 30v44" stroke="#1B241C" stroke-width="2" />
      </svg>
      <p class="eyebrow" style="color: var(--sage)">Wellness retreat · Lagos</p>
      <h1>Slow down. <em>Come back</em> to yourself.</h1>
      <p>Massage, steam, scrubs and facials in a quiet space made for switching off. Come for an hour or stay for the day.</p>
      <div class="cta">
        <a href="#book" class="btn">Book a treatment</a>
        <a href="#treatments" class="btn ghost">Find your mood</a>
      </div>
      <div class="facts">
        <div><b>20+</b><small>treatments</small></div>
        <div><b>Steam &amp; sauna</b><small>included with spa days</small></div>
        <div><b>Couples</b><small>suites available</small></div>
      </div>
    </div>
  </section>

  <section id="treatments">
    <div class="wrap c">
      <p class="eyebrow rv" use:reveal>Treatments</p>
      <h2 class="rv" use:reveal>How do you want to <em style="font-style: normal; color: var(--clay)">feel</em>?</h2>
      <div class="moods" role="tablist">
        {#each moods as m}
          <button class="mood" role="tab" aria-selected={mood === m} onclick={() => pick(m)}>{m}</button>
        {/each}
      </div>
      <p class="mq">{moodBlurbs[mood]}</p>
      <div class="trk" bind:this={track}>
        {#each shown as { t, i } (i)}
          {@const a = art[t[5]]}
          <article class="tc">
            <div class="art" style="background:linear-gradient(160deg,{a[0]});--a:{a[1]};--b:{a[2]};--c:{a[3]}">
              <svg viewBox="0 0 200 170" preserveAspectRatio="xMidYMid slice"><use href={t[5] % 2 ? '#wv' : '#pb'} /></svg>
            </div>
            <div class="tb">
              <h3>{t[0]}</h3>
              <p>{t[1]}</p>
              <div class="meta"><span class="dur">{t[2]}</span><span class="price">{t[3]}</span></div>
              <button class="add" onclick={() => addToBooking(i)}>{added === i ? 'Added ✓' : 'Add to booking'}</button>
            </div>
          </article>
        {/each}
      </div>
      <div class="arrows">
        <button aria-label="Previous" onclick={() => track.scrollBy({ left: -320, behavior: 'smooth' })}>←</button>
        <button aria-label="Next" onclick={() => track.scrollBy({ left: 320, behavior: 'smooth' })}>→</button>
      </div>
    </div>
  </section>

  <section id="days" style="background: var(--bg2)">
    <div class="wrap">
      <p class="eyebrow rv" use:reveal>Spa days</p>
      <h2 class="rv" use:reveal>Give it a <em style="font-style: normal; color: var(--clay)">whole afternoon</em></h2>
      <div class="rts">
        {#each rituals as r}
          <div class="rt rv" use:reveal>
            <div class="art" style="background:linear-gradient(160deg,{r.bg});--a:{r.a};--b:{r.b};--c:{r.c}">
              <svg viewBox="0 0 200 170" preserveAspectRatio="xMidYMid slice"><use href="#{r.sym}" /></svg>
            </div>
            <div>
              <p class="eyebrow">{r.time}</p>
              <h3>{r.name}</h3>
              <span class="price">{r.price}</span>
              <ul>{#each r.items as item}<li>{item}</li>{/each}</ul>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section id="sanctuary" class="dark">
    <div class="wrap c">
      <p class="eyebrow rv" use:reveal>The space</p>
      <h2 class="rv" use:reveal>A sanctuary, <em style="font-style: normal; color: var(--sage)">not a waiting room</em></h2>
      <div class="bn">
        {#each sanctuary as s}
          <div class="rv" use:reveal style="background:linear-gradient(160deg,{s.bg});--a:{s.a};--b:{s.b};--c:{s.c}">
            <svg viewBox="0 0 200 170" preserveAspectRatio="xMidYMid slice"><use href="#{s.sym}" /></svg>
            <span style={s.dark ? 'color:#1F2820;text-shadow:none' : ''}>{s.name}</span>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section id="member">
    <div class="wrap c">
      <p class="eyebrow rv" use:reveal>Membership</p>
      <h2 class="rv" use:reveal>Make it a <em style="font-style: normal; color: var(--clay)">habit</em></h2>
      <p class="lede rv" use:reveal>Regular care costs less and works better. Pause or cancel any month.</p>
      <div class="mb">
        {#each memberships as m}
          <div class="mc rv" class:f={m.featured} use:reveal>
            <h3>{m.name}</h3>
            <div class="price" style={m.featured ? 'color:var(--sage)' : ''}>{m.price}</div>
            <small>per month</small>
            <ul>{#each m.items as item}<li>{item}</li>{/each}</ul>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section id="book" class="dark">
    <div class="wrap bk">
      <div class="rv" use:reveal>
        <p class="eyebrow">Reserve</p>
        <h2>Book your <em style="font-style: normal; color: var(--sage)">quiet hour</em></h2>
        <p class="lede">Pick a treatment and a time. Your request goes straight to us on WhatsApp and we’ll confirm shortly.</p>
      </div>
      <form class="rv" use:reveal onsubmit={book}>
        <div class="full"><label for="n">Your name</label><input id="n" bind:value={form.name} required placeholder="Full name" /></div>
        <div class="full"><label for="p">Phone</label><input id="p" type="tel" bind:value={form.phone} required placeholder="080…" /></div>
        <div class="full">
          <label for="s">Treatment</label>
          <select id="s" bind:value={form.service} required>
            {#each options as o}<option value={o}>{o}</option>{/each}
          </select>
        </div>
        <div>
          <label for="g">Guests</label>
          <select id="g" bind:value={form.guests}>
            <option>1 guest</option><option>2 guests (couples)</option><option>3 to 5 guests</option>
          </select>
        </div>
        <div><label for="d">Date</label><input id="d" type="date" min={today} bind:value={form.date} required /></div>
        <div><label for="t">Time</label><input id="t" type="time" bind:value={form.time} required /></div>
        <div><label for="x">Notes</label><input id="x" bind:value={form.notes} placeholder="Allergies, pregnancy…" /></div>
        <div class="full"><button class="btn" type="submit">Send booking on WhatsApp</button></div>
      </form>
    </div>
  </section>

  <section id="visit">
    <div class="wrap">
      <p class="eyebrow rv" use:reveal>Find us</p>
      <h2 class="rv" use:reveal>Visit <em style="font-style: normal; color: var(--clay)">Stillwater</em></h2>
      <div style="max-width: 620px; margin-top: 34px" class="rv" use:reveal>
        <div class="row"><span>Address</span><b>9 Bourdillon Road, Ikoyi, Lagos</b></div>
        <div class="row"><span>Mon – Sat</span><b>9am – 9pm</b></div>
        <div class="row"><span>Sunday</span><b>12pm – 7pm</b></div>
        <div class="row"><span>Phone</span><b>+234 800 000 0000</b></div>
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="wrap">
    <span>© {year} Stillwater Spa. All rights reserved.</span>
    <span>Please arrive 10 minutes early.</span>
  </div>
</footer>

<a class="cc" href={waLink} target="_blank" rel="noopener" aria-label="Chat with the concierge on WhatsApp">
  <i></i><span>Concierge</span>
</a>
