
import React from "react";
import "./Notifications.css"; // Adicione estilos para a notificação

type NotificationProps = {
    message: string;
    onClose: () => void;
};

export function Notification({ message, onClose }: NotificationProps) {
    return (
        <div className="notification">
            <p>{message}</p>
            <button className="close-btn" onClick={onClose}>×</button>
        </div>
    );
}
