<template>
  <div class="d-flex flex-column">
      <h4 class="mb-4">De vanligaste frågorna</h4>
      <div class="slab slab-primary slab-arrow flex-grow-1">
          <ul class="my-2 pl-4">
              <li
                v-for="item in items"
                :key="item.id"
                class="my-3"
                >
                <router-link
                    :to="{ name: 'Guide', params: getParams(item) }"
                    >
                    {{ item.Title }}
                </router-link>
              </li>
          </ul>
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
        this.getGuides();
    },
    methods: {
        getGuides () {
            humany.guides(this.source, `funnel=${this.source}&skip=0&take=5`)
            .then(res => {
            console.log(res);
            try {
                this.items = res.data.Matches;
            } catch (e) {
                throw e;
            }
            }).catch(e => {
            console.error(e);
            })
        },
        getParams (item = '-1/err') {
            // Default param val is intended to convey missing value
            const split = item.RelativeUrl.split('/');
            console.log(split);

            return {
                id: split[0],
                title: split[1]
            }
        }
    }
}
</script>

<style scoped lang="scss">
li::marker {
    content: "›  ";
    font-weight: bold;
}
a {
    text-decoration: none;
}
</style>