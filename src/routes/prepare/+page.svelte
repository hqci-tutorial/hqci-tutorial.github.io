<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";
  import image_cube from "$lib/assets/cube.png";
  import image_tube from "$lib/assets/tube.png";
  import image_sphere from "$lib/assets/sphere.png";
  import { onMount } from "svelte";

  import Image from "$lib/components/Image.svelte";
  import { PrepInstructions } from "$lib/data/instruction";

  onMount(() => {
    document.body.classList.remove("main");
  });
</script>

<svelte:head>
  <title
    >Preparation Instructions | Introduction to Quantum Computing for
    Visualization Researchers | VIS 2026 Tutorial</title
  >
</svelte:head>

<main
  class="box-width text-md px-2 lg:px-0 md:flex md:gap-5 block md:h-[calc(100vh-5rem)] md:overflow-scroll print:p-5 print:h-fit print:overflow-content"
>
  <div class="left min-w-48 md:sticky md:top-0 print:hidden">
    <div
      class="display-banner h-30 rounded-md bg-slate-100 mt-3 mb-3 relative overflow-hidden"
    >
      <img
        src={image_cube}
        alt="a futuristic purple cube"
        class="absolute img-ziggle z-0 drop-shadow-2xl drop-shadow-purple-100 w-60 md:w-40"
        style={`top: 50%; left: 50%; transform: translate(-48%, -50%);`}
      />
      <img
        src={image_tube}
        alt="a futuristic purple tube looking like a pill"
        class="absolute img-ziggle z-0 drop-shadow-2xl drop-shadow-violet-100 w-35 md:w-25"
        style={`top: 50%; left: 50%; transform: translate(-140%, -50%);`}
      />
      <img
        src={image_sphere}
        alt="a futuristic purple-orange wire shpaed in a sphere"
        class="absolute img-ziggle z-0 drop-shadow-2xl drop-shadow-indigo-100 w-35 md:w-25"
        style={`top: 50%; left: 50%; transform: translate(35%, -50%);`}
      />
    </div>
    <p class="text-xs font-light text-slate-600">
      IEEE VIS 2026 Tutorial <br />
      Introduction to Quantum Computing for Visualization Researchers
    </p>
    <h1 class="text-xl font-bold text-violet-800 mt-2 mb-5">
      <span>Preparation Instructions</span>
    </h1>

    <h2 id="toc" class="text-lg font-bold text-emerald-900 mb-2">
      <span>Table of contents</span>
    </h2>
    <ol class="mb-3 text-slate-700 list-decimal pl-5">
      {#each PrepInstructions as inst, i}
        <li>
          <a href={"#" + inst.id}>{inst.title}</a>
        </li>
      {/each}
    </ol>
  </div>
  <div class="right w-[calc(100%-var(--spacing)*53)]">
    <section class="mt-5 pb-7 border-b-1 border-slate-200">
      <span class="block mb-2 text-2xl text-violet-700 font-medium">
        Let's prepare for your learning!
      </span>
      <p class="text-sm text-slate-600">
        This documents will help you prepare for the tutorial session. Please
        take a careful look at this document. If you exprience any troubles,
        take a look at the "troubleshoot" section.
      </p>
    </section>

    {#each PrepInstructions as inst, i}
      <section class="mt-10 pb-10 border-b-1 border-slate-200">
        <h2 id={inst.id} class="text-lg font-bold text-emerald-900 mb-2">
          <span class="block">{i + 1}. {inst.title}</span>
          {#if inst.desc}
            <small class="block text-slate-500 font-normal text-sm">
              {inst.desc}
            </small>{/if}
        </h2>
        <ol class="mb-3 text-slate-700 list-[lower-alpha] pl-5">
          {#each inst.steps as step, j}
            <li class="mt-3">
              {@html step.text}
              {#if step.desc}
                <br />
                <samll class="text-slate-400 text-sm"> {@html step.desc}</samll>
              {/if}
              {#if step.link}
                <br />Link:
                <a href={step.link} target="_blank"
                  >{step.link} <Icon type="link-ext"></Icon></a
                >
              {/if}
              {#if step.download}
                <br />Link:
                <a href={step.download} download
                  >{step.download} <Icon type="link-ext"></Icon></a
                >
              {/if}
              {#if step.image && step.image_alt}
                <Image
                  src={"./instruction-images/" + step.image}
                  alt={step.image_alt}
                ></Image>
              {/if}
              {#if step.code}
                <div
                  class="mt-2 bg-slate-100 rounded-md border-1 border-slate-300 p-3 text-sm overflow-scroll"
                >
                  <pre>{step.code}</pre>
                </div>
              {/if}
            </li>
          {/each}
        </ol>
      </section>
    {/each}

    <div class="footer-banner h-50 print:hidden"></div>
  </div>
</main>

<style>
  .footer-banner {
    background: url("$lib/assets/background-large.png");
    background-size: 100% auto;
    background-position: center 65%;
    background-repeat: no-repeat;
    transform: rotate(180deg)
  }
  li {
    margin-bottom: 4px;
  }
  @keyframes ziggle-1 {
    0% {
      transform: translateY(-55%) translateX(-48%);
    }
    25% {
      transform: translateY(-65%) translateX(-48%);
    }
    75% {
      transform: translateY(-45%) translateX(-48%);
    }
    100% {
      transform: translateY(-55%) translateX(-48%);
    }
  }
  @keyframes ziggle-2 {
    0% {
      transform: translateY(-75%) translateX(-140%);
    }
    50% {
      transform: translateY(-25%) translateX(-140%);
    }
    100% {
      transform: translateY(-75%) translateX(-140%);
    }
  }
  @keyframes ziggle-3 {
    0% {
      transform: translateY(-40%) translateX(35%);
    }
    50% {
      transform: translateY(-60%) translateX(35%);
    }
    100% {
      transform: translateY(-40%) translateX(35%);
    }
  }

  .img-ziggle:first-of-type {
    animation: ziggle-1 20s linear infinite;
  }
  .img-ziggle {
    animation: ziggle-2 25s linear infinite;
  }
  .img-ziggle:last-of-type {
    animation: ziggle-3 22s linear infinite;
  }
</style>
