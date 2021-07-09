// the show password toggle
var app = new Vue({
    el: "#form",
    data : {
        fieldType: "password",
    },
    methods: {
        show() {
            this.fieldType = this.fieldType === "password" ? "text" : "password";
        }
    }
});
var app2 = new Vue({
    el: "#form2",
    data : {
        fieldType: "password",
    },
    methods: {
        show() {
            this.fieldType = this.fieldType === "password" ? "text" : "password";
        }
    }
});
