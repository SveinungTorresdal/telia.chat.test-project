<template>
    <div id="categories">
        <div v-if="items.length" class="grid grid-cols-auto grid-row-equals">
            <router-link
                v-for="item in items"
                :key="item.id"
                :to="{ name: 'Category', params: { rel: item.RelativeUrl } }"
                class="cards cards-primary cards-wide my-0 flex-grow-1"
                >
                <div class="cards-content mt-1">{{ item.Name }}</div>
                <i class="material-icons">arrow_forward</i>
            </router-link>
        </div>
        <div v-else>
            No items to show!
        </div>
    </div>
</template>

<script>
import humany from '../api/humany.js';

export default {
    data: () => ({
        items: [],
        source: 'swedbank-pay-consumerportal-dev'
    }),
    mounted() {
        this.getCategories();
    },
    methods: {
        getCategories () {
            humany.categories(this.source)
            .then(res => {
            console.log(res);
            try {
                this.items = res.data.Children;
            } catch (e) {
                throw e;
            }
            }).catch(e => {
            console.error(e);
            })
        }
    }
}
</script>