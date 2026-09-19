<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";
  import image_cube from "$lib/assets/cube.png";
  import image_tube from "$lib/assets/tube.png";
  import image_sphere from "$lib/assets/sphere.png";
  import { onMount } from "svelte";

  let prep_laptop = $state(false),
    prep_ibm = $state(false),
    prep_test = $state(false),
    prep_done = $derived(prep_laptop && prep_ibm && prep_test);

  const interest_form_link = "https://forms.gle/Lw11ThKvvKVBA7mB7";

  const Organizers = [
    {
      name: "Hyeok Kim",
      affiliation: "KAIST",
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
  const Schedule = [
    {
      time: "10-11 AM",
      duration: "1 hour",
      title: `Introducing Quantum Computing`,
      content: `Topics include: superposition & entanglement, Bloch sphere, qubit/gate/measure, Shor's algorithm, Oracle-based search, optimization problems, and quantum error correction`,
    },
    {
      time: "11-11:30 AM",
      duration: "30 min",
      title: `Interacting with QC 1:`,
      content: `Entanglement, simple search circuit (introduction)`,
    },
    {
      time: "11:30 AM-1 PM",
      duration: "1.5 hours",
      content: `Lunch break`,
    },
    {
      time: "1-1:20 PM",
      duration: "20 min",
      title: `Interacting with QC 2:`,
      content: `Simple search circuit (execution)`,
    },
    {
      time: "1:20-2 PM",
      duration: "40 min.",
      title: `Recent Vis/HCI Research on Quantum Computing:`,
      content: `Interface, visualization, and education`,
    },
    {
      time: "2-2:30 PM",
      duration: "30 min.",
      title: `Brainstorming Future Research`,
      content: `Small group discussions`,
    },
  ];
  onMount(() => {
    document.body.classList.add("main");
  });
</script>

<main
  class="box-width text-md px-2 lg:px-0 lg:overflow-x-visible overflow-x-hidden"
>
  <h1
    class="h-[30vh] flex items-center flex-col justify-end bg-header pb-10 z-300"
  >
    <small class="text-lg block text-gray-100 font-black text-shadow-md block"
      >IEEE VIS 2026 Tutorial</small
    >
    <span
      class="lg:text-5xl md:text-4xl text-3xl max-w-200 text-gray-100 font-bold block text-center banner-text z-300"
    >
      Introduction to Quantum Computing for Visualization Researchers
    </span>
    <div class="flex gap-5 pt-3 z-300">
      <a class="block z-300" href="./prepare">Preparation instructions</a>
      <a class="block z-300" href={interest_form_link} target="_blank"
        >Interest form <Icon type="link-ext"></Icon></a
      >
    </div>
  </h1>
  <h2 class="px-2 mb-3 text-3xl font-bold text-violet-700 mt-0">
    <span>👋</span><span class="ml-3">Hello Quantum World!</span>
  </h2>
  <div class="flex gap-3 justify-between flex-col md:flex-row relative">
    <div class="z-300">
      <p
        class="par-width h-fit-content par-text mb-5 border-1 rounded-md p-3 border-slate-200 shadow-sm shadow-slate-100 bg-white z-300"
      >
        Quantum computers, while powerful, are extremely difficult to use.
        Additionally, many quantum computer users, such as scientists and
        financial analysts, are not necessarily well-trained programmers and
        often struggle with everyday computing tasks. These challenges motivate
        user interfaces that lower barriers to using quantum devices through
        visual representations of quantum programs and their outcomes. However,
        many visualization researchers lack opportunities to learn and
        experience quantum computing in an HCI-oriented way. Therefore, we offer
        an introductory tutorial for quantum computing to facilitate research at
        an intersection of visualization and quantum computing. Specifically,
        our tutorial will cover fundamental concepts in quantum computing, the
        current landscape of HCI/VIS research in quantum computing, writing
        simple quantum programs, and a short brainstorming session about future
        research goals for the field.
      </p>
    </div>
    <div
      class="h-90 absolute w-100 z-0 lg:right-0 md:right-0 sm:-right-15 -right-20 sm:block hidden"
    >
      <img
        src={image_cube}
        alt="a futuristic purple cube"
        class="absolute img-ziggle z-0"
        style={`width: 26vw; height: 26vw; max-width: 520px; max-height: 520px; min-width: 400px; min-height: 400px; top: 50%; left: 55%; transform: translate(-50%, -60%);`}
      />
      <img
        src={image_tube}
        alt="a futuristic purple tube looking like a pill"
        class="absolute img-ziggle z-0"
        style={`width: 15vw; height: 15vw; max-width: 300px; max-height: 300px; min-width: 230px; min-height: 230px;  top: 50%; left: 55%; transform: translate(-70%, -140%);`}
      />
      <img
        src={image_sphere}
        alt="a futuristic purple-orange wire shpaed in a sphere"
        class="absolute img-ziggle z-0"
        style={`width: 11vw; height: 11vw; max-width: 220px; max-height: 220px;  min-width: 190px; min-height: 190px; top: 50%; left: 55%; transform: translate(-10%, 15%);`}
      />
    </div>
  </div>
  <div class="flex gap-3 flex-col md:flex-row mb-5">
    <div class=" md:w-1/3">
      <h2 class="text-lg font-bold text-emerald-900 mb-2">
        <span>Where and when?</span>
      </h2>
      <div class="flex gap-3 flex-col">
        <p
          class="border-1 rounded-md p-3 border-slate-200 text-md text-slate-700 shadow-sm shadow-slate-100"
        >
          <span class="align-text-bottom"><Icon type="time"></Icon></span>
          <span class="font-bold text-slate-900">Time</span> <br />
          Tuesday, Nov 10<br />
          10-11:30 AM &amp; 1-2:30 PM <br />
          <small>2nd morning + 1st afternoon (U.S. Eastern Time)</small>
        </p>
        <p
          class="border-1 rounded-md p-3 border-slate-200 text-md shadow-sm shadow-slate-100"
        >
          <span class="align-text-bottom"><Icon type="location"></Icon></span>
          <span class="font-bold text-slate-900">Location</span> <br />
          St. George (C+D)
        </p>
      </div>
      <p class="mt-2 text-sm mb-5 text-slate-400">
        Up-to-date information is available via
        <a
          href="https://ieeevis.org/year/2026/program/calendar/"
          target="_blank">here <Icon type="link-ext"></Icon></a
        >.
      </p>
    </div>
    <div class=" md:w-2/3 z-300">
      <h2 class="text-lg font-bold text-emerald-900 mb-2">
        <span>Schedule</span>
      </h2>
      <table
        class="border-separate border-spacing-0 text-slate-700 shadow-sm rounded-md shadow-slate-100 z-300"
      >
        <thead>
          <tr>
            <th class="table-cell border-t border-l rounded-tl-md">Time</th>
            <th class="table-cell border-t border-l border-r rounded-tr-md"
              >Content</th
            >
          </tr>
        </thead>
        <tbody>
          {#each Schedule as item, i}
            <tr>
              <td
                class={"table-cell border-t border-l" +
                  (i % 2 == 0 ? " bg-slate-100/50" : "") +
                  (i == Schedule.length - 1 ? " rounded-bl-md border-b" : "")}
                >{item.time}<br /><small>({item.duration})</small></td
              >
              <td
                class={"table-cell border-t border-l border-r" +
                  (i % 2 == 0 ? " bg-slate-100/50" : "") +
                  (i == Schedule.length - 1 ? " rounded-br-md border-b" : "")}
              >
                {#if item.title}<strong>{item.title}</strong><br />{/if}
                {item.content}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>

  <h2 class="text-lg font-bold text-emerald-900 mb-2">
    <span>How to participate?</span>
  </h2>
  <p class="text-slate-700 mb-2">
    To participate, please fill out this <a
      href="https://forms.gle/Lw11ThKvvKVBA7mB7"
      target="_blank"
      >form <Icon type="link-ext"></Icon>
    </a> that asks:
  </p>
  <ul class="mb-3 text-slate-700 list-disc pl-5">
    <li>
      Your name, job title, your email (optional), and research area (optional)
    </li>
    <li>
      A short <strong>statement of interest</strong> (in any length) about what you
      expect to learn from this workshop.
    </li>
  </ul>
  <p class="mb-5 text-slate-500 par-width text-sm">
    We are collecting this information to estimate the number of attendees and
    support preliminary setups (including perparation materials). We are
    expecting 20+ attendees for an effective hands-on tutorial. While you can
    still attend this tutorial without filling out this form, priority for
    technical support will be given to those who have filled it out. If you have
    further questions, please feel free to contact one of the organizers.
  </p>

  <h2 class="text-lg font-bold text-emerald-900 mb-2">
    <span>Preparation checklist</span>
  </h2>
  <p>Check out the <a href="./prepare">Preparation instructions</a></p>
  <ul class="mb-3 text-slate-700 pl-0">
    <li>
      <label>
        <input
          type="checkbox"
          on:change={(e) => {
            // @ts-ignore
            prep_laptop = e.target.checked;
          }}
        />
        Your laptop
      </label>
    </li>
    <li>
      <label>
        <input
          type="checkbox"
          on:change={(e) => {
            // @ts-ignore
            prep_ibm = e.target.checked;
          }}
        />
        Creating an IBM account
      </label>
    </li>
    <li>
      <label>
        <input
          type="checkbox"
          on:change={(e) => {
            // @ts-ignore
            prep_test = e.target.checked;
          }}
        />
        No errors in running the test code
      </label>
    </li>
  </ul>
  {#if prep_done}
    <div class="mt-5 mb-5 alert-box">👍 All set! 🎉 See you in boston!</div>
  {/if}

  <h2 class="text-lg font-bold text-emerald-900 mb-2">
    <span>Organizers</span>
  </h2>
  <div class="mb-5 flex gap-2 flex-wrap text-slate-600">
    {#each Organizers as org, _}
      <div
        class="organizer min-w-4/15 p-3 border-1 border-slate-200 rounded-md shadow-sm shadow-slate-100"
      >
        <span class="org-name block"
          ><a href={org.website} target="_blank">{org.name}</a>
          <Icon type="link-ext"></Icon></span
        >
        <span class="org-affiliation block text-sm">{org.affiliation}</span>
      </div>
    {/each}
  </div>
</main>

<style>
  :global(body.main) {
    background: url("$lib/assets/background-large.png");
    background-size: 950px auto;
    background-position: center top;
    background-repeat: no-repeat;
  }
  .banner-text {
    background-image: linear-gradient(155deg, #6a0be0 10%, #00ba84 90%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
  }
  .bg-header {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0) 45%,
      rgba(255, 255, 255, 0.7) 65%
    );
  }

  table tr td:first-child,
  table tr th:first-child {
    width: 120px;
  }
  @keyframes ziggle-1 {
    0% {
      transform: translateY(-60%) translateX(-50%);
    }
    25% {
      transform: translateY(-55%) translateX(-50%);
    }
    75% {
      transform: translateY(-65%) translateX(-50%);
    }
    100% {
      transform: translateY(-60%) translateX(-50%);
    }
  }
  @keyframes ziggle-2 {
    0% {
      transform: translateY(-110%) translateX(-70%);
    }
    50% {
      transform: translateY(-130%) translateX(-70%);
    }
    100% {
      transform: translateY(-110%) translateX(-70%);
    }
  }
  @keyframes ziggle-3 {
    0% {
      transform: translateY(-20%) translateX(-10%);
    }
    50% {
      transform: translateY(5%) translateX(-10%);
    }
    100% {
      transform: translateY(-20%) translateX(-10%);
    }
  }

  .img-ziggle:first-of-type {
    animation: ziggle-1 3s linear infinite;
  }
  .img-ziggle {
    animation: ziggle-2 3.5s linear infinite;
  }
  .img-ziggle:last-of-type {
    animation: ziggle-3 2.5s linear infinite;
  }
</style>
