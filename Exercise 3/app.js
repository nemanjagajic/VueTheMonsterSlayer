new Vue({
    el: '#exercise',
    data: {
        value: 0
    },
    computed: {
        result: function() {
            return this.value < 37 ? 'Not there yet.' : 'You got there!'
        }
    },
    watch: {
        result: function() {
            const self = this;
            setTimeout(function() {
                self.value = 0;
            }, 5000)
        }
    }
});