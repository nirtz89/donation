import React from 'react';
import './UserSummary.scss';
import { IAppState, IEventType, IEvent } from '../App';
import { Doughnut } from 'react-chartjs-2';


export interface IUserSummary {
    appState: IAppState;
}

const UserSummary = (props: IUserSummary) => {
    const labels: string[] = [];
    const counts: number[] = [];
    const allEvents: IEvent[] = [];

    for (let item in IEventType) {
        labels.push(item);
    }

    labels.forEach(_l => {
        counts.push(0);
    });

    for (let day in props.appState.days) {
        const events = props.appState.days[day].events;
        events.forEach(e => {
            allEvents.push(e);
        });
    }
    allEvents.forEach(e => {
        const index = labels.findIndex(l => l === e.type);
        counts[index]++;
    });

    const data = {
        labels,
        datasets: [{
            label: '# of Votes',
            data: counts,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 255, 1, 1)',
                'rgba(200, 16, 254, 1)',
            ],
            borderWidth: 1
        }]
    }

  return (
      <>
        <div className="UserSummary">
            Thank you for completing the epidemiology inquiry
        </div>
        <Doughnut data={data} />
    </>
  );
};

export default UserSummary;
