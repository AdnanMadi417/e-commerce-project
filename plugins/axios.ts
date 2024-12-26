import {useApi} from "~/composable/useProducts";

export default defineNuxtPlugin(() => {
    return {
        provide: {
            axios: () => {
                return useApi()
            }
        }
    }
})