import "./notification.css";



export function Notification({ text, type }) {
  const NotificationBox = ( { children } ) => {
    return <div className="notificationBox">{children}</div>;
  };

  const style = (theme) => {
    switch (theme) {
      case "succes":
        return "succes";
      case "error":
        return "error";
      default:
        return "hide";
    }
  };
    return (
      <NotificationBox>
        <div
          className={`notification--size 
                    notification--position 
                    notification--text 
                    ${style(type)}
                  `}
          onClick={() => style("")}
        >
          {text}
        </div>
      </NotificationBox>
    );
}
