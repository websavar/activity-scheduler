import { Fragment } from 'react';
import { Activity } from 'components';

const Activities = ({ activities, setActivities }) => {

  const removeActivity = (id) => {
    const newList = activities.filter((activity) => activity.id !== id);
    setActivities(newList);
  };

  const hasSameTimeAndPitch = (time, pitch, id) => {
    return activities.some(activity => activity.time === time && activity.pitch === pitch && activity.id !== id);
  }

  const editActivity = (activityInputs, id) => {
    if (!activityInputs.time) return;

    const newList = activities.map((activity) => {
      if (activity.id === id) {
        return {
          id,
          ...activityInputs,
        };
      }
      return activity;
    });
    setActivities(newList);
  };

  if (!activities.length) {
    return (
      <div className='text-center text-gray-700 p-3'>No activities are scheduled yet!</div>
    )
  }

  return (
    activities.map(activity =>
      <Fragment key={activity.id}>
        <Activity
          data={activity}
          removeActivity={removeActivity}
          editActivity={editActivity}
          hasSameTimeAndPitch={hasSameTimeAndPitch}
        />
      </Fragment>
    ));
};

export default Activities;
