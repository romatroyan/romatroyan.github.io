
class Tasks {
    constructor() {
        this.defaultTasks = [
            
        ];
    }

    getTasksFromLS() {
        return JSON.parse(localStorage.getItem('tasks')) || this.defaultTasks && Tasks.setTasksToLS(this.defaultTasks);
    }

    static setTasksToLS(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

export default Tasks;