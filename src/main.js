var app = new Vue({
    el: '#app',
    data: {
        currentPage: 0,
        panHeight: 0,
        aniHeight: 94,
        movement: 0,
        panOpen: false,
    },
    methods: {
        setPage(newPage) {
            this.currentPage = newPage;
            if(newPage!=0){
                this.openPanel();
            } else {
                this.closePanel();
            }
        },
        setHeight(newHeight){
            this.panHeight = newHeight;
            this.aniHeight = 94-this.panHeight;
        },
        openPanel(){
            this.panHeight = 60;
            this.aniHeight = 94 - this.panHeight;
            this.panOpen = true;
        },
        closePanel(){
            this.panHeight = 0;
            this.aniHeight = 94 - this.panHeight;
            this.panOpen = false;
        }
    },
});