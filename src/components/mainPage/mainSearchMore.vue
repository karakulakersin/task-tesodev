<template>
  <div class="mainBackGround">
    <div
      class="d-flex justify-content-space-between align-items-center m-2 p-l-1"
    >
      <div>
        <img
          src="https://www.tesodev.com/getimg/5d4c76e7de632812d86a5bf2/194"
        />
      </div>
      <div class="d-flex align-items-center col-7">
        <div style="margin-left: 6 rem">
          <input v-model="searchKey" placeholder="Search username" />
        </div>
        <tsButton buttonText="Search" class="m-l-1" />
      </div>
      <div class="">
        <tsButton :buttonFunction="addDataScreen" buttonText="Add new record" />
      </div>
    </div>

    <div class="d-flex justify-content-end orderButton">
      <div class="dropdown">
        <button @click="dropdown = !dropdown" class="dropbtn">Order By</button>
        <div v-if="dropdown" class="dropdown-content">
          <a id="nameAscend" @click="nameAscending">Name ascending </a>
          <a id="nameDescend" @click="nameDescending">Name descending</a>
          <a id="yearAscend" @click="yearAscending">Year ascending</a>
          <a id="yearDescend" @click="yearDescending">Year descending</a>
        </div>
      </div>
    </div>
    <div
      class="d-flex justify-content-center m-1 flex-direction-column width-100 align-items-center"
    >
      <div v-for="(data, index) in sssearch" :key="index">
        <mainMore :searchDatas="data" />
        <hr />
      </div>
      <div class="d-flex">
        <button
          @click="previousPage"
          class="m-1 paginationButton"
          v-if="activePage != 1 && buttonCountt > 1"
        >
          Previous
        </button>
        <div v-if="buttonCountt < 6">
          <button
            @click="changePage(i)"
            class="m-1 paginationButton"
            :class="activePage == i ? 'activeButton' : ''"
            v-for="i in buttonCountt"
            :key="i"
          >
            {{ i }}
          </button>
        </div>
        <div v-else>
          <button
            :class="activePage == 1 ? 'activeButton' : ''"
            class="m-1 paginationButton"
            v-if="activePage > 2"
            @click="changePage(1)"
          >
            First
          </button>
          <button
            :class="activePage == activePage ? 'activeButton' : ''"
            class="m-1 paginationButton"
            v-if="buttonCountt - activePage >= 3"
            @click="changePage(activePage)"
          >
            {{ activePage }}
          </button>
          <button
            :class="activePage == i ? 'activeButton' : ''"
            class="m-1 paginationButton"
            v-if="buttonCountt - activePage >= 4"
            @click="changePage(activePage + 1)"
          >
            {{ activePage + 1 }}
          </button>
          <button
            :class="activePage == i ? 'activeButton' : ''"
            class="m-1 paginationButton"
            v-if="buttonCountt - activePage >= 5"
            @click="changePage(activePage + 2)"
          >
            {{ activePage + 2 }}
          </button>
          <span v-if="buttonCountt - activePage > 5"> .. </span>
          <button
            :class="activePage == buttonCountt - 2 ? 'activeButton' : ''"
            class="m-1 paginationButton"
            @click="changePage(buttonCountt - 2)"
          >
            {{ buttonCountt - 2 }}
          </button>
          <button
            :class="activePage == buttonCountt - 1 ? 'activeButton' : ''"
            class="m-1 paginationButton"
            @click="changePage(buttonCountt - 1)"
          >
            {{ buttonCountt - 1 }}
          </button>
          <button
            :class="activePage == buttonCountt ? 'activeButton' : ''"
            class="m-1 paginationButton"
            @click="changePage(buttonCountt)"
          >
            {{ buttonCountt }}
          </button>
        </div>
        <button
          @click="nextPage"
          class="m-1 paginationButton"
          v-if="activePage != buttonCountt && buttonCountt > 1"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, inject, computed, watch, onMounted } from "vue";
import { useStore } from "vuex";
import mainMore from "../mainMore/mainMore.vue";
import tsButton from "../helperComponents/tsButton.vue";
const store = useStore();
const buttonCountt = ref(0);
const activePage = ref(4);
const dropdown = ref(false);
const addDataScreen = inject("addDataScreen");
const searchKey = inject("searchKey");
const searchDatas = ref([]);
const sssearch = ref([]);
watch(searchKey, () => {
  if (searchKey.value.length >= 2) {
    searchDatas.value = [];
    searchDataa();
    store.dispatch("setSearchData", searchDatas.value);
    buttonCount();
    sssearch.value = searchData.value;
    activePage.value = 1;
    searchSixerFilter();
  } else searchDatas.value = [];
});
const searchData = computed(() => {
  return store.getters["getSearchData"];
});
const allData = computed(() => {
  return store.getters["getAllData"];
});

const searchDataa = () => {
  allData.value.forEach(function (data) {
    const ressult = data[0]
      .toLowerCase()
      .includes(searchKey.value.toLowerCase());
    if (ressult) searchDatas.value.push(data);
  });
};

