import TaskList from './TaskList';

import * as TaskStories from './Task.stories';

const taskStates = Object.freeze({INBOX: 'TASK_INBOX', PINNED: 'TASK_PINNED', ARCHIVED: 'TASK_ARCHIVED'})

export default {
  component: TaskList,
  title: 'TaskList',
  argTypes: {
    ...TaskStories.argTypes,
  }
}

export const Default = {
  args: {
    tasks: [
      { id: '1', state: taskStates.INBOX, title: 'Build a date picker'},
      { id: '2', state: taskStates.INBOX, title: 'QA dropdown'},
      { id: '3', state: taskStates.INBOX, title: 'Write a schema for account avatar component'},
      { id: '4', state: taskStates.INBOX, title: 'Export logo'},
      { id: '5', state: taskStates.INBOX, title: 'Fix bug in input error state'},
      { id: '6', state: taskStates.INBOX, title: 'Draft monthly blog to customers'},
    ]
  }
}

export const WithPinnedTasks = {
  args: {
    tasks: [
      { id: '6', title: 'Draft monthly blog to customers', state: taskStates.PINNED},
      ...Default.args.tasks.slice(0, 5),
    ],
  },
};

export const Loading = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty = {
  args: {
    ...Loading.args,
    loading: false,
  },
};