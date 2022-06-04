import {createPinia, defineStore} from "pinia";
import {ref, computed, watch} from 'vue';

export const useUserStore = defineStore("user", () => {
    const user = ref({
        name: "Jenny",
        email: "yuaog1331@gmail.com"
    });

    const pinia = createPinia();

    if(localStorage.getItem("user")){
        pinia.state.value.user = JSON.parse(localStorage.getItem("user"));
    }

    watch(pinia.state.value.user, state => {
        localStorage.setItem("user", JSON.stringify(state))
    },{deep: true})

    const count = ref(0);

    const website = computed(() => {
        return  user.value.email.substring(user.value.email.lastIndexOf("@") + 1)
    });

    const changeName = (newName) => {
        user.value.name = newName;
    }

    return{
        count,
        user,
        website,
        changeName
    }
})