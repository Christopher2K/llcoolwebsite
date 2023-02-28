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

<div class="w-full relative flex flex-row justify-start items-start">
  <div
    class="w-3 self-stretch bg-secondary-50 dark:bg-primary-50 rounded-full md:absolute md:top-0 md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2"
  />
  <div class="flex-1">
    {#each timelineEvents as timelineEvent, i}
      <TimelineItem
        date={timelineEvent.date}
        event={timelineEvent.event}
        side={i % 2 === 0 ? 'left' : 'right'}
      />
    {/each}
  </div>
</div>
