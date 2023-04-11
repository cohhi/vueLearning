import {createRouter, createWebHashHistory} from "vue-router";

import message1 from "@/components/message1.vue";
import message2 from "@/components/message2.vue";

const routes = [
{
path: '/message1', components: message1
},
{
path: '/message2', components: message2
}
]
const router = createRouter({
history: createWebHashHistory(),
routes
})
export default router