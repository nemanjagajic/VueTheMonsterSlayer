new Vue({
    el: '#exercise',
    data: {
        effectClasses: {
            highlight: false,
            shrink: true
        },
        inputClasses: {
            first: '',
            second: ''
        },
        isVisible: true,
        myStyle: {
            width: '100px',
            height: '150px',
            backgroundColor: 'gray'
        },
        progressBar: {
            width: '10px'
        }
    },
    methods: {
        startEffect: function() {
            const self = this;
            setInterval(function() {
                self.effectClasses.highlight = !self.effectClasses.highlight;
                self.effectClasses.shrink = !self.effectClasses.shrink;
            }, 1000)
        },
        startProgress: function() {
            const self = this;
            let width = 0;

            setInterval(function() {
                width = width + 10;
                self.progressBar.width = width + 'px';
            }, 500);
        }
    }
});
