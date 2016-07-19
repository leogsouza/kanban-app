import uuid from 'uuid';

export default class NoteStore {
    constructor() {
        this.notes = [
            {
              id: uuid.v4(),
              task: 'Learn React'
            },
            {
              id: uuid.v4(),
              task: 'Do laundry'
            },
            {
              id: uuid.v4(),
              task: 'Learn Webpack'
            },
            {
              id: uuid.v4(),
              task: 'Learn AngularJS'
            },
            {
              id: uuid.v4(),
              task: 'Learn Golang'
            }
        ]
    }
}