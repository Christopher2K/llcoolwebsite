<script context="module" lang="ts">
  type TimelineEvent = { date: string; event: string }
</script>

<script lang="ts">
  import TimelineItem from './TimelineItem.svelte'

  const timelineEvents: TimelineEvent[] = [
    { date: 'May 1996', event: 'I was born in Paris XII' },
    { date: 'June 2013', event: 'Got my high scool degree' },
    { date: 'September 2013', event: 'Got into CS engineering school' },
    {
      date: 'October 2013',
      event: 'First job part-time job as a helpdesk / sysadmin apprentice',
    },
    { date: 'June 2015', event: 'Graduated but realized the cloud was not for me.' },
  ]
</script>

<div class="w-full relative flex flex-col justify-start items-start">
  {#each timelineEvents as timelineEvent, i}
    <TimelineItem
      date={timelineEvent.date}
      event={timelineEvent.event}
      side={i % 2 === 0 ? 'left' : 'right'}
    />
  {/each}

  <div
    class="center-line absolute top-0 bottom-0 left-1/2 center self-stretch w-3 bg-secondary-50 dark:bg-primary-50 rounded-full"
  />
</div>

<style>
  .center-line {
    transform: translateX(-50%);
  }
</style>
