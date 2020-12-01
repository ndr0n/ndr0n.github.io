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
            this.aniHeight = 94/2;
            this.panHeight = 94/2;
            this.panOpen = true;
        },
        closePanel(){
            this.aniHeight = 94;
            this.panHeight = 0;
            this.panOpen = false;
        }
    },
});