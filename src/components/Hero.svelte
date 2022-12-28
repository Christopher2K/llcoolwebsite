<script lang="ts">
  import { ArrowDown } from 'lucide-svelte'

  import Typography from './Typography.svelte'
  import Image from './Image.svelte'
  import HighlightedTypography from './HighlightedTypography.svelte'
  import RoundedIconButton from './RoundedIconButton.svelte'

  export let title: [string, string]
  export let imageSrc: string
  export let imageAlt: string
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

  <Image class="hidden sm:block w-1/2 h-auto" src={imageSrc} alt={imageAlt} />

  <div>
    {#each tagLines as lines}
      <Typography class="text-center">{lines}</Typography>
    {/each}
  </div>

  <div class="flex flex-row justify-start items-center gap-4">
    <RoundedIconButton type="button" label="Scroll down">
      <ArrowDown class="text-light" />
    </RoundedIconButton>

    <Typography important>{arrowLabel}</Typography>
  </div>
</section>

<style lang="postcss">
</style>
