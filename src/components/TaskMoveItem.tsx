import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

type Props = {
  todoName: string;
};

const TaskMoveItem = ({ todoName }: Props) => {
  return (
    <li className="my-4 flex">
      <button className="mr-3">
        <DragIndicatorIcon />
      </button>
      <label htmlFor="" className="flex items-center cursor-pointer">
        <input
          id=""
          type="checkbox"
          className="cursor-pointer w-[25px] h-[25px]"
          value=""
          checked={false}
        />
        <p className="ml-4 relative w-[90%]">{todoName}</p>
      </label>
    </li>
  );
};

export default TaskMoveItem;
