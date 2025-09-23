<script lang="ts">
  const Organizers = [
    {
      name: "Hyeok Kim",
      affiliation: "University of Washington",
      website: "https://hyeok.me",
    },
    {
      name: "Leilani Battle",
      affiliation: "University of Washington",
      website: "https://homes.cs.washington.edu/~leibatt",
    },
    {
      name: "Sara Mouradian",
      affiliation: "University of Washington",
      website: "https://people.ece.uw.edu/mouradian_sara/index.html",
    },
  ];
</script>

<header>
  <h1>HCI for Quantum Computing (HQCI 2026)</h1>
</header>

<main>
  <p class="note">
    This is a tentative website for HCI for Quantum Computing workshop proposed
    for CHI 2026 confrence.
  </p>
  <h2><span>Hello!</span></h2>
  <p>
    Quantum computing will provide promising solutions for intractable problems
    with current classical problems. Such problems include quantum chemistry for
    novel medical drugs, optimization for stock portfolio and complex
    scheduling, and cryptography for cyber security. Yet, quantum computers are
    extremely difficult to use due to conceptual and technical complexities.
    While easy-to-use and interpretable interfaces are necessary to make quantum
    computers more usable, we lack related research and tools. In order to
    facilitate HCI research on quantum computing, this workshop aims to provide
    an introductory tutorial and brainstorm future research ideas. Our workshop
    is intended for HCI researchers who have limited background in quantum
    computing (<u>zero prior background or mathematical knowledge requried</u>).
  </p>

  <h2><span>Call for Participation</span></h2>
  <p>TBD</p>

  <h2><span>How to participate?</span></h2>
  <p>
    To participate, please fill out this <a href="#">form</a> (TBD) that asks:
  </p>
  <ul>
    <li>Your name, job title, level of education, and research area</li>
    <li>
      A brief <strong>statement of interest</strong> (~250 words) about why you want
      to attend and what you expect to learn from this workshop
    </li>
  </ul>
  <p>
    We are expecting up to 20 participants for effective hands-on tutorial
    session. In case there are more applicants, we will prioritize Ph.D.
    students.
  </p>

  <h2><span>Offline Materials</span></h2>
  <p>Will be posted after the workshop.</p>

  <h2><span>Post-workshop publication</span></h2>
  <p>Will be posted after the workshop.</p>

  <h2><span>Organizers</span></h2>
  <div class="organizers">
    {#each Organizers as org, _}
      <div class="organizer">
        <span class="org-name"
          ><a href={org.website} target="_blank">{org.name}</a></span
        >
        <span class="org-affiliation">{org.affiliation}</span>
      </div>
    {/each}
  </div>
</main>

<footer>
  <p>&copy; HQCI 2026 organizers</p>
</footer>

<style>
  :global(html, body) {
    font-family: "Source Sans Pro", sans-serif;
  }
  header,
  footer,
  main {
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  header {
    margin-top: 0;
    margin-bottom: 1rem;
    border-bottom: 1px solid #ddd;
  }
  h1 {
    width: 100%;
    margin: 0;
    padding: 1rem;
    color: #00c853;
    font-size: 1.5rem;
    line-height: 100%;
  }

  footer p {
    width: 100%;
    margin: 0;
    padding: 1rem;
    font-size: 0.9rem;
    color: #666;
  }

  p {
    padding: 0 1rem 0 1rem;
    margin-bottom: 0.5rem;
    color: #454545;
    max-width: 600px;
    line-height: 1.6;
  }
  p.note {
    max-width: 100%;
    padding: 1rem;
    border: 1px solid #f57f17;
    background-color: #fff9c4;
    color: #f57f17;
    border-radius: 0.5rem;
  }
  h2 {
    padding: 0 1rem 0 1rem;
    margin-bottom: 0.5rem;
    margin-top: 1.5rem;
    font-size: 1.25rem;
    line-height: 100%;
  }
  h2 span {
    color: #6200ea;
  }

  a {
    color: #6200ea;
  }

  .organizers {
    padding: 1rem;
    display: flex;
    column-gap: 1rem;
    row-gap: 1rem;
  }
  .organizer {
    width: 150px;
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 0.5rem;
  }
  .org-name {
    display: block;
  }
  .org-affiliation {
    display: block;
    font-size: 0.85rem;
    color: #666;
  }
</style>
