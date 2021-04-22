<template>
    <div>
        <div class="grid grid-cols grid-cols-md-2 grid-row-md-equals mb-3">
            <frequently-asked />
            <contact-us />
        </div>
        <categories class="mb-5" />
    </div>
</template>

<script>
import Categories from '../components/Categories.vue';
import ContactUs from '../components/ContactUs.vue';
import FrequentlyAsked from '../components/FrequentlyAsked.vue';

export default {
    components: {
        Categories,
        ContactUs,
        FrequentlyAsked
    }
}
</script>