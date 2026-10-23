<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";
  import image_cube from "$lib/assets/cube.png";
  import image_tube from "$lib/assets/tube.png";
  import image_sphere from "$lib/assets/sphere.png";
  import { onMount } from "svelte";
  import { Materials } from "$lib/data/materials";

  const review_time = {
    pre: "In advance",
    during: "When instructed",
    post: "Afterward",
  };

  const review_classes = {
    pre: "teal",
    during: "indigo",
    post: "rose",
  };

  onMount(() => {
    document.body.classList.remove("main");
  });
</script>

<svelte:head>
  <title
    >Tutorial Materials | Introduction to Quantum Computing for Visualization
    Researchers | VIS 2026 Tutorial</title
  >
</svelte:head>

<main
  class="box-width text-md px-2 lg:px-0 md:flex md:gap-5 block md:h-[calc(100vh-5rem)] md:overflow-scroll print:p-5 print:h-fit print:overflow-content"
>
  <div class="left md:w-48 md:sticky md:top-0 print:hidden w-full">
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
        alt="a futuristic purple-orange wire shaped in a sphere"
        class="absolute img-ziggle z-0 drop-shadow-2xl drop-shadow-indigo-100 w-35 md:w-25"
        style={`top: 50%; left: 50%; transform: translate(35%, -50%);`}
      />
    </div>
    <p class="text-xs font-light text-slate-600">
      IEEE VIS 2026 Tutorial <br />
      Introduction to Quantum Computing for Visualization Researchers
    </p>
    <h1 class="text-xl font-bold text-violet-800 mt-2 mb-5">
      <span>Tutorial Materials</span>
    </h1>

    <h2 id="toc" class="text-lg font-bold text-emerald-900 mb-2">
      <span>Table of contents</span>
    </h2>
    <ol class="mb-3 text-slate-700 list-decimal pl-5">
      {#each Materials as mat, i}
        <li>
          <a href={"#" + mat.id}>{mat.title}</a>
        </li>
      {/each}
    </ol>
  </div>
  <div class="right md:w-[calc(100%-var(--spacing)*55)] w-full">
    <section class="mt-5 pb-7 border-b-1 border-slate-200">
      <span class="block mb-2 text-2xl text-violet-700 font-medium">
        Resources for your learning
      </span>
      <p class="text-sm text-slate-600">
        We provide code, slides, and additional materials for the tutorial
        below.
      </p>
    </section>

    {#each Materials as mat, i}
      <section class="mt-10 pb-10 border-b-1 border-slate-200">
        <h2 id={mat.id} class="text-lg font-bold text-emerald-900 mb-2">
          <span class="block">{i + 1}. {mat.title}</span>
          {#if mat.desc}
            <small class="block text-slate-500 font-normal text-sm">
              {mat.desc}
            </small>{/if}
        </h2>
        <ol class="mb-3 text-slate-700 list-[lower-alpha] pl-5">
          {#each mat.files as file, j}
            <li class="mt-3">
              <span
                class={`rounded-md text-xs py-[2px] px-[5px] text-${review_classes[file.when_to_review]}-900 bg-${review_classes[file.when_to_review]}-100 border-1 border-${review_classes[file.when_to_review]}-400`}
                >{review_time[file.when_to_review]}</span
              >
              <a href={file.file_path} download class="text-sm break-all"
                >{file.title} <Icon type="link-ext"></Icon></a
              >
              {#if mat.desc}
                <br />
                <samll class="text-slate-400 text-sm">
                  {@html file.description}</samll
                >
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
    margin-left: calc(var(--spacing) * -2);
    margin-right: calc(var(--spacing) * -2);
    background: url("$lib/assets/background-large.png");
    background-size: 600px auto;
    background-position: center 65%;
    background-repeat: no-repeat;
    transform: rotate(180deg);
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
