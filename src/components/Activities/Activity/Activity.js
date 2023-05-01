import { useState } from "react";
import { editIcon, saveIcon, deleteIcon } from 'assets/images/svgIcons';
import { Pitchs, ActivityTypes, Users, todayDateTime } from 'constants';
import { DropDown } from 'components';

export default function Activity({ data, removeActivity, editActivity }) {
  const [activity, setActivity] = useState(data);
  const [isEditing, setIsEditing] = useState(false);

  const updateActivityHandle = (itemName, item) => {
    setActivity({ ...activity, [itemName]: item });
  }

  return (
    <div className="flex place-items-center justify-between p-1">
      <div className={`flex place-items-center h-auto w-full min-w-0 flex-row flex-wrap lg:flex-nowrap 
        ${isEditing && 'bg-gray-50'} p-1 gap-0 lg:gap-3 pb-2 justify-between`}
      >
        <div className="w-full sm:pr-1 mb-2 sm:basis-1/2 lg:basis-1/6 lg:m-0 lg:p-0">
          <DropDown
            items={ActivityTypes}
            itemName='type'
            inputChange={updateActivityHandle}
            defaultValue={activity.type}
            disabled={!isEditing}
          />
        </div>

        <div className="flex flex-col w-full sm:pl-1 mb-2 sm:basis-1/2 lg:basis-1/4 lg:m-0 lg:p-0">
          <input disabled={!isEditing} className={`flex flex-grow rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 ${isEditing && 'shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'}`}
            type="datetime-local" id="meeting-time"
            name="meeting-time" value={activity.time}
            min={todayDateTime}
            onChange={(event) => updateActivityHandle('time', event.target.value)}
          />
        </div>

        <div className="w-full sm:basis-1/2 sm:pr-1 mb-2 lg:basis-1/6 lg:m-0 lg:p-0">
          <DropDown
            items={Users}
            itemName='user'
            inputChange={updateActivityHandle}
            defaultValue={activity.user}
            disabled={!isEditing}
          />
        </div>

        <div className="w-full sm:basis-1/3 sm:pr-1 mb-2 lg:basis-1/6 lg:m-0 lg:p-0">
          <DropDown
            items={Pitchs}
            itemName='pitch'
            inputChange={updateActivityHandle}
            defaultValue={activity.pitch}
            disabled={!isEditing}
          />
        </div>
        <div className="flex pl-2 space-x-2 justify-end w-full mb-1 sm:pr-1 basis-1/6 lg:basis-3/12 sm:m-0 lg:p-0">
          <button
            className="inline-flex items-center p-2 text-sm text-green-100 bg-green-600 rounded hover:bg-green-700"
            onClick={() => {
              if (isEditing) {
                editActivity(activity, activity.id);
              }
              if (activity.time) {
                setIsEditing(!isEditing);
              }
            }}
          >
            {isEditing ? saveIcon : editIcon}
          </button>

          <button
            className="inline-flex items-center p-2 text-sm text-green-100 bg-red-600 rounded hover:bg-red-700"
            onClick={() => removeActivity(activity.id)}
          >
            {deleteIcon}
          </button>
        </div>
      </div>
    </div>

  );
}
