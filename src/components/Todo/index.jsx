import { Row, Tag, Checkbox } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ id, name, priority }) {
  const dispatch = useDispatch();

  // Get the complete todoList from Redux
  const todoList = useSelector((state) => state.todoList);

  // Get checked status directly from the todoList
  const isChecked = todoList.find((task) => task.id === id)?.completed || false;

  const toggleCheckbox = () => {
    // Dispatch an action to update checked status in Redux
    dispatch({
      type: 'todoList/CheckedTask',
      payload: {
        id: id,
        checked: !isChecked, // Flip the current checked status
      },
    });
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(isChecked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={isChecked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}
