export interface ITodo {
    id: string;
    title: string;
    description: string;
    dueData: Date;
    completed: boolean;
}

export class TodoModel {
    id: string;
    title: string;
    description: string;
    dueData: Date;
    completed: boolean;

    constructor(todo: ITodo) {
        this.id = todo.id;
        this.title = todo.title;
        this.description = todo.description;
        this.dueData = todo.dueData;
        this.completed = todo.completed;
    }
} 

export interface ITodosList {
    todos: ITodo[];
    title: string;
    creator: string;
    created: Date;
    linkedProject: string;
}

export class TodosListModel {
    todos: TodoModel[];
    title: string;
    creator: string;
    created: Date;
    linkedProject: string;

    constructor(todosList: ITodosList) {
        this.todos = todosList.todos.map(todo => new TodoModel(todo));
        this.title = todosList.title;
        this.creator = todosList.creator;
        this.created = todosList.created;
        this.linkedProject = todosList.linkedProject;
    }
}