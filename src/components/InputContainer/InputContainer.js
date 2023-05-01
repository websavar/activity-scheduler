import { useState } from "react";
import { nanoid } from "nanoid";
import { Pitchs, ActivityTypes, Users } from 'constants';
import { getTodayDateTime } from 'utils';
import { DropDown } from 'components';

const initialValues = {
  type: '',
  time: '',
  user: '',
  pitch: '',
  id: ''
};

const InputContainer = ({ activities, setActivities }) => {
  const [activityInput, setActivityInput] = useState(initialValues);
  const [resetOptions, setResetOptions] = useState(false);
  const [showMessage, setShowMessage] = useState('');

  const inputChange = (inputName, inputValue) => {
    setResetOptions(false);
    setActivityInput({
      ...activityInput,
      [inputName]: inputValue
    });
  }

  const hasSameTimeAndPitch = (time, pitch) => {
    return activities.some(activity => activity.time === time && activity.pitch === pitch);
  }

  const addToActivities = () => {
    if (!activityInput.type || !activityInput.time || !activityInput.user || !activityInput.pitch) {
      setShowMessage('All fields are required!');
      return;
    }

    if (hasSameTimeAndPitch(activityInput.time, activityInput.pitch)) {
      setShowMessage('This time is already selected for another pitch!');
      return;
    };

    const activity = {
      ...activityInput,
      id: nanoid()
    };
    setActivities([...activities, activity]);
    setActivityInput(initialValues);
    setResetOptions(true);
    setShowMessage('');
  };

  return (
    <div className="flex flex-row flex-wrap lg:flex-nowrap gap-0 lg:gap-2 pb-2 pt-4 justify-between">
      <div className="w-full sm:pr-1 mb-2 sm:basis-1/2 lg:basis-1/6 lg:m-0 lg:p-0">
        <p className="text-gray-600 text-xs font-medium mb-1 pl-1">Type:</p>
        <DropDown
          items={ActivityTypes}
          itemName='type'
          inputChange={inputChange}
          resetOptions={resetOptions}
          defaultValue={initialValues.type}
        />
      </div>

      <div className="flex flex-col w-full sm:pl-1 mb-2 sm:basis-1/2 lg:basis-3/12 lg:m-0 lg:p-0">
        <label className="text-gray-600 text-xs pl-1 font-medium mb-1" htmlFor="meeting-time">Date and Time:</label>
        <input className={`flex flex-grow rounded-md bg-white px-3 py-1.5 text-sm font-semibold
          ${activityInput.time ? 'text-gray-900' : 'text-gray-500'}
          shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
          type="datetime-local" id="meeting-time"
          name="meeting-time" value={activityInput.time}
          min={getTodayDateTime}
          onChange={(event) => inputChange('time', event.target.value)}
        />
      </div>

      <div className="w-full sm:basis-1/2 sm:pr-1 mb-2 lg:basis-1/6 lg:m-0 lg:p-0">
        <p className="text-gray-600 text-xs font-medium mb-1 pl-1">User:</p>
        <DropDown
          items={Users}
          itemName='user'
          inputChange={inputChange}
          resetOptions={resetOptions}
          defaultValue={initialValues.user}
        />
      </div>

      <div className="w-full sm:basis-1/2 sm:pl-1 mb-2 lg:basis-1/6 lg:m-0 lg:p-0">
        <p className="text-gray-600 text-xs font-medium mb-1 pl-1">Pitch:</p>
        <DropDown
          items={Pitchs}
          itemName='pitch'
          inputChange={inputChange}
          resetOptions={resetOptions}
          defaultValue={initialValues.pitch}
        />
      </div>

      <div className="flex flex-col justify-end w-full mb-1 sm:pr-1 sm:basis-1/2 lg:basis-3/12 sm:m-0 lg:p-0">
        {showMessage &&
          <span className="text-xs mb-1 pl-1 text-red-600 whitespace-nowrap">{showMessage}</span>
        }
        <button
          className="inline-flex items-center justify-center px-4 py-1 h-9 self-end w-full text-center text-sm text-blue-50 bg-primary rounded hover:bg-blue-600"
          onClick={addToActivities}
        >
          Add To Activities
        </button>
      </div>
    </div>
  );
};
export default InputContainer;
