import React from 'react';
import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import CloseFriend from '../closeFriend/CloseFriend';

export default function Rightbar({ profile }) {
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className='birthdayImg' src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Pola foster</b> and <b>3 others</b> have a birthday today.
                    </span>
                </div>
                <img className='rightbarAd' src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        const getDaysInMonth = (month, year) => {
            const date = new Date(year, month, 1);
            const days = [];
            while (date.getMonth() === month) {
                const day = date.getDate();
                const dayName = date.toLocaleDateString('default', { weekday: 'short' });
                days.push({ day, dayName });
                date.setDate(date.getDate() + 1);
            }
            return days;
        };

        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        const currentDay = new Date().getDate();
        const daysInMonth = getDaysInMonth(currentMonth, currentYear);

        const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

        return (
            <>
                <div className="calendar-header">
                    <h4 className='rightbarTitle'>{new Date().toLocaleString('default', { month: 'long' })} {currentYear}</h4>
                </div>
                <div className="calendar">
                   
                    <div className="calendar-body">
                        {Array(firstDayIndex).fill(null).map((_, index) => (
                            <div key={`empty-${index}`} className="calendar-day empty"></div>
                        ))}
                        {daysInMonth.map(({ day, dayName }) => (
                            <div key={day} className={`calendar-day ${day === currentDay ? 'current-day' : ''}`}>
                                <span className="day-number">{day}</span>
                                <span className="day-name">{dayName}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <br></br>
                <h4 className='rightbarTitle'>My patients</h4>
                <div className="sidebarFriendList">
                    {Users.map(u => (
                        <CloseFriend key={u.id} user={u} />
                    ))}
                </div>
            </>
        );
    };

    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}
