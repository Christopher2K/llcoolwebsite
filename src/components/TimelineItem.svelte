<script lang="ts">
  import Typography from './Typography.svelte'
  import TimelineItemDot from './TimelineItemDot.svelte'

  export let date: string
  export let event: string
  export let side: 'left' | 'right' = 'left'

  $: eventPaddingClass = side === 'left' ? 'pl-12 md:pr-12 md:pl-0' : 'pl-12'
  $: textAlignClass = side === 'left' ? 'md:text-right' : 'md:text-left'
  $: leftDotDisplayClass = side === 'left' ? 'md:hidden' : 'md:block'
  $: rightDotDisplayClass = side === 'left' ? 'md:block' : ''
</script>

<div
  class="root mb-10 w-full flex flex-col justify-start items-center z-10 -ml-[1.125rem] md:ml-0"
>
  <div
    class="{side} flex flex-col justify-start w-full md:w-fit md:max-w-[50%] md:transform"
    class:md:items-end={side === 'left'}
    class:md:items-start={side === 'right'}
  >
    <div class="flex flex-row justify-start items-center gap-6">
      <TimelineItemDot class={leftDotDisplayClass} />

      <Typography tag="p" variant="subheading2" class={textAlignClass}>{date}</Typography>
      <TimelineItemDot class="hidden {rightDotDisplayClass}" />
    </div>
    <Typography tag="p" variant="bigbody" class="{eventPaddingClass} {textAlignClass}"
      >{event}</Typography
    >
  </div>
</div>

<style lang="postcss">
  @media screen(md) {
    .root :global(.left) {
      transform: translateX(calc(-50% + theme('space.3')));
    }

    .root :global(.right) {
      transform: translateX(calc(50% - theme('space.3')));
    }
  }
</style>
