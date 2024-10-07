import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../redux/store';
import { v4 as uuidv4 } from 'uuid';
import { addToDo } from '../../redux/actions';
import { useState } from 'react';
import { todoListSelector } from '../../redux/selectors';
export default function TodoList() {
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Medium');
  const todoList = useSelector((state) => state.todoList);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    dispatch(addToDo({
      id: uuidv4(),
      name: todoName,
      priority: priority,
      completed: false
    }));
  };
  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  const filterTasks = (todoList, filters) => {
    const { search, status, priority } = filters;

    // Kiểm tra nếu todoList không phải là null hoặc undefined
    if (!todoList) {
      return []; // Hoặc bạn có thể trả về todoList nếu muốn
    }

    return todoList.filter((task) => {
      // Kiểm tra điều kiện search
      const isSearchMatch = search
        ? task.name && task.name.toLowerCase().includes(search.toLowerCase())
        : true;

      // Kiểm tra điều kiện priority
      const isPriorityMatch = priority.length === 0 || priority.includes(task.priority);

      // Kiểm tra điều kiện status
      const isStatusMatch = (status === 'Completed' && task.completed === true) ||
        (status === 'Todo' && task.completed === false) ||
        (status === 'All');

      // Trả về true nếu tất cả các điều kiện đều khớp
      return isSearchMatch && isPriorityMatch && isStatusMatch;
    });
  };
  console.log(filterTasks(todoList, filters));

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {filterTasks(todoList, filters).map((todo) => {
          return <Todo key={todo.id} id={todo.id} name={todo.name} priority={todo.priority} />;
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select value={priority} defaultValue="Medium" onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
