var app1 = Vue.createApp({
  data() {
    return {
      name: "",
    };
  }, 
  template:`
  <h1>Enter Your Name</h1>
  <input type="text" v-model="name">
  <br>
  <p>Your name is here {{ name }}</p> 
  `

});
app1.mount("#app1");

var app2 = Vue.createApp({
  data() {
    return {
      message: "Hello Rafi",
    };
  }, 
  template: `
  <h1> Your Message</h1> <br>
  <p>{{ message }}</p> 
  `

}); 

app2.mount("#app2");
