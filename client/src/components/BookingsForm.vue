<template lang="html">
	<form id="bookings-form" v-on:submit="handleSubmit">
		<h2>Add a Booking</h2>
		<p v-if="errors.length">
    		<b>Please correct the following error(s):</b>
    		<ul>
      			<li v-for="error in errors">{{ error }}</li>
    		</ul>
  		</p>
		<div class="formWrap">
			<label for="name">Name:</label>
			<input type="text" id="name" v-model="name" />
		</div>
		<div class="formWrap">
			<label for="email">Email:</label>
			<input type="text" id="email" v-model="email" />
		</div>
		<div class="formWrap">
			<label for="checkin">Check In Status:</label>
			<select id="checkin" v-model="checkedInStatus" required>
				<option value="notcheckedin">Not Checked In</option>
				<option value="checkedin">Checked In</option>
			</select>
		</div>

		<input type="submit" value="Save" id="save"/>
	</form>
</template>

<script>
import { eventBus } from '../main';
import BookingService from '../services/BookingService';
export default {
	name: "bookings-form",
	data(){
		return {
			name: "",
			email: "",
			checkedIn: null,
			checkedInStatus: "",
			errors: []
		}
	},
	methods: {
		handleSubmit(event){
			
			event.preventDefault();

			this.errors = [];

			if (this.name && this.email){


				if (this.checkedInStatus === "checkedin"){
					this.checkedIn = true;
				}	else {
					this.checkedIn = false;
				};

				const payload = {
					name: this.name,
					email: this.email,
					checkedIn: this.checkedIn
				};
			
				BookingService.postBooking(payload)
				.then(booking => {
						eventBus.$emit('booking-added', booking);
				});
			} else if (!this.name){
				this.errors.push('Name required');
			} else if (!this.email){
				this.errors.push('Email required');
				// this.errors.clear();
			}
			

			
		}
	}
}
</script>

<style lang="css" scoped>

</style>