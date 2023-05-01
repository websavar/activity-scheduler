import { Fragment } from 'react';
import { Activity } from 'components';

const Activities = ({ activities, setActivities }) => {

  const removeActivity = (id) => {
    const newList = activities.filter((activity) => activity.id !== id);
    setActivities(newList);
  };

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

  return (
    activities.map(activity =>
      <Fragment key={activity.id}>
        <Activity
          data={activity}
          removeActivity={removeActivity}
          editActivity={editActivity}
        />
      </Fragment>
    ));
};

export default Activities;