const searchSixerFilter = () => {
  if (searchData.value.length > 5) {
    let firstIndex = 5 * (activePage.value - 1);
    let lastIndex = 5 * activePage.value;
    sssearch.value = searchData.value.slice(firstIndex, lastIndex);
  }
};
const buttonCount = () => {
  if (searchData.value.length > 5) {
    buttonCountt.value = Math.ceil(searchData.value.length / 5);
  } else {
    buttonCountt.value = 0;
  }
};
const changePage = (i) => {
  activePage.value = i;
  searchSixerFilter();
};
const previousPage = () => {
  activePage.value--;
  searchSixerFilter();
};
const nextPage = () => {
  activePage.value++;
  searchSixerFilter();
};
const nameAscending = () => {
  sssearch.value = searchData.value.sort();
  searchSixerFilter();
  let elementNameAscend = ref(document.getElementById("nameAscend"));
  let elementNameDescend = ref(document.getElementById("nameDescend"));
  let elementYearAscend = ref(document.getElementById("yearAscend"));
  let elemenetYearDescend = ref(document.getElementById("yearDescend"));
  elementNameAscend.value.classList.add("dropdown-content-a-active");
  elementNameDescend.value.classList.remove("dropdown-content-a-active");
  elementYearAscend.value.classList.remove("dropdown-content-a-active");
  elemenetYearDescend.value.classList.remove("dropdown-content-a-active");
};
const nameDescending = () => {
  sssearch.value = searchData.value.sort(function (a, b) {
    if (a > b) {
      return -1;
    }
    if (b > a) {
      return 1;
    }
    return 0;
  });
  searchSixerFilter();
  let elementNameDescend = ref(document.getElementById("nameDescend"));
  let elementNameAscend = ref(document.getElementById("nameAscend"));
  let elementYearAscend = ref(document.getElementById("yearAscend"));
  let elemenetYearDescend = ref(document.getElementById("yearDescend"));
  elementNameDescend.value.classList.add("dropdown-content-a-active");
  elementNameAscend.value.classList.remove("dropdown-content-a-active");
  elementYearAscend.value.classList.remove("dropdown-content-a-active");
  elemenetYearDescend.value.classList.remove("dropdown-content-a-active");
};
const dateFormat = (i) => {
  let d = i[3].split("/");
  let dat = new Date(d[2] + "/" + d[1] + "/" + d[0]);
  return dat;
};
const yearAscending = () => {
  sssearch.value = searchData.value.sort(
    (a, b) =>
      new Date(dateFormat(b)).getTime() - new Date(dateFormat(a)).getTime()
  );
  searchSixerFilter();
  let elementNameDescend = ref(document.getElementById("nameDescend"));
  let elementNameAscend = ref(document.getElementById("nameAscend"));
  let elementYearAscend = ref(document.getElementById("yearAscend"));
  let elemenetYearDescend = ref(document.getElementById("yearDescend"));
  elementNameDescend.value.classList.remove("dropdown-content-a-active");
  elementNameAscend.value.classList.remove("dropdown-content-a-active");
  elementYearAscend.value.classList.add("dropdown-content-a-active");
  elemenetYearDescend.value.classList.remove("dropdown-content-a-active");
};
const yearDescending = () => {
  sssearch.value = searchData.value.sort(
    (a, b) =>
      new Date(dateFormat(a)).getTime() - new Date(dateFormat(b)).getTime()
  );
  searchSixerFilter();
  let elementNameDescend = ref(document.getElementById("nameDescend"));
  let elementNameAscend = ref(document.getElementById("nameAscend"));
  let elementYearAscend = ref(document.getElementById("yearAscend"));
  let elemenetYearDescend = ref(document.getElementById("yearDescend"));
  elementNameDescend.value.classList.remove("dropdown-content-a-active");
  elementNameAscend.value.classList.remove("dropdown-content-a-active");
  elementYearAscend.value.classList.remove("dropdown-content-a-active");
  elemenetYearDescend.value.classList.add("dropdown-content-a-active");
};

onMounted(() => {
  searchDataa();
  activePage.value = 1;
  searchSixerFilter();
  buttonCount();
});
</script>
<style>
.orderButton {
  margin-top: 1.8rem;
  width: 83%;
}
.orderButton button {
  padding: 0px 10px;
  border-radius: 8px;
}
.activeButton {
  color: white !important;
  background-color: #204080;
  border: 2px solid #204080 !important;
}

.paginationButton {
  border-radius: 5px;
  border: 2px solid #484848;
  padding: 1px 11px;
  color: #484848;
}

.dropbtn {
  background-color: #f3f2f2;
  color: #414141;
  padding: 16px;
  font-size: 16px;
  border: 2px solid #414141;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  border: 1px solid #8f8f8f;
  border-radius: 0.6rem;
  margin-top: 1rem;
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 175px;
}

.dropdown-content a {
  color: black;
  padding: 6px 10px;
  border-radius: 8px;
  text-decoration: none;
  display: block;
  margin: 0.5rem;
}

.dropdown-content a:not([href]):hover {
  background-color: #b3b3b3;
  color: white;
  cursor: pointer;
}
.dropdown-content-a-active {
  background-color: #b3b3b3;
  color: white !important;
}
</style>
