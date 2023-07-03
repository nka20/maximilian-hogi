import {createStore} from 'vuex';

const store= createStore({
    state(){
         return{
            memories:[
                {id:'1',
                 image:"https://th.bing.com/th/id/OIP.K-BFJdfUE__-t_MSfFKs5gHaIH?w=183&h=201&c=7&r=0&o=5&dpr=1.5&pid=1.7",
                 title:"Max",
                 description:"la vie est plus belle",
                },
                
                {id:'2',
                 image:"https://th.bing.com/th/id/OIP.K-BFJdfUE__-t_MSfFKs5gHaIH?w=183&h=201&c=7&r=0&o=5&dpr=1.5&pid=1.7",
                  title:"Manuel",
                  description:"la vie est plus belle",
                },
                
                {id:'3',
                 image:"https://th.bing.com/th/id/OIP.K-BFJdfUE__-t_MSfFKs5gHaIH?w=183&h=201&c=7&r=0&o=5&dpr=1.5&pid=1.7",
                  title:"Marx",
                  description:"la vie est plus belle",
                 },
                        ],
         };
    },
    mutations:{
addMemory(state,memoryData){
const newMemory ={
    id:new Date().toISOString(),
    title:memoryData.title,
    image:memoryData.imageUrl,
    description:memoryData.description,
}
state.memories.unshift(newMemory);
}
    },
    actions:{
addMemory(context,memoryData){
    context.commit('addMemory',memoryData)
}
    },
    getters:{
        memories(state){
            return state.memories;
        },
        memory(state){
return (memoryId)=>{
    return state.memories.find((memory)=>memory.id === memoryId);
}
        }
    }
});

export default store;

