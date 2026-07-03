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
  <h1>Introduction to Quantum Computing for Visualization Researchers</h1>
</header>

<main>
  <p class="note">See you at IEEE VIS 2026 in Boston.</p>
  <h2><span>Hello!</span></h2>
  <p>
    Quantum computers, while powerful, are extremely difficult to use.
    Additionally, many quantum computer users, such as scientists and financial
    analysts, are not necessarily well-trained programmers and often struggle
    with everyday computing tasks. These challenges motivate user interfaces
    that lower barriers to using quantum devices through visual representations
    of quantum programs and their outcomes. However, many visualization
    researchers lack opportunities to learn and experience quantum computing in
    an HCI-oriented way. Therefore, we offer an introductory tutorial for
    quantum computing to facilitate research at an intersection of visualization
    and quantum computing. Specifically, our tutorial will cover fundamental
    concepts in quantum computing, the current landscape of HCI/VIS research in
    quantum computing, writing simple quantum programs, and a short
    brainstorming session about future research goals for the field.
  </p>

  <h2><span>Schedule</span></h2>
  <p>
    Time: TBD<br />
    Location: TBD
  </p>
  <table>
    <thead>
      <tr>
        <th>Time</th>
        <th>Content</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>40 min.</td>
        <td>
          <strong>Introducing Quantum Computing</strong><br />Topics include:
          superposition & entanglement, Bloch sphere, qubit/gate/measure, Shor's
          algorithm, Oracle-based search, optimization problems, and quantum
          error correction
        </td>
      </tr>
      <tr>
        <td>35 min.</td>
        <td>
          <strong>Interacting with QC 1</strong>: <br />entanglement, simple
          search circuit (introduction)</td
        >
      </tr>
      <tr>
        <td>30 min.</td>
        <td>Break</td>
      </tr>
      <tr>
        <td>15 min.</td>
        <td
          ><strong>Interacting with QC 2</strong>: <br />simple search circuit
          (execution)</td
        >
      </tr>
      <tr>
        <td>30 min.</td>
        <td>
          <strong>Recent Vis/HCI Research on Quantum Computing</strong>:
          <br />interface, visualization, and education</td
        >
      </tr>
      <tr>
        <td>30 min.</td>
        <td> <strong>Brainstorming Future Research</strong></td>
      </tr>
    </tbody>
  </table>

  <h2><span>How to participate?</span></h2>
  <p>
    To participate, please fill out this <a
      href="https://forms.gle/Lw11ThKvvKVBA7mB7"
      target="_blank">form</a
    > that asks:
  </p>
  <ul>
    <li>
      Your name, job title, your email (optional), and research area (optional)
    </li>
    <li>
      A short <strong>statement of interest</strong> (in any length) about why you
      want to attend and what you expect to learn from this workshop.
    </li>
  </ul>
  <p>
    We are collecting this information to assess the number of attendees. We
    expect up to 20 attendees for an effective hands-on tutorial. While you can
    still attend this tutorial without filling out this form, priority for
    technical support will be given to those who have filled it out.
  </p>

  <h2><span>Preparation Materials</span></h2>
  <p>
    You will need your own laptop to fully participate in this tutorial. More
    details will be posted here prior to the workshop. If you provided your
    email, then we will also notify you with the updates.
  </p>

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
  <p>&copy; Organizers</p>
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

  table {
    max-width: 600px;
    border-collapse: collapse;
    margin: 0 1rem 0 1rem;
  }
  td,
  th {
    border: 1px solid #aaa;
    padding: 0.25rem;
    text-align: left;
  }
  th {
    background-color: #fff9c4;
  }
  tr:nth-child(2n) td {
    background-color: #f0f0f0;
  }
  table tr td:first-child,
  table tr th:first-child {
    width: 50px;
  }
</style>
