import Task from './Task';

export default {
  component: Task,
  title: 'Task',
  argTypes: {
    onArchiveTask: { action: 'onArchiveTask' },
    onTogglePinTask: { action: 'onTogglePinTask' },
    onEditTitle: { action: 'onEditTitle' },
  },
}

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Buy milk',
      state: 'TASK_INBOX'
    },
  },
};

export const Pinned = {
  args: {
    task: {
      id: '2',
      title: 'QA dropdown',
      state: 'TASK_PINNED'
    },
  },
};

export const Archived = {
  args: {
    task: {
      id: '3',
      title: 'Write schema for accont menu',
      state: 'TASK_ARCHIVED'
    },
  },
};

const longTitleString = 'This task\'s name is absurdly long. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-ff abruptly when it reaches the star. ! hope not!';

export const LongTitle = {
  args: {
    task: {
      id: '4',
      title: longTitleString,
      state: 'TASK_INBOX'
    },
  },
};
