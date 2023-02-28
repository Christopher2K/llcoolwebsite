<script lang="ts">
  import Typography from './Typography.svelte'
  import TimelineItemDot from './TimelineItemDot.svelte'

  export let date: string
  export let event: string
  export let side: 'left' | 'right' = 'left'

  $: eventPaddingClass = side === 'left' ? 'pr-12' : 'pl-12'
  $: eventAlignClass = side === 'left' ? 'text-right' : 'text-left'
</script>

<div class="root mb-10 w-full flex flex-col justify-start items-center z-10">
  <div
    class="{side} flex flex-col justify-start w-fit max-w-[50%]"
    class:items-end={side === 'left'}
    class:items-start={side === 'right'}
  >
    <div class="flex flex-row justify-start items-center gap-6">
      {#if side === 'right'}
        <TimelineItemDot />
      {/if}

      <Typography tag="p" variant="subheading2" class="">{date}</Typography>
      {#if side === 'left'}
        <TimelineItemDot />
      {/if}
    </div>
    <Typography tag="p" variant="bigbody" class="{eventPaddingClass} {eventAlignClass}"
      >{event}</Typography
    >
  </div>
</div>

<style>
  .root :global(.left) {
    transform: translateX(calc(-50% + theme('space.3')));
  }

  .root :global(.right) {
    transform: translateX(calc(50% - theme('space.3')));
  }
</style>
