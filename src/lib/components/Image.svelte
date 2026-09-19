<script lang="ts">
  let { src, alt }: { alt: string; src: string } = $props();
</script>

<figure>
  <img
    class="lg:max-w-160 max-w-full rounded-md my-2 border-1 border-slate-300 shadow-sm"
    {src}
    {alt}
  />
</figure>
