import React from "react";
import "./StatCard.scss";

const StatCard = ({
    title,
    value,
    percentage,
    isPositive,
    icon,
}) => {
    return (
        <div className="stat-card">
            <div className="stat-left">
                <h4>{title}</h4>
                <h2>{value}</h2>

                <p className={isPositive ? "positive" : "negative"}>
                    {isPositive ? "▲" : "▼"} {percentage}%
                </p>
            </div>

            <div className="stat-right">
                {icon}
            </div>
        </div>
    );
};

export default StatCard;
