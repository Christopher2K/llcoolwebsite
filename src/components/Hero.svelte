<script lang="ts">
  import { ArrowDown } from 'lucide-svelte'

  import Typography from './Typography.svelte'
  import HighlightedTypography from './HighlightedTypography.svelte'
  import RoundedIconLink from './RoundedIconLink.svelte'

  export let title: [string, string]
  export let tagLines: string
  export let arrowLabel: string = 'Learn more'

  $: [prefixTitle, highlightedTitlePart] = title
</script>

<section
  class="min-h-[calc(100vh-72px-theme(space.4)-theme(space.4))] md:min-h-[100vh] flex flex-col justify-around items-center"
>
  <Typography variant="heading2" tag="h1" class="text-center">
    {prefixTitle}
    <HighlightedTypography>{highlightedTitlePart}</HighlightedTypography>
  </Typography>

  <slot />

  <div>
    {#each tagLines as lines}
      <Typography class="text-center">{lines}</Typography>
    {/each}
  </div>

  <div class="flex flex-row justify-start items-center gap-4">
    <RoundedIconLink href="#page-start" label={arrowLabel}>
      <ArrowDown class="text-light" />
    </RoundedIconLink>
  </div>
</section>

<span id="page-start" />

<style lang="postcss">
</style>
