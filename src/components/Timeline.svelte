<script context="module" lang="ts">
  type TimelineEvent = { date: string; event: string }
</script>

<script lang="ts">
  import { t } from 'i18next'
  import TimelineItem from './TimelineItem.svelte'

  const timelineEvents: TimelineEvent[] = (
    t('about:timelineSection.events', { returnObjects: true }) as [string, string][]
  ).map(([date, event]) => ({
    date,
    event,
  }))
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
