import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs';
import Task from './Task';

const stories = storiesOf('Storybook Knobs', module);

stories.addDecorator(withKnobs);


export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

stories
  .add('default', () => {
    const task1 = object("task", task, "PropsType")
    return <Task task={task1} {...actions} />
  })
  .add('pinned', () =>{
    const task2 = object("task", { ...task, state: 'TASK_PINNED' }, "PropsType")
    return <Task task={task2} {...actions} />
  })
  .add('archived', () => {
    const task3 = object("task", { ...task, state: 'TASK_ARCHIVED' }, "PropsType")
    return <Task task={task3} {...actions} />
  });