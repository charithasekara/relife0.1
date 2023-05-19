
<template>
  <q-layout>
    <q-header elevated class="q-mr-md">
      <q-toolbar>
        <q-btn to="/SignIn" label="Sign In / Sign Up" @click="gotoSignIn" />
        <q-space />

        <q-btn flat dense icon="home" @click="goHome" />
        <q-btn flat dense icon="notifications" @click="showNotifications" />
        <q-btn flat dense icon="shopping_cart" @click="goToCart" />
        <q-btn color="Third" label="DONATE" />

      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-parallax :src="heroImage" style="height: 550px">
        <div class="row flex-center text-center">
          <div class="col-md-7">
            <h1>{{ heroTitle }}</h1>
            <h4>{{ heroSubtitle }}</h4>
            <q-btn label="Shop Now" size="lg" @click="goToShop" />
          </div>
        </div>
      </q-parallax>
      <q-tabs v-model="activeTab" dense align="justify">
        <q-tab name="all">All</q-tab>
        <q-tab name="on-sale">On Sale</q-tab>
        <q-tab name="trending-now">Trending Now</q-tab>
        <q-tab name="new-arrival">New Arrival</q-tab>
      </q-tabs>
      <q-select v-model="sortBy" :options="sortOptions" label="Sort by" dense />
      <q-input v-model="searchQuery" label="Search" dense />
      <q-scroll-area class="q-scroll-area">
        <div class="item-card-container">
        <q-card v-for="item in filteredItems" :key="item.id" class="item-card">
          <q-card-section>
            <img :src="item.image" :alt="item.name" width="100%" />
          </q-card-section>
          <q-card-section>
            <div>
            <h5>{{ item.name }}</h5>
            <p>{{ item.description }}</p>
            <p>Price: ${{ item.price }}</p>
            <p>Rating: {{ item.rating }}</p>
            </div>
          </q-card-section>
          <q-card-section class="card-actions">
            <q-btn label="Add to Cart" color="primary" dense @click="addToCart(item)" />
            <q-btn label="View Details" class="q-item-btn" flat dense @click="showDetails(item)" />
          </q-card-section>
        </q-card>
        </div>
      </q-scroll-area>
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  name: 'MarketPlace',
  data() {
    return {
      loggedIn: false,
      activeTab: 'all',
      sortBy: null,
      searchQuery: '',
      sortOptions: [
        { label: 'Name', value: 'name' },
        { label: 'Price', value: 'price' },
        { label: 'Rating', value: 'rating' },
      ],
      items: [
        {
          id: 1,
          name: 'Item 1',
          description: 'This is item 1',
          price: 10,
          rating: 4.5,
          image: 'https://via.placeholder.com/300',
          onSale: true,
          trendingNow: false,
          newArrival: true,
        },
        {
          id: 2,
          name: 'Item 2',
          description: 'This is item 2',
          price: 20,
          rating: 3.5,
          image: 'https://via.placeholder.com/300',
          onSale: false,
          trendingNow: true,
          newArrival: false,
        },
        {
          id: 3,
          name: 'Item 3',
          description: 'This is item 3',
          price: 15,
          rating: 4,
          image: 'https://via.placeholder.com/300',
          onSale: false,
          trendingNow: false,
          newArrival: false,
        },
      ],
      heroImage: 's5.2.jpg',
      heroTitle: 'Help Abandons To Build Their Life',
      heroSubtitle: 'The best place to buy handicrafts online',
    };
  },
  computed: {
    filteredItems() {
      let filtered = this.items;
      if (this.activeTab !== 'all') {
        filtered = filtered.filter((item) => item[this.activeTab]);
      }
      if (this.sortBy) {
        filtered = filtered.sort((a, b) => {
          if (a[this.sortBy] < b[this.sortBy]) {
            return -1;
          }
          if (a[this.sortBy] > b[this.sortBy]) {
            return 1;
          }
          return 0;
        });
      }
      if (this.searchQuery) {
        filtered = filtered.filter((item) =>
            item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      return filtered;
    },
  },
  methods: {
    goHome() {
      console.log('go home');
    },
    showNotifications() {
      console.log('show notifications');
    },
    goToCart() {
      console.log('go to cart');
    },
    gotoSignIn() {
      console.log('show login');
    },
    logout() {
      console.log('logout');
    },
    goToShop() {
      console.log('go to shop');
    },
    addToCart(item) {
      console.log(`add to cart: ${item.name}`);
    },
    showDetails(item) {
      console.log(`show details: ${item.name}`);
    },
  },
};
</script>
<style scoped>
.q-mr-md {
  background: rgb(40, 75, 54);
  height: 80px;
}

.row {
  margin: 16px 0;
}

.col-md-7 {
  color: #ffffff;
}

.item-card {
  margin-bottom: 20px;
  width: 150px;
}

.card-actions {
  justify-content: space-between;
}
.q-scroll-area {
  height: 700px; /* Set the desired height for the scroll area */
  overflow-y: auto;
}

.item-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.item-card {
  margin: 10px;
  width: 150px;
}
.q-item-btn{
  color: #284b36;
}

.text-h6 {
  font-size: 24px;
  font-weight: bold;
}
</style>




