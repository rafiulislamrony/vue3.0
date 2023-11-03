var app = Vue.createApp({
  data() {
    return {};
  },   
});

app.component('contact-details', {
  data() {
    return {
      name: "Rafiul Islam"
    };
  }, 
  template: `
      <h1>Contact Details</h1>
      <p><strong>Name:</strong> Rafi</p>
      <p><strong>Website:</strong> www.rafiulislam.com</p>
      <p><strong>Address:</strong> Dhaka, Bangladesh</p> 
   `
});


app.mount("#app"); 