<template lang="html">
    <div class="atMeStatus">
        <div class="list"  v-for="x in list">
            <pixel-content :x="x"></pixel-content>
        </div>
        <div class="refresh-footer" v-if="option.refresh">
            <pixel-spinner :size="'45px'" :color="'#007AFF'"></pixel-spinner>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "at_me_status",
    data() {
        return {
            list: []
        };
    },
    computed: {
        ...mapGetters({
            statuses: 'at_me_status',
            option: 'at_me_status_option',
            showImage: 'image_zoom_show'
        })
    },
    watch: {
        option: {
            handler: function (val, oldVal) {
                if (val && val.page == 1) {
                    this.list = []
                }
            },
            deep: true
        },
        statuses: function (val, oldVal) {
            if (val) {
                if (this.option.page == 1) {
                    this.list = val;
                } else {
                    this.list = [...this.list, ...val]
                }
            }
        }
    },
    created() {
        this.atMeStatus(1)
    },
    mounted() {

    },
    activated() {
        window.addEventListener('scroll', this.scrollBar)
    },
    deactivated() {
        window.removeEventListener('scroll', this.scrollBar)
    },
    methods: {
        ...mapActions([
            'getAtMeStatus'
        ]),
        atMeStatus(page) {
            this.getAtMeStatus(page)
        },
        loadMore() {
            let vue = this
            vue.option.refresh = true
            var page = vue.option.page + 1
            vue.atMeStatus(page)
        },
        scrollBar() {
            var a = document.documentElement.scrollTop == 0 ? document.body.clientHeight : document.documentElement.clientHeight;
            var b = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
            var c = document.documentElement.scrollTop == 0 ? document.body.scrollHeight : document.documentElement.scrollHeight;
            if (a + b == c && !this.showImage) {
                this.loadMore();
            }
        }
    }
}
</script>

<style lang="css">
.atMeStatus .list {
    flex: 1;
    background-color: #fff;
    border-radius: 2px;
    padding: 1rem;
    margin-bottom: .8rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
}

.atMeStatus .refresh-footer {
    margin-bottom: .8rem;
    margin-top: .8rem;
    text-align: center;
}
</style>
