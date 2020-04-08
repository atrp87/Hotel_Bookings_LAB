<template lang="html">
  <div class="booking">
    <h2>{{ booking.name }}</h2>
    <p>{{ booking.email }}</p>
    <!-- <p>{{ booking.checkedIn }}</p> -->

    <button v-on:click="handleDelete(booking._id)">Delete Booking</button>
  </div>
</template>

<script>
import BookingService from '../services/BookingService';
import { eventBus } from '../main';
export default {
  name: "booking",
  props: ['booking'],
  methods: {
    handleDelete(id){
    			BookingService.deleteBooking(id)
    			.then(response => eventBus.$emit('booking-deleted', id));
    		}
  }
}
</script>

<style lang="css" scoped>

</style>