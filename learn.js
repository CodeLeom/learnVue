Vue.component('cat-list', {
    props: ['cats'],
    template: `
        <ul>
            <li v-for="cat in cats">{{ cat.name }}</li>
        </ul>
    `
})

app  = new Vue({
    el: '#root',
    data: {
        cats: [
            { name: 'kitty' },
            { name: 'kelvin' },
            { name: 'fish' }
        ],
        component: ['cat-list'
    ], 
        newCat: ''
    },
    methods: {
        addKitty: function() {
            this.cats.push({name: this.newCat})
            this.newCat = ''
            }
        },
        filters: {
            capitalize: function(value){
                return value.toUpperCase()
            }
        },
        created: function() {
            console.log('created')
        },
        mounted: function() {
            console.log('mounted')
        },
        updated: function() {
            console.log('updated')
        },
        destroyed: function() {
            console.log('destroyed')
        }    
})
setTimeout( function(){
    app.$destroy();
}, 5000);