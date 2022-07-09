Vue.createApp({
    data() {
        return {
            valueInput: '',
            needDoList: [],
            completeList: []
        };
    },
    methods: {
        heandlyInput(e) {
            this.valueInput = e.target.value;
        },
        addTask() {
            if (this.valueInput === '') {return}; // если юзер ничего не ввел, то верни все
            this.needDoList.push({ // юзер ввел задачу и она пушится в needDoList
                title: this.valueInput,
                id: Math.random()
            });
            this.valueInput = ''; // когда addTask отработал, то инпут пустой
        },
        doCheck(index, type) { 
            if (type === 'need') {
                const completeMask = this.needDoList.splice(index, 1); // элемент удаляем из needDoList
                this.completeList.push(...completeMask); // и пушим его в completeList
            } else {
                const noCompleteMask = this.completeList.splice(index, 1); // элемент удаляем из completeList
                this.needDoList.push(...noCompleteMask); // и пушим его в needDoList
            }
        },
        removeMask(index, type) {
            const removeMaskItem = type === 'need' ? this.needDoList : this.completeList;
            removeMaskItem.splice(index, 1);
            // if (type === 'need') {
            //     this.needDoList.splice(index, 1); // элемент удаляем из needDoList
            // } else {
            //     this.completeList.splice(index, 1);
            // }    
        }
    }
}).mount('#app');