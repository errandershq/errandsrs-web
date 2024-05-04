<template>
  <div class="bg-white shadow rounded-md p-6 space-y-3">
    <slot name="title" />
    <client-only>
      <div class="chart-wrapper md:w-full overflow-x-auto w-full">
        <apexchart class="md:w-full overflow-x-auto" width="1000" height="330" type="area" :options="chartOptions"
          :series="series"></apexchart>
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
const chartOptions = ref({
  chart: {
    id: "vuechart-example",
    toolbar: { show: false },
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      horizontal: false,
      borderRadiusApplication: "around",
      columnWidth: "50%",
      barHeight: "100%",
    },
  },
  colors: [
    function ({ value, seriesIndex, w }) {
      if (value > 50) {
        return "#000000";
      } else {
        return "#0ba9b9";
      }
    },
  ],
  xaxis: {
    categories: [
      1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1996, 1997, 1998,
      1991, 1992, 1993, 1994,
    ],
  },
  tooltip: {
    theme: "light",
    fillSeriesColor: false,
  },
})
const series = ref([
  {
    name: "series-1",
    data: [100, 40, 35, 100, 49, 60, 70, 60, 40, 75, 50, 49, 40, 35, 100],
  },
])
</script>

<style scoped></style>
